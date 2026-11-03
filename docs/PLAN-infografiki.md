# Plan: infografiki „🗺️ W pigułce” – pilotaż

Decyzja rodzica (2.11.2026): robimy **pilotaż** infografik jako pomocy w opanowaniu działu. Po pilotażu – ocena na telefonie i u dziecka, dopiero potem rozszerzanie na kolejne działy.

## Po co

Każdy dział ma lekcję (krok po kroku), ściągę (tekst), fiszki i quiz. Brakuje **jednego obrazu całego działu**: co jest najważniejsze, w jakiej kolejności i jak to się łączy. Infografika ma dać uczniowi schemat, w który wkłada szczegóły z lekcji i fiszek – do powtórki przed sprawdzianem (dobrze, gdy uczeń potem odtworzy ją sam z pamięci).

Działa tylko infografika **pokazująca zależności** (kolejność, przyczyna–skutek, cykl, porównanie, podział). Ozdobna ilustracja z ikonkami i dużą ilością tekstu – nie.

## Zasady

- **Treść tylko ze ściągi i fiszek tego działu** (zasada 3 z CLAUDE.md – nic z pamięci). Infografika streszcza to, co już sprawdzone; nie dodaje nowych faktów.
- **5–9 elementów**, krótkie hasła (2–5 słów), wyraźne strzałki/połączenia. Daty, wzory i nazwy – dokładnie jak w ściądze.
- **Format pionowy pod telefon** (ok. 400 px): `viewBox` szerokości 300–440 (jak w lekcjach), wysokość dowolna; tekst czytelny bez powiększania (nie mniejszy niż w krokach lekcji).
- **SVG inline tylko z klasami CSS** (bez kolorów na sztywno – tryb ciemny), `role="img"` i `aria-label` z pełnym opisem treści, unikalne id markerów. Te same zasady co w `docs/LEKCJE.md` → „Zasady grafiki (SVG)”.
- Ton jak w ścieżce: kl. 4 – proste słowa; egzamin/kl. 8 – krótko, rzeczowo; kl. 3 – prawie same obrazki.
- Drukowanie: infografika ma się dobrze drukować (jasne tło przy druku).

## Wzory (szablony)

1. **Oś czasu** – historia, kolejność wydarzeń, czasy gramatyczne.
2. **Cykl / proces** – obieg, przemiany, droga czegoś (strzałki w kółko lub w dół).
3. **Porównanie (tabela-karty)** – wzory, cechy kilku rzeczy obok siebie.
4. **Drzewko podziału** – klasyfikacje (rodzaje, gatunki, typy).
5. **Mapa postaci** – lektury: postacie, relacje (rodzina, wrogowie, przyjaciele), centralny konflikt.

Każdy wzór opisać w `docs/LEKCJE.md` (nowa sekcja „Infografiki”) z przykładem kodu, żeby kolejne działy robić tak samo.

## Silnik

- Nowe pole działu: `infographic` (string z SVG), opcjonalne; ewentualnie `infographicNote` – jedno zdanie podpisu.
- W widoku działu nowa zakładka **„🗺️ W pigułce”** (adres `#/s/<przedmiot>/t/<dział>/pigulka`), tylko gdy dział ma infografikę; zakładka między „Ściąga” a „Fiszki”.
- Na końcu lekcji (ekran po ostatnim kroku) – link „🗺️ Zobacz dział w pigułce”, jeśli infografika istnieje.
- `tools/sprawdz-lekcje.js` (lub `sprawdz-dane.js`) ma sprawdzać SVG infografik tak jak SVG lekcji (XML, napisy poza kadrem/nachodzące, aria-label); `tools/przeglad.js` ma odwiedzać nową zakładkę.
- Nie wolno zepsuć ścieżki egzaminacyjnej: `node tools/przeglad.js egzamin8` po zmianach w `app.js`.

## Stan (3.11.2026)

- [x] Silnik: pole `infographic` / `infographicNote`, zakładka „🗺️ W pigułce” (`#/…/pigulka`), link na końcu lekcji, przycisk 🖨️ Drukuj i styl druku (jasne tło, bez nawigacji), 🔊 czyta `aria-label` w ścieżkach z czytaniem na głos.
- [x] Narzędzia: `sprawdz-lekcje.js` sprawdza infografiki (XML, viewBox 300–440, `role`, `aria-label`, kolory na sztywno, powtórzone id, napisy poza kadrem/nachodzące, zakładka i link z lekcji); `przeglad.js` odwiedza zakładkę; `zrzut.js … pigulka` robi podgląd.
- [x] Wzory opisane w `docs/LEKCJE.md` → „Infografiki” (drzewko podziału – opisane, bez przykładu w pilotażu).

## Pilotaż – działy

- [x] **kl4 historia / `polska-litwa`** – oś czasu: Jadwiga (1384) → Krewo (1385) → Grunwald (1410) → II pokój toruński (1466), z przyczyną (Krzyżacy) i skutkami. Daty tylko ze ściągi.
- [x] **kl4 przyroda / `woda`** – cykl: stany skupienia wody i przemiany między nimi (topnienie, krzepnięcie, parowanie, skraplanie… – nazwy dokładnie jak w ściądze).
- [x] **egzamin8 matematyka / `bryly`** – porównanie: bryły z wzorami na objętość i pole powierzchni (z tabeli w ściądze), oznaczenia Pp, Pb, H.
- [x] **kl4 polski / `lektura-ronja`** – mapa postaci: Ronja, Birk, Mattis i Borka z bandami, Lovis, Łysy Per, leśne stwory; centralny konflikt i jego rozwiązanie – tylko to, co jest w ściądze i fiszkach.
- [x] (opcjonalnie) **egzamin8 angielski / `past`** – oś czasu czasów przeszłych (Past Simple, Past Continuous, Present Perfect) z przykładami ze ściągi.

## Po pilotażu

- [x] Zrzuty ekranu każdej infografiki (jasny i ciemny tryb, 420 px) do obejrzenia przez rodzica.
- [x] Decyzja rodzica (3.11.2026): **rozszerzamy na kolejne działy** – kolejność: ścieżka egzaminacyjna i główne przedmioty kl. 4, potem kl. 8, kl. 3, na końcu przedmioty dodatkowe.

## Rozszerzanie

Do rozszerzania służą **szablony** (`js/infografiki.js`, opis w `docs/LEKCJE.md` → „Infografiki” → „Szablony”): dział podaje opis treści (`os`, `kroki`, `porownanie`, `drzewo`, `karty`), silnik rysuje SVG. Ręczne SVG – tylko gdy szablon nie odda rysunku.

- [x] Etap 1: egzamin (polski, matematyka, angielski) i kl. 4 – polski, matematyka, angielski, przyroda, historia (3.11.2026: 47 + 85 działów)
- [ ] Etap 2: kl. 8 – wszystkie przedmioty
- [ ] Etap 3: kl. 3 – wszystkie przedmioty (karty z dużymi emoji, mało tekstu)
- [ ] Etap 4: kl. 4 – informatyka, technika, muzyka, plastyka, WF
