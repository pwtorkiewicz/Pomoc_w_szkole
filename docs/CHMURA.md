# Postęp, statystyki i chmura rodzica

Aplikacja nadal działa bez serwera i bez kont. Postęp zapisuje się w przeglądarce (`localStorage`), tak jak dotąd. Do tego doszły trzy rzeczy:

1. **Dziennik nauki i panel „📊 Postępy”** (`#/postepy` w każdej ścieżce). Panel pokazuje czas nauki, dni z nauką, skuteczność odpowiedzi, przerobiony materiał, prognozę, działy do odświeżenia i raport do wysłania. Działa bez internetu i bez chmury.
2. **Synchronizacja urządzeń (opcjonalna).** Telefon i komputer dziecka łączą postęp przez arkusz Google rodzica: skrypt Google Apps Script z pliku `apps-script/Kod.js`.
3. **Raport tygodniowy na maila.** Wysyła go ten sam skrypt w każdą niedzielę ok. 18:00.

Kto nie dostał linku połączenia (np. inne dzieci), korzysta z aplikacji jak dotąd. Jego postęp nie wychodzi z przeglądarki.

## Instalacja u rodzica (raz, ok. 10 minut)

Ta sama instrukcja jest w aplikacji: strona „☁️ Synchronizacja” → „Dla rodzica”.

1. Na swoim koncie Google utwórz nowy, pusty arkusz, np. „Pomoc w szkole – postępy”.
2. W arkuszu wybierz **Rozszerzenia → Apps Script**. Usuń przykładowy kod, wklej całą zawartość `apps-script/Kod.js` i zapisz projekt.
   - Jeśli zamiast edytora pojawi się „Nie udało się otworzyć pliku. Sprawdź adres i spróbuj ponownie.”, w przeglądarce jest zalogowanych kilka kont Google (w adresie widać `authuser=1`, `authuser=2` itd.). Apps Script ma z tym znany kłopot. Zrób całą instalację w oknie incognito (albo w osobnym profilu przeglądarki), zalogowany tylko na konto, które ma być właścicielem arkusza. Dzieci i ich urządzenia nie muszą być zalogowane do Google.
3. Odśwież arkusz. Pojawi się menu **🎒 Pomoc w szkole**. Wybierz **1. Przygotuj arkusz** i zezwól na dostęp.
   - Google ostrzeże, że aplikacja nie jest zweryfikowana. Przy własnym skrypcie to normalne: wybierz *Zaawansowane → Przejdź do projektu*.
   - Skrypt prosi o dostęp do arkuszy (zapis danych), do wysyłania poczty (raport) i do wyzwalaczy (raport co tydzień).
4. W edytorze Apps Script wybierz **Wdróż → Nowe wdrożenie**, typ **Aplikacja internetowa**. Ustaw „Wykonaj jako”: **Ja** i „Kto ma dostęp”: **Każdy**. Skopiuj adres, który kończy się na `/exec`.
5. W arkuszu wybierz **🎒 Pomoc w szkole → 2. Zapisz adres aplikacji internetowej** i wklej adres.
6. Wybierz **Dodaj dziecko** i wpisz imię (albo pseudonim). Arkusz pokaże link połączenia. Wyślij go dziecku prywatnie i otwórz na **każdym** jego urządzeniu (telefon, komputer).
7. Dla próby wybierz **Wyślij raport teraz**. Raport przyjdzie, gdy na połączonym urządzeniu zapisze się choć trochę nauki.

Nazwy menu Google mogą się trochę różnić od podanych.

**Po zmianie kodu skryptu** (np. po aktualizacji tego pliku) wybierz **Wdróż → Zarządzaj wdrożeniami → ✏️ → Wersja: nowa wersja → Wdróż**. Adres zostaje ten sam.

**Arkusz:**

| Karta | Co zawiera |
|---|---|
| „Dzieci” | Imię, kod, adres raportów i link. Raport możesz kierować na inny adres: zmień kolumnę „E-mail do raportów”. Usunięcie wiersza odłącza wszystkie urządzenia dziecka. |
| „Raporty” | Historia raportów: wiersz na tydzień i ścieżkę. |
| „_dane” (ukryta) | Zapisy urządzeń. Tej karty nie edytuj. |

## Jak to działa (dla programisty)

### Zapis postępu (`js/app.js`, `js/postep.js`)

Klucze `storeKey` ścieżek się nie zmieniły, a stare zapisy działają dalej. Do stanu ścieżki doszły pola:

| Pole | Znaczenie | Łączenie z innym urządzeniem |
|---|---|---|
| `wrong` | pytanie → czas błędnej odpowiedzi (ms; dawne wpisy mają `1`) | |
| `fixed` | pytanie → czas poprawnej odpowiedzi na pytanie z powtórki; pamiętane 120 dni | wygrywa późniejszy wpis (`wrong` albo `fixed`) |
| `examsAt`, `tasksAt` | czasy wpisów w `exams` i `tasks` | wygrywa późniejszy |
| `at` | dział → czas ostatniej nauki (lekcja, quiz); do „Do odświeżenia” | max |
| `log` | dziennik `log[urządzenie][dzień][przedmiot] = { t, ok, bad, l, q }`: sekundy nauki, odpowiedzi dobre i złe, lekcje, quizy i zestawy; pamiętany 2 lata | każde urządzenie liczy osobno (max w obrębie urządzenia), statystyki sumują urządzenia, więc nic nie liczy się dwa razy |
| `hist` | dzień → przedmiot → przerobione działy (ułamek) na koniec dnia; do prognozy | max |
| `sum` | podsumowanie ścieżki dla raportu (liczy je urządzenie, bo arkusz nie zna listy działów) | nowsze |
| `resetAt` | czas „Wyzeruj postęp” | zapis sprzed późniejszego zerowania jest odrzucany |

`best`, `sets` łączą się przez max, a `lessons` przez sumę zbiorów. `autoSpeak` to ustawienie urządzenia i nie przechodzi między urządzeniami. Reguły są w `mergeState` w `js/postep.js`. Tej samej funkcji używa import kopii zapasowej i zapis przy zmianie w innej karcie przeglądarki.

**Czas nauki.** Tik co 5 s liczy się, gdy karta jest widoczna i aktywna, a w ciągu ostatnich 2 minut był ruch (klik, klawisz, przewijanie, mysz) albo czyta lektor. Czas trafia do przedmiotu z adresu `#/s/<przedmiot>/…`, a reszta (start, powtórka, statystyki) do `_`.

**Przerobiony dział.** Lekcja daje 40%, a quiz do 60% (pełne 60% przy wyniku 80%). Dział bez lekcji: sam quiz, pełny przy 80%. Działy `extra` się nie liczą. Wynik na kafelkach przedmiotów („x% opanowane”) to jak dotąd średnia najlepszych wyników quizów.

**Prognoza.** Liczy tempo przybywania przerobionego materiału z ostatnich 7 i 28 dni i podaje przedział: „około 3–5 tygodni (między … a …)”. Pojawia się po 14 dniach historii. Historia zaczyna się od pierwszego postępu, więc wcześniejsze wyniki nie zawyżają tempa.

### Synchronizacja

- Urządzenie ma losowy identyfikator `pomoc_urzadzenie`. Konfiguracja chmury jest w `pomoc_chmura`: `script` (id wdrożenia), `profiles` (kod → imię i stan), `tracks` (ścieżka → kod; rodzeństwo na jednym urządzeniu), `since`, `sent`.
- Link połączenia ma postać `…/Pomoc_w_szkole/?polacz=<kod>&skrypt=<id>`. Obsługuje go `js/postep.js` na każdej stronie (z pytaniem o zgodę), a potem usuwa parametry z adresu. Można go też wkleić na stronie `#/chmura`.
- Żądanie to `POST` z `Content-Type: text/plain`, czyli bez zapytania wstępnego CORS. Wygląda tak: `{ a: 'sync', k: kod, d: urządzenie, since: { urządzenie: czas }, tracks: { storeKey: stan } }`.
  - Wysyłamy tylko ścieżki zmienione od ostatniego wysłania (skrót w `sent`).
  - Skrypt zapisuje stan urządzenia i odsyła zapisy innych urządzeń zmienione od `since`.
  - Łączenie robi przeglądarka: arkusz tylko przechowuje dane.
- Kiedy synchronizacja rusza:
  - 1,5 s po wczytaniu strony,
  - do minuty po zmianie postępu,
  - co 5 minut przy otwartej karcie,
  - przy schowaniu karty,
  - po powrocie internetu,
  - przyciskiem „Synchronizuj teraz”.
- W arkuszu jeden wiersz karty `_dane` to jedno urządzenie jednego dziecka. Dane są w kawałkach po 30 000 znaków z przedrostkiem `x`, żeby arkusz nie zamieniał ich na liczby ani formuły.

### Czego nie dało się sprawdzić

Dokumentacja Google nie była dostępna podczas pisania. Skrypt przetestowano na atrapie usług Google w Node: synchronizacja dwóch urządzeń w osobnych przeglądarkach, praca bez internetu, zerowanie i raport.

Nie zweryfikowano w prawdziwym Google:
- limitów darmowego konta (dzienna liczba maili, czas wykonania),
- dokładnego limitu znaków w komórce,
- zachowania przekierowań i CORS aplikacji internetowej.

Pierwsza próba po wdrożeniu: otwórz adres `/exec` w przeglądarce. Powinna się pokazać odpowiedź `{"ok":true,...}`. Potem połącz jedno urządzenie i wybierz „Synchronizuj teraz” na stronie `#/chmura`. Błąd pokaże się przy profilu.
