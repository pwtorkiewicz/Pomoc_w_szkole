# 🎒 Pomoc w szkole – klasa 8

Pomoc naukowa dla ucznia 8 klasy szkoły podstawowej, pomyślana jako przygotowanie do egzaminu ósmoklasisty.

**Przedmioty:** język polski, matematyka, język angielski. Razem 31 działów i 322 pytania.

**Podstawa:** treści sprawdzono 31.10.2026 w oryginalnych dokumentach CKE: informatorach o egzaminie ósmoklasisty od r. szk. 2024/2025 (polski, matematyka, angielski) oraz komunikatach CKE na 2027 r., a także w tekście podstawy programowej (Dz.U. 2024 poz. 996, eli.gov.pl). Według informatorów egzamin sprawdza podstawę programową z rozporządzenia z 28.06.2024 (Dz.U. 2024 poz. 996). Każda ściąga ma ramkę „Na jakiej podstawie”, a strona przedmiotu opisuje egzamin (termin, czas, punkty). Pełny wykaz źródeł i ograniczeń jest na stronie **Źródła** (`#/zrodla`, plik `js/dane/zrodla.js`).

W każdym dziale są:

- **🎓 Lekcja** – nauka krok po kroku: każdy krok ma grafikę (schemat, rysunek albo interaktywną animację), krótkie wyjaśnienie, ramkę „Zapamiętaj”, trik pamięciowy i pytanie sprawdzające. Interaktywne animacje: twierdzenie Pitagorasa, procenty (siatka 100 kratek), rzuty kostką, koło.
- **📖 Ściąga** – najważniejsza teoria, wzory i przykłady,
- **🃏 Fiszki** – karty do zapamiętywania (odwracane kliknięciem),
- **✅ Quiz** – pytania jednokrotnego wyboru z wyjaśnieniem odpowiedzi.

Do tego:

- **📝 Test próbny** – 15 losowych pytań ze wszystkich działów przedmiotu,
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
          q: 'Treść pytania?',
          options: ['A', 'B', 'C', 'D'],
          answer: 0,                            // indeks poprawnej odpowiedzi (od 0)
          explain: 'Dlaczego tak.',             // wyjaśnienie (opcjonalne)
        },
      ],
    },
  ],
});
```

Nowy plik trzeba dopisać w `index.html` (przed `js/app.js`).

> ⚠️ Kolejność pytań w działach nie ma znaczenia, ale **nie zmieniaj kolejności istniejących pytań**, bo lista błędów do powtórki zapamiętuje pytania po ich numerze.

## Struktura

```
index.html          – strona
css/style.css       – wygląd
js/app.js           – logika (quiz, fiszki, postęp)
js/dane/*.js        – treści przedmiotów
js/dane/zrodla.js   – opis podstaw i źródeł
js/lekcje/*.js      – lekcje (tryb nauki) i interaktywne widżety
docs/LEKCJE.md      – jak pisać lekcje
tools/              – sprawdzanie lekcji (node tools/sprawdz-lekcje.js) i zrzuty ekranu
```
