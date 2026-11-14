# Plan modułu „🌍 Świat – jak uczą się inni” (przedmiot `swiat` w ścieżkach `kl3`, `kl4`, `kl8`)

Cel (decyzja rodzica, 14.11.2026): dzieci poznają, czego uczą się ich rówieśnicy w innych krajach – **przede wszystkim nauki ścisłe, technikę, informatykę i inżynierię**, a przy okazji trochę innej kultury. Moduł ma poszerzać horyzonty i podnosić kompetencje, a nie zastępować polskiej szkoły.

## Decyzje

- **Poza polską podstawą programową.** To wyjątek od zasady „ścieżka = tylko podstawa obowiązująca klasę” – decyzja rodzica. W polu `basis` każdego działu piszemy wprost „Poza polską podstawą programową – moduł „Świat” (decyzja rodzica)” i podajemy zagraniczny dokument.
- **Gdzie:** osobny przedmiot `swiat` w ścieżkach `kl3`, `kl4` i `kl8` (pliki `js/dane/<ścieżka>/swiat.js`, lekcje `js/lekcje/<ścieżka>/swiat.js`). Dzięki temu każde dziecko ma go w swojej ścieżce, w swoim zapisie postępu, a klasa 3 – z trybem dla młodszego ucznia (🔊, gwiazdki). **Nie w ścieżce egzaminacyjnej** (tam tylko materiał z egzaminu).
- **Po polsku**, na poziomie klasy (ton jak w ścieżce). Nazwy z oryginału (np. *design and technology*, *key stage 3*) podajemy z wyjaśnieniem.
- **Źródła:** fakty o szkołach i programach za granicą – **tylko z oficjalnych dokumentów ministerstw** (programy nauczania, strony rządowe). Wiedza przedmiotowa (np. jak działa dźwignia) – z e-materiałów zpe.gov.pl albo innych pewnych źródeł; obliczenia i kod – sprawdzone. Zadania i przykłady piszemy sami, **nie kopiujemy zadań ani podręczników** innych krajów.
- **Działy nazywamy „Kraj: temat”** (np. „Anglia: logika i bramki logiczne”). Ściąga zaczyna się od krótkiej części „Jak to jest w …?” (kto, w jakim wieku, co mówi program), potem właściwy temat.
- **Bez polityki i ideologii.** Nie dodajemy przedmiotów wykluczonych w całej aplikacji (edukacja zdrowotna, etyka, religia jako przedmiot) ani wychowania obywatelsko-politycznego innych państw. Historii innych krajów na razie nie dodajemy (inna perspektywa – wymagałaby osobnej decyzji).
- **Źródła zagraniczne – stan dostępu (14.11.2026):** w sieci środowiska są strony ministerstw i programów Anglii (gov.uk), Japonii (mext.go.jp), Singapuru (moe.gov.sg), Korei (moe.go.kr, ncic.re.kr), Australii, USA (NGSS), Finlandii (ePerusteet), Estonii, Bawarii (LehrplanPLUS), Szwajcarii (Lehrplan 21) i KMK. **Chiny – dokumentów nie udało się pobrać** (moe.gov.cn przekierowuje na HTTP): chińskich tematów nie dodajemy, dopóki nie przeczytamy oryginału.

## Zrobione (pilotaż, 14.11.2026)

- [x] **kl3 – Anglia: tabliczka mnożenia do 12 × 12** – mathematics KS1–2, Year 4 („multiplication tables up to 12 × 12”) i sprawdzian *multiplication tables check* (25 pytań, 6 s). Sztuczki: razy 11, razy 12 = razy 10 + razy 2; tuzin.
- [x] **kl4 – Anglia: mechanizmy (dźwignia, krążek, koła zębate, krzywka)** – design and technology KS2 („gears, pulleys, cams, levers and linkages”). Fizyka z zpe.gov.pl. *Linkages* (połączenia dźwigni) pominięte.
- [x] **kl8 – Anglia: logika i bramki logiczne** – computing KS3 („simple Boolean logic [AND, OR, NOT] and some of its uses in circuits and programming”). Obwody szeregowe/równoległe, tabele prawdy, Python.

Każdy dział: lekcja (4–5 kroków z rysunkami), ściąga, „W pigułce”, fiszki, quiz.

## Kolejne działy – według mapy ustaleń

Pełny research (11 krajów, cytaty, kody wymagań, porównanie z polską podstawą dla każdego rocznika): **`docs/research/reports/Mapa tematów z programów świata.md`**, notatki źródłowe: `docs/research/research_notes/Mapa tematów z programów świata/`. Rekomendowana kolejność (sekcja 8 mapy; kraj wiodący w nazwie działu):

| Tura | Klasa 3 | Klasa 4 | Klasa 8 |
|---|---|---|---|
| 1 | [ ] Japonia: magnesy | [ ] Bawaria: mosty i trójkąty | [ ] Japonia: czujniki i sterowanie |
| 2 | [ ] Japonia: soroban | [ ] Japonia: obwody szeregowe i równoległe, elektromagnes | [ ] Bawaria: półsumator i dodawanie dwójkowe |
| 3 | [ ] Japonia: czy żarówka się zaświeci? | [ ] USA: obrazek z zer i jedynek / Szwajcaria: kody wykrywające błędy | [ ] Korea: jak uczy się sztuczna inteligencja |
| 4 | [ ] Bawaria: huśtawka i równowaga | [ ] Estonia: z czego jest robot | [ ] Szwajcaria: wyszukiwanie binarne |
| 5 | [ ] Estonia: algorytm z warunkiem | [ ] Korea: pojazd – napęd, kierownica, hamulec | [ ] Szwajcaria: maszyny proste i złota reguła mechaniki |

- [ ] Rozszerzenie pilotażu kl. 4 „mechanizmy” o równię pochyłą, klin i regułę równowagi dźwigni (krok lekcji, nie nowy dział).
- [ ] Rozszerzenie pilotażu kl. 8 „bramki” o XOR (Bawaria, Realschule IT: „Antivalenz”).

Ustalenia, które zmieniają wcześniejsze pomysły:
- **Singapurskiego modelu paskowego nie ma** w sylabusie matematyki MOE 2021 – skreślony; ewentualnie zamiennik „Singapur: 4 kroki Pólyi” (jest w sylabusie).
- **Soroban** ma oficjalne oparcie (MEXT, matematyka kl. 3); budowę liczydła trzeba wziąć ze źródła encyklopedycznego.
- Nie robimy działów z tematów, które polska podstawa danego rocznika już ma (np. obwód i proces projektowy są w kl. 4 – PP2026, zajęcia praktyczno-techniczne).
- Decyzje czekające na rodzica (mediana, twierdzenie odwrotne do Pitagorasa, nazwy działów z kilku krajów, „Bawaria” zamiast „Niemcy”) – sekcja 9 mapy.

## Osobny temat: ścieżka niemiecka dla siostrzenicy

Nie jest częścią modułu „Świat”. To osobna ścieżka (program jednego kraju związkowego, treści po niemiecku). Czeka na odpowiedzi rodzica: kraj związkowy, klasa i typ szkoły, czy dziecko czyta po polsku.
