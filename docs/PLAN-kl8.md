# Plan ścieżki „Klasa 8” (`kl8`, `klasa8.html`)

Cel: pomoc w **bieżącej nauce wszystkich przedmiotów klasy 8** (nie tylko egzaminacyjnych). Przygotowanie do egzaminu zostaje w osobnej ścieżce `egzamin8`.

## Podstawa (sprawdzone 1.11.2026 w eli.gov.pl)

- W r. szk. 2026/2027 (i do 2029/2030) klasa 8 uczy się według **dotychczasowej podstawy**: Dz.U. 2017 poz. 356 w brzmieniu z **Dz.U. 2024 poz. 996** (zał. nr 1), zmienionym Dz.U. 2025 poz. 378 i 2025 poz. 1052 – to ta sama podstawa co w ścieżce egzaminacyjnej.
- Wyjątki (§ 4 ust. 2 Dz.U. 2026 poz. 378 w brzmieniu z Dz.U. 2026 poz. 958):
  - **edukacja zdrowotna** – już według **nowej** podstawy (Dz.U. 2026 poz. 958, blok „Klasy VII i VIII”);
  - od 2027/2028 w klasie 8 **kształcenie obronne** (nowa podstawa) zamiast edukacji dla bezpieczeństwa.
- Ramowy plan na 2026/2027: Dz.U. 2026 poz. 1028, zał. nr 15.

## Przedmioty klasy 8 (godz./tydz.) i działy

| Przedmiot | Godz. | Działy w podstawie | Uwagi | Priorytet |
|---|---|---|---|---|
| Język polski | 5 | blok kl. VII–VIII | **w ścieżce egzaminacyjnej** – tu odnośnik | link |
| Matematyka | 4 | blok kl. VII–VIII, I–XV | w ścieżce egzaminacyjnej; tu można dodać **XV. Symetrie** (jest w podstawie, ale poza egzaminem) | link + XV |
| Język obcy nowożytny (angielski) | 3 | kl. IV–VIII łącznie, I–XIV | w ścieżce egzaminacyjnej | link |
| Fizyka | 2 | kl. VII–VIII łącznie: I. Wymagania przekrojowe · II. Ruch i siły · III. Energia · IV. Zjawiska cieplne · V. Właściwości materii · VI. Elektryczność · VII. Magnetyzm · VIII. Ruch drgający i fale · IX. Optyka | podstawa nie dzieli na kl. VII i VIII | A |
| Chemia | 2 | kl. VII–VIII łącznie: I. Substancje i ich właściwości · II. Wewnętrzna budowa materii · III. Reakcje chemiczne · IV. Tlen, wodór i ich związki. Powietrze · V. Woda i roztwory wodne · VI. Wodorotlenki i kwasy · VII. Sole · VIII. Węglowodory · IX. Pochodne węglowodorów · X. Substancje o znaczeniu biologicznym | podstawa nie dzieli na kl. VII i VIII | A |
| Biologia | 1 | zalecany podział: kl. VIII – **V. Genetyka · VI. Ewolucja życia · VII. Ekologia i ochrona środowiska · VIII. Zagrożenia różnorodności biologicznej** | podział jest zaleceniem podstawy | A |
| Geografia | 1 | zalecany podział: kl. VIII – **XIV–XVIII: Azja, Afryka, Ameryka Płn. i Płd., Australia i Oceania, obszary okołobiegunowe** | j.w. | A |
| Historia | 2 | zalecany podział: kl. VIII – **XXXI–XLI** (wrzesień 1939 → miejsce Polski we współczesnym świecie) | j.w. | A |
| Wiedza o społeczeństwie | 2 | tylko kl. VIII: I–XII (natura człowieka, rodzina, szkoła, prawa człowieka, nieletni wobec prawa, społeczność lokalna i regionalna, naród i ojczyzna, społeczeństwo obywatelskie, media, demokracja w RP, sprawy międzynarodowe) | | A |
| Edukacja dla bezpieczeństwa | 1 | tylko kl. VIII: I. Bezpieczeństwo państwa · II. Sytuacje nadzwyczajnych zagrożeń · III. Pierwsza pomoc · IV. Postawy obronne | od 2027/28 zastąpi ją kształcenie obronne | B |
| Informatyka | 1 | blok kl. VII–VIII, I–V | | B |
| Edukacja zdrowotna (nowa podstawa) | 1 | 9 działów (wartości, zdrowie fizyczne, aktywność, odżywianie, zdrowie psychiczne i społeczne, dojrzewanie, środowisko, internet i uzależnienia) | w kl. VIII najdłużej do końca stycznia | **pomijamy** (decyzja rodzica) |
| Drugi język obcy albo łacina | 2 | wariant II.2, kl. VII–VIII | który język – do ustalenia z rodzicem | B |
| Wychowanie fizyczne | 4 | blok kl. VII–VIII | | C – tylko wiedza |

Muzyki, plastyki i techniki w klasie 8 nie ma. Pomijamy (decyzja rodzica) edukację zdrowotną, także „zdrowie seksualne”; pomijamy też etykę i religię.

## Uwagi

- Polski, matematyka i angielski: ta sama podstawa co w ścieżce egzaminacyjnej, więc **nie powielamy** treści. Kafelek przedmiotu w tej ścieżce prowadzi do `egzamin.html#/s/<przedmiot>` (do dodania w silniku: przedmiot z polem `link`).
- Fizyka i chemia: podstawa nie wskazuje, co jest w klasie 8 – obejmujemy cały blok VII–VIII (powtórka z klasy 7 też się przyda). Kolejność ustalamy według podręcznika dziecka.
- Ton jak w ścieżce egzaminacyjnej: „na ty”, krótko, bez infantylizmu.

## Etapy

- [x] Etap 1: silnik – przedmiot-odnośnik do innej ścieżki; fizyka i chemia.
  - Silnik: przedmiot z polem `link: { track, subject }` i `topics: []` – kafelek i adres `#/s/<id>` prowadzą do przedmiotu w innej ścieżce (`js/dane/kl8/egzamin.js`: polski, matematyka, angielski → `egzamin.html`). `sprawdz-dane.js` sprawdza, czy cel istnieje, a `przeglad.js` – kafelek i przekierowanie. Opis: README, `docs/SCIEZKI.md`.
  - Podręcznika dziecka nie znamy, więc wzięto działy z końca listy wymagań bloku VII–VIII (decyzja redakcyjna opisana w `basis` i na stronie „Źródła”). Kolejność można później dopasować do podręcznika.
  - Fizyka (7 działów, 82 fiszki, 112 pytań, 6 zadań otwartych, 38 kroków lekcji): ładunki i elektryzowanie (VI.1–6, 15a–b); prąd, napięcie, opór (VI.7–9, 12–13, 15c–e); praca i moc prądu, bezpieczeństwo (VI.10–11, 14*); magnetyzm (VII.1–4, 7, 5–6*); drgania, fale i dźwięk (VIII.1–6, 8, 7*); światło, cień, odbicie, zwierciadła (IX.1–5, 12a); załamanie, soczewki, barwy (IX.6–7, 9–10, 12, 8*, 11*). Gwiazdka oznacza wymaganie fakultatywne w podstawie (decyduje nauczyciel) – zaznaczone w `basis`.
  - Chemia (8 działów, 94 fiszki, 122 pytania, 7 zadań otwartych, 36 kroków lekcji): wodorotlenki i zasady (VI.1–4); kwasy (VI.1–4); odczyn, pH, wskaźniki, kwaśne opady (VI.5–8); sole (VII.1–6); węglowodory (VIII.1–9); alkohole (IX.1–3); kwasy karboksylowe i estry (IX.4–6, zadanie z V.6); tłuszcze, białka, cukry (X.1–8).
  - Fakty sprawdzone 2.11.2026: tekst podstawy – eli.gov.pl (Dz.U. 2024 poz. 996; Dz.U. 2025 poz. 378 nie zmienia fizyki ani chemii). Na zpe.gov.pl (PDF-y lekcji `zpe.gov.pl/pdf/<id>` i wyszukiwarka): fizyka – zakres słyszalności 16 Hz–20 kHz, źródła infradźwięków (trzęsienia ziemi, wulkany; słonie, wieloryby), ultradźwięki (nietoperze, delfiny, USG), dźwięk ok. 340 m/s w powietrzu i 1500 m/s w wodzie, e ≈ 1,6·10⁻¹⁹ C, biegun magnetyczny S przy geograficznej północy (w geografii nazywany północnym), rozszczepienie (czerwone najmniej, fioletowe najbardziej), korekcja wad wzroku; chemia – barwy fenoloftaleiny i oranżu metylowego, kwaśne opady (pH < 5,6), sole, alkany (C1–C4 gazy, C5–ok. C16 ciecze), czad i sadza, woda bromowa, destylacja ropy, metanol i etanol, glicerol, kwasy organiczne w przyrodzie, estry, tran, denaturacja i koagulacja, HNO₃ i jod jako odczynniki. Strony zpe.gov.pl ładują treść skryptami ze static.zpe.gov.pl (dla sesji zablokowane), ale PDF-y lekcji da się pobrać.
  - Pominięte jako niepewne: barwy papierka uniwersalnego (tylko na ilustracjach), barwa oranżu w roztworze obojętnym (źródła różne – bez pytań), oznaczenia w tablicy rozpuszczalności, zastosowania etenu i etynu poza polietylenem.
- [ ] Etap 2: biologia, geografia, historia (działy zalecane dla kl. VIII).
  - [x] Biologia (10 działów, 114 fiszek, 138 pytań, 4 zadania otwarte, 40 kroków lekcji) – dz. V–VIII, zgodnie z zalecanym podziałem: DNA i replikacja (V.1–2); chromosomy, mitoza, mejoza, nowotwory (V.3–5); dziedziczenie jednogenowe (V.6); płeć i grupy krwi AB0/Rh (V.7–8); mutacje, mukowiscydoza, zespół Downa (V.9–10); ewolucja (VI.1–3); ekosystem, populacja, tolerancja (VII.1–2, 7); zależności między organizmami (VII.3–4); łańcuchy i sieci pokarmowe, obieg materii i przepływ energii (VII.5–6); zasoby, zmiana klimatu, różnorodność i formy ochrony przyrody (VII.8–9, VIII.1–4). Fakty sprawdzone 2.11.2026 w PDF-ach zpe.gov.pl („Chromosomy”, „DNA – nośnik informacji genetycznej”, „Dziedziczenie wybranych cech u człowieka”, „Zmienność organizmów”, „Ewolucja życia – podsumowanie”, „Porównanie cech człowieka i naczelnych”, „Oddziaływania antagonistyczne między organizmami”) i przez wyszukiwarkę ograniczoną do zpe.gov.pl (populacja, piramidy wieku, mutualizm i komensalizm, mikoryza i porosty, 10% energii, różnorodność, restytucja żubra, barszcz Sosnowskiego, efekt cieplarniany, HPV); formy ochrony – ustawa o ochronie przyrody (Dz.U. 2026 poz. 1315). Pominięte: odsetki grup krwi w Polsce (materiały zpe podają różne), krab pustelnik z ukwiałem (materiały różnie klasyfikują), etymologie nazw.
  - [x] Geografia (10 działów, 114 fiszek, 127 pytań, 2 zadania otwarte, 40 kroków lekcji) – dz. XIV–XVIII, zgodnie z proponowanym podziałem: Azja – kontrasty i Pierścień Ognia (XIV.1–3); monsuny, ryż, Japonia (XIV.4–5); Chiny i Indie (XIV.6–8); Bliski Wschód (XIV.9–10); Afryka – cyrkulacja, strefowość, Sahel (XV.1–3); Kenia, głód w Etiopii, gospodarka Afryki (XV.4–6); Ameryki – rzeźba, tornada i huragany, Amazonia (XVI.1–3); rdzenna ludność, megalopolis i slumsy, Dolina Krzemowa, USA (XVI.4–7); Australia i Oceania (XVII); obszary okołobiegunowe i Układ Antarktyczny (XVIII). Fakty sprawdzone 2.11.2026 w PDF-ach e-podręcznika „Geografia szyta na miarę geografów” (zpe.gov.pl, wątek LPV6e89ez3, rozdziały 112–137: kontrasty Azji, Pierścień Ognia, monsuny i ryż, Chiny, Japonia, Indie, Bliski Wschód, strefy Afryki, Sahel, Kenia, rolnictwo Afryki, Etiopia, gospodarka Afryki, Ameryki, tornada, Amazonia, Indianie, megalopolis i slumsy, Dolina Krzemowa, USA, Australia i Oceania, Arktyka i Antarktyka) oraz przez wyszukiwarkę ograniczoną do zpe.gov.pl (cyrkulacja i pasaty, powstawanie tornad, ocieplenie Arktyki i zmarzlina). Podstawa (Warunki realizacji) zaleca skupienie na zależnościach, nie na liczbach – liczby zaokrąglone. Pominięte lub złagodzone: dokładne wysokości (Everest 8848/8850, Aconcagua), spór Nil–Amazonka, liczby ludności i rankingi PKB (Japonia), daty kolonii karnej w Australii (materiały podają różne), etymologie, bieżąca sytuacja polityczna w Syrii.
- [ ] Etap 3: WOS, EDB, informatyka; matematyka XV „Symetrie”.
- [ ] Etap 4: drugi język obcy; WF (wiedza); strona „Źródła” (`js/dane/kl8/zrodla.js`).
