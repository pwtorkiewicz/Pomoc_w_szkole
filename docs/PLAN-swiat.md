# Plan modułu „🌍 Świat – jak uczą się inni” (przedmiot `swiat` w ścieżkach `kl3`, `kl4`, `kl8`)

Cel (decyzja rodzica, 14.11.2026): dzieci poznają, czego uczą się ich rówieśnicy w innych krajach – **przede wszystkim nauki ścisłe, technikę, informatykę i inżynierię**, a przy okazji trochę innej kultury. Moduł ma poszerzać horyzonty i podnosić kompetencje, a nie zastępować polskiej szkoły.

## Decyzje

- **Poza polską podstawą programową.** To wyjątek od zasady „ścieżka = tylko podstawa obowiązująca klasę” – decyzja rodzica. W polu `basis` każdego działu piszemy wprost „Poza polską podstawą programową – moduł „Świat” (decyzja rodzica)” i podajemy zagraniczny dokument.
- **Gdzie:** osobny przedmiot `swiat` w ścieżkach `kl3`, `kl4` i `kl8` (pliki `js/dane/<ścieżka>/swiat.js`, lekcje `js/lekcje/<ścieżka>/swiat.js`). Dzięki temu każde dziecko ma go w swojej ścieżce, w swoim zapisie postępu, a klasa 3 – z trybem dla młodszego ucznia (🔊, gwiazdki). **Nie w ścieżce egzaminacyjnej** (tam tylko materiał z egzaminu).
- **Po polsku**, na poziomie klasy (ton jak w ścieżce). Nazwy z oryginału (np. *design and technology*, *key stage 3*) podajemy z wyjaśnieniem.
- **Źródła:** fakty o szkołach i programach za granicą – **tylko z oficjalnych dokumentów ministerstw** (programy nauczania, strony rządowe). Wiedza przedmiotowa (np. jak działa dźwignia) – z e-materiałów zpe.gov.pl albo innych pewnych źródeł; obliczenia i kod – sprawdzone. Zadania i przykłady piszemy sami, **nie kopiujemy zadań ani podręczników** innych krajów.
- **Działy nazywamy „Kraj: temat”** (np. „Anglia: logika i bramki logiczne”). Ściąga zaczyna się od krótkiej części „Jak to jest w …?” (kto, w jakim wieku, co mówi program), potem właściwy temat.
- **Bez polityki i ideologii.** Nie dodajemy przedmiotów wykluczonych w całej aplikacji (edukacja zdrowotna, etyka, religia jako przedmiot) ani wychowania obywatelsko-politycznego innych państw. Historii innych krajów na razie nie dodajemy (inna perspektywa – wymagałaby osobnej decyzji).
- **Kolejność krajów zależy od dostępu do źródeł.** Programy Anglii są dostępne na gov.uk (licencja Open Government Licence) – od nich zaczęliśmy. Strony ministerstw Japonii (mext.go.jp) i Singapuru (moe.gov.sg) zostały dodane do sieci środowiska 14.11.2026, ale narzędzia nie mogły ich jeszcze odczytać – treści z tych krajów dopiero po przeczytaniu oryginalnych dokumentów.

## Zrobione (pilotaż, 14.11.2026)

- [x] **kl3 – Anglia: tabliczka mnożenia do 12 × 12** – mathematics KS1–2, Year 4 („multiplication tables up to 12 × 12”) i sprawdzian *multiplication tables check* (25 pytań, 6 s). Sztuczki: razy 11, razy 12 = razy 10 + razy 2; tuzin.
- [x] **kl4 – Anglia: mechanizmy (dźwignia, krążek, koła zębate, krzywka)** – design and technology KS2 („gears, pulleys, cams, levers and linkages”). Fizyka z zpe.gov.pl. *Linkages* (połączenia dźwigni) pominięte.
- [x] **kl8 – Anglia: logika i bramki logiczne** – computing KS3 („simple Boolean logic [AND, OR, NOT] and some of its uses in circuits and programming”). Obwody szeregowe/równoległe, tabele prawdy, Python.

Każdy dział: lekcja (4–5 kroków z rysunkami), ściąga, „W pigułce”, fiszki, quiz.

## Pomysły na kolejne działy (do sprawdzenia w źródłach)

### Klasa 3
- [ ] Anglia (computing KS1): algorytm jako dokładne instrukcje, szukanie i poprawianie błędów („create and debug simple programs”) – np. instrukcje dla robota na planszy.
- [ ] Japonia: soroban (liczydło) – w programie matematyki szkoły podstawowej (学習指導要領 2017) – **czeka na dostęp do mext.go.jp**.
- [ ] Anglia (D&T KS1): mechanizmy w zabawkach – dźwignie i suwaki, koła i osie („wheels and axles”).

### Klasa 4
- [ ] Singapur: model paskowy w zadaniach tekstowych (*bar model*) – **czeka na dostęp do moe.gov.sg** (sylabus matematyki 2021).
- [ ] Anglia (D&T KS2): obwody elektryczne w projektach – wyłączniki, żarówki, brzęczyki, silniki („series circuits”).
- [ ] Anglia (computing KS2): sekwencja, wybór i powtarzanie w programach, zmienne; dzielenie problemu na części (*decomposition*).
- [ ] Japonia: soroban w klasie 4 (większe liczby, ułamki dziesiętne) – czeka na mext.go.jp.

### Klasa 8
- [ ] Anglia (computing KS3): dodawanie liczb dwójkowych (*binary addition*) – rozwinięcie działu z polskiej informatyki.
- [ ] Anglia (computing KS3): algorytmy sortowania i wyszukiwania, porównanie ich szybkości.
- [ ] Anglia (computing KS3): jak komputer przechowuje i wykonuje instrukcje; dźwięk i obraz jako bity.
- [ ] Anglia (D&T KS3): materiały i konstrukcje, mechanizmy i przekładnie z obliczeniami.
- [ ] Niemcy: kształcenie dualne (szkoła + zakład pracy) – orientacja zawodowa po 8. klasie – źródła: KMK / ministerstwo (do sprawdzenia dostępu).

### Kultura (krótkie wstawki w działach, tylko ze sprawdzonych źródeł)
- system szkolny danego kraju (wiek, etapy, sprawdziany), pismo i liczebniki (Japonia, Chiny), święta – tylko gdy źródło jest oficjalne lub encyklopedyczne i pewne.

## Osobny temat: ścieżka niemiecka dla siostrzenicy

Nie jest częścią modułu „Świat”. To osobna ścieżka (program jednego kraju związkowego, treści po niemiecku). Czeka na odpowiedzi rodzica: kraj związkowy, klasa i typ szkoły, czy dziecko czyta po polsku.
