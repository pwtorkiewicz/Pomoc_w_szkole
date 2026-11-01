# CLAUDE.md – Pomoc w szkole (klasa 8)

Statyczna aplikacja do nauki dla ucznia 8 klasy szkoły podstawowej w Polsce, przygotowująca do **egzaminu ósmoklasisty** (polski, matematyka, angielski). Czysty HTML/CSS/JS, bez serwera, bez kroku budowania i bez zależności. Odbiorcą treści jest 14-latek, użytkownikiem repozytorium – rodzic.

## Komunikacja

- Odpowiadaj użytkownikowi **po polsku**.
- Wszystkie treści w aplikacji są po polsku (w angielskim: wyjaśnienia po polsku, przykłady po angielsku).
- Do ucznia zwracamy się na „ty”, krótko, przyjaźnie i nowocześnie, bez infantylizmu.

## Struktura

```
index.html              – strona; kolejność <script> ma znaczenie (dane → lekcje → app.js)
css/style.css           – wygląd; tokeny kolorów, tryb ciemny przez prefers-color-scheme
js/app.js               – router (#/…), quiz, fiszki, lekcje, zapis postępu w localStorage
js/dane/<przedmiot>.js  – działy: theory (HTML ściągi), flashcards, questions, basis
js/dane/zrodla.js       – strona „Źródła”: podstawy prawne, dokumenty, ograniczenia
js/lekcje/*.js          – lekcje „🎓 Lekcja” (window.LESSONS['<przedmiot>/<dział>'])
js/lekcje/widgety.js    – interaktywne widżety: pitagoras, procent, kostka, kolo
docs/LEKCJE.md          – format i zasady pisania lekcji (obowiązkowa lektura przed edycją lekcji)
tools/                  – sprawdzarka lekcji i zrzuty ekranu (Playwright)
```

Uruchomienie: otwórz `index.html` w przeglądarce. Publikacja: GitHub Pages z tej gałęzi (`https://pwtorkiewicz.github.io/Pomoc_w_szkole/`).

## Zasady merytoryczne (najważniejsze)

1. **Jedyne źródła zakresu materiału:**
   - podstawa programowa – rozporządzenie MEN z 28.06.2024, **Dz.U. 2024 poz. 996** (eli.gov.pl),
   - **informatory CKE** o egzaminie ósmoklasisty od r. szk. 2024/2025 i komunikaty CKE (cke.gov.pl).
   Obecni ósmoklasiści (egzamin maj 2027) uczą się według podstawy z 2024 r. – reforma „Kompas Jutra” ich nie obejmuje.
2. **Nie dodawaj materiału spoza egzaminu.** Celowo usunięte / niedozwolone:
   - matematyka: potęgi o wykładniku 0 i ujemnym (poza notacją wykładniczą), mediana, dominanta, reguła mnożenia w kombinatoryce (zliczamy przez wypisanie), wzór na sumę kątów n-kąta, dział XV „Symetrie” z kl. VII–VIII (wolno go realizować po egzaminie; zostaje tylko symetria osiowa figur z kl. IV–VI);
   - angielski: tylko struktury z listy CKE – m.in. zdania warunkowe **wyłącznie typu 0 i I** (bez „If I were…”); 13 tematów słownictwa z podstawy;
   - polski: lista lektur zgodna z informatorem CKE (bez „Skąpca” i „Kamizelki”; treny tylko VII i VIII).
3. **Nie pisz faktów z pamięci**, zwłaszcza o lekturach (postacie, wydarzenia, cytaty), terminach i punktacji egzaminu. Sprawdzaj w dokumentach CKE / podstawie. Gdy nie da się potwierdzić – pomiń albo wyraźnie oznacz jako niepewne i powiedz o tym użytkownikowi.
4. Każde obliczenie w pytaniach i lekcjach przelicz dwukrotnie. Każde pytanie ma **dokładnie jedną** poprawną odpowiedź (uwaga na pytania o akcent, styl, gatunek – łatwo o dwie dobre).
5. Każdy dział ma pole `basis` – na jakim wymaganiu podstawy lub dokumencie CKE się opiera. Przy nowych działach je uzupełniaj, a po zmianach w zakresie zaktualizuj `js/dane/zrodla.js`.

## Zasady techniczne

- **Nie zmieniaj kolejności ani nie usuwaj istniejących pytań** w `questions` bez potrzeby – postęp i „Powtórka błędów” zapamiętują pytania po indeksie (`przedmiot/dział/indeks`). Nowe pytania dopisuj na końcu. Jeśli przebudowa jest konieczna, podbij `STORE_KEY` w `js/app.js`.
- Format pytania: `{ q, options, answer, explain }`; dla prawda/fałsz: `options: ['Prawda', 'Fałsz'], noShuffle: true`.
- Lekcje pisz według `docs/LEKCJE.md`: 4–6 kroków, każdy z grafiką (SVG albo widżet), SVG tylko z klasami CSS (bez kolorów na sztywno – tryb ciemny), `viewBox` szerokości 300–440, `aria-label`, unikalne id markerów.
- Bez zewnętrznych bibliotek i bez kroku budowania. Aplikacja ma działać po otwarciu pliku i na telefonie (szerokość ok. 400 px).

## Sprawdzanie przed commitem

```
node tools/sprawdz-lekcje.js [przedmiot]     # lekcje: struktura, XML SVG, napisy poza kadrem/nachodzące, błędy JS
node tools/zrzut.js <przedmiot/dział> <krok> <plik.png> [dark] [420]   # podgląd kroku lekcji
```

Po zmianach w danych lub `app.js` przejdź aplikację w przeglądarce (Playwright jest zainstalowany): strona główna, dział (lekcja, ściąga, fiszki, quiz), test próbny, powtórka błędów, strona `#/zrodla` – bez błędów w konsoli, także w trybie ciemnym i na szerokości 420 px.

## Git

- Pracuj na wskazanej gałęzi; commity opisuj po polsku, rzeczowo (co i dlaczego).
- Nie twórz pull requestów, jeśli użytkownik o to nie prosi.
