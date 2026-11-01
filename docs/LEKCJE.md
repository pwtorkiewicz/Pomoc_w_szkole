# Jak pisać lekcje (tryb „🎓 Lekcja”)

Lekcja to kilka kroków, które w przystępny i obrazowy sposób tłumaczą jeden dział. Uczeń przechodzi krok po kroku: grafika → krótkie wyjaśnienie → „Zapamiętaj” → trik pamięciowy → mini-pytanie.
Zasada: **jeden obraz mówi więcej niż tysiąc słów** – każdy krok ma grafikę, a grafika ma pokazywać istotę zagadnienia (mechanizm, porównanie, schemat), a nie być ozdobą.

Wzór: `js/lekcje/matematyka.js` → `matematyka/geometria`. Obejrzyj go przed pisaniem.

## Format

```js
window.LESSONS = window.LESSONS || {};
window.LESSONS['<przedmiot>/<id działu>'] = [
  {
    title: 'Krótki, ciekawy tytuł kroku',          // może zawierać proste HTML
    svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Opis rysunku">…</svg>`, // albo widget
    widget: { type: 'pitagoras', a: 3, b: 4 },     // zamiast svg (opcjonalnie)
    text: `<p>2–4 krótkie zdania wyjaśnienia.</p>`,  // HTML: <p>, <b>, <i>, <ul><li>
    remember: 'Najważniejsza reguła/wzór',          // ramka „💡 Zapamiętaj” (opcjonalnie)
    hook: 'Skojarzenie, rymowanka, trik',           // ramka „🧠 Trik pamięciowy” (opcjonalnie)
    check: { q: 'Pytanie?', options: ['A', 'B', 'C'], answer: 0, explain: 'Dlaczego.' }, // opcjonalnie
  },
];
```

## Zasady treści

1. **Klucz** lekcji = `<id przedmiotu>/<id działu>` dokładnie jak w `js/dane/*.js`.
2. **Treść tylko z zakresu działu.** Opieraj się na `theory`, `flashcards`, `questions` i `basis` danego działu w pliku danych ścieżki (`js/dane/*.js` lub `js/dane/<ścieżka>/*.js`) – te treści zostały sprawdzone z podstawą programową (a w ścieżce egzaminacyjnej – z informatorami CKE). Możesz tłumaczyć je prościej, dawać nowe przykłady i analogie, ale **nie dodawaj nowych faktów ani materiału spoza podstawy**. Jeśli nie masz pewności co do faktu – pomiń go.
3. Ścieżka egzaminacyjna – rzeczy, których **nie wolno** uczyć (są poza egzaminem): matematyka – potęgi o wykładniku 0 i ujemnym (poza notacją wykładniczą), mediana, dominanta, reguła mnożenia w kombinatoryce, wzór na sumę kątów n-kąta, symetria środkowa / symetralna / dwusieczna; angielski – zdania warunkowe typu II („If I were…”).
4. **Język**: polski, zwracaj się do ucznia na „ty”, krótkie zdania, bez lania wody. Klasa 8 i egzamin: przyjaźnie i nowocześnie, bez infantylizmu (to 14-latkowie). Klasa 4: proste wyjaśnienia, każdy nowy termin objaśniony, przykłady z życia 10-latka. Klasa 3: bardzo krótko, dużo obrazków.
5. **4–6 kroków** na lekcję. Pierwszy krok: o co chodzi i po co to jest. Ostatni: podsumowanie lub typowe pułapki (w ścieżce egzaminacyjnej – egzaminacyjne).
6. Co najmniej **2 kroki z pytaniem `check`**. Pytania jednoznaczne, poprawna odpowiedź tylko jedna, sprawdzona.
7. W co najmniej połowie kroków dodaj **`hook`** – skojarzenie, mnemotechnikę, rymowankę, analogię z życia, które pomagają zapamiętać.

## Zasady grafiki (SVG)

- Każdy krok ma `svg` albo `widget`.
- `viewBox` o szerokości **od 300 do 440** (na telefonie rysunek się zmniejsza – szerszy byłby nieczytelny). Wysokość dowolna, zwykle 140–260.
- `role="img"` i `aria-label="…"` – obowiązkowe.
- **Tylko klasy CSS, żadnych kolorów wpisanych na sztywno** (dzięki temu działa tryb ciemny):
  - linie: `ln` (kontur w kolorze tekstu), `ln-thin` (cienka szara), `dash` (przerywana), `sw` (grubsza linia)
  - wypełnienia: `f1` niebieski, `f2` pomarańczowy, `f3` zielony, `f4` żółty, `f5` fioletowy (pastelowe)
  - obrysy: `s1`…`s5` (mocne kolory) – łącz z wypełnieniem: `class="f1 s1 sw"`
  - tekst: `tx` (16px), `tx-b` (pogrubiony 18px), `tx-s` (mały, szary 13px); kolor tekstu: `t1`…`t5`
  - tło karty: `bg`
- Tekst w SVG nie mniejszy niż `tx-s`, najlepiej `tx`/`tx-b`. **Napisy nie mogą wychodzić poza viewBox ani na siebie nachodzić** – licz ok. 9 px na znak dla `tx` i 10 px dla `tx-b`.
- SVG musi być poprawnym XML-em: zamykaj tagi, `&` pisz jako `&amp;`, `<` jako `&lt;`. Nie używaj `${` w lekcjach.
- Dobre pomysły na grafiki: schematy z blokami i strzałkami, osie czasu, tabele-kafelki, oś liczbowa, rozkład wyrazu na kolorowe części (np. przedrostek | rdzeń | przyrostek), drzewko zdania, porównanie „źle / dobrze”, mapa postaci lektury, kafelki z ikonami z emoji (emoji w `<text>` są OK).
- Strzałki: `<path d="…" class="ln" marker-end="url(#a)"/>` z `<defs><marker id="a" …><path d="M0,0 L8,4 L0,8 z" class="t2"/></marker></defs>` – **id markera musi być unikalne w całej lekcji** (np. `a-mat-proc-1`).

## Gotowe interaktywne widżety (`widget`)

| type | parametry | co robi |
|---|---|---|
| `pitagoras` | `a`, `b` | suwaki a, b; kwadraty na bokach trójkąta i obliczenie c |
| `procent` | `p`, `of` | siatka 10×10, suwak p%, oblicza p% z `of` |
| `kostka` | – | rzuty kostką, wykres częstości vs 1/6 |
| `kolo` | `r` | suwak promienia, obwód 2πr i pole πr² |

## Sprawdzanie

```
node tools/sprawdz-lekcje.js [ścieżka/]<przedmiot>          # struktura, XML, napisy poza kadrem, błędy JS (bez ścieżki – egzamin)
node tools/zrzut.js <[ścieżka/]przedmiot/dział> <krok> <plik.png> [dark] [420]   # zrzut ekranu kroku
```
Popraw wszystkie zgłoszone problemy i obejrzyj zrzuty (jasny i ciemny motyw, szerokość 420) – rysunek ma być czytelny i ładny.
