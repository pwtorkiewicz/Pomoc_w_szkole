# 🎒 Pomoc w szkole

Pomoc naukowa dla uczniów szkoły podstawowej. Na starcie uczeń wybiera **ścieżkę**:

| Ścieżka | Strona | Stan |
|---|---|---|
| 🧸 Klasa 3 | `klasa3.html` | edukacja polonistyczna (7 działów, 4 dyktanda ze słuchu), matematyczna (7, widżety: zegar, tabliczka mnożenia, monety, kalendarz), angielski (7), przyrodnicza (8), społeczna (6), informatyczna (4); wiedza z edukacji technicznej, plastycznej, muzycznej i WF (po 2); tryb dla młodszego ucznia: duże litery, czytanie na głos, quizy z gwiazdkami |
| 🎨 Klasa 4 – wszystkie przedmioty | `klasa4.html` | polski (7 działów), matematyka (7), angielski (6), przyroda (6), historia (4), informatyka (4), zajęcia praktyczno-techniczne – ruch drogowy (4), muzyka (3), plastyka (3), wychowanie fizyczne – wiedza (2) |
| 🔬 Klasa 8 – wszystkie przedmioty (bieżąca nauka) | `klasa8.html` | fizyka (7 działów, dz. VI–IX: elektryczność, magnetyzm, drgania i fale, optyka), chemia (8, dz. VI–X: wodorotlenki, kwasy, pH, sole, węglowodory, alkohole, kwasy karboksylowe i estry, tłuszcze, białka i cukry), biologia (10, dz. V–VIII: DNA, chromosomy i podziały, dziedziczenie, płeć i grupy krwi, mutacje, ewolucja, ekosystem i populacja, zależności, łańcuchy pokarmowe, ochrona przyrody), geografia (10, dz. XIV–XVIII: Azja, Afryka, obie Ameryki, Australia i Oceania, obszary okołobiegunowe), historia (12, dz. XXXI–XLI: od września 1939 do wejścia Polski do NATO i UE), wiedza o społeczeństwie (14, dz. I–XII: od grupy i rodziny po samorząd, ustrój RP, ONZ, NATO i UE), edukacja dla bezpieczeństwa (11, dz. I–IV: alarmy, zagrożenia, pierwsza pomoc, RKO i AED), informatyka (11, blok VII–VIII: algorytmy, Python, arkusz, sieci, prawo autorskie, bezpieczeństwo), matematyka – symetrie (4, dz. XV, poza egzaminem), język niemiecki jako drugi język (14, wariant II.2, poziom A1: przedstawianie się, rodzina, szkoła, plan dnia, czas wolny, jedzenie, zakupy, dom, miasto, zdrowie, przyroda, Perfekt, święta, kraje D-A-CH) – z lekcjami i zadaniami otwartymi; polski, matematyka i angielski prowadzą do ścieżki egzaminacyjnej; wiedza z WF w przygotowaniu |
| 🎯 Egzamin ósmoklasisty | `egzamin.html` | gotowa (opis poniżej) |

Każda ścieżka ma własne treści, własny plan rozbudowy i **osobny zapis postępu** – na jednym urządzeniu mogą się uczyć dzieci z różnych klas. Wszystkie ścieżki korzystają z tego samego silnika (`js/app.js`). Jak działają ścieżki i jak dodać treści: `docs/SCIEZKI.md`.

## 🎯 Ścieżka „Egzamin ósmoklasisty”

**Przedmioty:** język polski, matematyka, język angielski. Razem 47 działów, 47 lekcji, 669 fiszek, 1124 pytania (60 z rysunkiem), 85 zadań otwartych (matematyka i polski) oraz 23 zestawy ćwiczeń jak na egzaminie (160 zadań).

**Podstawa:** treści sprawdzono 31.10.2026 w oryginalnych dokumentach CKE: informatorach o egzaminie ósmoklasisty od r. szk. 2024/2025 (polski, matematyka, angielski) oraz komunikatach CKE na 2027 r., a także w tekście podstawy programowej (Dz.U. 2024 poz. 996, eli.gov.pl). Według informatorów egzamin sprawdza podstawę programową z rozporządzenia z 28.06.2024 (Dz.U. 2024 poz. 996). Każda ściąga ma ramkę „Na jakiej podstawie”, a strona przedmiotu opisuje egzamin (termin, czas, punkty). Pełny wykaz źródeł i ograniczeń jest na stronie **Źródła** (`#/zrodla`, plik `js/dane/zrodla.js`).

W każdym dziale są:

- **🎓 Lekcja** – nauka krok po kroku: każdy krok ma grafikę (schemat, rysunek albo interaktywną animację), krótkie wyjaśnienie, ramkę „Zapamiętaj”, trik pamięciowy i pytanie sprawdzające. Interaktywne animacje: twierdzenie Pitagorasa, procenty (siatka 100 kratek), rzuty kostką, koło.
- **📖 Ściąga** – najważniejsza teoria, wzory i przykłady,
- **🃏 Fiszki** – karty do zapamiętywania (odwracane kliknięciem),
- **✅ Quiz** – pytania jednokrotnego wyboru z wyjaśnieniem odpowiedzi,
- **✍️ Zadania otwarte** (matematyka i polski) – zadania jak w arkuszu (2–3 pkt): rozwiązujesz na kartce, odsłaniasz podpowiedzi krok po kroku albo całe rozwiązanie (w polskim – przykładową odpowiedź), porównujesz z zasadami punktacji i oceniasz się sam.

Do tego:

- **📝 Test próbny** – 15 losowych pytań ze wszystkich działów przedmiotu,
- **✍️ Zadania otwarte z całego przedmiotu** – wszystkie zadania otwarte w losowej kolejności, z sumą punktów,
- **ćwiczenia jak na egzaminie** – zestawy „tekst + zadania” w formacie arkusza CKE:
  - 📰 **Czytanie ze zrozumieniem** (polski) – fragmenty lektur (w brzmieniu z arkuszy CKE) i teksty nieliterackie; zadania zamknięte, z luką i otwarte z przykładową odpowiedzią,
  - 📖 **Reading**, 🎧 **Listening** (nagrania czyta syntezator mowy przeglądarki – bez plików audio; transkrypcja po sprawdzeniu) i 🧩 **Środki językowe** (luki, dobieranie, przekład, parafraza) z angielskiego,
- **pytania z rysunkiem** – w matematyce część pytań ma diagram, wykres, figurę, układ współrzędnych, termometr albo siatkę bryły,
- **🔁 Powtórka błędów** – pytania, na które uczeń odpowiedział źle, aż do skutku,
- **zapis postępu** – najlepszy wynik z każdego działu (zapisany w przeglądarce, bez kont i bez serwera).

Działa na telefonie i komputerze, ma tryb ciemny i obsługę z klawiatury (A–D / 1–4, Enter, strzałki).

## Jak uruchomić

Nic nie trzeba instalować – wystarczy otworzyć plik `index.html` w przeglądarce.

### Publikacja w internecie (GitHub Pages, za darmo)

1. W repozytorium na GitHubie: **Settings → Pages**.
2. *Source*: „Deploy from a branch”, wybierz gałąź i folder `/ (root)`.
3. Po chwili strona będzie dostępna pod adresem `https://<login>.github.io/Pomoc_w_szkole/`.

## Jak dodać pytania lub nowy przedmiot

Treści znajdują się w `js/dane/`. Każdy plik dodaje jeden przedmiot:

```js
window.SUBJECTS.push({
  id: 'biologia', name: 'Biologia', icon: '🧬', color: '#8e44ad',
  topics: [
    {
      id: 'genetyka',
      name: 'Genetyka',
      basis: 'Na jakim wymaganiu opiera się dział', // opcjonalne
      theory: `<h3>DNA</h3><p>…</p>`,          // HTML ściągi
      flashcards: [['Pytanie', 'Odpowiedź']],   // fiszki (opcjonalne)
      questions: [
        {
          id: 'k3x9qa',                         // stały, unikalny id (node tools/nowe-id.js)
          q: 'Treść pytania?',
          options: ['A', 'B', 'C', 'D'],
          answer: 0,                            // indeks poprawnej odpowiedzi (od 0)
          explain: 'Dlaczego tak.',             // wyjaśnienie (opcjonalne)
        },
      ],
      tasks: [                                  // zadania otwarte (opcjonalne)
        {
          id: 'p8d2mz',                         // stały, unikalny id – jak w pytaniach
          points: 2,                            // 1–5 punktów
          q: 'Treść zadania',
          svg: `<svg …>…</svg>`,                // rysunek (opcjonalny, zasady jak w lekcjach)
          steps: ['Krok 1…', 'Krok 2…'],        // rozwiązanie krok po kroku
          answer: 'Wynik',
          scoring: ['1 pkt – …', '2 pkt – …'],  // po jednej linii na każdy punkt
        },
      ],
    },
  ],
});
```

Nowy plik trzeba dopisać w stronie ścieżki (np. `egzamin.html`, `klasa4.html`) przed `js/app.js` – narzędzia w `tools/` biorą listę plików właśnie stamtąd.

**Przedmiot-odnośnik** – gdy przedmiot ma tę samą podstawę co w innej ścieżce, nie powielamy treści: `{ id, name, icon, color, link: { track: 'egzamin8', subject: 'polski' }, linkNote: 'krótki opis na kafelku', topics: [] }`. Kafelek na stronie głównej (i adres `#/s/<id>`) prowadzi do przedmiotu w tamtej ścieżce (np. polski, matematyka i angielski w klasie 8 → `egzamin.html`). `node tools/sprawdz-dane.js` sprawdza, czy taki przedmiot istnieje.

Pytanie może mieć rysunek: pole `svg` (zasady jak w lekcjach – `docs/LEKCJE.md`, sprawdza je `node tools/sprawdz-lekcje.js`).

### Czytanie na głos (ścieżki z `young: true` lub `speak: true` – klasa 3)

Przycisk 🔊 czyta tekst głosem syntezatora mowy przeglądarki – po polsku. Emoji są pomijane, a proste działania czytane słowami (`3 × 4 = 12` → „3 razy 4 równa się 12”). Gdy tekst trzeba przeczytać inaczej, niż jest napisany, służą pola (sprawdza je `node tools/sprawdz-dane.js`):

```js
{ id, q: 'Ile jabłek? 🍎🍎🍎', say: 'Ile jest jabłek na obrazku?',      // say – czytane zamiast q
  options: ['2', '3', '4'], answer: 1 }
{ id, q: 'Co znaczy „blue”?', say: ['Co znaczy słowo', ['blue', 'en'], '?'], // fragment [tekst, 'en'] czyta głos angielski
  options: ['niebieski', 'zielony'], answer: 0 }
{ id, q: 'Jak po angielsku jest „kot”?', optLang: 'en',                 // odpowiedzi czytane po angielsku
  options: ['cat', 'dog'], answer: 0 }
{ id, q: 'Który zegar pokazuje 3:00?', options: ['🕒', '🕘'], sayOptions: ['trzecia', 'dziewiąta'], answer: 0 } // czytane zamiast odpowiedzi
```

Dostępne języki: `pl`, `en`, `de` (niemiecki – np. `cardLang: ['de', 'pl']`, `<i lang="de">…</i>`). W dziale: `cardLang: ['en', 'pl']` – języki przodu i tyłu fiszek (domyślnie obie strony po polsku). Pola `say`, `optLang` i `sayOptions` działają też w zadaniach zamkniętych zestawów ćwiczeń i w pytaniach `check` lekcji. Pole `sayExplain` (jak `say`) jest czytane zamiast `explain` – w pytaniach quizu i w `check` lekcji, gdy wyjaśnienie zawiera słowa angielskie.

W tekstach HTML (ściąga `theory`, kroki lekcji: `text`, `remember`, `hook`) fragment po angielsku oznacz atrybutem `lang`: `<i lang="en">a cat</i>`, `<b lang="en">Good morning!</b>` – przeczyta go głos angielski. Nie zagnieżdżaj w nim elementu tego samego rodzaju i nie używaj `lang` wewnątrz SVG.

### Zestawy ćwiczeń (czytanie, reading, listening, środki językowe)

Pliki `js/dane/cwiczenia-*.js` dopisują zestawy do tablicy `window.EXERCISES` (nowy plik trzeba dodać w stronie ścieżki przed `js/app.js`):

```js
window.EXERCISES.push({
  subject: 'polski',                 // id przedmiotu
  mode: 'czytanie',                  // czytanie | reading | listening | srodki | dyktando (dyktando: items tylko type 'input' z polem say – tekst czyta syntezator; ścieżki young/speak)
  id: 'a1b2c3',                      // stałe id z node tools/nowe-id.js
  title: 'Tytuł zestawu', kind: 'Tekst literacki · epika',
  basis: 'Na jakim wymaganiu się opiera', source: 'Skąd pochodzi tekst',
  intro: 'Polecenie jak w arkuszu (opcjonalnie)',
  text: `<h3>…</h3><p>…</p>`,         // HTML tekstu; klasy: verse, who, stage, note, box, gapno
  audio: [{ label: 'Nagranie 1', voices: { A: 'f', B: 'm' }, lines: [{ who: 'A', text: '…' }] }], // tylko listening, zamiast text
  items: [
    { id, q, options, answer, explain },                       // zamknięte (opcje NIE są tasowane)
    { id, type: 'input', q, accept: ['…', '…'], explain },      // luka – porównanie bez wielkości liter; poza „srodki” także bez polskich znaków
    { id, type: 'open', points: 2, q, answer, scoring: ['…', '…'] }, // otwarte – samoocena
  ],
});
```

> ⚠️ Każde pytanie ma stały identyfikator `id` – powtórka błędów zapamiętuje pytania po nim. Pytania można przestawiać i usuwać, ale **nie zmieniaj `id` istniejących pytań**. Nowe id: `node tools/nowe-id.js`, sprawdzenie: `node tools/sprawdz-dane.js`.

## Struktura

```
index.html          – ekran wyboru ścieżki (+ przekierowanie dawnych adresów #/s/… do egzamin.html)
egzamin.html        – ścieżka „Egzamin ósmoklasisty”
klasa3.html, klasa4.html, klasa8.html – pozostałe ścieżki
css/style.css       – wygląd
js/sciezki.js       – lista ścieżek (nazwa, strona, klucz zapisu postępu)
js/wybor.js         – ekran wyboru ścieżki
js/app.js           – wspólny silnik (lekcje, quiz, fiszki, zadania otwarte, zestawy ćwiczeń, postęp)
js/dane/*.js        – treści ścieżki egzaminacyjnej (nowe ścieżki: js/dane/kl3/, kl4/, kl8/); cwiczenia-*.js – zestawy ćwiczeń jak na egzaminie
js/dane/zrodla.js   – opis podstaw i źródeł
js/lekcje/*.js      – lekcje (tryb nauki) i interaktywne widżety
docs/LEKCJE.md      – jak pisać lekcje
docs/SCIEZKI.md     – ścieżki: budowa, zasady, jak dodać treści
docs/PLAN.md        – plan rozbudowy ścieżki egzaminacyjnej zgodnie z podstawą programową
tools/              – sprawdzanie danych i lekcji, zrzuty ekranu, przegląd w przeglądarce (node tools/przeglad.js)
```
