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
  - Reguły pisowni sprawdzone 1.11.2026 w zasadach pisowni PWN (sjp.pwn.pl, zasady 2.1–2.2, 10.1–10.2, 11.1–11.2): ó wymienne na o, e, a; -ów, -ówka, -ówna; ósmy; -uje; ż wymienne na g, h, z, s, dz; rz wymienne na r, rz po p, b, t, d, k, g, ch, j, w (wyjątki pszczoła, pszenica); ch wymienne na sz, ch na końcu wyrazu (wyjątek druh); h wymienne na ż. Poprawiono przykład wymiany ż–z: „wożę – wozić” PWN zalicza do wymiany ż–ź, więc zastąpiono go parą „mróz – zamrażarka” (PWN: zamrażarka – mrozu).
  - Nie ma jeszcze: II.1.1–2 (położenie przedmiotów, porównywanie i klasyfikacja), II.4.2 i II.6.8–9 (układanie zadań, gry – to aktywności poza aplikacją), polonistyka I.1–I.2 i I.3.1–2, 3.4–5, 3.7 (słuchanie, mówienie, czytanie na głos – poza aplikacją).
  - Fakty sprawdzone 1.11.2026: tekst podstawy (eli.gov.pl, Dz.U. 2024 poz. 996; zmiana Dz.U. 2025 poz. 378 nie dotyczy kl. I–III). Nominały pieniędzy: 2.11.2026 potwierdzone w wynikach wyszukiwarki ograniczonych do nbp.pl (strony „Monety obiegowe” i „Banknoty obiegowe”: monety 1, 2, 5, 10, 20, 50 gr oraz 1, 2, 5 zł; banknoty 10, 20, 50, 100, 200, 500 zł). Samej strony nbp.pl nie da się pobrać z sesji (zabezpieczenie przed botami Incapsula) – zabezpieczenia nie obchodzono.
- [x] Etap 3: angielski i edukacja przyrodnicza.
  - Silnik: w HTML ściągi i kroków lekcji fragment z atrybutem `lang="en"` czyta głos angielski; pole `sayExplain` (wyjaśnienie z fragmentami po angielsku – quiz i `check` lekcji); w `check` poprawna odpowiedź czytana w `optLang` (opis w README).
  - Angielski (7 działów, 106 fiszek, 103 pytania, 29 kroków lekcji; fiszki: przód po angielsku – `cardLang: ['en', 'pl']`): powitania, przedstawianie się, liczby 1–20, samopoczucie (X.1 tematy 1, 11; X.6.2–6.4); szkoła, kolory, polecenia (temat 3; X.2.1, 6.1, 4.2, 7); rodzina i dom (tematy 1–2); jedzenie i sklep, „I like” (tematy 6–7; X.6.5); zwierzęta, pogoda, pory roku (temat 12); dni tygodnia, zabawki, sport, „I can” (tematy 5, 8, 10); święta, baśnie, kraje anglojęzyczne (tematy 9, 13; X.8). Podstawa nie podaje listy słów ani gramatyki – wybór słów (odmiana brytyjska) to decyzja redakcyjna, opisana w `basis` i na stronie „Źródła”.
  - Przyroda (8 działów, 87 fiszek, 114 pytań – w tym 3 z rysunkiem, 34 kroki lekcji): rośliny i zwierzęta (IV.1.1, 1.3, 1.5–6); las, łąka, pole, wody (IV.1.2); ochrona przyrody i segregacja (IV.1.1, 1.7–8); zdrowie, jedzenie, higiena, ubiór do pogody (IV.2.4, 2.7–9); wzywanie pomocy, zawody, zagrożenia, ewakuacja (IV.2.1–3, 2.5–6, 2.11–12); ruch drogowy, transport, internet (IV.2.10, 2.13–16); Polska na mapie i stolica (IV.3.1–5); kierunki, wiatr, opady, Ziemia w Układzie Słonecznym (IV.3.6–7).
  - Fakty sprawdzone 1–2.11.2026: tekst obszarów IV i X (eli.gov.pl, Dz.U. 2024 poz. 996); kolory pojemników – Dz.U. 2021 poz. 906 § 3 (eli.gov.pl; w mocy); gatunki chronione (żubr, ryś, niedźwiedź brunatny, bocian biały, jeż; sasanki i rosiczka okrągłolistna – zał. 1, ochrona ścisła) – tekst jednolity Dz.U. 2022 poz. 2380 (rozp. 2016 poz. 2183; jedyna zmiana 2020 poz. 26 jest w nim ujęta) i Dz.U. 2014 poz. 1409 (bez zmian), eli.gov.pl; znaki – jak w kl. 4 (Dz.U. 2019 poz. 2310, 2311). Bezpośrednio na zpe.gov.pl (2.11.2026): warstwy lasu, runo, podszyt, ściółka, żołędzie, kora brzozy („Życie lasu”), grzyby w martwym drewnie („Grzyby”), 7 sąsiadów Polski („Relacje Polski z sąsiadami”, „Nasza ojczyzna”), Wisła – najdłuższa rzeka, ujście do Zatoki Gdańskiej, Odra przez Wrocław („Wisła i Odra…”), numery 112/997/998/999 i zasady wzywania pomocy („Pierwsza pomoc – podstawy”), „Talerz zdrowego żywienia” (proporcje 1/2, 1/4, 1/4). Przez wyszukiwarkę ograniczoną do zpe.gov.pl: martwe drewno jako dom dla owadów i dzięciołów, zachowanie w czasie burzy, schładzanie oparzenia, 8 planet i Ziemia trzecia od Słońca. Po odblokowaniu domen (2.11.2026) bezpośrednio na gov.pl: kolory JSSO, karton po mleku do żółtego, obierki do bio, odpady niebezpieczne do PSZOK‑u („Edukacja Ekologiczna” MKiŚ – dodano baterie i leki do działu „Chronimy przyrodę”); 112, 997 Policja, 998 PSP, 999 Państwowe Ratownictwo Medyczne, „nie rozłączaj się do potwierdzenia przyjęcia zgłoszenia” (serwis „Numer alarmowy 112” MSWiA); na pacjent.gov.pl – talerz zdrowego żywienia NIZP PZH (½ warzywa i owoce, ¼ zboża, ¼ białko). Park narodowy (obszar ≥ 1000 ha o szczególnych wartościach, chroniona cała przyroda) i pomnik przyrody (m.in. okazałych rozmiarów drzewa, głazy narzutowe; tablice z nazwą formy ochrony) – ustawa o ochronie przyrody, tekst jednolity Dz.U. 2026 poz. 1315, art. 6, 8, 40, 115 (eli.gov.pl); sformułowanie „bardzo stare drzewo” zmieniono na „stare drzewo okazałych rozmiarów”. Dostęp z sesji (2.11.2026): nfz.gov.pl i lasy.gov.pl przekierowują na www.nfz.gov.pl i www.lasy.gov.pl (te nie są na liście dozwolonych), gdos.gov.pl → www.gov.pl/web/gdos (działa, ale rejestr form ochrony jest pod crfop.gdos.gov.pl – niedozwolony), pzh.gov.pl i nbp.pl odpowiadają blokadą Incapsula (nie obchodzono); ncez.pzh.gov.pl, diety.nfz.gov.pl i strony parków narodowych – niedozwolone. Liczby parków narodowych nie podajemy (mogła się zmienić).
  - Nie ma jeszcze: X.2–5 (rozumienie ze słuchu i pisanie po angielsku – można dodać zestaw „listening” i dyktando słówek), IV.1.4 i IV.3.3 (wyszukiwanie w internecie, trasa rowerowa na komputerze – poza aplikacją), IV.3.2 krainy geograficzne (do sprawdzenia, które wymieniają podręczniki).
- [ ] Etap 4: edukacja społeczna, informatyczna; wiedza z edukacji technicznej, muzycznej, plastycznej i WF; uzupełnienie strony „Źródła” (`js/dane/kl3/zrodla.js` – powstała w etapie 2).
