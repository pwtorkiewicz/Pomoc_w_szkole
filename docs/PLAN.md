# Plan rozbudowy materiału

Cel: aplikacja ma obejmować **wszystkie wymagania podstawy programowej** (Dz.U. 2024 poz. 996), które sprawdza egzamin ósmoklasisty z polskiego, matematyki i angielskiego (wg informatorów CKE od r. szk. 2024/2025), oraz ćwiczyć **wszystkie typy zadań** z arkusza.

Analizę wykonano 1.11.2026: wymagania szczegółowe z tekstu podstawy (eli.gov.pl) i lista struktur z informatora CKE z angielskiego porównane z działami, ściągami, lekcjami, fiszkami i pytaniami aplikacji.

Zasady z `CLAUDE.md` obowiązują przy każdym punkcie: tylko materiał z podstawy, fakty sprawdzone w dokumentach, każde pytanie z jedną poprawną odpowiedzią i stałym `id`, każdy nowy dział z polem `basis`, lekcją według `docs/LEKCJE.md` i wpisem w `js/dane/zrodla.js`.

## Stan wyjściowy (przed etapem 1)

31 działów, 31 lekcji (180 kroków), 261 fiszek, 582 pytania zamknięte (wybór jednej odpowiedzi, prawda/fałsz). Dobrze pokryty rdzeń klas VII–VIII; słabiej wymagania klas IV–VI i typy zadań inne niż zamknięte.

## Etap 1 – największy wpływ na wynik egzaminu

- [x] **Matematyka – dział „Ułamki zwykłe i dziesiętne”** (kl. IV–VI: IV.1–14, V.1–7): skracanie i rozszerzanie, liczby mieszane, wspólny mianownik, porównywanie, cztery działania, zamiana ułamków, ułamek liczby, liczba z danej części, wyrażenia z ułamkami.
- [x] **Matematyka – dział „Przystawanie trójkątów i dowody”** (kl. VII–VIII: VIII.1–8): cechy przystawania (bbb, bkb, kbk), kąty wierzchołkowe, przyległe, odpowiadające i naprzemianległe w uzasadnieniach, nierówność trójkąta z równością, jak pisać dowód (wymaganie ogólne IV).
- [x] **Nowy tryb „✍️ Zadania otwarte”**: zadanie jak w arkuszu (2–3 pkt), rozwiązanie krok po kroku, zasady przyznawania punktów, samoocena; w matematyce zestaw zadań w działach.
- [x] **Polski – dział „Interpunkcja i ortografia”** (kl. IV–VI II.4.1–2, kl. VII–VIII II.4.1–4, II.1.6): przecinek, kropka, dwukropek, średnik, myślnik, cudzysłów, nawias; przytaczanie cudzych słów; wielka i mała litera; ó/u, rz/ż, ch/h; samogłoski nosowe, zmiękczenia; pisownia wyrazów nieodmiennych i „nie”.
- [x] **Angielski – dział „Rzeczowniki, przedimki, liczebniki”** (lista struktur CKE: rzeczownik 1–4, przedimek 1–3, liczebnik 1–2, zaimki 1, 4, 9): policzalne i niepoliczalne, liczba mnoga nieregularna, ’s i of, rzeczowniki złożone, a/an/the/przedimek zerowy, liczebniki główne i porządkowe, daty, zaimki osobowe w dopełnieniu, this/that/these/those, one/ones.
- [x] **Angielski – słownictwo 13 tematów** (podstawa, wymaganie I.1–13): fiszki i pytania do każdego tematu.

**Stan po etapie 1:** 35 działów, 35 lekcji (203 kroki), 454 fiszki, 745 pytań, 27 zadań otwartych (matematyka).

## Etap 2 – nowe tryby ćwiczeń

- [x] **Czytanie ze zrozumieniem (polski)**: tekst literacki (fragmenty utworów z domeny publicznej z listy lektur) i nieliteracki (własny tekst popularnonaukowy/publicystyczny) z zestawem zadań jak w części I arkusza.
- [x] **Reading (angielski)**: krótkie teksty (e-mail, ogłoszenie, artykuł, wpis na blogu) z zadaniami na główną myśl, intencję autora, szczegóły, dobieranie.
- [x] **Listening (angielski)**: nagrania czytane przez syntezę mowy przeglądarki (bez plików audio i bibliotek), zadania jak w arkuszu.
- [x] **Środki językowe w formacie CKE (angielski)**: luki, wybór formy, przekład fragmentów z polskiego.
- [x] **Pytania z rysunkiem** (pole `svg` w pytaniu): diagramy, wykresy, figury, siatki brył.
- [x] **Zadania otwarte** także w polskim (np. uzasadnij, przekształć, zredaguj) i więcej zadań otwartych z matematyki.

**Stan po etapie 2:** 35 działów, 35 lekcji, 454 fiszki, 771 pytań (27 z rysunkiem), 55 zadań otwartych (39 z matematyki, 16 z polskiego), 23 zestawy ćwiczeń ze 160 zadaniami: czytanie ze zrozumieniem (6), reading (6), listening (5), środki językowe (6). Usunięto pytanie wymagające twierdzenia odwrotnego do twierdzenia Pitagorasa (podstawa kl. VII–VIII VIII.7: „bez twierdzenia odwrotnego”).

## Etap 3 – uzupełnienie pozostałych wymagań

**Matematyka**
- [x] Koło i okrąg: promień, średnica, cięciwa; promień z długości okręgu i z pola (kl. IV–VI IX.6–7, kl. VII–VIII XIV).
- [x] Rodzaje kątów i trójkątów, odległość punktu od prostej (kl. IV–VI VII–IX).
- [x] Bryły obrotowe (rozpoznawanie walca, stożka, kuli), siatki graniastosłupów i ostrosłupów, graniastosłupy nieprawidłowe (kl. IV–VI X, kl. VII–VIII XI).
- [x] Pola wielokątów przez podział i uzupełnianie; jednostki: ar, dm², mm² (kl. IV–VI XI.4–5).
- [x] Obliczenia kalendarzowe, temperatura, dekagram (kl. IV–VI XII.4–7).
- [x] Rozkład na czynniki pierwsze, kwadraty i sześciany, szacowanie (kl. IV–VI II).
- [x] Punkty kratowe, drugi koniec odcinka przy danym środku, punkty kratowe na prostej AB (kl. VII–VIII X).
- [x] Diagramy słupkowe i kołowe, wykresy (kl. VII–VIII XIII).

**Język polski**
- [x] Budowa utworu: wers, rym, strofa, refren; tytuł, motto, puenta, punkt kulminacyjny; zgrubienie, powtórzenie (kl. IV–VI I.1.4–6).
- [x] Gatunki z klas IV–VI: mit, bajka, przypowieść, hymn, legenda, baśń, odmiany powieści (I.1.3).
- [x] Narrator, bohater główny i drugoplanowy, wątek główny i poboczny, tematyka i problematyka (I.1.9–13).
- [x] Teksty nieliterackie: fakt i opinia, tekst informacyjny, publicystyczny, reklamowy, środki perswazji, rodzaje argumentów (I.2, III.1).
- [x] Teksty kultury: dzieło sztuki, film, teatr, adaptacja, komiks, nawiązania w kulturze popularnej (kl. IV–VI I.2.7–10, kl. VII–VIII I.2.3, I.2.7).
- [x] Gramatyka: przypadki, stopniowanie przymiotników i przysłówków, związki wyrazów w zdaniu, typy wypowiedzeń, przekształcenia składniowe (kl. IV–VI II.1.4–13).
- [x] Wzbogacanie słownictwa, wyrazy wieloznaczne, język mówiony i pisany, spójność tekstu (II.2).
- [x] Wiersze poetów z listy (Baczyński, Herbert, Leśmian, Miłosz, Różewicz, Szymborska, Lec) – jak je analizować; teksty chronione prawem autorskim tylko krótkie cytaty.
- [x] Formy wypowiedzi: streszczenie, parafraza, recenzja, podanie, CV, list motywacyjny, wywiad, ogłoszenie, zaproszenie, charakterystyka, opis (kl. IV–VI III.2, kl. VII–VIII III.2).

**Język angielski**
- [x] Czasowniki złożone (phrasal verbs), przyimki po czasownikach i przymiotnikach.
- [x] Przysłówki: stopniowanie, miejsce w zdaniu; so / such / how / what.
- [x] Zaimki nieokreślone (no, other, another, somebody, anything), zdania z dwoma dopełnieniami, podmiot it.
- [x] Wiedza o krajach anglojęzycznych (wymaganie IX).

**Stan po etapie 3:** 47 działów, 47 lekcji (275 kroków), 669 fiszek, 1124 pytania (60 z rysunkiem), 85 zadań otwartych (56 z matematyki, 29 z polskiego), 23 zestawy ćwiczeń (160 zadań).

Nowe działy: matematyka – „Proste, kąty i trójkąty”, „Koło i okrąg”, „Układ współrzędnych”; polski – „Budowa utworu: wers, narrator, wątek”, „Teksty nieliterackie i teksty kultury”, „Wiersze poetów XX wieku – jak je czytać”, „Odmiana wyrazów i zdanie pojedyncze”, „Formy wypowiedzi: od ogłoszenia do CV”; angielski – „Phrasal verbs i przyimki po czasownikach”, „Przysłówki; so, such, how, what”, „Zaimki nieokreślone i budowa zdania”, „Kraje anglojęzyczne”. Pozostałe punkty dopisano do istniejących działów (bryły, geometria, liczby, statystyka, prędkość i jednostki; środki stylistyczne, rodzaje i gatunki, frazeologia, style i komunikacja).

Uwagi do etapu 3:
- Poezja: informator CKE zapowiada, że zadania nie sprawdzają znajomości treści konkretnego wiersza, tylko umiejętność analizy i interpretacji – dlatego dział uczy metody. Wiersze poetów chronione prawem autorskim nie są cytowane; ćwiczenia są na przykładach napisanych do aplikacji. Fakty o poetach sprawdzono w źródłach (nobelprize.org, culture.pl, zpe.gov.pl, IPN, PAP).
- Kraje anglojęzyczne: fakty (stolice, waluty, daty świąt, różnice brytyjsko-amerykańskie) sprawdzono w Britannice, CIA World Factbook, na stronach rządowych i w słownikach; niepotwierdzone pominięto.
- Matematyka: kl. IV–VI XI.4 mówi o jednostkach pola „bez zamiany jednostek w trakcie obliczeń”; w aplikacji są tylko proste zamiany (np. 1200 m² = 12 a, 1 dm² = 100 cm²), bo zadania z kl. IV–VI XI.3 i z kl. VII–VIII wymagają zamiany jednostek. Bryły obrotowe – tylko rozpoznawanie, bez wzorów.

## Możliwe dalsze kroki

- Przegląd całości przez nauczyciela (zwłaszcza punktacji zadań otwartych z polskiego).
- Więcej zestawów ćwiczeń z polskiego z tekstem poetyckim (np. utwory Leśmiana i Baczyńskiego – w domenie publicznej – w sprawdzonym brzmieniu).
