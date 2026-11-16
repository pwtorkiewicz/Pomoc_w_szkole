KRYTYKA KOMPLETNOŚCI – „Mosty i trójkąty” (ścieżka Świat, poz. 2, 9–11 lat)

Sprawdziłem w repozytorium: dział `mosty` (js/dane/swiat/maszyny.js, w. 87–171), js/dane/swiat/zrodla.js w. 21, MATERIAL_HOSTS (tools/sprawdz-dane.js w. 26–28), format activities/why/parent (docs/LEKCJE.md, w. 142–190). Niczego nie zmieniałem i nie pobierałem nic z sieci.

## (1) Twierdzenia bez źródła albo niepewne

- **Karta A ma błąd geometryczny.** Przekątna kwadratu jest √2 ≈ 1,41 raza dłuższa od boku. Jednakowy patyczek nie wejdzie więc po przekątnej. Dziecko dostanie romb 60°/120° z dwóch trójkątów równobocznych, a nie „kwadrat z przekątną”.
  - Do tego liczba się nie zgadza: 4 + 3 + 1 = 8 patyczków, a nie 7 (chyba że trójkąt się rozbiera).
  - Poprawka: przekątna z dłuższej słomki docinanej na wymiar (robi to dorosły) albo zmiana nazwy na „romb z przekątną”.
  - To samo trzeba poprawić w tabeli karty, w `expected` i w widżecie (tryb 1).
- **Karta A: plastelina w węzłach.** Plastelina trzyma kąty przy lekkim pchnięciu. Trójkąt z kolei może się rozjechać w węzłach. Wynik „kwadrat → romb, trójkąt trzyma” nie jest pewny. Kartę trzeba wykonać naprawdę (wymóg LEKCJE.md), a w `expected` dopisać, że naciskać trzeba wyraźnie.
- **Karta B: kierunek zagięć.** Zagięcia harmonijki i U muszą biec wzdłuż przęsła, od książki do książki. Ułożona w poprzek harmonijka jest słabsza niż płaska kartka. W krokach i w pytaniu 11 tego brakuje, a bez tego wynik może wyjść odwrotny.
- **Karta B: kubeczek.** Na rurce i na harmonijce kubeczek się przewróci albo stoczy, czyli test zmierzy upadek kubka, a nie wytrzymałość kartki.
  - Propozycja: platforma z kartonika albo kubeczek zawieszony na nitce w środku przęsła.
  - Przy okazji: limit 20 klocków może nie wystarczyć dla rurki (wartość nasza, nieprzetestowana). Trzeba dodać wiersz „więcej niż 20”.
- **Widżet, tryb 2: kryterium sztywności.** Kryterium „ranga = 2n − 3 przy przybitych podporach” jest wewnętrznie sprzeczne. 2n − 3 dotyczy ramy swobodnej. Gdy węzły są przybite, warunkiem jest ranga = 2 × (liczba węzłów swobodnych).
  - Trzeba wybrać jeden wariant.
  - Siatka ma węzły współliniowe, więc test numeryczny musi mieć tolerancję. Sztywność infinitezymalna to nie to samo co skończona.
  - Odpowiedź na „ile najmniej prętów” (dla 2 × 4 swobodnej: 13) trzeba przeliczyć dwukrotnie.
- **Wiersz „inna metoda (patyczki zamiast dowodu)”.** Japonia robi to w gimnazjum, kl. 2, czyli w wieku polskiej kl. VIII. Dla 9–11 lat to nie jest praktyka zagraniczna, tylko nasza decyzja. Trzeba to tak opisać, a nie jako różnicę „z Japonii”.
- **Szwajcaria.**
  - Nie podano adresu URL zuryskiego LP21 ani strony, na której stoją kody TTG.2.B.1.3c i NMG.5.1.b/c/d/f.
  - Interpretacja znaku „≡” jako „obowiązkowe” wymaga cytatu z legendy LP21. Nie jestem pewien, że ten znak tak działa.
  - Przy „cykl 2 = kl. 3–6” trzeba dopisać, że to liczenie po przedszkolu (5H–8H), inaczej rodzic się pogubi.
- **Bawaria: oznaczenia KE1/KE2/KE3/KE6** to nasza numeracja według kolejności. LehrplanPLUS nie numeruje oczekiwań. Trzeba to zaznaczyć albo cytować pełne zdania.
- **Brak adresów URL dla źródeł mitów** (wymóg: „każdy mit musi mieć źródło”). Pełne adresy Oak trzeba podać dla:
  - Y1 „Bridges”, testing-bridge-structures, reinforcing-bridge-structures;
  - Y2 preparing-materials-for-playground-structures, creating-and-reinforcing-playground-structures;
  - Y2 science changing-shape-review;
  - Y3 shell-structures;
  - Y9 the-force-of-a-floor.

  Adres jest tylko przy strengthen-packaging i dwóch lekcjach Y1. Licencję OGL potwierdzono tylko dla części z nich.
- **Pozostałe brakujące adresy:** MEXT 数学編 (s. 115) i 理科編 (s. 50), dokument koreański, kody ACARA, PDF-y podstaw (eli.gov.pl), na które wskazują numery stron. Strony dokumentu ISB są podane tylko dla s. 2 i s. 4. Brakuje stron dla listewek 30 cm, arkusza 40 × 29 cm, 5 godzin lekcyjnych i Tower Bridge.
- **Ramka przypomnienia, przyroda:** „siła nacisku odkształca przedmioty i wpływa na wytrzymałość konstrukcji” wygląda na parafrazę rozszerzoną względem tabeli („nacisk i ciśnienie, nie kształt”). Trzeba zacytować wymaganie dosłownie albo usunąć ten punkt.
- **Most Leonarda z 6 linijkami 30 cm** jest nieprzetestowany. Taki most zwykle wymaga kilkunastu elementów, a gładkie linijki się ślizgają. Karta podpowiedzi może prowadzić donikąd. Trzeba sprawdzić liczbę listewek w ISB i zbudować most naprawdę.
- **js/dane/swiat/zrodla.js w. 21** poza DQbhFQFuy cytuje także D1DHyBT87 („most wiszący”). Synteza każe go usunąć z `basis`, ale nie wspomina o zrodla.js – trzeba usunąć w obu miejscach.
- **Słowo „pylon”** jest w pytaniu `so2n7f`, we fiszce „Most wiszący” i w infografice. Synteza przyznaje, że nie ma dla niego polskiego źródła. Trzeba to wszędzie zastąpić „wieżami”, nie tylko w teorii.

## (2) Powtórzenia polskiej szkoły zamiast różnicy (albo treść bez zagranicznego zakotwiczenia)

- **Części mostu** (przęsło, przyczółek, filar, jazda dołem/górą) i **Wieża Eiffla** pochodzą z ZPE dla szkół zawodowych i liceum. Żaden program zagraniczny dla 9–11 lat ich nie wymienia (Oak Y1 ma inne części: towers, cables, deck, anchors). To nie jest różnica. Proponuję:
  - zostawić minimum (przęsło, przyczółek),
  - „jazdę dołem/górą” i filar usunąć,
  - części wziąć z Oak.
- **Punkt 10 „Pomosty”** (Korea, Australia, Japonia, dylatacje) to wypełniacz. Dla 9–11 lat nie pokazuje różnicy. Wystarczy jedno zdanie w ramce dla rodzica.
- **Projekt:** kryteria i „oceń/popraw” w większości dublują ZPT kl. IV–VI. Różnicą jest tylko trójka cel / oszczędność materiału / oryginalność oraz obowiązkowy rysunek z instrukcją – i to trzeba wyeksponować w `intro`. Kryterium 6 („testowałem w trakcie”) wystarczy jako krok, nie jako osobne kryterium.
- **Pytania o szkołę zamiast o temat:**
  - `hpul3x` („według programu z Bawarii”) – przeformułować na treść,
  - fiszkę „Heimat- und Sachunterricht (HSU)” usunąć, tak jak `5vg6kr`. Synteza pomija tę fiszkę.
- **Ramka przypomnienia ma etykiety tylko dla nowej podstawy (kl. III–IV).** Dla kl. V (stara podstawa) przypomnienie z przyrody nie pasuje. Trzeba podać wariant albo usunąć przyrodę z ramki.

## (3) Brakujące pomoce i źródła

- **Nie ma planu nowej lekcji** (4–6 kroków, w każdym grafika lub widżet, miejsce widżetu `rama`). Synteza opisuje widżet, ale nie układ lekcji ani tego, który krok go używa.
- **Nie ma pełnej nowej infografiki** (jest tylko poprawka `top`) ani zrewidowanej listy fiszek (pylon, HSU, „tylko jeden trójkąt”).
- **Brakuje materiałów dla dziecka po polsku na jego poziomie.** Poza DAJxoIkpo (matematyka) wszystko jest po angielsku albo z ZPE zawodowego (i to oznaczone jako forParent). Trzeba poszukać w ZPE materiałów z techniki i ZPT dla SP o konstrukcjach i mostach albo wyraźnie napisać, że ich brak. Przy BBC i Oak dać `note`, że materiał jest po angielsku i dziecko ogląda go z rodzicem.
- **Odtwarzanie filmów BBC i Oak poza UK jest nieustalone.** Trzeba to sprawdzić przez `node tools/sprawdz-linki.js swiat` i ręcznie w przeglądarce, a do każdego linku dodać `expect`.
- **Pytanie 8 („dla chętnych”):** nie wiem, czy format ma takie oznaczenie przy pytaniu. W LEKCJE.md go nie widzę, więc pytanie lepiej pominąć.
- **Karta B:** pole `safety` zawiera nożyczki, choć w krokach nożyczek nie ma. Trzeba ujednolicić `needs`, `steps` i `safety`.
- **Pytanie 9** (opakowanie, skorupa) jest daleko od mostów i trójkątów. Albo dodać wyraźny wątek „szkielet i skorupa” w lekcji, albo pytanie usunąć.

## (4) Ryzyko dwóch poprawnych odpowiedzi i podpowiedzi długością lub sformułowaniem

- **Systematyczna podpowiedź słowami absolutnymi.** W pytaniach 1–4, 6, 7 i 9 błędne opcje mają „zawsze / tylko / każda / na pewno”, a poprawne „może / zwykle / to zależy”. Uczeń, który zawsze wybiera opcję bez słowa absolutnego, trafi prawie wszystko. Część poprawnych odpowiedzi trzeba sformułować kategorycznie, a część błędnych bez słów absolutnych.
- **Poprawna odpowiedź najdłuższa** w pytaniach 1 (49/47/41), 4 (47/41/33) i 6 – do sprawdzenia `node tools/jakosc-pytan.js swiat -v`.
- **Pyt. 4:** „nie – to zależy…” jest logicznie niespójne, a „stoi pewnie” w treści zdradza odpowiedź. Lepiej: „tylko te, które są potrzebne”.
- **Pyt. 8:** „nie – most tylko przeszkadza mu spaść” to obrona w języku potocznym. Źródło (Oak Year 9) jest dla starszych. Usunąć.
- **Pyt. 11, etap „why”:** dystraktor „złożona kartka jest grubsza” jest w praktyce trafnym wyjaśnieniem, bo większa wysokość przekroju to właśnie przyczyna sztywności. To realne ryzyko drugiej poprawnej odpowiedzi. Zostawić tylko „ma więcej papieru”. Do tego „zagięcia usztywniają kartkę” jest prawie tautologią.
- **Pyt. 7:** „kartka zrobi się sztywniejsza” – zagięcie lokalnie usztywnia, więc da się tego bronić. Lepiej wymienić tę opcję. W etapie „why” opcje 2 i 3 są niemal identyczne (obie: „wszystko / papier wraca do kształtu”).
- **Pyt. 9:** karton po soku jest zgrzany i laminowany, nie rozłoży się płasko. Wziąć pudełko po płatkach lub paście do zębów. Błąd językowy: „karton nie da się” → „kartonu nie da się”.
- **Pyt. 10 dubluje `lltla3`** prawie słowo w słowo. Zamiast nowego id przerobić `lltla3` na pytanie dwuetapowe. Dystraktory „zamieni się w trójkąt” i „patyczki są zawsze za cienkie” są absurdalne, więc nikt ich nie wybierze.
- **`b5063p`:** nowa poprawna odpowiedź „trzy boki wyznaczają kształt trójkąta” – sprawdzić długość względem trzech pozostałych opcji.
- **Ramka przypomnienia:** „Że z sztywności” → „Że ze sztywności”.

## (5) Bezpieczeństwo w domu (9–11 lat)

- **Klocki:** drobne klocki (np. LEGO) są niebezpieczne dla młodszego rodzeństwa (połknięcie). Dopisać: „sprzątnij klocki, gdy w domu są małe dzieci”.
- **Obciążenie:** tylko lekkie klocki. Żadnych książek, butelek z wodą ani odważników jako obciążenia, bo spadają na stopy i dłonie. Stosy książek niskie i stabilne, na środku stołu.
- **Gumki recepturki (projekt):** nie naciągać w stronę twarzy, mogą strzelić w oko. Wpisać do `safety` projektu, którego `safety` w syntezie w ogóle nie ma, a pole jest obowiązkowe.
- **Patyczki:** sprawdzić drzazgi. Nie zastępować ich wykałaczkami ani szpikulcami do szaszłyków (ostre końce). Słomki są bezpieczniejsze.
- **Cięcie i piłowanie (pkt 4.7, BBC):** w projekcie z linijkami jest zbędne. W `safety` napisać tylko „jeśli trzeba coś przyciąć – robi to dorosły”, bez instrukcji piłowania dla dziecka.
- **Klej na gorąco i alergeny:** wyłączenie słuszne. Ostrzeżenie o alergenach dać tylko przy linkach Oak Y1 (`note`), bo w naszych kartach spaghetti i pianek nie ma.
- **`adult: true`:** dla karty A można rozważyć `false` (bez narzędzi). Dla karty B i projektu – zostawić `true`.