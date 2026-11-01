# Ścieżki nauki

Aplikacja ma kilka **ścieżek** – każda dla innej klasy albo celu. Uczeń wybiera ścieżkę na ekranie startowym (`index.html`). Wszystkie ścieżki korzystają z tego samego silnika (`js/app.js`: lekcje, ściągi, fiszki, quiz, zadania otwarte, zestawy ćwiczeń, powtórka błędów), ale mają **osobne treści, osobne zasady merytoryczne i osobny zapis postępu**.

| id | Strona | Dla kogo | Treści |
|---|---|---|---|
| `kl3` | `klasa3.html` | uczeń klasy 3 (8–9 lat) | `js/dane/kl3/`, `js/lekcje/kl3/` |
| `kl4` | `klasa4.html` | uczeń klasy 4 (9–10 lat) | `js/dane/kl4/`, `js/lekcje/kl4/` |
| `kl8` | `klasa8.html` | uczeń klasy 8 – bieżąca nauka wszystkich przedmiotów | `js/dane/kl8/`, `js/lekcje/kl8/` |
| `egzamin8` | `egzamin.html` | ósmoklasista przed egzaminem (polski, matematyka, angielski) | `js/dane/*.js`, `js/lekcje/*.js` (bez podkatalogów) |

## Jak to działa

- `js/sciezki.js` – lista ścieżek: `id`, `page`, `name`, `icon`, `about`, `color`, `storeKey`, opcjonalnie `exam` (nazewnictwo egzaminacyjne: „Test próbny”, „Ćwiczenia jak na egzaminie”), `intro` (tekst na stronie głównej ścieżki), `soon` (znaczek „w przygotowaniu” na ekranie wyboru).
- Strona ścieżki ma `<body data-track="id">` i wczytuje **tylko swoje** pliki: najpierw `js/sciezki.js`, potem dane (`js/dane/…`), źródła, lekcje, na końcu `js/app.js`. Kolejność `<script>` ma znaczenie.
- **Zapis postępu**: `localStorage[storeKey]`. Ścieżka egzaminacyjna zachowuje dawny klucz `pomoc8_v2`. **Nie zmieniaj `storeKey` istniejącej ścieżki** – uczeń straciłby wyniki. Ostatnio wybrana ścieżka (`pomoc_sciezka`) jest tylko podświetlana na ekranie wyboru – bez automatycznego przekierowania, bo z jednego urządzenia mogą korzystać dzieci z różnych klas.
- **Adresy**: wewnątrz ścieżki jak dotąd (`#/s/<przedmiot>/t/<dział>/<zakładka>`, `#/powtorka`, `#/zrodla`). Dawne adresy `index.html#/s/…` przekierowują do `egzamin.html`.
- **Id przedmiotów** mogą się powtarzać między ścieżkami (każda może mieć `matematyka`), bo ścieżki mają osobne strony i osobny zapis. **Id pytań, zadań i zestawów muszą być unikalne w całej aplikacji** – `node tools/nowe-id.js` i `node tools/sprawdz-dane.js` sprawdzają wszystkie ścieżki.
- Strona „Źródła” ścieżki: plik `js/dane/<ścieżka>/zrodla.js` ustawiający `window.SOURCES` (jak `js/dane/zrodla.js` w ścieżce egzaminacyjnej).

## Jak dodać treści do ścieżki

1. Utwórz plik `js/dane/<ścieżka>/<przedmiot>.js` w formacie z README (`window.SUBJECTS.push({...})`), każdy dział z polem `basis` (numer wymagania podstawy obowiązującej **tę** klasę).
2. Dopisz `<script src="js/dane/<ścieżka>/<przedmiot>.js"></script>` w stronie ścieżki przed `js/app.js` (narzędzia biorą listę plików ze strony).
3. Lekcje: `js/lekcje/<ścieżka>/<przedmiot>.js` (format: `docs/LEKCJE.md`); jeśli korzystają z widżetów, strona musi wczytać `js/lekcje/widgety.js`.
4. Źródła: `js/dane/<ścieżka>/zrodla.js`.
5. Gdy ścieżka ma pierwsze materiały, usuń `soon: true` w `js/sciezki.js` i zaktualizuj tabelę w README.
6. Sprawdzenie: `node tools/sprawdz-dane.js`, `node tools/sprawdz-lekcje.js <ścieżka>`, `node tools/przeglad.js <ścieżka>`.

## Zasady merytoryczne ścieżek

Każda ścieżka opiera się **wyłącznie na podstawie programowej obowiązującej daną klasę** w bieżącym roku szkolnym (a ścieżka egzaminacyjna – także na informatorach CKE). Klasy w r. szk. 2026/2027 uczą się według **różnych podstaw** (reforma „Kompas Jutra” wchodzi stopniowo), dlatego **nie kopiujemy treści między ścieżkami** – np. dział z ułamkami z klasy 4 nie może być kopią działu ze ścieżki egzaminacyjnej. Plany ścieżek (z analizą podstaw) powstaną w `docs/PLAN-kl3.md`, `docs/PLAN-kl4.md`, `docs/PLAN-kl8.md`; ścieżka egzaminacyjna: `docs/PLAN.md`.

Ton i forma:

- **Klasa 3** – bardzo krótkie zdania, dużo obrazków (SVG), mało tekstu na ekranie, krótkie quizy; polecenia można odsłuchać (synteza mowy przeglądarki – jak w listeningu). Ciepło i zachęcająco.
- **Klasa 4** – proste wyjaśnienia, przykłady z życia, każdy nowy termin wyjaśniony.
- **Klasa 8** i **egzamin** – „na ty”, krótko, przyjaźnie i nowocześnie, bez infantylizmu.
