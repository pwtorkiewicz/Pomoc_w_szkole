# Plan ścieżki „Klasa 3” (`kl3`, `klasa3.html`)

Cel: pomoc w nauce dla ucznia klasy 3 (edukacja wczesnoszkolna), zgodnie z podstawą programową obowiązującą klasę 3.

## Podstawa (sprawdzone 1.11.2026 w eli.gov.pl)

- W r. szk. 2026/2027 **i 2027/2028** klasa 3 uczy się według **dotychczasowej podstawy**: zał. nr 2 do rozporządzenia MEN z 14.02.2017 (Dz.U. 2017 poz. 356) w brzmieniu z **Dz.U. 2024 poz. 996** (zał. nr 1 – pełny tekst podstawy dla szkoły podstawowej), zmienionym Dz.U. 2025 poz. 378 i **2025 poz. 1052** (nowe brzmienie wychowania fizycznego). Podstawa prawna stosowania: § 4 ust. 2 rozporządzenia Dz.U. 2026 poz. 378 w brzmieniu z Dz.U. 2026 poz. 958. ELI oznacza akt z 2017 r. jako „uchylony”, ale § 4 ust. 2 nakazuje go dalej stosować w tych klasach.
  - PDF: https://eli.gov.pl/api/acts/DU/2024/996/text/O/D20240996.pdf · https://eli.gov.pl/api/acts/DU/2025/1052/text/O/D20251052.pdf
- **Od 2028/2029** klasa 3 przejdzie na nową podstawę (Dz.U. 2026 poz. 378) – inne obszary (np. „Edukacja artystyczna – plastyka i muzyka”, „Edukacja techniczna i informatyczna”). Wtedy trzeba przejrzeć ścieżkę.
- Podstawa **nie dzieli wymagań na klasy I, II, III** – to osiągnięcia na koniec klasy 3. W klasie 3 można więc ćwiczyć całość.
- Ramowy plan (Dz.U. 2026 poz. 1028, zał. nr 15): edukacja wczesnoszkolna 20 godz./tydz. (w tym WF 3 godz.), język obcy nowożytny – 2 godz., gdy prowadzi go inny nauczyciel.

## Obszary (edukacje) i priorytet w aplikacji

| Obszar w podstawie | Działy wymagań | Priorytet |
|---|---|---|
| I. Edukacja polonistyczna | 1. słuchanie · 2. mówienie · 3. czytanie · 4. pisanie · 5. kształcenie językowe · 6. samokształcenie | A |
| II. Edukacja matematyczna | 1. stosunki przestrzenne i cechy wielkościowe · 2. liczby i ich własności · 3. posługiwanie się liczbami · 4. czytanie tekstów matematycznych · 5. pojęcia geometryczne · 6. matematyka w sytuacjach życiowych | A |
| X. Edukacja językowa – język obcy nowożytny (angielski) | wymagania 1–11 (podstawowy zasób środków językowych, rozumienie, wypowiedzi, reagowanie…) | A |
| IV. Edukacja przyrodnicza | 1. środowisko przyrodnicze · 2. funkcje życiowe człowieka, zdrowie, bezpieczeństwo · 3. przestrzeń geograficzna | A |
| III. Edukacja społeczna | 1. środowisko społeczne · 2. orientacja w czasie historycznym | B |
| VII. Edukacja informatyczna | 5 działów (problemy, programowanie, posługiwanie się komputerem, kompetencje społeczne, bezpieczeństwo) | B |
| VI. Edukacja techniczna | organizacja pracy, informacja techniczna i materiały, narzędzia i urządzenia | C – tylko wiedza (np. bezpieczeństwo, ruch drogowy, jeśli jest w wymaganiach) |
| VIII. Edukacja muzyczna | słuchanie, śpiew, rytmika, gra, zapis dźwięku | C – tylko wiedza |
| V. Edukacja plastyczna | percepcja, ekspresja, recepcja sztuk | C – tylko wiedza |
| IX. Wychowanie fizyczne | profilaktyka zdrowia i bezpieczeństwa, sprawność, gry | C – tylko zasady bezpieczeństwa i zdrowia |

Pomijamy: XI–XII (język mniejszości, kaszubski), XIII etykę (zajęcia nieobowiązkowe).

## Forma dla 8–9-latka

- Bardzo krótkie zdania, dużo obrazków (SVG), mało tekstu na ekranie.
- **Odsłuchanie polecenia** (przycisk 🔊, synteza mowy przeglądarki – jak w listeningu) – do dodania w silniku dla tej ścieżki.
- Krótkie quizy (5–8 pytań), gwiazdki za wynik zamiast procentów; bez „testu próbnego”.
- Nowe widżety: zegar (odczytywanie godzin), tabliczka mnożenia, monety i banknoty, kalendarz.
- Dyktando ze słuchu (ortografia: ó/u, rz/ż, ch/h) – zestaw ćwiczeń z polem do wpisania.

## Etapy

- [x] Etap 1: silnik – tryb dla młodszego ucznia (`young: true` w `js/sciezki.js`, opis pól w README i `docs/SCIEZKI.md`):
  - większe litery i przyciski (klasa `young` na `<body>`, `css/style.css`);
  - przycisk 🔊 „Posłuchaj” przy pytaniu i wyjaśnieniu w quizie, przy kroku i pytaniu lekcji, przy ściądze, fiszce, zadaniu z zestawu i zadaniu otwartym; synteza mowy przeglądarki, głos polski, a fragmenty po angielsku – głos angielski (pola `say`, `optLang`, `sayOptions` w pytaniu, `cardLang` w dziale); proste działania czytane słowami (3 × 4 = 12 → „3 razy 4 równa się 12”), emoji pomijane;
  - przełącznik „🔊 Czytanie na głos” na stronie głównej ścieżki (zapisywany w postępie): pytania, wyjaśnienia, kroki lekcji i fiszki czytają się same;
  - quiz w dziale: 8 losowych pytań (przy „Jeszcze raz” – nowe losowanie), powtórka błędów też po 8;
  - gwiazdki ★★★ zamiast procentów (7–8/8 = 3, 5–6/8 = 2, 2–4/8 = 1; liczone z zapisanego wyniku w %, więc format zapisu się nie zmienia), na stronie głównej i przedmiotu „★ N z M gwiazdek”;
  - bez sprawdzianu z całego przedmiotu (adres `#/s/<przedmiot>/egzamin` prowadzi na stronę przedmiotu).
  - Ścieżka zostaje oznaczona „w przygotowaniu” do etapu 2 (pierwsze treści). Silnik sprawdzono na danych próbnych (bez zapisywania ich w repozytorium).
- [x] Etap 2: edukacja matematyczna i polonistyczna; widżety i dyktando ze słuchu.
  - Silnik: tryb ćwiczeń `dyktando` (zadania `type: 'input'` z polem `say` – tekst czyta syntezator, porównanie z wielkością liter i polskimi znakami; lista „Dla rodzica”, gdy przeglądarka nie czyta na głos); jednostki po liczbie czytane pełnym słowem w dobrej formie (5 cm → „5 centymetrów”).
  - Widżety (`js/lekcje/widgety.js`): `zegar` (wskazówki + zegar elektroniczny 24 h), `tabliczka` (rzędy kropek, mnożenie i dzielenie), `monety` (odliczanie kwoty, parametr `cel` w groszach), `kalendarz` (miesiąc, dzień tygodnia, zapis daty, miesiąc cyframi rzymskimi).
  - Matematyka (7 działów, 68 fiszek, 114 pytań – w tym 8 z rysunkiem, 35 kroków lekcji): liczby do 1000 i dalej (II.2.1–4); dodawanie i odejmowanie (II.3.1–4); mnożenie i dzielenie (II.3.1, 3.3–4); zadania z treścią (II.4.1); figury i mierzenie (II.5.1–4, II.1.3); zegar i kalendarz (II.6.4); pieniądze, waga, płyny, połowa i ćwierć, termometr (II.6.2–3, 6.5–7).
  - Polski (7 działów, 66 fiszek, 112 pytań – w tym 2 z rysunkiem, 35 kroków lekcji, 4 dyktanda po 8 zadań): głoski, litery i alfabet (I.5.1, I.4.6); ó/u, rz/ż, ch/h (I.4.4); zdanie i znaki na końcu, przecinek przy wyliczaniu (I.5.1–3, 5.6, I.4.5); wielka litera i skróty, zapis liczebników (I.4.8, 4.5, 4.7); rzeczownik, czasownik, przymiotnik (I.5.4); wyrazy przeciwne, bliskoznaczne i pokrewne (I.5.5); wiersz, opowiadanie, list, zaproszenie, życzenia, ogłoszenie, adres (I.5.7, I.4.3, 4.9, I.3.3, 3.6). Dyktanda: ó i u, rz i ż, ch i h, wielka litera (zdania). Przykładowe teksty napisane samodzielnie; bez opisu treści lektur.
  - Do potwierdzenia, gdy będzie dostęp do sjp.pwn.pl (z sesji zablokowany): przykłady reguł pisowni (wymiany ż: wozić – wożę, wysoki – wyższy, pieniądze – pieniężny, druh – drużyna; wyjątki pszczoła, pszenica; „druh” jako wyjątek od ch na końcu). To podstawowe reguły szkolne, ale nie zostały sprawdzone w źródle.
  - Nie ma jeszcze: II.1.1–2 (położenie przedmiotów, porównywanie i klasyfikacja), II.4.2 i II.6.8–9 (układanie zadań, gry – to aktywności poza aplikacją), polonistyka I.1–I.2 i I.3.1–2, 3.4–5, 3.7 (słuchanie, mówienie, czytanie na głos – poza aplikacją).
  - Fakty sprawdzone 1.11.2026: tekst podstawy (eli.gov.pl, Dz.U. 2024 poz. 996; zmiana Dz.U. 2025 poz. 378 nie dotyczy kl. I–III). Nominały banknotów (10–500 zł) potwierdzone w materiałach NBP przez wyszukiwarkę; strona nbp.pl jest niedostępna z sesji – listę monet (1, 2, 5, 10, 20, 50 gr, 1, 2, 5 zł) warto jeszcze potwierdzić na nbp.pl.
- [ ] Etap 3: angielski i edukacja przyrodnicza.
- [ ] Etap 4: edukacja społeczna, informatyczna; wiedza z edukacji technicznej, muzycznej, plastycznej i WF; uzupełnienie strony „Źródła” (`js/dane/kl3/zrodla.js` – powstała w etapie 2).
