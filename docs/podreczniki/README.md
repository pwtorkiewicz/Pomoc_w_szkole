# Podręczniki dzieci

Informacje o podręcznikach, z których uczą się dzieci: dane ze stron redakcyjnych (zdjęcia od rodzica), spisy treści (tytuły rozdziałów i tematów) i przypisanie do działów aplikacji. Według nich układamy kolejność działów i decydujemy, co jest materiałem danej klasy. Podstawa programowa nie dzieli wymagań na klasy, więc ten wybór jest decyzją redakcyjną.

| Plik | Ścieżka | Stan |
|---|---|---|
| [kl4.md](kl4.md) | `kl4` – klasa 4 | 9 podręczników ze spisami treści (WF bez podręcznika) |
| [kl8.md](kl8.md) | `kl8` i `egzamin8` – klasa 8 | polski; matematyka i angielski do potwierdzenia |

## Zasady

- **Zapisujemy tylko dane bibliograficzne i tytuły rozdziałów/tematów** – bez treści podręcznika, ćwiczeń, ilustracji i zdjęć stron. Wydawcy zastrzegają na stronach redakcyjnych zakaz eksploracji tekstu i danych (także przez AI) i zakaz publikowania treści w internecie, a repozytorium jest publiczne (GitHub Pages). Pytania, ściągi i lekcje piszemy sami według podstawy programowej.
- Przy każdej informacji podajemy, skąd pochodzi (zdjęcie od rodzica, rozkład materiału wydawcy, podgląd podręcznika) i kiedy ją sprawdzono. Czego nie potwierdzono – oznaczamy „do potwierdzenia”.
- Działy aplikacji mają pole `book` (przedmiot) i `chapter` (dział) – kafelek pokazuje rozdział podręcznika (📘). Działy spoza podręcznika danej klasy mają `extra: true` i trafiają do sekcji „📦 Na zapas” (opis w `docs/SCIEZKI.md`).
- Po zmianie podręcznika (nowy rok szkolny, nowa klasa) dopisz nową tabelę i zaktualizuj `book`/`chapter` w danych oraz plan ścieżki.
