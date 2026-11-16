# Dział „Czujniki i sterowanie” (ścieżka Świat, poziom 3, wiek 12–15 lat): różnica względem polskiej szkoły i propozycja przebudowy

Przeczytałem obecny dział (`/home/user/Pomoc_w_szkole/js/dane/swiat/elektrycznosc.js`, id `czujniki`, wiersze ok. 240–335: ściąga, infografika, 11 fiszek, 16 pytań; brak `activities`, `materials`, `parent`, pytań z `why`) oraz lekcję (`/home/user/Pomoc_w_szkole/js/lekcje/swiat/elektrycznosc.js`, klucz `elektrycznosc/czujniki`, 6 kroków, bez widżetu). Wzór: `/home/user/Pomoc_w_szkole/docs/research/research_notes/Magnesy – standard różnicy/synteza.md`. Repozytorium nie było zmieniane.

Korzystam tylko z ustaleń „potwierdzone” i „poprawione” (w wersji po poprawkach). **Wszystkie tłumaczenia z angielskiego, niemieckiego, japońskiego, koreańskiego i estońskiego są robocze (nasze).** Strony aktów prawnych podaję według pliku PDF.

---

## 1. Tabela różnicy

**Kto to jest w Polsce.** Dziecko w wieku 12–15 lat chodzi w r. szk. 2026/27 mniej więcej do kl. VI–VIII. Wiek w klasach to nasze wyliczenie z art. 35 ust. 2 Prawa oświatowego: obowiązek szkolny zaczyna się w roku, w którym dziecko kończy 7 lat. Najlepiej cytować t.j. Dz.U. 2026 poz. 820, s. 37; brzmienie jest identyczne z poz. 1043.

Według § 4 rozporządzenia Dz.U. 2026 poz. 378 (s. 1–2; poz. 958 tego nie zmienia):
- w 2026/27 dotychczasowa podstawa (Dz.U. 2024 poz. 996) obowiązuje „w klasach II, III i V–VIII”;
- nowa podstawa dojdzie do kl. VII w 2029/30, a do kl. VIII w 2030/31. To nasze wyliczenie, zgodne z § 4 ust. 2 pkt 3–4.

**Właściwa etykieta dla tej grupy:** „informatyka / technika / fizyka – stara podstawa (Dz.U. 2024 poz. 996)”.

Zastrzeżenia:
- Klasy VII–VIII dla fizyki wynikają z ramowych planów nauczania, których nie otwieraliśmy.
- Klasy IV–VI dla techniki wynikają z aktu tylko pośrednio (§ 2 i warunki realizacji).

| Element tematu | Polska (podstawa, klasa) | Inne kraje (kraj, klasa/wiek, źródło) | Rodzaj różnicy |
|---|---|---|---|
| Czujnik jako **wejście**, element wykonawczy jako **wyjście**, układ wejście → przetwarzanie → wyjście | **Brak w wymaganiach SP** w 2024 i 2026. „Czujnik” pada w SP raz: fizyka 2024, warunki realizacji, „mogą używać cyfrowych czujników pomiarowych” (s. 181) – jako przyrząd, nie temat. Najbliżej: technika 2024, V. Mechatronika – „roboty, modele mechaniczno-elektroniczne, w tym programowalne” (s. 207–208, kl. IV–VI); informatyka 2024 VII–VIII – „steruje robotem lub innym obiektem na ekranie” (s. 200). Słów „czujnik”, „element wykonawczy” ani „przekaźnik” nie ma w żadnym wymaganiu SP. | **Anglia KS3 D&T** (Years 7–9, 11–14 lat): „embed intelligence in products that respond to inputs [for example, sensors], and control outputs [for example, actuators], using programmable components [for example, microcontrollers]” (s. 3). Nawiasy to przykłady nieobowiązkowe (s. 1). **Anglia KS2 D&T** (7–11 lat, obowiązkowe, bez nawiasu): „program, monitor and control their products”. **Szwajcaria**, Lehrplan 21 (Zurych), MI.2.3.l, cykl 3 = Sekundarstufe I: „(Sensor, Prozessor, Aktor und Speicher)”, porównanie z organizmami (bez „z.B.”). **Estonia**, informatyka fakultatywna: kl. 1–3 „Andurid ja täiturid (robootika)”; kl. 4–6 mikrokontroler, silnik, czujniki. **Japonia**, gimnazjum (12–15 lat): D(1) droga sygnału „センサなどの入力装置から，アクチュエータ等の出力装置まで”. **Korea**, gimnazjum kl. 1–3: [9정01-02] physical computing. | **nowe**; w Anglii i Estonii też **wcześniej** |
| **Projektowanie** systemu pomiaru i sterowania do problemu z życia (dobór czujników i elementów wykonawczych, przepływ danych) | Brak. Technika 2024: ogólnie „metoda projektu” (s. 209). ZPT 2026 (kl. IV–VI): jedno zadanie „elektryczne lub elektroniczne”, np. „model robota sprzątającego” – sam obwód, bez sterowania (s. 267). | **Japonia** D(3)イ (obowiązkowe): „入出力されるデータの流れを元に計測・制御システムを構想” (解説 s. 55). Zbiór MEXT 2020: w podstawówce „uważa się, że” zwykle uruchamia się gotowe systemy, a w gimnazjum projektuje się, „どのようなセンサやアクチュエータが必要か”. **Korea** [9정01-03], [9기가04-09] – robot z „센서와 액추에이터”. **Estonia** kl. 7–9 (fakultatywnie): projekt IoT/robotyki z design thinking. **Szwajcaria** NT.5.3.b: układ do zastosowania, np. termowyłącznik w suszarce, czujnik dymu (z.B.). | **nowe / głębiej** |
| Sygnał analogowy → cyfrowy, interfejs; czujnik daje liczbę | Pomost: informatyka 2024 VII–VIII – „sposoby reprezentowania w komputerze wartości logicznych, liczb naturalnych (system binarny)” (s. 200). Przetwarzania analogowo-cyfrowego (A/C) brak. | **Japonia** D(3)ア: interfejs zamienia „アナログ信号とデジタル信号” (解説 s. 56). **Korea** gimnazjum, dział „dane”: zamiana danych analogowych na cyfrowe, [9정02-01]. **Oak Y7**: micro:bit mierzy jasność 0–255. | **nowe** |
| Elementy czujnikowe w obwodzie (fotorezystor, termistor, kontaktron, przekaźnik, tranzystor jako przełącznik; obwód sterujący i roboczy) | Technika 2024: lista elementów **bez czujników** (rezystory, diody, tranzystory… s. 207). Fizyka 2024: dioda i brzęczyk tylko jako odbiorniki (s. 178). Fizyka 2026: badanie I(U) diody tylko „do wyboru” (s. 232). | **Szwajcaria** NT.5.3.a i d, cykl 3: Fotowiderstand, Heiss-/Kaltleiter, Reedkontakt, Relais (z.B.); „Transistorschaltungen … Steuer-, Arbeitsstromkreis”. **Oak Y9**: LDR zmienia opór, a zmiana oporu daje sygnał. **Bawaria Mittelschule**, Technik R9 (przedmiot do wyboru): schematy z czujnikiem, justowanie czujnika, szukanie usterek miernikiem. | **nowe / głębiej** |
| **Próg** i jego dobór na podstawie pomiarów | Brak (są tylko instrukcje warunkowe – przypomnienie). | **Japonia**, slajdy MEXT 【3】 (micro:bit, wilgotność gleby): LEVEL 1–3, próg 800, rejestrator danych do doboru progu. **Bawaria**, materiał ISB „Roboter unterwegs” (moduł do wyboru IT 2.7.2): próg = średnia odczytu na czarnym i białym tle (50). **Oak Y9** – próg 100. **Oak KS4 Y10** – szklarnia, 30 °C. | **nowe / inna metoda** |
| Sterowanie **na czas** (sekwencyjne, pętla otwarta) a **ze sprzężeniem zwrotnym** (pętla zamknięta) | Brak w SP: „sprzężen…” – 0 trafień w części SP 2024 i w całym 2026. Termin pada tylko w biologii szkoły branżowej. | **Japonia**, szkolenie MEXT 2024, slajd 15: シーケンス制御 („前進 ◯秒”) a フィードバック制御 („距離◯ｃｍ以下になるまで前進”), „目的に対する最適な制御法の選択”. **Oak KS4 Y10** (14–16 lat): silnik DC – pętla otwarta, serwo – zamknięta; szklarnia jako przykład sprzężenia. **Bawaria**, ISB: od dwóch reakcji do płynnej korekty `error = (odczyt − 50)·kp`. | **nowe** |
| Warunki i zdarzenia z czujnika w programie | Informatyka 2024 IV–VI: „poleceń sekwencyjnych, warunkowych i iteracyjnych oraz zdarzeń” (s. 198). W 2026 słowa „zdarzeń” już nie ma. | **BBC KS2** (Anglia i Walia, 7–11 lat): WHEN – IF – THEN, UNTIL. **Bawaria**, obowiązkowy Anfangsunterricht IT 1.2: zdarzenia wejściowe, np. „Sensorwerte” (z.B.). **Estonia** kl. 1–3: if/else, pętle. | **przypomnienie**; w kontekście fizycznym – **wcześniej** |
| Niezawodność: co, jeśli czujnik się zepsuje; bezpieczeństwo użytkownika | Brak. | **Japonia** 解説 s. 57: „センサが正常に動作しなかった場合を想定して…構想”. Slajdy 【3】 s. 18: powiadomienie, gdy odczyt długo się nie zmienia. | **nowe** |
| Metoda: algorytm najpierw na diagramie, a nie zapamiętywanie poleceń ani strojenie silników | Informatyka 2026: spiralnie, od środowisk blokowych do tekstowych (s. 261). ZPT 2026: metoda projektu, nauczyciel jako mentor (s. 269). | **Japonia** 解説 s. 57–58: アクティビティ図; „命令の意味を覚えさせるよりも…アルゴリズム”; „アクチュエータなどの微細な動作設定が中心とならないように”. **Bawaria** IT 2.7.2: diagram przejść stanów. **Oak KS4**: schematy blokowe. **Korea**: unikać zestawów „do złożenia” według instrukcji. | **inna metoda** |
| Ocena projektu z wielu stron i ulepszanie | ZPT 2026 kl. IV–VI: „prowadzi ocenę przez modyfikację” (s. 264) – **pomost**. | **Japonia**, zbiór 2020: „安全・利便・経済・環境” oraz punkt widzenia użytkownika i zarządcy. **Oak Y9**: ulepszanie nie tylko wtedy, gdy coś nie działa; ocena więcej niż jednej osoby, oparta na danych. **Oak Y7**: sześć lekcji od projektu po refleksję. | **głębiej** |
| Element wykonawczy: silnik przez sterownik silnika, serwo, elektromagnes, przekaźnik | Fizyka 2024 VII–VIII: elektromagnes i silnik (s. 178). Fizyka 2026: tylko nazwanie sił magnetycznych (s. 231). | **Oak Y11**: „Microcontrollers send control signals, not power” – potrzebny sterownik silnika. **Korea** [9기가04-04]: układ z półprzewodnikami steruje elementem wykonawczym. **Szwajcaria** NT.5.3.a: przekaźnik (z.B.). | **głębiej / nowe** |
| Internet rzeczy i bezpieczeństwo urządzeń smart w domu | Materiał ZPE „Świat smart, czyli Internet Rzeczy” (SP, informatyka) – materiał, nie wymaganie. | **Estonia** kl. 7–9 (fakultatywnie): zagrożenia SI i IoT, bezpieczne używanie urządzeń smart w domu, audyt bezpieczeństwa domu lub środowiska nauki. | **głębiej** |
| Granica tematu | Bramek logicznych nie ma w SP (2024 – tylko fizyka branżowa, moduł D, do wyboru). | Anglia KS3 computing: logika Boole’a „in circuits and programming”. Bawaria IT 2.7.1 (do wyboru): bramki do opisu sterowania windą. | pomost do działu wymaganego `informacja/bramki-logiczne` |

**Wniosek.** Cały rdzeń działu to różnica: czujnik, element wykonawczy, A/C, próg, pętla zamknięta i projekt systemu. Z polskiej szkoły pochodzą tylko instrukcje warunkowe i pętle, wartości logiczne, obwód i elektromagnes.

Uwaga do poziomu: proste „czujnik → program → reakcja” Anglia robi w KS2 (7–11 lat), Estonia w kl. 1–6, a Korea robota z czujnikami na blokach już w kl. 5–6 ([6실04-06]). Można kiedyś dodać dział o niższym poziomie. W tym dziale (12–15 lat) zostawiamy pętlę zamkniętą, A/C, kalibrację i projekt systemu.

---

## 2. Co w obecnym dziale powtarza polską szkołę, a co jest różnicą

**Powtórzenie.** Zostawić krótko, jako „przypomnienie” z etykietą klasy:
- warunki i pętla w programie: `a1k103`, `6q47x2`;
- logika AND/OR: `8couoy`, `nyiy77` – to też powtórka działu wymaganego.

**Prawdziwa różnica, która w dziale już jest.** Zostawić:
- `81g9lr`, `isnrvp`, `8j6g6p`, `w1mw6b` – wejście, sterownik i wyjście;
- `6sr61n` – czujnik ultradźwiękowy;
- `k7ik52`, `yoyq9y` – sygnał z czujnika;
- `fix7an`, `2cyd42` – sprzężenie zwrotne, grzałka.

Pytanie `tmss7q` (granica `30 < 30`) zostawić jako **zwykłe** pytanie. Udokumentowanego błędnego przekonania o `<` i `<=` nie znaleziono. Oak uczy tylko testowania danymi granicznymi.

**Do usunięcia (meta-wiedza, a nie technika). Tych id już nie używać:**
- `jgg9or` („Co angielski program… podaje jako przykład elementu programowalnego?”);
- `722s7x` („W jakim wieku są japońscy uczniowie…”). Pytanie jest też nieprecyzyjne: klasę i liczbę godzin dla D(3) wybiera szkoła („各学校で適切に定める”, 解説 s. 48). Zbiór MEXT ocenia tylko, że D(3) „najpewniej” trafi do kl. 3 (14–15 lat).
- Fiszki „Anglia – key stage 3” i „Japonia – gimnazjum” przenieść do `where`.

**Do poprawy:**
- **Ściąga, akapit o Anglii.** Dopisać, że czujniki, elementy wykonawcze i mikrokontrolery są w programie przykładami w nawiasach. Obowiązkowe jest „reagowanie na wejścia i sterowanie wyjściami przez elementy programowalne” (KS3 D&T s. 1 i 3). Dopisać też, że już w KS2 (7–11 lat) dzieci „program, monitor and control their products”.
- **Ściąga, akapit o Japonii.** Dopisać: „najczęściej w 3. klasie gimnazjum, ok. 14–15 lat – to ocena MEXT, nie przepis” oraz że uczeń **projektuje** system, a nie tylko pisze program.
- **Lekcja, krok 1** to dziś meta o krajach. Zmienić na różnicę: „W polskiej szkole programujesz robota albo postać na ekranie. Tu urządzenie samo mierzy świat i reaguje”. Kraje dać w jednym zdaniu.
- **Lekcja, krok 2**, hook „oczy to czujnik, mózg to sterownik…”. Ma teraz źródło: Lehrplan 21 MI.2.3.l (porównanie z organizmami) i tabelę „zmysł → czujnik” ze szkolenia MEXT 2024 (slajd 16). Dopisać w `basis`.
- **Lekcja, krok 6, i ściąga – sprzężenie zwrotne.** Przykład grzałki jest dobry. **Nie** dodawać przykładu z przyciskiem (if/else) jako „sprzężenia”. Oak Y9 („Micro:bits in Tinkercad”) tak robi, a to nie jest pętla zamknięta.
- **`basis`.** „s. 134” podstawy japońskiej nie było objęte tym researchem. Potwierdzone są: 解説 技術・家庭編, D(3), druk s. 55–58 (PDF 59–62), oraz 付録3 s. 152 (PDF 156). Do dopisania:
  - licencja ZPE „Rodzaje elementów…”: na stronie są 4 oznaczenia „Akademia Finansów i Biznesu Vistula, CC BY-SA 3.0”;
  - data researchu: 16.11.2026.

  „Słownika pojęć” do e-materiału o przeglądach automatyki ten research **nie objął** – zostaje na starej weryfikacji.
- **`where`** – proponowane brzmienie: „Anglia – design and technology, key stage 3 (11–14 lat), a sterowanie produktami już w key stage 2; Japonia – technika w gimnazjum (12–15 lat, zwykle 3. klasa); Korea – informatyka i technika w gimnazjum (kl. 1–3); Szwajcaria – Lehrplan 21, cykl 3 (Sekundarstufe I); Estonia – informatyka do wyboru (od kl. 1); Bawaria – Realschule, moduł do wyboru »Robotik«”.
- **Brakuje:** widżetu, karty doświadczenia, projektu z kryteriami, pytań z `why`, ramki `parent` i `materials`.

---

## 3. Propozycja treści według standardu

### (a) Przypomnienie (krótka ramka)

> 🇵🇱 **To znasz z polskiej szkoły** (stara podstawa, Dz.U. 2024 poz. 996 – obecne kl. V–VIII):
> - **informatyka kl. IV–VI**: polecenia warunkowe, pętle, zdarzenia; program sterujący robotem lub obiektem na ekranie (s. 198);
> - **informatyka kl. VII–VIII**: instrukcje warunkowe i pętle, pierwszy język tekstowy, wartości logiczne i system binarny (s. 200, 202);
> - **fizyka kl. VII–VIII**: obwód ze źródłem, odbiornikiem, wyłącznikiem i miernikami; elektromagnes i silnik (s. 177–178);
> - **technika kl. IV–VI**: rezystor, dioda, tranzystor; proste modele programowalne (s. 207–208).
>
> Kto jest dziś w kl. IV, w kl. VII–VIII będzie miał nową podstawę: wejście/wyjście, warunki, pętle i system binarny w informatyce (Dz.U. 2026 poz. 378, s. 257), ale już bez robota i bez elektromagnesu.
> **Czujników, elementów wykonawczych i pętli sprzężenia zwrotnego nie ma w żadnej z tych podstaw.**

### (b) Rozszerzenia (rdzeń różnicy)

**1. System pomiaru i sterowania: czujnik → interfejs → komputer z programem → interfejs → element wykonawczy.**
- Interfejs zamienia sygnały analogowe i cyfrowe, a cały ciąg informacji przetwarza program (Japonia, 解説 D(3)ア, s. 56).
- Szwajcaria uczy tego samego układu jako „Sensor, Prozessor, Aktor und Speicher” i porównuje go z narządami zmysłów (MI.2.3.l).
- Szkolenie MEXT 2024 (slajd 16) zestawia zmysły i czujniki: światło → czujnik światła, dźwięk → czujnik dźwięku, nacisk → czujnik nacisku, a ponadto temperatura → czujnik temperatury (bez narządu). Ogólny tor: zmiana fizyczna → zmiana sygnału elektrycznego → A/C → komputer. Autor slajdu jest zewnętrzny, więc piszemy własnymi słowami. Zasady fizyczne (efekt fotowoltaiczny, piezoelektryczny, Seebecka) – co najwyżej jako ciekawostka dla chętnych.
- Element wykonawczy (actuator) „converts energy or a control signal into physical movement or action” (Oak KS4 Y10, „Input components”).

**2. Z sygnału do liczby.**
- Czujnik pomiarowy daje liczbę z ustalonego zakresu, np.:
  - micro:bit mierzy jasność matrycą diod: 0 (ciemno) – 255 (Oak Y7, „Using input and output”);
  - Arduino czyta wejście analogowe w zakresie 0–1023 (ZPE, liceum, „Arduino – fotorezystor”).
- Korea uczy w gimnazjum, że dane analogowe trzeba zamienić na postać cyfrową, żeby komputer je przetworzył ([9정02-01]).

**3. Jak czujnik zamienia świat na sygnał – fotorezystor.**
- Im więcej światła, tym mniejszy opór. Zmiana oporu daje zmianę napięcia, a ta jest sygnałem sterującym (Oak Y9, „Code and simulate…”).
- Inne elementy z programu szwajcarskiego (NT.5.3.a, przykłady z.B.): termistor, kontaktron, przekaźnik, bimetal. Tranzystor jako przełącznik: obwód sterujący i roboczy (NT.5.3.d).
- Komentarz japoński (C(2), s. 45) zaleca, żeby przy gotowych modułach czujników nie wchodzić głęboko w zasadę działania. Wystarczy wiedzieć, co moduł mierzy i do czego służy. Dlatego to tylko jeden przykład, bez fizyki półprzewodników.

**4. Próg – i jak go dobrać.**
- Bawaria (ISB): zmierz czujnik raz na czarnym, raz na białym tle i weź średnią – w ich przykładzie wyszło 50.
- Japonia (slajdy 【3】):
  - LEVEL 1: pomiar po wciśnięciu przycisku;
  - LEVEL 2: pomiar co 1 s;
  - LEVEL 3: próg 800, poniżej niego brzęczyk;
  - definicja progu (しきい値);
  - rejestrator danych (CSV, wykres), żeby dobrać najlepszy próg.
- Testuj wartości graniczne (Oak, „boundary data”).

**5. Na czas czy na pomiar?**
- Sterowanie sekwencyjne: „jedź ◯ s”. Sterowanie ze sprzężeniem zwrotnym: „jedź, aż czujnik odległości pokaże ≤ ◯ cm”. Uczeń wybiera metodę do celu (MEXT 2024, slajd 15).
- Autorzy zbioru MEXT uważają („と思われる”), że potrzebę pomiaru lepiej widać na robocie, który nie jeździ precyzyjnie.
- Silnik DC działa w pętli otwartej, serwo w zamkniętej (Oak Y10, „Motors”). Serwo nadaje się do ramienia robota, które wymaga precyzji.
- Szklarnia: wejście – pomiar temperatury, przetwarzanie – porównanie z 30 °C, wyjście – otwarcie okna. „A signal that is sent back in a loop, depending upon a condition, is called feedback” (Oak Y10).
- Termostat stale mierzy temperaturę i odsyła ją do mikrokontrolera (BBC GCSE CCEA).

**6. Dla chętnych: łagodniej niż „włącz/wyłącz”.**
- **Histereza** w termostacie to różnica temperatur włączenia i wyłączenia. Im jest mniejsza, tym mniejsze wahania, ale częstsze przełączanie, które „może doprowadzić do szybszego uszkodzenia urządzenia” (ZPE, materiał zawodowy o automatyce chłodniczej).
- **Robot z dwiema reakcjami „ciągle lekko szarpie”.** Lepszy liczy odchylenie `error = (odczyt − 50)·kp` i płynnie zmienia prędkość silników (ISB, s. 9–10). Nazwa „regulacja proporcjonalna” jest nasza.
- Uwaga ISB: przy zbyt tępym kącie dojazdu do linii ich prosty algorytm nie działa.

**7. Program reaguje tylko wtedy, gdy sprawdza.**
- Instrukcję if można powtarzać w pętli „forever” (Oak Y5).
- Warunek pętli while sprawdza się przed każdym obiegiem (Oak Y10).
- W łańcuchu if/else if wygrywa pierwszy spełniony warunek (Oak Y6).
- Wykonuje się tylko gałąź pasująca do warunku (Oak Y6).
- Mikrokontroler wykonuje kod po kolei, linia po linii (Oak Y11).

**8. Czujnik nie decyduje.**
- Czujnik linii wysyła tylko „jasno/ciemno”, a reakcję wybiera kod (Oak Y11).
- Czujnik ultradźwiękowy używa dźwięku, nie światła (Oak Y11). Odczyt odpowiada w przybliżeniu odległości w cm, „jak u nietoperza” (ISB).

**9. Mikrokontroler daje sygnał, nie moc.**
- Silnik podłącza się przez sterownik silnika z osobnym zasilaniem. Mikrokontroler podłączony bez zabezpieczenia może zostać uszkodzony (Oak Y11, „Working with motors”).

**10. Projektuj na awarię.**
- Zakładaj, że czujnik może nie zadziałać, i myśl o bezpieczeństwie użytkownika (MEXT 解説 s. 57).
- Przykład rozbudowy: powiadomienie „czujnik chyba zepsuty”, gdy odczyt długo się nie zmienia (slajdy 【3】 s. 18).

**11. Komputer bez ekranu.**
- Komputery fizyczne działają na podstawie wykrytych wejść i ekranu nie potrzebują (Oak Y7).
- Mikrokontroler ma wbudowane wejścia i wyjścia (Oak Y9). micro:bit sam wykryje przechylenie i pokaże strzałkę (Oak Y7, zadanie B1).

**12. Kilka wejść naraz.**
- Systemy mają często wiele wejść, wyjść i sprzężenie zwrotne (Oak Y10, dwa „misconceptions”).
- Zbiór MEXT zaleca, żeby system miał kilka czujników („複数のセンサがあることが望ましい”).

**13. Po co to społeczeństwu** (wstęp albo ramka dla rodzica):
- systemy pomiaru i sterowania zmniejszyły zużycie paliwa przez samochody;
- czujniki zbierające dane pomagają badać i chronić środowisko (MEXT 解説 s. 48 i 59);
- w Estonii (kl. 7–9) uczy się też o zagrożeniach IoT i bezpiecznym używaniu urządzeń smart w domu.

### (c) Doświadczenie z kartą pracy: „Gdzie jest granica? Kalibruję czujnik światła”

**Źródła:**
- metoda progu – ISB „Roboter unterwegs” (średnia dwóch pomiarów);
- tok LEVEL 1–3 i dobór progu z danych – MEXT, slajdy 【3】;
- czujniki w telefonie jako przyrząd – polska fizyka 2024, warunki realizacji (s. 181: aplikacje „do pomiaru… natężenia oświetlenia”);
- jasność 0–255 w micro:bicie – Oak Y7;
- dane graniczne – Oak;
- awaria czujnika – MEXT.

Uwaga: zamiast czarnego i białego podłoża (ISB) mierzymy jasno/ciemno w otoczeniu. To nasza adaptacja: czujnik światła w telefonie mierzy światło otoczenia, a jego zachowanie nad kartką nie jest sprawdzone. **Przed publikacją wykonać naprawdę.**

**Potrzebne:**
- wersja A: telefon z aplikacją mierzącą natężenie oświetlenia;
- wersja B (zamiast A): micro:bit podłączony kablem USB do komputera; matryca diod mierzy jasność;
- lampka biurkowa, pudełko albo gruby koc do zaciemnienia, kartka, kalkulator.

**Kroki:**
1. ❓ **Pytanie:** przy jakiej jasności lampka nocna powinna się włączyć?
2. 🤔 **Przewiduję:** próg wyniesie ok. ___ (jednostka z aplikacji albo 0–255 dla micro:bita).
3. 🔬 Zmierz 3 razy „jasno” (czujnik pod lampką) i 3 razy „ciemno” (czujnik pod pudełkiem). Policz średnie.
4. ⚖️ **Uczciwie:** to samo miejsce, ta sama lampka, czujnik zawsze tak samo skierowany. Zmieniasz tylko oświetlenie.
5. 🧮 **Próg** = (średnia „jasno” + średnia „ciemno”) : 2. Nasz przykład: jasno 300, ciemno 20 → próg 160.
6. Zmierz dwa razy „półmrok”. Zdecyduj według reguły „jeśli odczyt < próg → lampka WŁĄCZ”.
7. 🧪 **Wartość graniczna:** co powinna zrobić lampka, gdy odczyt równa się progowi? Zapisz, czy w regule użyjesz `<`, czy `<=`.
8. 🛠️ **Awaria:** zasłoń czujnik palcem lub taśmą i mierz przez minutę. Czy liczba się zmienia? Jak sterownik mógłby poznać, że czujnik nie działa?
9. (Tylko micro:bit) Zaprogramuj trzy poziomy jak w lekcji MEXT:
   - pomiar po przycisku A;
   - pomiar co 1 s;
   - ikona albo dźwięk poniżej progu.
10. 💡 **Wniosek:** „Próg wyznaczam z pomiarów, nie zgaduję. Wartość równa progowi muszę…”.

**Tabela A – pomiary:**

| Miejsce | Pomiar 1 | Pomiar 2 | Pomiar 3 | Średnia |
|---|---|---|---|---|
| Jasno (pod lampką) | | | | |
| Ciemno (pod pudełkiem) | | | | |
| Półmrok 1 | | | | |
| Półmrok 2 | | | | |
| Czujnik zasłonięty (minuta) | | | | |

**Tabela B – decyzje sterownika** (próg = ___):

| Odczyt | Odczyt < próg? | Lampka | Zgadza się z przewidywaniem? |
|---|---|---|---|
| | | | |

**Bezpieczeństwo** (szczegóły w punkcie 4):
- tylko telefon albo micro:bit zasilany z USB lub baterii; nic z gniazdka 230 V;
- nie otwierać urządzeń;
- przy podłączonym USB nie dotykać metalowych części płytki (ZPE, scenariusz STEM);
- przerwa od ekranu, ekran bez odblasków (MEXT 解説 s. 57);
- przy dorosłym (Oak: „Adult supervision required”).

### (d) Zadanie projektowe: „Strażnik – system, który sam mierzy i reaguje”

**Źródła:**
- Japonia: D(3)イ; analiza problemu i diagram, slajdy 【5】; kryteria z czterech stron, zbiór 2020; projektowanie na awarię, 解説 s. 57;
- Oak: Y9 – wejście–przetwarzanie–wyjście, iteracja, ocena z danymi; Y7 – projekt dla konkretnego odbiorcy, dokumentacja; Y11 – program tekstem, blokami albo schematem blokowym;
- Korea: [9기가04-09] projekt z ograniczeniami; nie zestaw „do złożenia”;
- Estonia kl. 7–9: informacja zwrotna o prototypie.

**Tematy do wyboru** (tematy, nie zadania do skopiowania):
- doniczka, która sama woła o wodę albo podlewa (MEXT, zbiór 2020 i slajdy 【3】);
- lampka do noszenia dla dziecka idącego po ciemku (kontekst Oak Y9);
- „zimno przy ścianie od korytarza”: czujnik temperatury i wentylator (przykład ucznia, MEXT 【5】);
- szklarnia: okno otwiera się powyżej progu (Oak Y10);
- drzwi, które nie wypuszczą małego dziecka samego (MEXT, zbiór 2020).

**Kroki:**
1. **Problem:** kiedy? gdzie? co dokładnie jest problemem? który czujnik się przyda? (MEXT 【5】, slajd 7).
2. **Schemat:** wejścia → przetwarzanie → wyjścia, a jeśli jest – strzałka sprzężenia zwrotnego.
3. **Algorytm na diagramie przed kodem:** diagram czynności albo schemat blokowy.
4. **Program:** bloki, tekst albo tylko schemat blokowy. Wolno też zostać na papierze lub w symulatorze: Oak Y9 – „Designing with electronics can use physical components, schematics and CAD”.
5. **Test:** dane zwykłe i graniczne, do tego awaria czujnika.
6. **Poprawka:** co najmniej jedna zmiana po teście.
7. **Ocena** z drugą osobą i krótka instrukcja dla użytkownika.

**Ograniczenia:**
- tylko niskie napięcie (baterie, USB), nigdy 230 V – nasza zasada na podstawie ZPE „Ostrożnie z prądem!” i `docs/LEKCJE.md`;
- bez lutowania: płytka stykowa (ZPE, STEM);
- silnik tylko przez sterownik silnika, a najlepiej zamiast silnika dioda albo brzęczyk (Oak Y11);
- nie składamy gotowego zestawu według instrukcji (Korea);
- nie poświęcamy czasu na drobne strojenie silników (MEXT);
- czas: proponujemy 3 × 45 min. Dla porównania: MEXT planuje 11 godzin, Oak Y7 – 6 lekcji.

**Kryteria i samoocena** (✅ spełnione / 🔁 poprawię):
1. Schemat ma co najmniej jedno wejście, przetwarzanie i wyjście, a próg jest uzasadniony pomiarami (MEXT 【3】, ISB).
2. Algorytm narysowałem, zanim napisałem program (MEXT 解説).
3. Opisałem, co się stanie, gdy czujnik się zepsuje, i jak system to wykryje (MEXT).
4. Oceniłem projekt pod względem co najmniej dwóch spośród: bezpieczeństwo, wygoda, koszt, środowisko – i z punktu widzenia użytkownika (MEXT, zbiór 2020).
5. Przetestowałem dane zwykłe i graniczne i wprowadziłem co najmniej jedną poprawkę (Oak: „Systems are iterated to modify, fix, develop and improve”).
6. Ocenę oparłem na opinii innej osoby i na danych z testów (Oak Y9).

Brzmienie kryteriów jest nasze. Źródła podają ich treść, a nie gotową listę.

### (e) Pytania „przewiduj i wyjaśnij”

Poprawna odpowiedź jest pierwsza (`answer: 0`). `myth` to indeks w drugim etapie. Nowe id trzeba nadać przez `node tools/nowe-id.js`. Pseudokod jak w obecnym dziale (funkcje wymyślone); wyniki prześledziłem dwukrotnie.

**1.** Lampka ma się włączać za każdym razem, gdy zrobi się ciemno – dziś, jutro i pojutrze. Czy da się to zrobić instrukcją `if`?
- ✅ tak – jeśli `if` stoi w pętli, która się powtarza
- nie – `if` sprawdza warunek tylko raz w programie
- nie – do tego potrzebny jest drugi czujnik

**Why:** ✅ pętla „forever” każe sprawdzać warunek w kółko / „`if` da się sprawdzić tylko raz” (**myth**) / „czujnik sam pamięta, że było ciemno”.
Źródło: Oak KS2 Y5, „Using selection to control the flow of a program” („If… then… statements can be checked once in a program.” → „…repeatedly check a condition by using a forever loop”).

**2.** `while odleglosc > 10: jedz(); odleglosc = czujnik()`. Robot startuje 50 cm od ściany. Ile razy wykona się pętla?
- ✅ tyle razy, aż odległość spadnie do 10 cm
- dokładnie raz, bo warunek sprawdza się raz
- zawsze tyle samo razy, niezależnie od ściany

**Why:** ✅ warunek sprawdza się przed każdym obiegiem / „warunek sprawdza się tylko raz” (**myth**) / „pętla zawsze ma stałą liczbę obiegów” (**myth**).
Źródło: Oak KS4 Y10, „Using trace tables” i „While loops”.

**3.**
```
if jasnosc < 60: lampka_slabo()
elif jasnosc < 40: lampka_mocno()
else: lampka_wylacz()
```
Czujnik pokazuje 30. Co zrobi lampka?
- ✅ zaświeci słabo
- zaświeci mocno
- wyłączy się

**Why:** ✅ wygrywa pierwszy spełniony warunek (30 < 60) / „kolejność warunków nie ma znaczenia” (**myth**) / „program wybiera warunek najbliższy odczytowi”.
Wyjaśnienie: przy tej kolejności `lampka_mocno()` nigdy się nie wykona – trzeba zamienić warunki.
Źródło: Oak KS2 Y6, „Conditional statements”. Progi 40 i 60 – jak w ZPE „Arduino – fotorezystor”.

**4.** `if temp < 24: grzalka_wlacz()  else: grzalka_wylacz()`. Czujnik pokazuje 20. Co zrobi program w tym jednym przebiegu?
- ✅ włączy grzałkę i pominie `else`
- włączy grzałkę i zaraz ją wyłączy
- najpierw wyłączy grzałkę, potem włączy

**Why:** ✅ wykonuje się tylko gałąź pasująca do warunku / „wykonują się wszystkie części if/else” (**myth**) / „`else` wykonuje się na końcu każdego programu”.
Źródło: Oak KS2 Y6, „Selection to control the flow in a program”.

**5.** Robot jedzie wzdłuż czarnej linii. Co czujnik optyczny przekazuje mikrokontrolerowi?
- ✅ tylko informację: jasno czy ciemno
- gotowy obraz trasy, jak kamera
- polecenie: skręć w lewo albo w prawo

**Why:** ✅ o skręcie decyduje program na podstawie danych / „czujnik sam śledzi linię jak kamera” (**myth**) / „czujnik ma w pamięci mapę trasy”.
Źródło: Oak KS4 Y11, „Optical sensors for navigation”.

**6.** W zupełnie ciemnym pokoju robot z czujnikiem ultradźwiękowym jedzie w stronę ściany. Czy ją wykryje?
- ✅ tak – zmierzy odległość do ściany
- nie – w ciemności nic nie „zobaczy”
- tylko wtedy, gdy ściana jest jasna

**Why:** ✅ czujnik używa dźwięku (ultradźwięków), a nie światła / „działa jak kamera i potrzebuje światła” (**myth**) / „mierzy kolor ściany”.
Źródło: Oak KS4 Y11, „Ultrasonic sensors to measure distance”. Fakt także w ZPE („Rodzaje elementów…”) i ISB (nietoperz).

**7.** Mikrokontroler ma kręcić silnikiem robota. Jak je połączyć?
- ✅ przez sterownik silnika z osobnym zasilaniem
- bezpośrednio do pinu mikrokontrolera
- do pinu mikrokontrolera dłuższym kablem

**Why:** ✅ mikrokontroler wysyła sygnał sterujący, a nie moc / „mikrokontroler ma dość mocy na każdy silnik” (**myth**) / „silnik działa tylko z czujnikiem obok”.
Źródło: Oak KS4 Y11, „Working with motors”.

**8.** Ramię robota ma obrócić się dokładnie o 90° i tam stanąć. Jaki silnik wybrać?
- ✅ serwomechanizm (serwo)
- zwykły silnik prądu stałego
- obojętnie – wszystkie działają tak samo

**Why:** ✅ serwo działa w pętli zamkniętej i pilnuje położenia / „wszystkie silniki działają tak samo” (**myth**) / „zwykły silnik sam wie, gdzie stanąć”.
Źródło: Oak KS4 Y10, „Motors”. Fakt o serwomotorze także w ZPE („Rodzaje elementów…”).

**9.** Lampka nocna ma fotorezystor (LDR). Robi się ciemniej. Co dzieje się z jego oporem?
- ✅ rośnie
- maleje
- się nie zmienia

**Why:** ✅ mniej światła daje większy opór, a zmiana oporu zmienia napięcie, czyli sygnał / „LDR tylko »czuje« światło i nic w obwodzie nie zmienia” (**myth**) / „opór zależy tylko od długości przewodu”.
Źródło: Oak KS3 Y9, „Code and simulate micro:bits in Tinkercad” (misconception i pytanie kontrolne: „it increases”).

**10.** Automatyczne podlewanie: czujnik wilgotności, mikrokontroler i pompa, bez ekranu. Czy to komputer?
- ✅ tak – przetwarza dane z wejść i działa
- nie – każdy komputer musi mieć ekran
- nie – bez klawiatury to tylko zabawka

**Why:** ✅ wynikiem jest działanie w świecie (pompa), więc ekran nie jest potrzebny / „komputer zawsze ma ekran, żeby pokazać wynik” (**myth**) / „komputer służy tylko do pisania i gier”.
Źródło: Oak KS3 Y7, „Creating programs on a physical computing device”.

**11.** System szklarni pilnuje roślin. Ile czujników może mieć?
- ✅ kilka – np. temperatury, wilgotności gleby i światła
- tylko jeden – system ma jedno wejście
- żadnego – wystarczy sam zegar

**Why:** ✅ system może mieć wiele wejść, wyjść i sprzężenie zwrotne / „system ma jedno wejście, jedno przetwarzanie i jedno wyjście” (**myth**) / „czujniki są tylko w fabrykach”.
Źródło: Oak KS4 Y10, „Systems approach to design” i „Input components”. Zmienne w szklarni (światło, wilgotność, temperatura) – ta sama lekcja.

**12. (ZWYKŁE pytanie – bez `myth`)** Robot ma stanąć 10 cm przed ścianą. Program A: „jedź 3 s”. Program B: „jedź, aż czujnik pokaże ≤ 10 cm”. Robot nie jedzie za każdym razem z tą samą prędkością. Który program stanie we właściwym miejscu?
- ✅ program B – z czujnikiem
- program A – na czas
- oba tak samo dobrze

**Why:** ✅ B mierzy skutek ruchu i reaguje – to sprzężenie zwrotne / A „nie wie”, gdzie jest ściana / „czas zawsze daje tę samą drogę”.
Źródło faktów: MEXT, szkolenie 2024, slajd 15. Że to trudność uczniów, to tylko opinia autorów zbioru MEXT 2020 („と思われる”), a nie zbadane błędne przekonanie. **Nie oznaczać jako mit.**

**Zapas (do wyboru zamiast któregoś z powyższych):**
- **(z mitem)** Czy sam micro:bit, bez dodatkowych części, pokaże strzałkę w stronę przechylenia? ✅ „tak – ma wbudowany czujnik ruchu i diody”. Mit: „do sterowania zawsze potrzebne są części zewnętrzne” (Oak KS3 Y9, „Micro:bits in Tinkercad”; fakt: Oak Y7, zadanie B1).
- **(zwykłe)** Czujnik wilgotności od dwóch dni pokazuje tę samą liczbę, choć podlewasz kwiat. ✅ „czujnik może być zepsuty – system powinien to zgłosić” (MEXT, slajdy 【3】 s. 18; 解説 s. 57). Bez `myth`.
- **(z mitem, jeśli dział przejdzie na pseudokod z porównaniem)** `if temp = 24:` → błąd, bo do porównania służy `==` (Oak KS3 Y8, „Using selection”).

**Obecne pytania:**
- `6q47x2` zostaje jako zwykłe pytanie albo zostaje usunięte, a jego id wycofane. Nie zmieniać mu treści na pytanie 1 – nowe pytanie dostaje nowe id.
- `tmss7q` (granica) – zwykłe pytanie, bez `myth`.

### (f) Widżet „Sterownik na próbę” (statyczny JS + SVG, `js/lekcje/widgety.js`)

**Tryb 1 – „Na czas czy na pomiar?”** (MEXT 2024, slajd 15; zbiór 2020)
- **Dziecko robi:** wybiera prędkość robota (wolno, średnio, szybko) i program: A „jedź 3 s” albo B „jedź, aż czujnik ≤ 10 cm”. **Przed** startem zaznacza przewidywanie: „stanie przed ścianą / uderzy / stanie za daleko”.
- **Widzi:** robot jedzie po torze 0–70 cm. Przykładowe liczby (podpis „w tym przykładzie”), przeliczone:
  - A przy 15 cm/s: 45 cm, staje 25 cm przed ścianą;
  - A przy 20 cm/s: 60 cm, staje 10 cm przed ścianą;
  - A przy 25 cm/s: po 2,8 s dojeżdża do ściany (75 cm > 70 cm) i uderza;
  - B: zawsze staje około 10 cm przed ścianą.
- **Uczy się:** pętla otwarta a zamknięta.

**Tryb 2 – „Próg i robot na linii”** (ISB)
- **Dziecko robi:** przesuwa robota nad białe i czarne pole i odczytuje liczby. Przykład: biały 90, czarny 10, czyli średnia (90 + 10) : 2 = 50. Potem ustawia próg suwakiem i puszcza robota z dwiema reakcjami (> próg: lekko w lewo; ≤ próg: lekko w prawo).
- **Widzi:**
  - próg między odczytami → robot jedzie wzdłuż linii, „szarpiąc”;
  - próg poza zakresem odczytów → zawsze ta sama reakcja, robot kręci się w kółko;
  - dla chętnych przełącznik „płynnie”: `error = (odczyt − 50)·kp` i płynniejsza jazda.
- **Uczy się:** próg z pomiarów; dwie reakcje kontra korekta proporcjonalna.

**Tryb 3 (dla chętnych) – „Termostat akwarium”** (ZPE, histereza; Oak i BBC – termostat)
- **Dziecko robi:** ustawia cel 24 °C i szerokość histerezy (0,5 °C albo 2 °C).
- **Widzi:** wykres temperatury przez 60 min i licznik przełączeń. Przykładowy model: grzanie +0,5 °C/min, stygnięcie −0,25 °C/min.
  - histereza 0,5 °C: cykl 1 + 2 = 3 min → 20 cykli → ok. 40 przełączeń na godzinę, wahania ±0,25 °C;
  - histereza 2 °C: cykl 4 + 8 = 12 min → 5 cykli → ok. 10 przełączeń na godzinę, wahania ±1 °C.
- **Uczy się:** kompromis „dokładność kontra zużycie”.

**Zasady widżetu:**
- przewidywanie zawsze przed wynikiem (Estonia kl. 1–3: „ennustab selle töö tulemit”; dwuetapowe pytania Oak);
- wyniki w tabeli „ustawienie – przewidywałem – wynik”;
- liczby oznaczone jako przykład;
- SVG tylko z klasami CSS, viewBox 400 szerokości, unikalne id markerów.

### (g) Ramka „👪 Dla rodzica” (`parent`)

**`goal`:** Dziecko rozumie, że urządzenie reaguje „samo” dzięki trzem częściom: czujnik (wejście), program, element wykonawczy (wyjście). Rozróżnia działanie „na czas” od działania „na pomiar” (sprzężenie zwrotne). Umie dobrać próg z pomiarów. W polskiej podstawie szkoły podstawowej tych pojęć nie ma.

**`time`:** lekcja ok. 15 min, doświadczenie ok. 40 min, projekt 2–3 spotkania po 45 min – to nasza propozycja. Dla porównania: MEXT 11 godzin, Oak Y7 sześć lekcji, ISB dwie lekcje podwójne.

**`mistakes`** (tylko udokumentowane, Oak):
- „czujnik śledzi linię jak kamera” (Y11);
- „czujnik ultradźwiękowy widzi jak kamera” (Y11);
- „if sprawdza się tylko raz” (Y5);
- „warunek pętli while sprawdza się raz” (Y10);
- „kolejność warunków nie ma znaczenia” (Y6);
- „wykonują się wszystkie części if/else” (Y6);
- „silnik można podłączyć wprost do mikrokontrolera” (Y11);
- „wszystkie silniki działają tak samo” (Y10);
- „komputer musi mieć ekran” (Y7);
- „liczy się złożenie części, a kod jest mało ważny” (Y7);
- „ulepszamy tylko wtedy, gdy nie działa” (Y9);
- „ocena to opinia jednej osoby” (Y9).

**`avoid`:**
- nie mówić „czujnik widzi” ani „czujnik decyduje” – decyduje program;
- nie pokazywać if/else z przyciskiem jako „sprzężenia zwrotnego”;
- nie podłączać silnika wprost do pinu;
- żadnych projektów na 230 V;
- nie podawać gotowego rozwiązania – rola mentora, jak w ZPT 2026;
- nie zaczynać od strojenia silników (MEXT);
- nie traktować składania zestawu według instrukcji jako projektu (Korea).

**`prepare`:**
- telefon z aplikacją do pomiaru oświetlenia albo micro:bit z kablem USB;
- lampka, pudełko, kartka, kalkulator;
- jeśli w domu są baterie guzikowe, schować je przed młodszymi dziećmi (OPSS).

**`talk`:**
- Gdzie w domu coś samo się włącza albo wyłącza? Jaki tam jest czujnik?
- Termostat działa „na czas” czy „na pomiar”?
- Co by się stało, gdyby czujnik w tym urządzeniu się zepsuł? Jak urządzenie mogłoby to zauważyć? (MEXT)
- Dlaczego robot sprzątający nie zostaje przy ścianie? Przykład z MEXT, D(1): czujniki dotyku z przodu, cofnij i skręć o 90°.
- Jakie dane zbiera inteligentne urządzenie w domu i czy to bezpieczne? (Estonia kl. 7–9)

### (h) Materiały (`materials`)

Wszystkie strony poniżej otworzyły się bez logowania (curl, kod 200), chyba że napisano inaczej.

**Oak National Academy** – język `en`, licencja OGL v3.0 (Collection 2, „except where otherwise stated”). Wymagane przypisanie „A [subject] lesson by Oak National Academy licensed under Open Government Licence (OGL)” i link do OGL. Host jest w `MATERIAL_HOSTS`. **Filmów (stream.mux.com) nie sprawdzono** – proxy zwracało 403.

| Adres | Typ | Zawartość / uwagi |
|---|---|---|
| https://www.thenational.academy/pupils/lessons/using-input-and-output/overview | lekcja (Y7) | czujniki w micro:bicie: przechylenie → strzałka, matryca diod jako czujnik światła 0–255; MakeCode z emulatorem. **Najlepszy link dla dziecka.** |
| https://www.thenational.academy/teachers/programmes/computing-secondary-ks3/units/physical-computing-using-the-micro-bit/lessons | strona jednostki, forParent | 6 lekcji: od programu na urządzeniu po projekt i refleksję |
| https://www.thenational.academy/pupils/lessons/systems-approach-to-design/overview | lekcja (Y10, KS4 14–16 lat) | szklarnia: wejście, przetwarzanie, wyjście, sprzężenie zwrotne (30 °C → okno) |
| https://www.thenational.academy/pupils/lessons/motors/overview | lekcja (Y10) | silnik DC – pętla otwarta, serwo – zamknięta |
| https://www.thenational.academy/pupils/lessons/circuits-in-tinkercad/overview | lekcja (Y9) | wejście, przetwarzanie, wyjście; LED z rezystorem. **Zadania wymagają Tinkercad (konto lub kod klasy).** Rezystor podany jako „process component”. |
| https://www.thenational.academy/pupils/lessons/code-and-simulate-micro-bits-in-tinkercad/overview | lekcja (Y9) | próg jasności 100, LED świeci po ciemku; LDR. Ta sama uwaga o Tinkercad. |
| https://www.thenational.academy/teachers/lessons/optical-sensors-for-navigation, …/ultrasonic-sensors-to-measure-distance, …/working-with-motors | strony nauczyciela, forParent | robot (Y11): czujnik linii, czujnik ultradźwiękowy, sterownik silnika; błędne przekonania |
| https://www.thenational.academy/teachers/programmes/computing-secondary-ks3/units/computer-systems-and-data-science/lessons/boolean-logic | forParent / pomost | bramki logiczne „control what a computer does” (Y8) |

Lekcji `micro-bits-in-tinkercad` **nie** dawać jako wzoru sprzężenia zwrotnego.

**BBC Bitesize** – © BBC, tylko link; host jest w `MATERIAL_HOSTS`. Teksty otwierają się spoza UK (userinfo: X-Country „us”). Stopka „Advertise with us”, czyli możliwe reklamy. **Filmów nie sprawdzono; dostępu z Polski nie testowano.**

| Adres | Typ | Zawartość / uwagi |
|---|---|---|
| https://www.bbc.co.uk/bitesize/articles/zcp6vj6 | strona z filmem i transkrypcją (KS3 Technology and Design, **Irlandia Płn.**, 11–14 lat) | system sterowania wejście–przetwarzanie–wyjście, schemat blokowy alarmu z czujnikiem ruchu, zalety i wady |
| https://www.bbc.co.uk/bitesize/articles/zx3q7ty | strona (KS2, Anglia i Walia, 7–11 lat) | WHEN–IF–THEN, czujnik dymu, termostat. Proste przypomnienie. |
| https://www.bbc.co.uk/bitesize/articles/z6q7b7h | strona (GCSE CCEA, 15–16 lat), forParent / starsi | po co sprzężenie zwrotne; termostat, bramka biletowa |
| zfjsgk7 (KS3 ICT „Control and sequencing”) | — | **nie linkować** – przestarzałe (Adobe Flash, Flowol, Logicator) |

**ZPE** – język `pl`; host jest w `MATERIAL_HOSTS`.

| Adres | Typ | Zawartość / licencja |
|---|---|---|
| https://zpe.gov.pl/a/swiat-smart-czyli-internet-rzeczy-iot/DtVyT3QAo | strona (SP, informatyka) – przypomnienie | przedmioty z czujnikami przesyłają informacje; ilustracje i audiobook CC BY 3.0 |
| https://zpe.gov.pl/a/ostroznie-z-pradem/D19l5PaP4 | strona z filmem (SP, przyroda) | zasady bezpieczeństwa, 230 V; film CC BY-SA 3.0 |
| https://zpe.gov.pl/a/porazenie-pradem/D1EnTPorr | strona z filmem (SP, EDB) | pierwsza pomoc przy porażeniu; film CC BY 3.0 |
| https://zpe.gov.pl/a/symulacja-interaktywna/DHeePv3nC | animacja (liceum) – pomost | aplet bramek NOT, AND, NAND, OR, NOR, XOR, XNOR; CC BY-SA 3.0. **Działania JS nie sprawdzono.** |
| https://zpe.gov.pl/a/przeczytaj/D68uOoWgN | strona (liceum), forParent / chętni | Arduino i fotorezystor, 0–1023, progi 40 i 60; CC BY-SA 3.0 |
| https://zpe.gov.pl/a/przeczytaj/DNPQLciS5 | forParent | definicja sprzężenia zwrotnego („Czym jest robotyka?”); ilustracje CC BY-SA |
| https://zpe.gov.pl/a/typowe-elementy-instalacji-automatyki-chlodniczej-w-budynkach/D3pKaiuO3 | forParent | termostat, histereza; **licencji na stronie nie znaleziono** |
| https://zpe.gov.pl/a/podstawowe-elementy-i-urzadzenia-automatyki-przemyslowej/DAPGSt8sU | film (zawodowy), forParent | CC BY-SA 3.0. Odtwarzacza nie sprawdzono, tylko HTML. |
| https://zpe.gov.pl/a/robot-podazajacy-za-swiatlem/DMUM14KQQ | forParent | zasady BHP przy elektronice z mikrokontrolerem (szkoła ponadpodstawowa); karta pracy CC BY-SA 3.0 |
| MLP-010 „Dioda LED…” (DbWjW07PD) | — | **nie linkować**: rezystor podłączony równolegle do diody (błąd) |

**Dokumenty źródłowe (forParent):**
- **gov.uk** (`assets.publishing.service.gov.uk`, w `MATERIAL_HOSTS`):
  - KS3 D&T: https://assets.publishing.service.gov.uk/media/5a7c99ebed915d6969f46087/SECONDARY_national_curriculum_-_Design_and_technology.pdf
  - KS2 D&T: …/5a7ca43640f0b6629523adc1/PRIMARY_national_curriculum_-_Design_and_technology.pdf
  - KS3 computing: …/5a7cb981ed915d682236228d/SECONDARY_national_curriculum_-_Computing.pdf

  Licencja: „Open Government Licence” bez numeru wersji; dokument zbiorczy podaje OGL v2.0, © Crown copyright 2013. PDF computing KS2 nie wspomina o OGL.
- **MEXT** (`ja`):
  - strona https://www.mext.go.jp/a_menu/shotou/zyouhou/detail/mext_00617.html (slajdy 【3】 i 【5】, karta pracy Word przy 【3】; filmy są na YouTube, więc ich nie linkujemy);
  - 解説 https://www.mext.go.jp/component/a_menu/education/micro_detail/__icsFiles/afieldfile/2019/03/18/1387018_009.pdf (D(3): druk s. 55–58);
  - slajdy 【3】 https://www.mext.go.jp/content/20240313-mxt_jogai01-000006333_03.pdf.

  Regulamin MEXT jest zgodny z CC BY 4.0, z wyłączeniem praw osób trzecich. Na slajdach 【5】 karty MESH mają licencję CC BY-NC-SA 4.0 – nie używać ich.
- **ISB Bawaria** (`de`, host w `MATERIAL_HOSTS`): https://www.lehrplanplus.bayern.de/fm/71/RS-IT-2.7.2-Aufgabe-RoboterUnterwegs-20170712.pdf oraz https://www.lehrplanplus.bayern.de/fachlehrplan/realschule/8/it; © ISB.
- **Poza `MATERIAL_HOSTS`** (dopisywać tylko świadomie):
  - `zh.lehrplan.ch` (Lehrplan 21; „Alle Rechte liegen bei der Bildungsdirektion”);
  - `www.riigiteataja.ee` (Estonia; języka `et` brak w `MATERIAL_LANGS`);
  - `www.moe.go.kr` (ZIP z HWP, `ko` – nie nadaje się dla rodzica).

  Proponuję te trzy źródła tylko w `basis`.
- **Nie linkować:**
  - Tinkercad – wymaga konta (Oak: „Student access to Tinkercad”; ZPE: nauczyciel zakłada konto);
  - MakeCode i microbit.org – hosty nieosiągalne z sesji; czy działają bez konta, nie sprawdzono;
  - Wokwi, PhET, Scratch.

---

## 4. Bezpieczeństwo (z dokładnym źródłem)

1. **Napięcie sieci.** „W sieci elektrycznej płynie prąd o napięciu 230 woltów. To wystarczająco dużo, by porażenie mogło zaszkodzić naszemu zdrowiu, a nawet życiu.” oraz „Nie przeprowadzaj samodzielnych napraw…” (ZPE, „Ostrożnie z prądem!”, rozdz. 1). Zasada „projekty tylko na bateriach lub USB, nigdy 230 V” to nasz wniosek, zgodny z `docs/LEKCJE.md`.
2. **Baterie.** „Bateria… jest źródłem małego napięcia elektrycznego (ok. 1,5 V) bezpiecznego dla człowieka” oraz „zwykłych baterii nie wolno ładować w ten sposób!” (ZPE fizyka, „Urządzenia elektryczne”).
3. **Porażenie – pierwsza pomoc.** „Jeżeli nie masz pewności, że źródło prądu zostało odłączone, nie podchodź do osoby poszkodowanej, tylko wezwij służby ratunkowe.” (ZPE EDB, „Porażenie prądem”, rozdz. 2).
4. **Elektronika z mikrokontrolerem.** Zagrożenia: „zwarcia i uszkodzenie komponentów…, oparzenia lub porażenia przy nieumiejętnym korzystaniu z zasilania”. Zasady:
   - płytka stykowa bez lutowania;
   - układ sprawdzić „co najmniej dwa razy” przed zasileniem;
   - rezystory przy LED i czujnikach;
   - nie dotykać metalowych części przy podłączonym USB;
   - zgłaszać zapach lub nagrzewanie.

   Źródło: ZPE, scenariusz STEM „Robot podążający za światłem”, „Kluczowe zasady bezpieczeństwa”, pkt 2. W „Bez lutowania…” zasady są podobne, nie identyczne.
5. **Silnik.** Mikrokontroler nie zasila silnika: potrzebny jest sterownik silnika z własnym zasilaniem. Mikrokontroler podłączony bez zabezpieczenia może zostać uszkodzony (Oak Y11, „Working with motors”).
6. **Moduły i lutowanie (Japonia).** Uważać na oparzenia, porażenie i pożar, a gotowy wyrób regularnie sprawdzać („火傷や感電事故，火災などの防止…定期的な点検”, 解説 C(2), s. 45). Sprawdzanie miernikiem po każdym etapie okablowania to tylko propozycja („考えられる”).
7. **Ekran.** Bez odblasków i migotania, dobra postawa, nie pracować długo bez przerwy (MEXT 解説, D(2) i D(3), s. 57).
8. **Nadzór.** Oak, lekcje KS2 z obwodami i czujnikami: „Adult supervision required”, „Risk assessment required – equipment”. Przy wodzie: „Strict safety rules must be followed when using electrical components near to water” (Oak, „Electrical sensors: make and review”, Y6). Ważne w projekcie z podlewaniem: pompa i elektronika osobno, tylko niskie napięcie.
9. **Baterie guzikowe** (jeśli są w zestawach albo w domu): „Button batteries can badly hurt or kill a small child if they swallow one”; „STORE… up high and out of your child’s reach”; „DISPOSE of used button batteries as soon as you can” (OPSS, plakat 2025, https://assets.publishing.service.gov.uk/media/6895c379e7be62b4f0643187/button-batteries-poster-2025-web.pdf). Licencji samego PDF nie potwierdzono, więc tylko link i parafraza.
10. **Ogólne zasady pracowni (Korea).** Przed pracą sprawdzić narzędzia i urządzenia, przeszkolić się, używać środków ochrony, znać pierwszą pomoc, wietrzyć przy pyle i gazach ([별책 10], 3. 교수⋅학습 (2)(바) ①–③, ⑦). Uwaga o listwach zasilających i bateriach jest tylko w przedmiocie licealnym 로봇과 공학세계 – nie przypisywać jej gimnazjum.
11. **Ostrzeżenie o materiale.** Scenariusza ZPE MLP-010 nie dawać dziecku jako instrukcji: rezystor jest tam podłączony równolegle do diody.

---

## 5. Czego nie ustalono, co odrzucamy

**Nie ustalono:**
- **Polska.** Przypisanie fizyki do kl. VII–VIII (ramowe plany nauczania nie otwierane) i techniki do kl. IV–VI (tylko pośrednio). Wiek w klasach to nasze wyliczenie.
- **Wiek za granicą:**
  - Korea – tylko klasy (law.go.kr, english.moe.go.kr: 403);
  - Szwajcaria – tylko cykle (edudoc.ch zablokowane);
  - Estonia – tylko klasy;
  - Anglia – wiek tylko dla key stage, nie dla Year;
  - Bawaria – moduły IT bez przypisania do klasy; „kl. 8–10” to nasz wniosek.
- **Japonia.** Klasa dla D(3) jest wybierana przez szkołę („najpewniej kl. 3” to ocena zbioru MEXT). Nie pobrano części „D(3)の実践事例[前半]” (8,3 MB). Slajd 11 szkolenia 2024 (badanie wyobrażeń uczniów, 萩嶺ら2011) to obraz – nieodczytany. NHK for School nie oceniano.
- **Symulatory.** Warunki i działanie bez konta dla MakeCode, microbit.org, python.microbit.org, Wokwi, PhET, Scratch – hosty zablokowane w sesji.
- **Filmy.** Oak (mux), BBC i MEXT (YouTube) nie sprawdzone; dostępu do BBC z Polski nie testowano.
- **Licencje.** Brak oznaczenia licencji na stronach ZPE: chłodnictwo, scenariusze MLP, scenariusz STEM (poza kartą pracy). Brak danych o licencji dokumentu koreańskiego. Lehrplan 21 Zurych – wszystkie prawa zastrzeżone. ISB – ©. Wszędzie tylko parafraza i krótkie cytaty.
- **Brakujące źródła:**
  - udokumentowane błędne przekonanie o granicy `<` / `<=` – brak;
  - urzędowe źródło o nagrzewaniu się zwartej baterii – brak (gov.pl/UOKiK: zerwane połączenie).
- **Estońskie materiały publiczne** (e-koolikott, ProgeTiiger/harno.ee) i Open Roberta Lab – nie otwarto.
- **ISB.** Czy pętla robota „powtarza się bez końca” – widać to tylko na zrzucie programu, w tekście tego nie ma.
- **Obecny `basis`.** „s. 134” podstawy japońskiej i „Słownik pojęć” ZPE nie były objęte tym researchem.
- **Doświadczenie z telefonem.** Zachowanie czujnika telefonu nad białą i czarną kartką nie jest sprawdzone – dlatego karta mierzy jasno/ciemno w otoczeniu. Przed publikacją wykonać naprawdę.

**Odrzucamy (nie przenosimy do działu):**
- przykład Oak Y9 z przyciskiem if/else jako „sprzężenie zwrotne” oraz luźną definicję „output fed back as input” bez pętli zamkniętej;
- BBC KS3 ICT zfjsgk7 – przestarzałe;
- instrukcję podłączenia rezystora z ZPE MLP-010;
- zdanie „polska kl. IV uczy mikrokontrolera” – to tylko nieobowiązkowy scenariusz MLP-006 programu „Laboratoria Przyszłości”;
- „Bawaria – klasa 8” – moduł 2.7.2 jest do wyboru, bez klasy;
- „Estonia o 2–4 lata wcześniej niż Bawaria” – nie da się tego wyliczyć;
- „termostat nie decyduje sam” jako ogólną zasadę – w ZPE dotyczy tylko układu z PLC;
- „ZPE: sprzężenie zwrotne dopiero w liceum” i „w polskiej SP czujniki głównie jako IoT” – uogólnienia z pojedynczych materiałów;
- „ciekawe okazje uprawy” (błąd tłumaczenia; poprawne tematy: doświadczalne doświetlanie chryzantem, ochrona przed zwierzętami i kradzieżą, powiadomienie o zbiorach, zbieranie jaj, podlewanie, kontrola temperatury);
- karty MESH (CC BY-NC-SA) ze slajdów 【5】;
- opinię MEXT („と思われる”) jako „udokumentowany mit”;
- filmy MEXT na YouTube (zasada „bez YouTube”).

**Wszystkie tłumaczenia w tym raporcie są robocze (nasze).**