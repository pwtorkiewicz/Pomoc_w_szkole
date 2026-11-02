# CLAUDE.md – Pomoc w szkole

Statyczna aplikacja do nauki dla uczniów szkoły podstawowej w Polsce. Czysty HTML/CSS/JS, bez serwera, bez kroku budowania i bez zależności. Użytkownikiem repozytorium jest rodzic; z aplikacji mogą korzystać także inne dzieci.

Aplikacja ma **ścieżki** (opis: `docs/SCIEZKI.md`), wybierane na ekranie startowym:

| Ścieżka | Strona | Odbiorca | Podstawa programowa (r. szk. 2026/2027) | Plan |
|---|---|---|---|---|
| `egzamin8` | `egzamin.html` | ósmoklasista przed **egzaminem** (polski, matematyka, angielski) | Dz.U. 2024 poz. 996 + informatory CKE | `docs/PLAN.md` |
| `kl8` | `klasa8.html` | uczeń klasy 8 – wszystkie przedmioty | Dz.U. 2024 poz. 996 (stara) | `docs/PLAN-kl8.md` |
| `kl4` | `klasa4.html` | uczeń klasy 4 – wszystkie przedmioty | **nowa: Dz.U. 2026 poz. 378** (zm. 2026 poz. 958) | `docs/PLAN-kl4.md` |
| `kl3` | `klasa3.html` | uczeń klasy 3 – edukacja wczesnoszkolna | Dz.U. 2024 poz. 996 (stara, I etap) | `docs/PLAN-kl3.md` |

**Edukacji zdrowotnej (także „zdrowie seksualne”), etyki i religii nie dodajemy w żadnej ścieżce** – decyzja rodzica. Wyjątek (decyzja rodzica, 2.11.2026): w przyrodzie kl. 4 dodajemy tematy z podręcznika – czas przed ekranem, ochrona przed chorobami, szkodliwość dymu tytoniowego i alkoholu – ale **bez dojrzewania** (lekcji „Jak zmieniamy się w ciągu życia?” nie dodajemy).

Ścieżka egzaminacyjna jest dopracowana – utrzymuj ją i rozwijaj; zmiany w silniku nie mogą jej zepsuć (zawsze `node tools/przeglad.js egzamin8`).

## Komunikacja

- Odpowiadaj użytkownikowi **po polsku**.
- Wszystkie treści w aplikacji są po polsku (w angielskim: wyjaśnienia po polsku, przykłady po angielsku).
- Do ucznia zwracamy się na „ty”. Klasa 8 i egzamin: krótko, przyjaźnie i nowocześnie, bez infantylizmu. Klasa 4: proste wyjaśnienia, każdy nowy termin objaśniony. Klasa 3: bardzo krótkie zdania, dużo obrazków, ciepło i zachęcająco.

## Struktura

```
index.html              – ekran wyboru ścieżki (js/wybor.js); dawne adresy #/s/… przekierowuje do egzamin.html
egzamin.html, klasa3.html, klasa4.html, klasa8.html – strony ścieżek; kolejność <script> ma znaczenie
                          (sciezki.js → dane → lekcje → app.js); narzędzia biorą listę plików danych stąd
js/sciezki.js           – lista ścieżek; storeKey = klucz zapisu postępu (NIGDY nie zmieniaj istniejącego)
css/style.css           – wygląd; tokeny kolorów, tryb ciemny przez prefers-color-scheme
js/app.js               – wspólny silnik: router (#/…), quiz, fiszki, lekcje, zapis postępu w localStorage
js/dane/kl3|kl4|kl8/    – treści pozostałych ścieżek (ten sam format); js/lekcje/kl3|kl4|kl8/ – ich lekcje
js/dane/<przedmiot>.js  – (ścieżka egzaminacyjna) działy: theory (HTML ściągi), flashcards, questions, basis
js/dane/cwiczenia-*.js  – zestawy „tekst/nagranie + zadania” (window.EXERCISES): czytanie (polski), reading, listening, środki (angielski)
js/dane/zrodla.js       – strona „Źródła”: podstawy prawne, dokumenty, ograniczenia
js/lekcje/*.js          – lekcje „🎓 Lekcja” (window.LESSONS['<przedmiot>/<dział>'])
js/lekcje/widgety.js    – interaktywne widżety: pitagoras, procent, kostka, kolo
docs/LEKCJE.md          – format i zasady pisania lekcji (obowiązkowa lektura przed edycją lekcji)
docs/SCIEZKI.md         – ścieżki: budowa, zapis postępu, jak dodać treści
docs/PLAN.md            – plan ścieżki egzaminacyjnej; docs/PLAN-kl3|kl4|kl8.md – plany ścieżek z analizą podstaw; odhaczaj wykonane punkty
tools/                  – sprawdzarka lekcji i zrzuty ekranu (Playwright)
```

Uruchomienie: otwórz `index.html` w przeglądarce (albo od razu stronę ścieżki). Publikacja: GitHub Pages z tej gałęzi (`https://pwtorkiewicz.github.io/Pomoc_w_szkole/`).

## Zasady merytoryczne (najważniejsze)

0. **Każda ścieżka ma swoją podstawę programową** (tabela wyżej, szczegóły i adresy w planach ścieżek). Klasy w r. szk. 2026/2027 uczą się według różnych podstaw: nowa podstawa (Dz.U. 2026 poz. 378, zm. poz. 958) obejmuje od 2026/2027 klasy I i IV i co rok kolejne klasy; klasy II, III i V–VIII uczą się według dotychczasowej (Dz.U. 2024 poz. 996) – § 4 rozporządzenia 2026 poz. 378. **Nie kopiuj treści między ścieżkami o różnych podstawach** (np. ułamki z egzaminu ≠ ułamki w klasie 4). Polski, matematykę i angielski w ścieżce `kl8` pokrywa ścieżka egzaminacyjna (ta sama podstawa) – nie powielaj ich. W nowej podstawie wymagania są dla bloku kl. IV–VI: to, co trafia do „klasy 4”, jest decyzją redakcyjną – opisz ją w `basis`.
1. **Ścieżka egzaminacyjna – jedyne źródła zakresu materiału:**
   - podstawa programowa – rozporządzenie MEN z 28.06.2024, **Dz.U. 2024 poz. 996** (eli.gov.pl),
   - **informatory CKE** o egzaminie ósmoklasisty od r. szk. 2024/2025 i komunikaty CKE (cke.gov.pl).
   Obecni ósmoklasiści (egzamin maj 2027) uczą się według podstawy z 2024 r. – nowa podstawa (Dz.U. 2026 poz. 378) ich nie obejmuje.
2. **Ścieżka egzaminacyjna – nie dodawaj materiału spoza egzaminu.** Celowo usunięte / niedozwolone (w ścieżce `kl8` wolno dodać to, co jest w podstawie, np. dział XV „Symetrie”):
   - matematyka: potęgi o wykładniku 0 i ujemnym (poza notacją wykładniczą), twierdzenie odwrotne do twierdzenia Pitagorasa (sprawdzanie, czy trójkąt jest prostokątny), mediana, dominanta, reguła mnożenia w kombinatoryce (zliczamy przez wypisanie), wzór na sumę kątów n-kąta, dział XV „Symetrie” z kl. VII–VIII (wolno go realizować po egzaminie; zostaje tylko symetria osiowa figur z kl. IV–VI);
   - angielski: tylko struktury z listy CKE – m.in. zdania warunkowe **wyłącznie typu 0 i I** (bez „If I were…”); 13 tematów słownictwa z podstawy;
   - polski: lista lektur zgodna z informatorem CKE (bez „Skąpca” i „Kamizelki”; treny tylko VII i VIII).
3. **Nie pisz faktów z pamięci** (dotyczy wszystkich ścieżek), zwłaszcza o lekturach (postacie, wydarzenia, cytaty), terminach i punktacji egzaminu. Sprawdzaj w dokumentach CKE / podstawie. Gdy nie da się potwierdzić – pomiń albo wyraźnie oznacz jako niepewne i powiedz o tym użytkownikowi.
4. Każde obliczenie w pytaniach i lekcjach przelicz dwukrotnie. Każde pytanie ma **dokładnie jedną** poprawną odpowiedź (uwaga na pytania o akcent, styl, gatunek – łatwo o dwie dobre).
5. Każdy dział ma pole `basis` – na jakim wymaganiu podstawy (podaj akt, np. „Dz.U. 2026 poz. 378, przyroda kl. IV–VI, dz. 2”) lub dokumencie CKE się opiera. Przy nowych działach je uzupełniaj, a po zmianach w zakresie zaktualizuj stronę „Źródła” ścieżki (`js/dane/zrodla.js` w egzaminie, `js/dane/<ścieżka>/zrodla.js` w pozostałych).

## Zasady techniczne

- Każde pytanie ma **stałe pole `id`** (losowe, unikalne w całej aplikacji – we wszystkich ścieżkach). Postęp i „Powtórka błędów” zapamiętują pytania po `id`, więc pytania można przestawiać i usuwać, ale **nigdy nie zmieniaj `id` istniejącego pytania** i nie używaj go ponownie. Nowe pytanie = nowe id z `node tools/nowe-id.js`.
- Format pytania: `{ id, q, options, answer, explain }` – `explain` zawsze (po złej odpowiedzi uczeń ma wiedzieć, dlaczego). Błędne odpowiedzi podobnej długości i budowy co poprawna – uczeń nie może trafiać, wybierając najdłuższą; dla prawda/fałsz: `options: ['Prawda', 'Fałsz'], noShuffle: true`.
- Pytanie z rysunkiem: pole `svg` (zasady jak w lekcjach; sprawdza `node tools/sprawdz-lekcje.js`).
- Klasa 3 (`young: true`): pytania czyta przycisk 🔊 – gdy tekst ma symbole, obrazki albo słowa angielskie, dodaj `say` / `optLang` / `sayOptions` (dział: `cardLang`); format w README („Czytanie na głos”).
- Zestaw ćwiczeń (`window.EXERCISES`, format w README): zadania zamknięte (opcje nie są tasowane – rozkładaj poprawne odpowiedzi na różne litery), `type: 'input'` z listą `accept` (wszystkie poprawne warianty), `type: 'open'` z przykładową odpowiedzią i `scoring`. Id zestawu i zadań z tej samej puli co pytania. Fragmenty lektur tylko z domeny publicznej i w sprawdzonym brzmieniu (np. z arkusza CKE – podaj źródło w `source`); teksty nieliterackie piszemy sami. Zadania piszemy sami, nie kopiujemy zadań CKE.
- Zadanie otwarte (pole `tasks` działu): `{ id, points, q, svg?, steps, answer, scoring }` – id z tej samej puli co pytania, `scoring` ma tyle linii, ile punktów. Wynik zadania sprawdź podstawieniem, a punktację opisz jako orientacyjną (nie są to oficjalne zasady CKE).
- Lekcje pisz według `docs/LEKCJE.md`: 4–6 kroków, każdy z grafiką (SVG albo widżet), SVG tylko z klasami CSS (bez kolorów na sztywno – tryb ciemny), `viewBox` szerokości 300–440, `aria-label`, unikalne id markerów.
- Bez zewnętrznych bibliotek i bez kroku budowania. Aplikacja ma działać po otwarciu pliku i na telefonie (szerokość ok. 400 px).

## Sprawdzanie przed commitem

```
node tools/sprawdz-dane.js [ścieżka]                 # pytania we wszystkich ścieżkach: unikalne id, poprawne indeksy odpowiedzi
node tools/jakosc-pytan.js [ścieżka[/przedmiot]] [-v] # podpowiedzi: poprawna odpowiedź wyraźnie najdłuższa (cel: wyraźnie najdłuższa ≤ 15%, zawsze najdłuższa ≤ 40%), pytania bez explain
node tools/sprawdz-lekcje.js [ścieżka[/przedmiot] | przedmiot]   # lekcje: struktura, XML SVG, napisy poza kadrem/nachodzące, błędy JS
node tools/zrzut.js <[ścieżka/]przedmiot/dział> <krok> <plik.png> [dark] [420]   # podgląd kroku lekcji (bez ścieżki – egzamin)
node tools/przeglad.js [ścieżka]                     # ekran wyboru + wszystkie widoki i zestawy ścieżek (jasny/ciemny, 420 px): błędy JS, poziome przewijanie
```

Po zmianach w danych lub `app.js` przejdź aplikację w przeglądarce (Playwright jest zainstalowany): ekran wyboru, strona główna ścieżki, dział (lekcja, ściąga, fiszki, quiz), test próbny, powtórka błędów, strona `#/zrodla` – bez błędów w konsoli, także w trybie ciemnym i na szerokości 420 px.

## Git

- Pracuj na wskazanej gałęzi; commity opisuj po polsku, rzeczowo (co i dlaczego).
- Nie twórz pull requestów, jeśli użytkownik o to nie prosi.
