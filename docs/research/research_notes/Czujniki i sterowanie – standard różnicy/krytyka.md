KRYTYKA KOMPLETNOŚCI – synteza „Czujniki i sterowanie” (ścieżka Świat, poz. 3, 12–15 lat)

Sprawdziłem w repozytorium tylko dwie rzeczy. Format `why.myth` w docs/LEKCJE.md, w. 170, dopuszcza indeks albo listę, więc dwa mity w pyt. 2 są w porządku. `MATERIAL_HOSTS` i `MATERIAL_LANGS` w tools/sprawdz-dane.js, w. 26–30, zawierają lehrplanplus, thenational.academy, bbc.co.uk i assets.publishing.service.gov.uk; języków `ko` i `et` tam nie ma. Niczego nie pobierałem z sieci.

## 1. Twierdzenia bez źródła lub niepewne

- **Japonia „12–15 lat”** (tabela, `where`, ramka). Synteza nie podaje oficjalnego źródła wieku. Zasada mówi: wiek tylko z dokumentu, inaczej klasa. Trzeba dopisać przepis lub stronę MEXT o wieku w 中学校 albo pisać „gimnazjum, kl. 1–3”.
- **Korea, Estonia, Szwajcaria, Bawaria – brak cytatów w oryginale i adresów URL.** Rzeczy do poprawy:
  - Korea: kody [9정01-02], [9정01-03], [9정02-01], [9기가04-04], [6실04-06] są bez cytatu; jest tylko „센서와 액추에이터” przy [9기가04-09].
  - Estonia: kl. 4–6 („mikrokontroler, silnik, czujniki”) i kl. 7–9 (IoT, audyt bezpieczeństwa) są bez cytatu w języku estońskim.
  - Szwajcaria: NT.5.3.b jest bez cytatu.
  - Bawaria: „Mittelschule Technik R9” jest bez cytatu i bez URL. Nie wyjaśniono też skrótu „R9”.
  - Tabela różnic w ogóle nie podaje adresów URL. Są tylko w materiałach, a dla Oak częściowo jako fragmenty adresu.
- **Bawaria – sprzeczności:**
  - `where` mówi „Realschule, moduł do wyboru »Robotik«”, ale nazwy „Robotik” nie ma nigdzie z cytatem.
  - Synteza odrzuca „Bawaria – klasa 8”, a link materiału to `.../fachlehrplan/realschule/8/it`, czyli adres z „8”. Trzeba wyjaśnić, co oznacza „8” w adresie, albo usunąć link.
  - Tabela cytuje Mittelschule, a `where` mówi o Realschule.
- **„…w kl. VII–VIII nowa podstawa… ale już bez robota i bez elektromagnesu”** (ramka przypomnienia). Brakuje strony w Dz.U. 2026 poz. 378 dla „bez robota” w informatyce VII–VIII. Brak czegoś w akcie też trzeba wykazać wyszukaniem, jak zrobiono to dla „sprzężen…”.
- **Skrót „ZPT 2026”** nie jest rozwinięty. Brakuje nazwy przedmiotu i miejsca w akcie.
- **Dane do pyt. 3 i do Arduino 0–1023** pochodzą z materiału licealnego ZPE. To w porządku, ale trzeba to oznaczyć jako przykład, a nie normę.
- **Pyt. 5 i rdzeń działu mówią co innego.**
  - Pyt. 5: czujnik linii daje „tylko jasno/ciemno” (Oak Y11).
  - Rozszerzenie 2: czujnik daje liczbę 0–255 lub 0–1023.
  - Uczeń dostanie sprzeczny przekaz. Lepsza odpowiedź: „tylko odczyt jasności (liczbę lub jasno/ciemno)”.
- **Doświadczenie, wersja A (telefon).** Nie sprawdzono, czy aplikacja w ogóle odczyta czujnik światła telefonu. Na części telefonów (prawdopodobnie iOS, nie potwierdziłem) aplikacje mierzą światło kamerą. Trzeba to sprawdzić i wpisać do karty: wymagany system lub aplikacja.
- **Próg jako średnia „pod lampą” i „pod pudełkiem” w lampce nocnej – przeniesienie bez źródła.**
  - Metoda ISB dotyczy dwóch stanów podłoża przy śledzeniu linii.
  - Dla lampki nocnej średnia z oświetlenia lampą i całkowitej ciemności nie wyznacza sensownego „zmierzchu”.
  - MEXT dobiera próg z danych z rejestratora. Lepiej: zmierz w sytuacji, w której lampka ma się włączyć, i porównaj z obu skrajnościami.
  - Trzeba to wprost oznaczyć jako naszą adaptację.
- **Krok 8 doświadczenia („zasłoń czujnik = awaria”) jest mylący.** Zasłonięty czujnik daje prawdziwy odczyt „ciemno”, nie awarię. Lepsza wersja: „odczyt nie zmienia się mimo zmian światła” albo odłączenie czujnika (micro:bit). Trzeba też pokazać, że sama stała wartość nie odróżnia awarii od nocy.
- **Widżet, tryb 3:** grzanie +0,5 °C/min to nierealne tempo dla akwarium (rząd wielkości to stopnie na godzinę – sprawdzić). Trzeba oznaczyć „model przyspieszony” albo zmienić oś na godziny. Liczby przełączeń przeliczyłem: 40 i 10 na godzinę, wahania ±0,25 i ±1 °C – są poprawne. Liczby trybu 1 (45 cm, 60 cm, 2,8 s) też poprawne.
- **„Czujnik pomiarowy daje liczbę z ustalonego zakresu”** to uogólnienie z dwóch przykładów (micro:bit, Arduino). W tekście lepiej pisać „np.”.

## 2. Powtórka polskiej szkoły zamiast różnicy

- **Pytania „przewiduj i wyjaśnij” 1–4** (if w pętli, while, elif, if/else) to semantyka instrukcji warunkowych i pętli, czyli informatyka 2024, kl. IV–VIII. Synteza sama nazywa to przypomnieniem. Jedna trzecia pytań z `why` uczy więc tego, co już jest w Polsce. Zostawić najwyżej 1–2, najlepiej osadzone w różnicy, np. „sterownik sprawdza czujnik tylko w pętli” razem z sygnałem i progiem. Reszta pytań powinna dotyczyć progu, A/C, sprzężenia i elementu wykonawczego.
- **Duplikaty:** `a1k103` i `6q47x2` (warunki, pętla) oraz pyt. 1 i 4 uczą tego samego.
- **`8couoy`, `nyiy77` (AND/OR)** powtarzają polską informatykę i dział wymagany `informacja/bramki-logiczne`. Usunąć albo zostawić jedno w kontekście „dwa czujniki naraz”.
- **Rozszerzenie (b)7 „Program reaguje tylko wtedy, gdy sprawdza”** to w całości przypomnienie. Przenieść do ramki przypomnienia albo skrócić do jednego zdania.
- **Ramka przypomnienia jest za długa:** 4 punkty i akapit o nowej podstawie, a ma być krótka. Problem merytoryczny: „To znasz” nie pasuje do 12-latka z kl. VI, który nie miał jeszcze fizyki ani informatyki VII–VIII. Lepiej „znasz albo poznasz w kl. …”.
- **Wiek:** dziecko, które w 2026 kończy 15 lat, jest w r. szk. 2026/27 w 1. klasie szkoły ponadpodstawowej (wyliczenie z art. 35). Opis „kl. VI–VIII” trzeba uzupełnić o „1. kl. szkoły ponadpodstawowej”.

## 3. Brakujące pomoce i źródła

- **Brak materiału po polsku dla dziecka w rdzeniu tematu.** Wszystkie linki ZPE to przypomnienie, materiały dla rodzica albo liceum. ZPE „Rodzaje elementów…” jest cytowany jako źródło (ultradźwięki, serwo; CC BY-SA 3.0), ale nie trafił do `materials`. Rozważyć go jako link dla ucznia „dla chętnych”.
- **Brak materiału do A/C** (analogowy → cyfrowy) i do progu w żadnym języku.
- **Brak `requires`** (sugestia: `informacja/bramki-logiczne`, dział o obwodach) oraz potwierdzenia `level` i `age`.
- **Brak planu dla fiszek** z nowymi terminami: element wykonawczy, próg, A/C, pętla otwarta i zamknięta, serwo, histereza.
- **Brak nowej infografiki „W pigułce”.** Obecna będzie niezgodna z nową ściągą i fiszkami.
- **Brak aktualizacji** `js/dane/swiat/zrodla.js` i `basis` (MEXT 解説, Oak OGL, ISB, data researchu).
- **Pola karty `activities`:** synteza nie przypisuje wprost tekstu do obowiązkowych pól `safety` i `source`.
- **Oak OGL:** wymagane przypisanie. Nie ustalono, gdzie w danych działu ma się pojawić (opis materiału czy `zrodla.js`).
- **Filmy niesprawdzone:** Oak (mux), BBC i odtwarzacz ZPE. Przed dodaniem typu `film` trzeba je otworzyć.
- **Widżet:** brakuje opisu dostępności, czyli `aria-label` i obsługi bez myszy (suwak, wybór przewidywania).
- **Bezpieczeństwo:** brak urzędowego źródła o zwarciu baterii (synteza to przyznaje) i o akumulatorach Li-ion/LiPo w zestawach.

## 4. Pytania: dwie poprawne odpowiedzi albo podpowiedź długością

- **Pyt. 12, etap „Dlaczego?”:** opcja „A »nie wie«, gdzie jest ściana” jest prawdziwa, więc są dwie poprawne. Zamienić na fałsz, np. „A zawsze przejedzie tę samą drogę, więc trafi”.
- **Pyt. 11:**
  - „żadnego – wystarczy sam zegar” bywa prawdą, bo podlewanie na czas istnieje, a pytanie brzmi „może mieć”.
  - Poprawna opcja („kilka – np. temperatury, wilgotności gleby i światła”, ok. 51 znaków) jest wyraźnie najdłuższa wobec 37 i 29 znaków.
- **Pyt. 7:** poprawna opcja („przez sterownik silnika z osobnym zasilaniem”, ok. 44 znaki) jest wyraźnie najdłuższa wobec 34 i 35 znaków. Skrócić, np. „przez sterownik silnika”.
- **Wzorzec w zestawie:** w pyt. 1, 6 i 10 jedyna opcja zaczynająca się od „tak” jest poprawna, a dwie pozostałe zaczynają się od „nie”. Daje to podpowiedź w serii. Zmienić budowę opcji w części pytań.
- **Pyt. 2:**
  - Odpowiedź nie jest liczbą, choć pytanie brzmi „Ile razy”.
  - „aż spadnie do 10 cm” jest nieścisłe, bo pętla kończy się przy ≤ 10.
  - Brak inicjalizacji `odleglosc = czujnik()` przed pętlą.
  - Lepiej zapytać „Kiedy pętla się skończy?”.
- **Pyt. 5:** sprzeczność z „czujnik daje liczbę”, opisana w punkcie 1.
- **Pyt. 8:** silnik krokowy też by się nadał. Nie ma go wśród opcji, więc jest jedna poprawna, ale `explain` powinno mówić „z podanych”. Opcja „obojętnie – wszystkie działają tak samo” jest za słaba jako dystraktor.
- **Pyt. 10:** dystraktor „bez klawiatury to tylko zabawka” jest zbyt słaby. Podobnie „czujniki są tylko w fabrykach” w etapie „Dlaczego?” pyt. 11.
- **`tmss7q` i krok 7 karty (`<` czy `<=`):** w porządku jako zwykłe zadanie, bez `myth`.

## 5. Bezpieczeństwo w domu (12–15 lat)

- **Pożar.** Karta zaleca „pudełko albo gruby koc do zaciemnienia” obok lampki. Koc na gorącej żarówce lub halogenie to ryzyko pożaru. Trzeba zapisać: zasłaniamy czujnik, nie lampkę; lampka tylko LED; nie przykrywać lampki. Telefon nie może leżeć tuż pod gorącą żarówką.
- **Projekt „drzwi, które nie wypuszczą dziecka”.** Blokowanie prawdziwych drzwi to ryzyko przy ewakuacji i zamknięcia dziecka. Zostawić tylko jako koncepcję na papierze lub w symulatorze, bez montażu na drzwiach, albo usunąć.
- **Woda.** Przy podlewaniu i szklarni:
  - tylko pompka na niskie napięcie przez sterownik;
  - elektronika poza zasięgiem wody;
  - nigdy pompa ani wentylator z gniazdka.

  Cytat Oak dotyczy Y6 – dopisać go do karty projektu.
- **Wentylator** („zimno przy ścianie”): tylko mały wentylator na USB lub baterie, osłonięty. Palce z dala od wirnika i ramienia serwa.
- **Baterie:**
  - nie zwierać;
  - nie ładować zwykłych baterii (cytat ZPE jest);
  - brakuje zasady dla Li-ion/LiPo i koszyków na baterie AAA do micro:bita;
  - źródło urzędowe brakuje.
- **Nadzór.** „Adult supervision required” pochodzi z Oak KS2 (7–11 lat). Dla 12–15 lat trzeba dopasować: dorosły w domu przy zasilaniu układu i przy pracach z wodą i silnikami, a nie przy samej karcie pomiarów.
- **Brak w karcie:**
  - zasady „nie podłączaj czujników ani modułów do portu USB z uszkodzonym kablem”;
  - zasady „odłącz zasilanie przed zmianą połączeń” (jest w ZPE STEM jako „sprawdź dwa razy”; dopisać wprost).
- **Ekran:** przerwy są (MEXT). Projekt 3 × 45 min plus lekcja i doświadczenie to dużo czasu przy ekranie. Zaznaczyć, że etap 1–3 (problem, schemat, diagram) robi się na papierze.
- **ZPE MLP-010:** dobrze, że jest wykluczony (rezystor równolegle). Upewnić się, że nie trafi do `basis` jako źródło.