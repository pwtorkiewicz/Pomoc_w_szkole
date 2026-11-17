# Dodawanie dwójkowe i półsumator – źródła (research 16.11.2026)

Dział `informacja/polsumator` w ścieżce „🌍 Świat”. Wszystkie dokumenty pobrane `curl`-em 16.11.2026 (pliki w katalogu tymczasowym, nie w repozytorium). Tłumaczenia – nasze. Obliczenia i tabele prawdy sprawdzone kodem (Python, opis na końcu).

## 1. Bawaria (LehrplanPLUS, ISB)

### 1a. Realschule, Informationstechnologie – moduł 2.7.1 „Logische Schaltungen”
- URL: https://www.lehrplanplus.bayern.de/fachlehrplan/realschule/8/it (ta sama treść na stronach klas 5–10; „Aufgrund des modularen Aufbaus … ist eine jahrgangsstufenweise Zuordnung der Module nicht möglich”).
- Cytaty (oryginał):
  - „2.7 Logik, Robotik und Künstliche Intelligenz” → „2.7.1 Logische Schaltungen – ca. 14 Std.”
  - „Die Schülerinnen und Schüler setzen logische Schaltungen ein, um die Funktionsweise automatisierter Systeme (z. B. Aufzugssteuerung) und des Rechenwerks im Prozessor zu beschreiben und zu simulieren.”
  - „verwenden Schaltpläne, Wertetabellen und Funktionsterme, um kombinierte logische Grundschaltungen (z. B. Lichtschaltung im Treppenhaus als Antivalenzschaltung) darstellen zu können.”
  - „analysieren und modellieren eine Funktionalität des Rechenwerks (z. B. Addition zweier Dualzahlen) mithilfe logischer Schaltungen.”
  - „implementieren Modelle digitaler Schaltungen (z. B. mit Technikbaukasten oder Simulationssoftware), um das richtige Schaltverhalten testen und optimieren zu können.”
  - „beschreiben und modellieren einfache Anwendungsbeispiele digitaler Logik (z. B. Schutzschalter) mithilfe logischer Grundschaltungen.”
  - Inhalte: „logische Grundfunktionen: NICHT, ODER, UND”; „Modelle zur Aufgabenanalyse und -lösung, z. B. Wertetabelle, Schaltplan, Funktionsterm, Zeitablaufdiagramm”; „Kombination logischer Grundfunktionen: NAND, NOR, Äquivalenz, Antivalenz”; „Komplexe Schaltungen im Rechenwerk eines Prozessors, z. B. Vergleicher, Codierer, Halb- und Volladdierer, Zählerschaltung, Speicherelement mit RS-Flipflop”.
- Tłumaczenie (nasze): uczniowie używają układów logicznych, by opisać i zasymulować działanie systemów automatycznych (np. sterowania windą) i jednostki arytmetycznej procesora; przedstawiają złożone układy schematem, tabelą wartości i wzorem (np. oświetlenie na klatce schodowej jako układ antywalencji); analizują i modelują funkcję jednostki arytmetycznej (np. dodawanie dwóch liczb dwójkowych); budują modele z zestawu technicznego albo w symulatorze, testują i poprawiają.
- Wniosek: światło na schodach jako XOR (Antivalenz) i dodawanie liczb dwójkowych to **przykłady „z. B.”**, nie obowiązkowe treści; NAND, NOR, Äquivalenz, Antivalenz – treść modułu; półsumator i sumator pełny („Halb- und Volladdierer”) – przykłady złożonych układów w procesorze.

### 1b. Realschule IT – Fachprofil (czy moduł jest obowiązkowy)
- URL: https://www.lehrplanplus.bayern.de/fachprofil/realschule/it
- Cytaty: „…beginnt mit einem für alle Schülerinnen und Schüler verbindlichen Anfangsunterricht, der aus neun Modulen zu je 14 Unterrichtsstunden besteht”; „Der Anfangsunterricht kann in den Jahrgangsstufen 5, 6 oder 7 beginnen … spätestens mit Ende der Jahrgangsstufe 8 abgeschlossen”; „An den … verbindlichen Anfangsunterricht schließt der Aufbauunterricht an. Dieser orientiert sich an den Wahlpflichtfächergruppen der Realschule … Für jede Wahlpflichtfächergruppe sind … verbindliche Module vorgesehen. Darüber hinaus entscheiden sich die Schulen, je nach Profil, für einen Teil der Wahlmodule”; lista: „2.7.1 Logische Schaltungen (Wahlmodul)”.
- Wniosek: 2.7.1 to **moduł do wyboru (Wahlmodul) w dalszej nauce (Aufbauunterricht)** – nie jest obowiązkowy w żadnej grupie przedmiotów do wyboru (Wahlpflichtfächergruppe); szkoła decyduje, czy go oferuje. Klasy modułu program nie przypisuje.

### 1c. Realschule IT – moduł obowiązkowy 1.4 „Informationsaustausch” (Anfangsunterricht)
- Ta sama strona co 1a. Treść: „Einheiten für Datenmenge, z. B. Bit, Byte”; „Stellenwertsysteme: Dezimal- und Dualsystem”; „Codierungsvorschriften, z. B. Morse-Code, ASCII-Code”.
- Wniosek: system dwójkowy jest w Bawarii (Realschule) w obowiązkowym kursie początkowym; dodawanie dwójkowe – w module do wyboru 2.7.1.

### 1d. Gymnasium, Natur und Technik 7 – Lernbereich 1.3 „Elektrische Stromkreise” (ok. 8 godz.)
- URL: https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/7/nt_gym
- Cytat: „entwickeln selbständig mithilfe geeigneter Software eine elektrische Schaltung zu einer einfachen technischen Problemstellung (z. B. Bedienung einer Lampe mit zwei Wechselschaltern) und bauen diese unter Anleitung funktionsfähig auf. Sie dokumentieren ihr Ergebnis und berücksichtigen beim Experimentieren die vorgegebenen Sicherheitshinweise.”
- Tłumaczenie: samodzielnie projektują w odpowiednim programie układ do prostego problemu technicznego (np. sterowanie lampą dwoma przełącznikami) i budują go pod kierunkiem nauczyciela; dokumentują wynik i przestrzegają zasad bezpieczeństwa.
- Wniosek: lampa z dwoma przełącznikami (Wechselschalter) to przykład w gimnazjum, kl. 7 – sposób uczenia: najpierw w programie, potem budowa pod kierunkiem.

### 1e. Mittelschule – „Informatik und digitales Gestalten 7–10 (Wahlfach, R und M)”, 4.3 „Logik (ab Jgst. 7)”
- URL: https://www.lehrplanplus.bayern.de/fachlehrplan/mittelschule/7/informatik_digitales_gestalten
- Te same zdania o Schutzschalter i „Lichtschaltung im Treppenhaus als Antivalenzschaltung”; „Binärsystem als Zahlensystem und als Reihung von Schaltvorgängen und -zuständen”; „Kombination logischer Grundfunktionen (z. B. NAND, NOR, Äquivalenz, Antivalenz, XOR)”. Przedmiot do wyboru (Wahlfach). W dziale tylko jako tło (nie w `where`).

### 1f. Gymnasium Informatik 12 (erhöhtes Anforderungsniveau) – wynik wyszukiwarki LehrplanPLUS
- „…für einfache Beispiele (u. a. Halbaddierer, Volladdierer) überführen sie disjunktive Normalformen in Schaltungen auf Basis von Logikgattern und simulieren diese mit geeigneter Software.” Tylko tło (kl. 12).

### 1g. Materiały ISB do modułu 2.7.1
- Strona usług: https://www.lehrplanplus.bayern.de/serviceinformation/l315144 – jedynie „mebis-Lernplattform-Kurs des ISB zu Modul 2.7.1” (https://lernplattform.mebis.bycs.de/course/view.php?id=90638). **Host zablokowany w sieci środowiska (403)**, kurs prawdopodobnie wymaga logowania – nie czytaliśmy. Sposób uczenia z Bawarii bierzemy więc tylko z tekstu programu (schemat, tabela wartości, wzór, wykres czasowy; zestaw techniczny albo symulator; test i poprawki).

### 1h. Wiek
- Wieku uczniów w Bawarii nie podajemy (km.bayern.de i gesetze-bayern.de niedostępne – tak jak w dziale „Mosty”).

## 2. Anglia

### 2a. National curriculum, computing KS3–4 (DfE, wrzesień 2013)
- URL: https://assets.publishing.service.gov.uk/media/5a7cb981ed915d682236228d/SECONDARY_national_curriculum_-_Computing.pdf
- s. 1: „Schools are not required by law to teach the example content in [square brackets].”
- s. 2, key stage 3: „understand simple Boolean logic [for example, AND, OR and NOT] and some of its uses in circuits and programming; understand how numbers can be represented in binary, and be able to carry out simple operations on binary numbers [for example, binary addition, and conversion between binary and decimal]”.
- Tłumaczenie: rozumieć, jak liczby są przedstawiane dwójkowo, i umieć wykonywać proste działania na liczbach dwójkowych [np. dodawanie dwójkowe, zamiana między dwójkowym a dziesiętnym].
- Wniosek: obowiązkowe są „proste działania na liczbach dwójkowych”; dodawanie i zamiana to **przykłady w nawiasie**. XOR, NAND, NOR, półsumatora program nie wymienia. Wiek KS3 (11–14 lat) – strony gov.uk, jak w dziale „Bramki” (stała `NC`).

### 2b. Oak National Academy (publiczna platforma lekcji; nie program nauczania)
Wszystkie strony nauczyciela: „This content is © Oak National Academy Limited (2025), licensed on Open Government Licence version 3.0 except where otherwise stated”.
- „Numbers in binary” – Computing, KS3, **Year 8**: https://www.thenational.academy/teachers/programmes/computing-secondary-ks3/units/data-representation-text-and-numbers/lessons/numbers-in-binary
  - Key learning points: „Each binary digit (bit) represents a power of 2, decimal digits represent powers of 10.”
  - Common misconception: „Binary uses the same place value system as decimal.” → „Binary is a base-2 number system, whereas decimal is a base-10 number system.”
  - Wersja dla ucznia: https://www.thenational.academy/pupils/lessons/numbers-in-binary/overview („I can convert between decimal numbers and binary.”).
- „Binary addition” – Computer Science, KS4, **Year 10**, OCR: https://www.thenational.academy/teachers/programmes/computing-secondary-ks4-gcse-ocr/units/representation-of-numbers/lessons/binary-addition
  - Key learning points: „The process of counting in binary follows the same principle as decimal.” „Binary addition can be achieved with the following facts: 0+0 = 0, 0+1 = 1, 1+1 = 10 and 1+1+1 = 11.”
  - Keyword: „Carry – the extra value that moves to the next column when the sum of digits in a place value exceeds the base”.
  - Common misconception: „Pupils will often default to decimal addition, in the fact that 1+1 = 2, whereas in binary 1+1 = 10.” + „Remind students that binary only has two digits; 0 and 1.”
  - Teacher tip: „Model to students the process using the layout modelled in the slide deck. This models how they would do addition in maths…”
  - Wersja dla ucznia: https://www.thenational.academy/pupils/lessons/binary-addition/overview
  - Wniosek: w Oak dodawanie dwójkowe jest w lekcji dla Year 10 (kursy GCSE), nie KS3 – tak to opisujemy.
- „Boolean logic and logic gates” – KS4, Year 10, AQA: misconception „All logic gates have two inputs and one output.”; teacher tip „writing out the possible inputs for a truth table as if they were counting in binary. For the AND and OR gates this is 00, 01, 10, 11.” (https://www.thenational.academy/teachers/programmes/computing-secondary-ks4-gcse-aqa/units/boolean-logic/lessons/boolean-logic-and-logic-gates)
- „Introduction to logic circuits” – KS4, Year 10, AQA: pytanie w quizie końcowym „Which logic gate represents the condition "either A or B, but not both"?” → XOR. (…/units/boolean-logic/lessons/introduction-to-logic-circuits-23930)
- „Logic gate simulator software” – KS4, Year 10, AQA: misconception „Each input can only be wired to one logic gate.” → „…This can involve the same input being connected to multiple logic gates.” (…/units/boolean-logic/lessons/logic-gate-simulator-software). Wniosek: mit do pytania o półsumator (A i B idą do dwóch bramek).
- KS3 Oak nie ma lekcji o dodawaniu dwójkowym ani XOR (jednostki „Data representation: text and numbers” i „Computer systems and data science” – sprawdzone listy lekcji).

## 3. Australia (v9.0)
- URL: https://v9.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx
- AC9TDI8K04 (Years 7–8): „explain how and why digital systems represent integers in binary”; elaborations (przykłady): „counting in binary from 0 to 31, and recognising that one byte = 8 bits, which can represent from 0 to 255”; „showing how circuits with 2 switches can represent AND or OR gates”.
- AC9TDI8K02 elaboration: „exploring simple encryption and decryption algorithms, for example ROT13 and XOR”.
- Wniosek: Australia **nie wymienia dodawania dwójkowego ani półsumatora** – tylko liczby dwójkowe. W dziale tylko w `basis` jako tło (host nie jest na liście MATERIAL_HOSTS, wieku Years 7–8 nie potwierdzono).

## 4. Polska (tekst podstaw, pdftotext + grep)
- Dz.U. 2024 poz. 996 (https://eli.gov.pl/api/acts/DU/2024/996/text/O/D20240996.pdf), informatyka kl. VII–VIII, I.3 (druk s. 200): „przedstawia sposoby reprezentowania w komputerze wartości logicznych, liczb naturalnych (system binarny), znaków (kody ASCII) i tekstów.” Kl. IV–VI (s. 197–198): brak systemu dwójkowego. W całym załączniku nr 1 (szkoła podstawowa): brak słów „dodawanie” w kontekście dwójkowym, „bramk*” (poza wf), „sumator”, „XOR”.
- To samo rozporządzenie, załącznik nr 2 (branżowa szkoła I stopnia): fizyka, moduł fakultatywny D – „bramki i elementy logiczne” (s. 345); informatyka – „zamiany reprezentacji liczb między pozycyjnymi systemami liczbowymi” (s. 353). Nie dotyczy szkoły podstawowej.
- Dz.U. 2026 poz. 378 (https://eli.gov.pl/api/acts/DU/2026/378/text/O/D20260378.pdf), informatyka kl. VII–VIII, 1.5 (druk s. 257): „przedstawia sposoby reprezentowania w komputerze wartości logicznych, liczb naturalnych (system binarny), znaków (kody ASCII).” Kl. IV–VI (s. 254–255): brak systemu dwójkowego.
- Wniosek: system dwójkowy (reprezentowanie liczb) – w obu podstawach w kl. VII–VIII → przypomnienie z etykietą. Zamiany liczb, dodawania dwójkowego, bramek, XOR i półsumatora **polska podstawa szkoły podstawowej nie wymaga** (zamiana dziesiętny ↔ dwójkowy nie jest wprost w wymaganiu, ale jest w e-materiale ZPE i w ścieżce kl8 aplikacji).

## 5. Wiedza – ZPE (zpe.gov.pl)
- „System dwójkowy” – szkoła podstawowa IV–VIII, informatyka, tekst Adam Jurkiewicz, licencja CC BY 3.0: https://zpe.gov.pl/a/system-dwojkowy/DPZ2QDGvX
  - „jeśli suma jest dwucyfrowa (np. 8 + 3 = 11), to pod kreską zapisujemy tylko ostatnią cyfrę 1, a 1 przechodzi do następnej kolumny … Jest to tzw. przeniesienie”.
  - zasady: „0 + 0 = 0, 0 + 1 = 1, 1 + 0 = 1, 1 + 1 = 10”; „Dodawanie liczb binarnych zaczynamy od dodawania najmniej znaczących bitów”; „jeśli suma wynosi 10, zapisujemy 0 i dodajemy 1 do następnej kolumny po lewej stronie; jeśli suma wynosi 11, zapisujemy 1 i dodajemy 1 do następnej kolumny … kiedy musimy dodać jeszcze przeniesioną cyfrę”; przykład 1011 + 1101 = 11000 (11 + 13 = 24); film „Dodawanie dwóch liczb w pozycyjnym systemie dwójkowym”.
  - Wniosek: ZPE dla szkoły podstawowej uczy dodawania dwójkowego jako materiał (podstawa tego nie wymaga).
- „Bramki logiczne, czyli nowe znaczenie zera i jedynki” (Learnetic; film CC BY 4.0): https://zpe.gov.pl/b/bramki-logiczne-czyli-nowe-znaczenie-zera-i-jedynki/P14a5ui54, film https://zpe.gov.pl/a/film/DHmpR2IAQ
  - „Dla nauczyciela” (https://zpe.gov.pl/a/dla-nauczyciela/Ds9iOSK1C): „Grupa docelowa II/Szkoła podstawowa 7‑8 – Materiał rozszerzający treści podstawy programowej”.
  - Słowniczek (https://zpe.gov.pl/a/slowniczek/DbvqPWMCe): „bramka XOR – bramka realizująca funkcję alternatywy rozłącznej („albo”)”; NAND – „połączenie bramki AND i NOT”; NOR – „połączenie bramki OR i NOT”; sygnał wejściowy: niski – logiczne 0, wysoki – logiczne 1.
- „Podstawy elektroniki” – liceum/technikum, informatyka (Contentplus.pl, CC BY-SA 3.0), „Przeczytaj”: https://zpe.gov.pl/a/przeczytaj/Dc58jQH9h
  - XOR: „stan wysoki na wyjściu pojawia [się] tylko wtedy, gdy na wejścia podamy różne stany logiczne, np: 0 i 1 lub 1 i 0”; tabela A B Wyjście: 00 0, 01 1, 10 1, 11 0. Symbol XOR: jak OR („rybi ogon”) z dodatkową linią przy wejściach.
  - NAND: 00 1, 01 1, 10 1, 11 0; NOR: 00 1, 01 0, 10 0, 11 0; AND – „pół owala”; NOT – trójkąt z kropką.
  - Wniosek: tabela prawdy XOR sprawdzona w ZPE (liceum) i zgodna z Oak („either A or B, but not both”).
- Brak w ZPE: „półsumator”, „sumator” (szukano: sumator, półsumator, sumator połówkowy, sumator pełny, układ sumujący, jednostka arytmetyczno-logiczna – wyniki niezwiązane), działania łącznika schodowego (jest tylko symbol „łącznik oświetleniowy schodowy” w materiale zawodowym „Sporządzanie schematów instalacji elektrycznych”).

## 6. Wnioski merytoryczne (wyprowadzone i sprawdzone kodem)
- Półsumator: z zasad ZPE 0+0=00, 0+1=01, 1+0=01, 1+1=10 kolumna cyfry sumy S = 0,1,1,0 – to tabela XOR (ZPE), kolumna przeniesienia C = 0,0,0,1 – tabela AND (ZPE). Sprawdzone: 2·C + S = A + B dla 4 przypadków.
- Sumator pełny (3 bity, 1+1+1=11 – Oak, ZPE): z dwóch półsumatorów i bramki OR – sprawdzone dla 8 przypadków. W dziale jako „dla chętnych”, z dopiskiem „sprawdziliśmy wszystkie 8 przypadków”.
- Łańcuch sumatorów (przeniesienie do następnej kolumny): symulacja dla wszystkich 256 par liczb 4-bitowych daje x + y (5 bitów wyniku).
- Światło na schodach: nasz model połączeń (dwa przełączniki schodowe – przełączne, z trzema zaciskami, jak „Wechselschalter” w NT 7; zwykły wyłącznik dwuzaciskowy się nie nada; dwa przewody między nimi, razem ok. 5 przewodów; A=0 – przewód górny, A=1 – dolny; B=0 – dolny, B=1 – górny) daje lampę = A XOR B dla 4 ustawień. To, czy wyjdzie XOR, czy jego zaprzeczenie, zależy od tego, którą pozycję nazwiemy 0 – piszemy o tym w dziale. Bawarski program nazywa ten układ „Antivalenzschaltung”.
- Przykładowe działania w dziale (nasze): 0101+0011=1000 (5+3=8), 0110+0111=1101 (6+7=13), 1011+0110=10001 (11+6=17), 111+1=1000, 1001+0101=1110 (9+5=14), 1111+0001=10000 (15+1=16), 110+11=1001, 101+101=1010; 1101₂=13, 100₂=4 – wszystkie sprawdzone w Pythonie.

## 7. Czego nie potwierdzono / pominięto
- Kurs mebis ISB do modułu 2.7.1 (host zablokowany) – brak „sposobu uczenia” z materiałów ISB poza tekstem programu.
- Wiek uczniów w Bawarii (brak dostępu do km.bayern.de) – nie podajemy.
- Wiek Years 7–8 w Australii – nie podajemy; Australia tylko w `basis`.
- Filmów ZPE i Oak nie obejrzeliśmy (odtwarzacz); opisy w `note` według tekstu stron.
- Działanie prawdziwej instalacji schodowej 230 V – nie opisujemy szczegółów elektrycznych instalacji; tylko model logiczny i model na baterię/symulator.
