# Japonia, Korea Południowa, Chiny – mapa tematów STEM / technika / informatyka (+ kultura) dla modułu „Świat”

Notatki researchera (14.11.2026). Cytaty w oryginale (japoński, koreański, chiński), tłumaczenia robocze moje. Polska klasa docelowa: kl. 3 ≈ 8–9 lat, kl. 4 ≈ 9–10 lat, kl. 8 ≈ 13–14 lat. Wiek uczniów zagranicznych podaję w przybliżeniu (Japonia, Korea i Chiny zaczynają szkołę w wieku ok. 6 lat – to moja ogólna wiedza, nie sprawdzałem tego w dokumentach), więc „klasa 3 w Japonii” to rówieśnicy polskiej kl. 3, klasy 5–6 to 10–12 lat (między polską kl. 4 a kl. 8), a gimnazjum 1–3 (中学校 / 중학교 / 初中 7–9) to 12–15 lat (rówieśnicy polskiej kl. 7–8).

**Poziom weryfikacji:**
- **[OFIC]** – przeczytałem oficjalny dokument pobrany przez curl (MEXT: PDF; Korea: pliki HWP z załącznika do obwieszczenia Ministerstwa Edukacji na moe.go.kr, tekst wyciągnięty własnym skryptem).
- **[WTÓRNE]** – tylko podsumowanie wyszukiwarki / artykuł lub strona nieoficjalna; dokumentu źródłowego nie czytałem.

**Ograniczenia dostępu (ważne dla autora raportu):**
- Japonia – pełny dostęp do mext.go.jp; wszystkie tematy japońskie są [OFIC].
- Korea – ncic.re.kr działa, ale lista dokumentów ładuje się dynamicznie; próba odpytania jej API została zablokowana przez zabezpieczenia sesji, więc nie drążyłem dalej. Oficjalne teksty pobrałem z **moe.go.kr** (załączniki do obwieszczenia 교육부 고시 제2022-33호). Matematyki koreańskiej (별책 8) mój skrypt nie odczytał – pominięta.
- Chiny – **www.moe.gov.cn przekierowuje HTTPS → HTTP, a proxy sesji nie obsługuje zwykłego HTTP (405)**; lustrzane PDF-y na serwerach uczelni chińskich (np. statics.scnu.edu.cn) i inne hosty chińskie są zablokowane (CONNECT 403 / ENOTFOUND). Wszystkie fakty o Chinach są więc **[WTÓRNE]** (podsumowania wyszukiwarki z artykułów i stron chińskich). Żeby to potwierdzić, trzeba dopuścić w ustawieniach sieci host z PDF-em standardu (np. statics.scnu.edu.cn) albo pobrać PDF ręcznie.
- Ocenę „czy temat jest w polskiej podstawie” opieram na sąsiedniej notatce `polska-punkt-odniesienia.md` (ten sam folder; przeszukanie pełnotekstowe PP2024 = Dz.U. 2024 poz. 996 i PP2026 = Dz.U. 2026 poz. 378). Gdzie ta notatka milczy – piszę „nieznane”.

**Pilotaż już zrobiony (nie powtarzać):** Anglia – tabliczka do 12×12 (kl. 3), mechanizmy: dźwignia, blok, koła zębate, krzywka (kl. 4), bramki logiczne (kl. 8). Tematy azjatyckie o dźwigni/mechanizmach traktuję jako możliwe **rozszerzenie** istniejących działów, nie nowe działy.

---

## 1. Japonia – Course of Study 学習指導要領 (szkoła podstawowa 2017, gimnazjum 2017)

### Takeaway
Japońska podstawa (告示 2017; w szkole podstawowej od 1.04.2020, w gimnazjum od 1.04.2021) jest w 2026/2027 nadal obowiązująca; nowa jest w przygotowaniu (pełne wdrożenie od 2031 r. – „令和13年度～全面実施”), m.in. z nowym przedmiotem 情報・技術科 w gimnazjum. Najcenniejsze dla nas: **soroban** (kl. 3–4 japońskiej podstawówki), **magnesy i obwód z żarówką** (kl. 3), **szeregowe/równoległe łączenie baterii i silnik** (kl. 4), **elektromagnes** (kl. 5), **reguła równowagi dźwigni** (kl. 6) oraz bogaty gimnazjalny dział **技術分野** (materiały i obróbka z rysunkiem izometrycznym i rzutami, uprawa/hodowla jako technika, przetwarzanie energii, a w informatyce – programowanie **pomiaru i sterowania** oraz **interaktywnych treści w sieci**). Programowanie w podstawówce nie jest osobnym przedmiotem – jest „wplecione” (matematyka kl. 5: wielokąty foremne; przyroda kl. 6: urządzenia elektryczne działające według warunków).

### Cited Findings

**Status i reforma**
- [OFIC] Elementarz: „この省令は，平成三十二年四月一日から施行する。” (pol. „rozporządzenie wchodzi w życie 1.04.2020” – 平成32 = 2020) – [小学校学習指導要領（平成29年告示）, PDF MEXT, l. 445 tekstu](https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_01.pdf); gimnazjum: „平成三十三年四月一日から施行する” (1.04.2021) – [中学校学習指導要領（平成29年告示）, PDF MEXT, l. 765 tekstu](https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_02.pdf). Oba PDF-y podlinkowane na stronie [MEXT: 平成29・30・31年改訂学習指導要領](https://www.mext.go.jp/a_menu/shotou/new-cs/1384661.htm).
- [OFIC] Reforma: harmonogram MEXT (IV 2026) – dla szkoły podstawowej i gimnazjum „令和13年度～全面実施” (pełne wdrożenie od r. szk. 2031); „小学校の総合的な学習の時間に情報の領域（仮称）を付加し、中学校で情報・技術科（仮称）を創設する方向性を示した” (pol. „wskazano kierunek: dodać do godzin zintegrowanych w podstawówce «obszar informacji», a w gimnazjum utworzyć przedmiot «informatyka i technika»”) – [MEXT, 資料７ 次期学習指導要領に向けた検討状況について, s. 2, 14, 17 PDF](https://www.mext.go.jp/content/20260414-mxt_kyokasyo02-000049010_7.pdf). [WTÓRNE] Szczegóły godzin (ok. 70 godz. w kl. 1–2 i 35 w kl. 3 gimnazjum) i data wcześniejszego wdrożenia – tylko z prasy, rozbieżne – [sakigake.jp](https://www.sakigake.jp/news/article/20260925CO0039/).

**Programowanie w podstawówce – gdzie jest**
- [OFIC] Zasady ogólne (総則): „児童がプログラミングを体験しながら，コンピュータに意図した処理を行わせるために必要な論理的思考力を身に付けるための学習活動” (pol. „zajęcia, w których uczeń, doświadczając programowania, nabywa logicznego myślenia potrzebnego, by komputer wykonał zamierzone działanie”) – [小学校学習指導要領, s. 22 (PDF s. 24)](https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_01.pdf)
- [OFIC] Matematyka – przykład miejsca: „〔第５学年〕の「Ｂ図形」の⑴における正多角形の作図を行う学習に関連して，正確な繰り返し作業を行う必要があり，更に一部を変えることでいろいろな正多角形を同様に考えることができる場面” (pol. „przy rysowaniu wielokątów foremnych w kl. 5 – gdzie trzeba dokładnie powtarzać czynność, a zmieniając fragment, można tak samo narysować różne wielokąty foremne”) – [tamże, s. 92 (PDF s. 94)](https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_01.pdf)
- [OFIC] Przyroda – przykład miejsca: „〔第６学年〕の「Ａ物質・エネルギー」の⑷における電気の性質や働きを利用した道具があることを捉える学習など，与えた条件に応じて動作していることを考察し，更に条件を変えることにより，動作が変化することについて考える場面” (pol. „np. w kl. 6 przy narzędziach wykorzystujących elektryczność – rozważanie, że działają zgodnie z zadanymi warunkami i że zmiana warunków zmienia działanie”) – [tamże, s. 110 (PDF s. 112)](https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_01.pdf)
- [OFIC] Także w godzinach zintegrowanych (総合的な学習の時間) – programowanie ma być „探究的な学習の過程に適切に位置付く” (pol. „właściwie osadzone w procesie nauki badawczej”) – [tamże, s. 182 (PDF s. 184)](https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_01.pdf)

**Tematy – szkoła podstawowa**

- **J1. Soroban (liczydło japońskie)** – [OFIC]
  - Kl. 3 (8–9 lat): „そろばんによる数の表し方について知ること。” / „簡単な加法及び減法の計算の仕方について知り，計算すること。” / „そろばんの仕組みに着目し，大きな数や小数の計算の仕方を考えること。” (pol. „znać sposób przedstawiania liczb na sorobanie; znać i wykonywać proste dodawanie i odejmowanie; patrząc na budowę sorobanu, obmyślać sposób liczenia dużych liczb i ułamków dziesiętnych”) – [小学校学習指導要領, 算数 第3学年 A⑻, s. 73 (PDF s. 75)](https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_01.pdf)
  - Kl. 4 (9–10 lat): „そろばんを用いた数の表し方と計算に関わる数学的活動を通して … （ア） 加法及び減法の計算をすること。” (pol. „dodawanie i odejmowanie na sorobanie”; ten sam punkt o dużych liczbach i ułamkach) – [tamże, 算数 第4学年 A⑻, s. 78 (PDF s. 80)](https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_01.pdf)
  - Proponowana klasa PL: **kl. 3** (kontynuacja w kl. 4). W Polsce: **brak** („liczydło/soroban – brak” we wszystkich trzech klasach, `polska-punkt-odniesienia.md`).
  - Wartość: system pozycyjny „namacalnie” (koralik górny = 5, dolne = 1), dopełnienia do 5 i 10 przy dodawaniu – podstawa rachunku pamięciowego.
  - Pomysł: widżet sorobanu (kliknięcie przesuwa koraliki), lekcja „ustaw liczbę”, quiz „jaką liczbę pokazuje soroban?” (SVG), zadania 7+5 z „pożyczaniem z piątki”. Opis budowy sorobanu (np. koralik górny = 5) **nie pochodzi z dokumentu MEXT** – trzeba go sprawdzić w źródle encyklopedycznym przed napisaniem lekcji.

- **J2. Magnesy** – [OFIC] Kl. 3: „磁石に引き付けられる物と引き付けられない物があること。また，磁石に近付けると磁石になる物があること。” / „磁石の異極は引き合い，同極は退け合うこと。” (pol. „są przedmioty przyciągane i nieprzyciągane przez magnes; niektóre przybliżone do magnesu same stają się magnesem; bieguny różnoimienne się przyciągają, jednoimienne odpychają”) – [小学校学習指導要領, 理科 第3学年 A⑷, s. 96 (PDF s. 98)](https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_01.pdf)
  - PL: **kl. 3**. W Polsce kl. 3: **brak** magnetyzmu (w kl. 4 PP2026 jest – materiały magnetyczne, kompas).
  - Pomysł: quiz „przyciągnie czy nie?” (spinacz, gumka, moneta – uwaga: tylko przedmioty o pewnym składzie, np. żelazny gwóźdź, plastikowa linijka), SVG dwóch magnesów N–S.

- **J3. Obwód: „droga prądu”** – [OFIC] Kl. 3: „電気を通すつなぎ方と通さないつなぎ方があること。” / „電気を通す物と通さない物があること。” (pol. „są połączenia, przez które prąd płynie, i takie, przez które nie płynie; są materiały przewodzące i nieprzewodzące”) – działanie: łączenie baterii i żarówki – [tamże, 理科 第3学年 A⑸, s. 96 (PDF s. 98)](https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_01.pdf)
  - PL: **kl. 3**. W Polsce kl. 3: **częściowo** (tylko przedmiot „z wykorzystaniem prądu elektrycznego”, bez wiedzy o obwodzie).
  - Pomysł: interaktywny „czy żarówka się zaświeci?” – rysunki połączeń bateria–żarówka (obwód zamknięty/otwarty), przewodnik/izolator.

- **J4. Siła wiatru i gumy** – [OFIC] Kl. 3: „風とゴムの力の働きについて，力と物の動く様子に着目して…” (pol. „działanie siły wiatru i gumy – jak siła wpływa na ruch przedmiotu”) – [tamże, 理科 第3学年 A⑵, s. 95 (PDF s. 97)](https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_01.pdf)
  - PL: kl. 3. Polska: nieznane. Pomysł: autko na gumkę – „im mocniej naciągniesz, tym dalej pojedzie” (pytania o przewidywanie, uczciwy test). Szczegółowych punktów (ア) nie cytuję – nie odczytałem ich.

- **J5. Ile baterii i jak połączonych – żarówka i silnik** – [OFIC] Kl. 4: „乾電池の数やつなぎ方を変えると，電流の大きさや向きが変わり，豆電球の明るさやモーターの回り方が変わること。” (pol. „zmiana liczby baterii lub sposobu ich połączenia zmienia natężenie i kierunek prądu, a przez to jasność żarówki i obroty silnika”) – [tamże, 理科 第4学年 A⑶, s. 99 (PDF s. 101)](https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_01.pdf)
  - PL: **kl. 4**. Polska kl. 4: **częściowo** (obwody w ZPT – lampka, sygnalizator; łączenia szeregowego/równoległego baterii notatka polska nie wymienia – nieznane).
  - Pomysł: SVG dwóch układów (baterie szeregowo / równolegle) – „która żarówka świeci jaśniej?”, „co się stanie, gdy odwrócisz baterię? – silnik kręci się w drugą stronę”.

- **J6. Elektromagnes** – [OFIC] Kl. 5: „電流の流れているコイルは，鉄心を磁化する働きがあり，電流の向きが変わると，電磁石の極も変わること。” / „電磁石の強さは，電流の大きさや導線の巻数によって変わること。” (pol. „cewka z prądem magnesuje żelazny rdzeń; zmiana kierunku prądu zmienia bieguny; siła elektromagnesu zależy od natężenia prądu i liczby zwojów”) – [tamże, 理科 第5学年 A⑶, s. 103 (PDF s. 105)](https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_01.pdf)
  - PL: **kl. 4 (rozszerzenie)**; w Polsce elektromagnes jest dopiero w fizyce kl. 8 i to jako wymaganie fakultatywne (VII.5).
  - Pomysł: „eksperyment myślowy” z kontrolą zmiennych – co zmieniamy (zwoje, baterie), co mierzymy (ile spinaczy podniesie).

- **J7. Reguła równowagi dźwigni (てこの規則性)** – [OFIC] Kl. 6: „力を加える位置や力の大きさを変えると，てこを傾ける働きが変わり，てこがつり合うときにはそれらの間に規則性があること。” / „身の回りには，てこの規則性を利用した道具があること。” (pol. „zmiana miejsca przyłożenia i wielkości siły zmienia działanie przechylające dźwignię; gdy dźwignia jest w równowadze, istnieje między nimi prawidłowość; w otoczeniu są narzędzia wykorzystujące tę prawidłowość”) – [tamże, 理科 第6学年 A⑶, s. 106–107 (PDF s. 108–109)](https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_01.pdf)
  - PL: **kl. 4** (wersja „ciężarki na belce”) lub **kl. 8** (wersja z obliczeniami). W Polsce: **brak dźwigni** we wszystkich trzech klasach (w PP2024 tylko w szkole branżowej). Uwaga: istniejący pilotaż kl. 4 (mechanizmy – dźwignia) – to byłoby jego rozwinięcie o regułę równowagi, nie nowy dział.
  - Pomysł: widżet „waga belkowa” (zawieś ciężarki w otworach 1–6 po obu stronach), quiz „gdzie zawiesić 2 ciężarki, żeby zrównoważyć 3 na pozycji 4?” (iloczyn ciężar × odległość – w kl. 4 bez wzoru, przez próby).

- **J8. Wykorzystanie elektryczności: wytwarzanie, magazynowanie, przemiana** – [OFIC] Kl. 6: „電気は，つくりだしたり蓄えたりすることができること。” / „電気は，光，音，熱，運動などに変換することができること。” / „身の回りには，電気の性質や働きを利用した道具があること。” (pol. „prąd można wytwarzać i magazynować; można go zamienić na światło, dźwięk, ciepło, ruch; w otoczeniu są narzędzia wykorzystujące prąd”) – [tamże, 理科 第6学年 A⑷, s. 107 (PDF s. 109)](https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_01.pdf). To jest też przykładowe miejsce programowania (lampka, która zapala się, „gdy jest ciemno” – przykład mój, dokument mówi tylko o działaniu „według zadanych warunków”).
  - PL: **kl. 4** (prądnica ręczna, kondensator/akumulator, zamiany energii) z elementem „jeśli–to” (czujnik → działanie). Polska kl. 4: częściowo (wytwarzanie energii elektrycznej, OZE – przyroda 6.16).

- **J9. Wielokąty foremne programem (powtórz n razy)** – [OFIC] patrz wyżej (matematyka kl. 5, s. 92) + w treści kl. 5: „円と関連させて正多角形の基本的な性質を知ること。” (pol. „znać podstawowe własności wielokątów foremnych w związku z okręgiem”) – [tamże, 算数 第5学年 B⑴, PDF s. 86](https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_01.pdf)
  - PL: **kl. 4** (Scratch jest w kl. 4 PP2026; pętla „powtórz”). Polska: programowanie jest; łączenie z wielokątami foremnymi – nieznane.
  - Pomysł: lekcja „żółw rysuje”: kwadrat (4 × idź, obróć 90°), trójkąt (3 × 120°), sześciokąt (6 × 60°); quiz „o ile stopni obrócić, by narysować pięciokąt?” (360 : 5 = 72°). Obliczenia przeliczyć dwukrotnie.

**Tematy – gimnazjum, 技術・家庭 技術分野 (dział techniczny; kl. 1–3 gimnazjum, 12–15 lat)** – [OFIC], wszystkie z [中学校学習指導要領, s. 132–135 (PDF s. 134–137)](https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_02.pdf). Cel ogólny: „生活や社会で利用されている材料，加工，生物育成，エネルギー変換及び情報の技術についての基礎的な理解を図る” (pol. „podstawowe zrozumienie technik materiałów, obróbki, hodowli/uprawy, przetwarzania energii i informacji”). Każdy z działów A–D ma ten sam układ: ⑴ poznanie zasad i „pomysłów rozwiązywania problemów zawartych w technice”, ⑵ rozwiązanie realnego problemu (projekt), ⑶ ocena techniki i jej przyszłości.

- **J10. Sterowanie i pomiar – programowanie (D⑶)** – „生活や社会における問題を，計測・制御のプログラミングによって解決する活動” / „計測・制御システムの仕組みを理解し，安全・適切なプログラムの制作，動作の確認及びデバッグ等ができること。” / „入出力されるデータの流れを元に計測・制御システムを構想して情報処理の手順を具体化する” (pol. „rozwiązywanie problemów przez programowanie pomiaru i sterowania; rozumieć budowę systemu pomiarowo-sterującego, tworzyć program, sprawdzać działanie i debugować; projektować system na podstawie przepływu danych wejścia/wyjścia”) – s. 134.
  - PL: **kl. 8**. Polska kl. 8: **częściowo** („cyfrowe czujniki pomiarowe” tylko w warunkach realizacji fizyki; mikrokontrolery nie są wymaganiem).
  - Wartość: schemat czujnik → sterownik (program) → element wykonawczy; pętla pomiaru; to rdzeń automatyki.
  - Pomysł: lekcja „inteligentna szklarnia / automatyczna lampa”: diagram przepływu danych (czujnik światła → if → dioda), quiz „który element to czujnik, a który element wykonawczy?”, symulacja w przeglądarce (suwak „jasność” → stan lampy), debugowanie gotowego pseudokodu.

- **J11. Interaktywne treści w sieci – programowanie (D⑵)** – „ネットワークを利用した双方向性のあるコンテンツのプログラミング” / „情報通信ネットワークの構成と，情報を利用するための基本的な仕組みを理解し…デバッグ等ができること” (pol. „programowanie interaktywnych (dwukierunkowych) treści korzystających z sieci; rozumieć budowę sieci i podstawowe mechanizmy korzystania z informacji”) – s. 134; w zakresie: „情報のデジタル化の方法と情報の量” (cyfryzacja i ilość informacji), „社会におけるサイバーセキュリティ” – s. 135.
  - PL: **kl. 8**. Polska kl. 8: częściowo (informatyka ma sieci i bezpieczeństwo; programowanie z komunikacją sieciową – nieznane).
  - Pomysł: „jak działa czat”: klient → serwer → klient (SVG), żądanie/odpowiedź, pytania o ilość danych (bity/bajty obrazka).

- **J12. Przetwarzanie energii (C)** – „電気，運動，熱の特性等の原理・法則と，エネルギーの変換や伝達等に関わる基礎的な技術の仕組み及び保守点検の必要性” / „電気回路又は力学的な機構等を構想して設計を具体化する”; w zakresie: „電気機器や屋内配線等の生活の中で使用する製品やシステムの安全な使用” (pol. „zasady elektryczności, ruchu i ciepła; mechanizmy przemiany i przekazywania energii; potrzeba konserwacji; projekt obwodu lub mechanizmu; bezpieczne używanie urządzeń elektrycznych i instalacji domowej”) – s. 133–135.
  - PL: **kl. 8**. Polska kl. 8: obwody i prawo Ohma są w fizyce; **mechanizmy przekazywania ruchu – brak** w VII–VIII; bezpieczeństwo instalacji domowej – nieznane.
  - Pomysł: „łańcuch energii” (gniazdko → silnik → przekładnia → koło), bezpiecznik, przedłużacz przeciążony – quiz bezpieczeństwa.

- **J13. Materiały i obróbka + rysunek techniczny (A)** – „材料や加工の特性等の原理・法則と，材料の製造・加工方法等の基礎的な技術の仕組み” / „製作に必要な図をかき…”; w zakresie: „製作に必要な図については，主として等角図及び第三角法による図法を扱うこと” (pol. „rysunek potrzebny do wykonania – głównie rysunek izometryczny i rzutowanie metodą trzeciego kąta”) – s. 132, 135.
  - PL: **kl. 8**. Polska kl. 8: **brak** rysunku technicznego w VII–VIII (był w technice IV–VI: rzuty prostokątne i aksonometria).
  - Uwaga merytoryczna: Polska (i Europa) stosuje zwykle rzutowanie metodą pierwszego kąta (europejską) – a Japonia trzeciego kąta (amerykańską). To ciekawy temat porównawczy, ale **ten fakt o Polsce/Europie nie jest z dokumentów** – do sprawdzenia (np. w normie ISO 128 / PN) przed użyciem.
  - Pomysł: quiz „który widok z przodu/góry/boku pasuje do bryły?” (SVG klocków), rysunek izometryczny na siatce trójkątnej.

- **J14. Hodowla i uprawa jako technika (B)** – „育成する生物の成長，生態の特性等の原理・法則と，育成環境の調節方法等の基礎的な技術の仕組み”; w zakresie: „作物の栽培，動物の飼育及び水産生物の栽培のいずれも扱うこと” (pol. „zasady wzrostu organizmów i sposoby regulowania środowiska hodowli; uprawa roślin, hodowla zwierząt i akwakultura – wszystkie trzy”) – s. 133, 135.
  - PL: kl. 8 (niski priorytet). Polska: nieznane. Pomysł: „sterujemy szklarnią” – światło, temperatura, woda (łączy się z J10).

**Gimnazjum – matematyka**
- **J15. Kwartyle i wykres pudełkowy (箱ひげ図)** – [OFIC] kl. 2 gimnazjum (13–14 lat): „四分位範囲や箱ひげ図の必要性と意味を理解すること。” / „コンピュータなどの情報手段を用いるなどしてデータを整理し箱ひげ図で表すこと。” (pol. „rozumieć potrzebę i sens rozstępu międzykwartylowego i wykresu pudełkowego; porządkować dane i przedstawiać je na wykresie pudełkowym, m.in. komputerem”) – [中学校学習指導要領, 数学 第2学年 D⑴, s. 71 (PDF s. 73)](https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_02.pdf)
  - PL: **kl. 8**. Polska: prawdopodobnie **brak** (notatka polska wymienia w kl. 8 diagramy i średnią; kwartyli nie) – nie sprawdzałem pełnotekstowo.
  - **Uwaga dla rodzica:** wykres pudełkowy wymaga mediany, a mediana jest celowo usunięta ze ścieżki egzaminacyjnej (CLAUDE.md). W module „Świat” (ścieżka kl8, poza egzaminem) jest to dopuszczalne jako wyjątek modułu, ale warto to świadomie zdecydować i wyraźnie oznaczyć „poza egzaminem”.

### Inferences
- Japonia najlepiej uzupełnia **kl. 3**: soroban + magnesy + obwód to trzy tematy, których polska kl. 3 nie ma (wg notatki polskiej), a japońska kl. 3 ma je obowiązkowo.
- Dla **kl. 4** najmocniejsze są J5 (baterie szeregowo/równolegle + silnik), J9 (wielokąty programem – świetnie pasuje do Scratcha w polskiej kl. 4) i J7 jako rozwinięcie pilotażu „mechanizmy”.
- Dla **kl. 8** najbardziej „inżynierskie” i nowe są J10 (pomiar i sterowanie) i J13 (rysunek izometryczny/rzuty). Japoński 技術分野 jest bardzo ogólnie sformułowany (co rozumieć, nie jakie urządzenie) – konkretne przykłady w lekcjach będą nasze, trzeba je opisać jako przykłady, nie cytaty.

### Gaps
- Nie czytałem japońskich 解説 (komentarzy do podstawy), które podają konkretne przykłady (np. jakie urządzenia sterujące, ile godzin 技術分野). Nie sprawdzałem liczby godzin techniki w gimnazjum.
- Nie odczytałem szczegółowych punktów (ア/イ) dla J4 (wiatr i guma).
- Godziny i daty wcześniejszego wdrożenia nowego przedmiotu 情報・技術科 – tylko prasa, rozbieżne.

---

## 2. Korea Południowa – 2022 개정 교육과정 (교육부 고시 제2022-33호)

### Takeaway
Koreańska podstawa 2022 wchodzi rocznikami: kl. 5–6 podstawówki i kl. 2 gimnazjum od 1.03.2026, więc w 2026/2027 obejmuje już wszystkie interesujące nas roczniki szkoły podstawowej i gimnazjum 1–2. Informatyka: w podstawówce w ramach 실과 (zajęcia praktyczne, kl. 5–6) **co najmniej 34 godz.**, w gimnazjum przedmiot 정보 **co najmniej 68 godz.**. Najcenniejsze: dźwignia i równia pochyła już w **kl. 3–4** (przyroda), projekt urządzenia z magnesem (kl. 3–4), elektromagnes i obwody (kl. 5–6), a w 실과 kl. 5–6: **wynalazki i patenty, środki transportu (napęd, układ kierowniczy, hamulce; model pojazdu na energię słoneczną), konstrukcje budowlane, roboty z czujnikami i blokowym kodowaniem, algorytmy (pseudokod, schemat blokowy), dane cyfrowe vs analogowe, uczenie maszynowe**. W gimnazjum: **physical computing**, tablice/listy, funkcje i debugger, trenowanie systemu SI, elementy maszyn i przekładnie, rysunek techniczny.

### Cited Findings

**Status, godziny**
- [OFIC] „이 교육과정은 학교급별, 학년별로 다음과 같이 시행한다. … 2025년 3월 1일：초등학교 3, 4학년, 중학교 1학년 … 2026년 3월 1일：초등학교 5, 6학년, 중학교 2학년” (pol. „podstawa wchodzi: od 1.03.2025 – kl. 3–4 podstawówki i kl. 1 gimnazjum; od 1.03.2026 – kl. 5–6 i kl. 2 gimnazjum”) – [교육부 고시 제2022-33호 [별책 1] 초⋅중등학교 교육과정 총론 – załącznik (붙임1) do obwieszczenia na moe.go.kr](https://www.moe.go.kr/boardCnts/viewRenew.do?boardID=141&boardSeq=93458&lev=0&searchType=null&statusYN=W&page=1&s=moe&m=040401&opType=N)
- [OFIC] Podstawówka: „정보교육은 실과의 정보영역 시수와 학교자율시간 등을 활용하여 34시간 이상 편성⋅운영한다.” (pol. „edukację informatyczną realizuje się w wymiarze co najmniej 34 godzin – z godzin obszaru informatycznego 실과 i godzin do dyspozycji szkoły”); „실과의 수업 시간은 5~6학년 과학/실과의 수업 시수에만 포함된다” (pol. „실과 jest tylko w kl. 5–6”). Gimnazjum: „정보는 정보 수업 시수와 학교자율시간 등을 활용하여 68시간 이상 편성⋅운영한다.” (pol. „informatyka – co najmniej 68 godzin”) – [별책 1 총론, tamże](https://www.moe.go.kr/boardCnts/viewRenew.do?boardID=141&boardSeq=93458&lev=0&searchType=null&statusYN=W&page=1&s=moe&m=040401&opType=N). [WTÓRNE] Wcześniej (podstawa 2015) było to 17 i 34 godz. – podwojenie – [newsis](https://www.newsis.com/view/NISX20220819_0001984577); [Daum/연합](https://v.daum.net/v/20221109153007446).
- [OFIC] Komunikat ministerstwa o zatwierdzeniu (22.12.2022) z kierunkiem „디지털 기초소양 강화 및 정보교육 확대” – [moe.go.kr, 보도자료](https://www.moe.go.kr/boardCnts/viewRenew.do?boardID=294&boardSeq=93459&lev=0&searchType=null&statusYN=W&page=1&s=moe&m=020402&opType=N); [korea.kr](https://m.korea.kr/news/policyNewsView.do?newsId=156544066)
- [OFIC] Na ncic.re.kr widnieje też nowsza wersja „초등학교(2026.01)” – z listy wynika, że obejmuje tylko 총론 i przedmioty zintegrowane kl. 1–2 („바른 생활. 슬기로운 생활. 건강한 생활. 즐거운 생활”), więc nie zmienia tematów poniżej – [ncic.re.kr, 우리나라 교육과정](https://ncic.re.kr/inv/org/list.do) (odczyt drzewa dokumentów, nie treści zmian).

Źródło wszystkich standardów poniżej (o ile nie napisano inaczej): **[OFIC] 교육부 고시 제2022-33호 [별책 9] 과학과 교육과정 i [별책 10] 실과(기술⋅가정)/정보과 교육과정** – pliki HWP w archiwum „(붙임2) [별책5_14] … 실과기술가정정보.zip” z [obwieszczenia na moe.go.kr](https://www.moe.go.kr/boardCnts/viewRenew.do?boardID=141&boardSeq=93458&lev=0&searchType=null&statusYN=W&page=1&s=moe&m=040401&opType=N) ([bezpośredni plik ZIP](https://www.moe.go.kr/boardCnts/fileDown.do?m=040401&s=moe&fileSeq=1512facbda6c234a1641ac7e9c156ca2)). HWP nie ma stron – cytuję **kody standardów** (np. [4과01-04]), które są stałe. Kody: [4과…] = przyroda kl. 3–4, [6과…] = kl. 5–6, [6실…] = 실과 kl. 5–6, [9정…] = informatyka gimnazjum, [9기가…] = technika i gospodarstwo domowe gimnazjum (kl. 1–3).

**Tematy – podstawówka kl. 3–4 (8–10 lat), przyroda (과학)**

- **K1. Dźwignia i równia pochyła w kl. 3–4** – [4과01-04] „지레, 빗면과 같은 도구를 이용하면 물체를 들어 올릴 때 드는 힘의 크기가 달라짐을 알고, 도구가 일상생활에서 어떻게 쓰이는지 조사하여 공유할 수 있다.” (pol. „wie, że narzędzia takie jak dźwignia i równia pochyła zmieniają siłę potrzebną do podniesienia przedmiotu; sprawdza, jak są używane na co dzień”). Ograniczenie z komentarza: „도구의 원리나 구조적 특성을 다루지 [않]…” (pol. „nie omawia się zasady działania ani budowy narzędzi” – tylko obserwacja). Obok: [4과01-02] ważenie przez „수평잡기” (równoważenie), [4과01-03] waga.
  - PL: **kl. 3 / kl. 4**. Polska: **brak** dźwigni (wszystkie klasy). Pokrywa się z pilotażem kl. 4 (mechanizmy) – można dodać równię pochyłą jako nowy element i ewentualnie wersję dla kl. 3.
  - Pomysł: lekcja „pochylnia czy schody?” – SVG rampy o różnym nachyleniu; quiz „łatwiej wciągnąć wózek po dłuższej czy krótszej rampie (na tę samą wysokość)?”.

- **K2. Zaprojektuj urządzenie z magnesem** – [4과09-01] przyciąganie, [4과09-02] bieguny, [4과09-03] „자석을 이용하여 일상생활을 편리하게 하는 장치를 설계할 수 있다.” (pol. „projektuje urządzenie z magnesem, które ułatwia codzienne życie”).
  - PL: **kl. 3**. Polska kl. 3: brak magnetyzmu. Łączy się z J2 (Japonia) – można zrobić jeden dział „Magnesy” z dwoma źródłami.
  - Pomysł: zadanie projektowe w aplikacji: wybierz problem (zgubione spinacze, zamykanie piórnika) → wybierz rozwiązanie (SVG) → pytanie „czy zadziała na aluminiową puszkę?”.

**Tematy – podstawówka kl. 5–6 (10–12 lat)**

- **K3. Obwód, baterie szeregowo, elektromagnes** – [6과15-01] „전지와 전구, 전선을 연결하여 전구에 불을 켜보고, 불이 켜지는 전기 회로의 특징을 말할 수 있다.”; [6과15-02] „전지 한 개를 연결한 전기 회로와 전지 두 개를 직렬연결한 전기 회로의 특징을 비교할 수 있다.”; [6과15-03] „전자석을 만들어 전자석의 성질을 탐색하고 전자석이 사용되는 예를 조사할 수 있다.” (pol. „zapala żarówkę w obwodzie; porównuje obwód z jedną baterią i z dwiema połączonymi szeregowo; buduje elektromagnes, bada jego właściwości i zastosowania”).
  - PL: **kl. 4**. Pokrywa się z J5–J6 (Japonia robi to wcześniej: obwód w kl. 3, baterie w kl. 4).

- **K4. Wynalazek i patent** – [6실03-01] „발명의 의미를 이해하고, 일상생활을 바꾼 발명품을 탐색하여…”; [6실03-02] „발명사고기법과 기술적 문제 해결 과정을 이해하고, 다양한 재료를 활용하여 생활 속 문제를 해결할 수 있는 창의적인 제품을 구상하고 만들어…”; [6실03-03] „발명과 특허의 관계를 이해하고, 특허 침해 사례를 통하여 지식재산권의 중요성을 인식…” (pol. „rozumie, czym jest wynalazek; poznaje wynalazki, które zmieniły codzienność; techniki myślenia wynalazczego i proces rozwiązywania problemu technicznego (problem → pomysły → wykonanie → ocena); związek wynalazku z patentem, własność intelektualna”). Komentarz: wynalazek vs odkrycie; „적정기술” (technologie dostosowane, pomagające ubogim regionom).
  - PL: **kl. 4**. Polska kl. 4: proces projektowy **jest** (ZPT); wynalazek vs odkrycie i patent – nieznane.
  - Pomysł: quiz „wynalazek czy odkrycie?” (żarówka, grawitacja, koło, penicylina – fakty historyczne trzeba sprawdzić w źródłach), lekcja o patencie prostym językiem.

- **K5. Środki transportu: napęd, kierowanie, hamulec; pojazd na energię słoneczną** – [6실03-04] historia środków transportu; [6실03-05] „수송 수단의 구성 요소를 이해하고, 친환경 에너지를 적용한 다양한 수송 수단의 시제품을 만들어…”; komentarz: „수송 수단의 기본 요소가 구동장치, 조향장치, 제동장치 등으로 구성되어 있음을 … 태양광 전지와 같은 친환경 에너지를 사용하여 수송 수단을 만들어 보면서…” (pol. „podstawowe układy pojazdu to napęd, układ kierowniczy, hamulce; budowa prototypu pojazdu zasilanego np. ogniwem słonecznym”).
  - PL: **kl. 4**. Polska kl. 4: częściowo („pojazd kołowy”, układy roweru – ZPT 8.6).
  - Pomysł: SVG roweru/autka – „wskaż napęd, kierownicę, hamulec”; quiz „co się stanie, gdy chmura zasłoni słońce pojazdu solarnego?”.

- **K6. Konstrukcje budowlane** – [6실04-01] „친환경 건설 구조물을 이해하고, 생활 속 건설 구조물을 탐색하여 간단한 구조물을 체험…”; komentarz: „건설 구조물에는 건축 구조물과 토목 구조물이 있음” (pol. „konstrukcje budowlane dzielą się na budynki (architektura) i budowle inżynierii lądowej – mosty, tunele, tamy”).
  - PL: **kl. 4**. Polska kl. 4: częściowo („prosta konstrukcja”, wytrzymałość konstrukcji – przyroda 5.9).
  - Pomysł: quiz „budynek czy budowla inżynierska?”, lekcja „dlaczego trójkąt jest sztywny” (SVG kratownicy).

- **K7. Robot: budowa, czujniki, programowanie blokowe** – [6실04-04] „로봇의 개념과 구조를 이해하고, 생활 속 로봇 기능을 체험…”; [6실04-05] rodzaje robotów i zasada działania; [6실04-06] „간단한 로봇을 만들어 코딩과 프로그램을 적용하여 동작시키는 체험”; komentarz: „로봇의 다양한 센서와 동작을 위하여 블록 기반 프로그램으로 제어할 수 있는 활동” (pol. „sterowanie czujnikami i ruchem robota programem blokowym”).
  - PL: **kl. 4**. Polska kl. 4: **jest** robot „fizyczny lub na ekranie”; czujniki – tylko w warunkach realizacji. Nowością byłoby wyraźne „czujnik → decyzja → ruch”.

- **K8. Algorytmy i programy (실과 – informatyka)** – [6실05-01] „…일상생활 속 문제를 해결하기 위한 알고리즘을 다양한 방법으로 표현한다.”; [6실05-02] „컴퓨터에게 명령하는 방법을 체험하고, 주어진 문제를 해결하는 프로그램을 작성한다.”; [6실05-03] program pisany w zespole i udostępniany. Wskazówki: „특정 프로그래밍 언어의 기능을 익히는데 치중하지 않도록 유의하고 알고리즘을 토대로 프로그래밍을 작성” (pol. „nie skupiać się na funkcjach konkretnego języka, programować na podstawie algorytmu”). [WTÓRNE] wg streszczenia wyszukiwarki w tym obszarze proponuje się zapis algorytmu „자연어, 의사코드(pseudocode), 순서도” (język naturalny, pseudokod, schemat blokowy) – nie znalazłem tego zdania w odczytanym tekście, więc nie potwierdzam.
  - PL: kl. 4. Polska kl. 4: **jest** (algorytmika, programowanie) – mała nowość; ewentualnie schemat blokowy.

- **K9. Dane cyfrowe i analogowe; jak powstaje SI** – [6실05-04] „디지털 데이터와 아날로그 데이터의 특징을 이해하고, 인공지능에 활용할 수 있는 데이터의 유형이나 형태를 탐색한다.”; [6실05-05] „인공지능이 만들어지는 과정을 체험하고…”; komentarz: „숫자, 글자, 소리, 이미지 데이터”, „기계학습이 적용된 간단한 인공지능 도구의 체험을 통해 기계학습의 기본 원리를 이해” (pol. „cechy danych cyfrowych i analogowych; liczby, tekst, dźwięk, obraz jako dane dla SI; poznanie zasady uczenia maszynowego przez proste narzędzie”).
  - PL: **kl. 4**. Polska kl. 4: SI **jest** („trenuje prosty model SI”); dane analogowe vs cyfrowe – nieznane.
  - Pomysł: quiz „analogowe czy cyfrowe?” (wskazówkowy zegar vs cyfrowy, termometr rtęciowy vs elektroniczny), lekcja „uczymy komputer odróżniać jabłka od gruszek” (dane treningowe, błędne etykiety).

**Tematy – gimnazjum (12–15 lat), 정보 i 기술⋅가정**

- **K10. Physical computing** – [9정01-02] „피지컬 컴퓨팅의 개념을 이해하고, 생활 속에서 적용된 사례 조사를 통해…”; [9정01-03] „문제 해결 목적에 맞는 피지컬 컴퓨팅 구성요소를 선택하여 시스템을 구상한다.”; komentarz: „목적에 맞는 물리적인 장치와 소프트웨어를 결합하여 피지컬 컴퓨팅 시스템을 구현” (pol. „łączenie fizycznych urządzeń z programem w system physical computing dobrany do celu”). [9정01-01]: budowa komputera i funkcje systemu operacyjnego.
  - PL: **kl. 8**. Polska kl. 8: **brak** jako wymaganie (tylko w warunkach realizacji). Łączy się z J10 (Japonia) – jeden dział „Czujniki i sterowanie”.

- **K11. Programowanie: listy, logika, zagnieżdżanie, funkcje, debugger** – [9정03-02] „추상화의 중요성을 이해하고…”; [9정03-03] porównywanie algorytmów; [9정03-05] „데이터를 순차적으로 저장할 수 있는 구조를 활용하여 문제 해결 프로그램을 작성한다.”; [9정03-06] „논리 연산과 중첩 제어 구조를 활용하여…”; [9정03-07] „프로그램 작성에서 함수를 활용하고, 프로그램 수행 결과를 디버거로 분석하여 오류를 수정한다.” (pol. „abstrakcja; porównywanie algorytmów; listy/tablice; operatory logiczne i zagnieżdżone struktury sterujące; funkcje; analiza programu debuggerem i poprawianie błędów”).
  - PL: kl. 8. Polska kl. 8: **częściowo/jest** (zmienne, tablice, funkcje, wyrażenia logiczne – PP2024 II.1); debugger i porównywanie algorytmów – nieznane / częściowo.
  - Pomysł: „znajdź błąd” – śledzenie programu krok po kroku (tabela wartości zmiennych), porównanie dwóch algorytmów liczbą kroków.

- **K12. Sztuczna inteligencja w gimnazjum** – [9정04-01] „인공지능의 개념과 특성을 설명하고 인공지능 소프트웨어를 구별한다.”; [9정04-02] „인공지능 학습에서 데이터의 중요성을 이해하고, 학습에 필요한 데이터를 수집하여 분류한다.”; [9정04-03] „다양한 데이터를 활용하여 인공지능 시스템을 구성하고 적용한다.”; komentarz: „이미지, 소리, 글자 등의 데이터를 활용하여 인공지능 시스템을 학습시키고…” (pol. „pojęcie SI i odróżnianie oprogramowania z SI; znaczenie danych; zbieranie i klasyfikowanie danych do uczenia; budowa i trenowanie systemu SI na obrazach, dźwiękach, tekście”).
  - PL: **kl. 8**. Polska kl. 8: **brak** SI (PP2024). (Uwaga: [9정04-05] i obszar „디지털 문화” [9정05-…] dotyczą etyki i zasad życia w sieci – pomijam zgodnie z zakresem.)
  - Pomysł: „czy to SI?” (kalkulator, filtr spamu, rozpoznawanie twarzy), „zepsute dane” – co się stanie, gdy w danych są same czarne koty.

- **K13. Elementy maszyn i przekazywanie napędu** – [9기가04-07] „기계의 구성 요소 및 동력 전달 장치의 종류와 특징을 이해하고, 작동 원리에 맞는 기계요소를 선택하여 평가한다.”; [9기가04-08] „다양한 기계요소와 동력 전달 방법을 활용하여 … 운동 물체를 안전하게 제작하고 평가한다.” (pol. „części maszyn i rodzaje przekładni (przekazywania napędu); dobór elementów; budowa poruszającego się obiektu”).
  - PL: **kl. 8**. Polska kl. 8: **brak** mechanizmów w VII–VIII. Rozwinięcie pilotażu kl. 4 o przełożenie (ile obrotów).

- **K14. Elementy elektroniczne i prosty układ** – [9기가04-04] „전기⋅전자 부품의 종류와 기능을 이해하고 기능에 맞는 부품을 선택하여 … 간단한 회로를 구성하고 제작 및 평가한다.” (pol. „rodzaje i funkcje części elektrycznych i elektronicznych; budowa prostego układu”).
  - PL: kl. 8. Polska: obwody – jest (fizyka); diody, tranzystory – były w technice IV–VI (PP2024 III.1b) – częściowo.

- **K15. Rysunek techniczny według zasad** – [9기가03-08] „설계의 가치와 필요성을 인식하고, 제도의 기본 통칙에 따라 도면을 작성한다.” (pol. „wartość projektowania; wykonanie rysunku według podstawowych zasad rysunku technicznego”); [9기가03-04] wizualizacja rozwiązania, rysunek, prototyp/model.
  - PL: kl. 8. Polska kl. 8: brak (było w IV–VI). Łączy się z J13.

- **K16. Robot ze sterowaniem i automatyką; technika budowlana** – [9기가04-09] „로봇에 활용되고 있는 제어 및 자동화 기술 등을 탐구하여 간단한 로봇을 제작…”; komentarz: „센서와 액추에이터를 활용하여 중학교 수준에서 간단하게 제어할 수 있고 자동화의 형태를 갖고 있는 로봇” (pol. „robot z czujnikami i elementami wykonawczymi, sterowany i zautomatyzowany na poziomie gimnazjum”); [9기가04-01–03] technika budowlana: etapy „계획, 설계, 시공, 유지관리” (planowanie, projekt, budowa, utrzymanie) i model zrównoważonej konstrukcji.
  - PL: kl. 8. Pomysł: oś czasu „od projektu do utrzymania mostu”.

- (Krótko) **Energia odnawialna** [6과08-02] (kl. 5–6) i [9기가03-10/11] – małą nowością dla Polski (OZE są w kl. 4 PP2026).

### Inferences
- Korea ma **najbardziej „inżynierskie” zajęcia praktyczne w kl. 5–6** z tych trzech krajów: wynalazek/patent, transport (napęd–kierowanie–hamulec), budownictwo, roboty, rolnictwo jako technika (smart farm) – a więc temat „jak działa pojazd” (K5) i „wynalazek vs odkrycie” (K4) są dobrymi kandydatami na kl. 4.
- Dźwignia i równia pochyła w koreańskiej kl. 3–4 (K1) uzasadnia wersję „maszyn prostych” także dla polskiej kl. 3 – w wersji czysto obserwacyjnej, jak w Korei (bez zasady działania).
- Dla kl. 8 Korea i Japonia zgodnie mają **czujniki + sterowanie (physical computing)** – najsilniejszy kandydat na dział kl. 8 z dwoma źródłami.

### Gaps
- Nie odczytałem koreańskiej matematyki (별책 8 – błąd kodowania w moim skrypcie) ani pełnej przyrody gimnazjalnej.
- Nie sprawdzałem przewodników nauczyciela ani podręczników (np. jakie roboty/narzędzia SI).
- Zdanie o pseudokodzie/schemacie blokowym w 실과 – tylko [WTÓRNE].

---

## 3. Chiny – 义务教育课程方案和课程标准（2022年版）

### Takeaway
Wszystko o Chinach jest **[WTÓRNE]** (strona ministerstwa niedostępna z sesji). Z wielu zgodnych źródeł wtórnych: od 2022 r. 信息科技 (technologia informacyjna) jest osobnym przedmiotem w kl. 3–8 (w kl. 1–2 i 9 – wplecionym w inne), zbudowanym w moduły: kl. 3–4 „dane i kodowanie”, kl. 5–6 „algorytmy wokół nas” i „proces i sterowanie” (sekwencja, wybór, pętla, sprzężenie zwrotne), kl. 7–9 „Internet”, „Internet rzeczy”, „SI i inteligentne społeczeństwo”. W 劳动 (praca/edukacja praktyczna) kl. 7–9 uczniowie wybierają 1–2 nowe technologie (druk 3D, cięcie laserowe, sterowanie inteligentne, obróbka CNC). Przed użyciem w aplikacji trzeba potwierdzić w PDF standardu.

### Cited Findings
- [WTÓRNE] Ogłoszenie: 21.04.2022 MEN Chin opublikowało „Compulsory Education Curriculum Program and Standards 2022” dla 16 przedmiotów – [DISER (Springer), 2023](https://diser.springeropen.com/counter/pdf/10.1186/s43031-023-00082-5.pdf). Strona ministerstwa z ogłoszeniem (nieodczytana z sesji): http://www.moe.gov.cn/srcsite/A26/s8001/202204/t20220420_619921.html
- [WTÓRNE] 信息科技 – miejsce w planie: „在3~8年级独立开课，在1~2年级、9年级融合开课” (pol. „osobny przedmiot w kl. 3–8; w kl. 1–2 i 9 – wpleciony w inne przedmioty”) – [kidscodes.cn](https://kidscodes.cn/1759.html) (streszczenie wyszukiwarki); spis treści standardu w lustrze uczelnianym: [信息科技课程标准 (2022年版), PDF – statics.scnu.edu.cn](https://statics.scnu.edu.cn/pics/xxjs/2023/0615/1686822235566375.pdf) (host zablokowany, czytałem tylko streszczenie wyszukiwarki).
- [WTÓRNE] Moduły wg etapów: kl. 3–4: „在线学习与生活”, „数据与编码” (+ temat międzyprzedmiotowy „数据编码探秘”); kl. 5–6: „身边的算法”, „过程与控制” (+ „小型系统模拟”); kl. 7–9: „互联网应用与创新”, „物联网实践与探索”, „人工智能与智慧社会” (+ „互联智能设计”) – [streszczenie wyszukiwarki na podstawie spisu treści standardu i artykułu xbgjxt.swu.edu.cn](https://xbgjxt.swu.edu.cn/article/doi/10.13718/j.cnki.jsjy.2022.04.007); [lsnu.edu.cn](https://jiaoknew.lsnu.edu.cn/info/1096/3386.htm)
- [WTÓRNE] „过程与控制” (kl. 5–6): „使用顺序、分支、循环三种基本控制结构简单描述实施过程，通过编程验证该过程” (pol. „opisać przebieg trzema strukturami sterującymi – sekwencja, rozgałęzienie, pętla – i sprawdzić programem”); „能将问题分解为可处理的子问题，了解反馈对系统优化的作用” (pol. „rozkładać problem na podproblemy; rozumieć rolę sprzężenia zwrotnego w optymalizacji systemu”) – [streszczenie wyszukiwarki; m.in. xbgjxt.swu.edu.cn](https://xbgjxt.swu.edu.cn/article/doi/10.13718/j.cnki.jsjy.2022.04.008)
- [WTÓRNE] „数据与编码” (kl. 3–4): „知道数据编码的作用与意义，理解数据编码是保持信息社会组织与秩序的科学基础” (pol. „zna rolę i sens kodowania danych; rozumie, że kodowanie danych jest naukową podstawą porządku społeczeństwa informacyjnego”) – tamże (streszczenie).
- [WTÓRNE] 科学 (przyroda) 2022: etapy 1–2, 3–4, 5–6, 7–9; obszar 技术与工程 (technika i inżynieria) z cyklem projektowania i wykonania („工程设计与物化”); jako przykład w standardzie podano „制作指南针（3～4年级）” (pol. „zrobienie kompasu, kl. 3–4”) – [eshukan.com – omówienie standardu](http://www.eshukan.com/academic/show.aspx?id=81994&cid=29); członek zespołu standardu o „工匠精神、技术意识、工程思维” – [tsinghua.edu.cn](https://www.tsinghua.edu.cn/info/1662/99755.htm). Liczby i nazw rdzeniowych pojęć nie potwierdziłem.
- [WTÓRNE] 劳动 (praca): 3 kategorie (codzienna, produkcyjna, usługowa), 10 grup zadań (任务群), m.in. 传统工艺制作, 工业生产劳动, 新技术体验与应用; w kl. 7–9 „选择1-2项新技术，如三维打印技术、激光切割技术、智能控制技术、数控加工技术、液态金属打印技术等” (pol. „wybrać 1–2 nowe technologie, np. druk 3D, cięcie laserowe, sterowanie inteligentne, obróbka CNC, druk ciekłym metalem”) – [chinanews.com.cn](https://www.chinanews.com.cn/sh/2022/05-07/9748133.shtml); [news.sina.cn](https://news.sina.cn/2022-05-16/detail-imcwipik0059449.d.html) (prasa).

**Tematy (wszystkie [WTÓRNE] – wymagają potwierdzenia w PDF przed lekcją)**
- **C1. Kodowanie danych (数据与编码), kl. 3–4** → PL **kl. 3/4**. Wartość: kod = umowa (np. kod pocztowy, kod kreskowy, numer w dzienniku – przykłady moje). Pomysł: „zaszyfruj obrazek kratkami 0/1”, „dlaczego każdy ma inny numer?”. Polska kl. 3–4: system dwójkowy **brak** (jest dopiero w kl. 8).
- **C2. Algorytmy wokół nas (身边的算法), kl. 5–6** → PL **kl. 4**. Polska kl. 4: algorytmika jest – mała nowość.
- **C3. Proces i sterowanie, sprzężenie zwrotne (过程与控制), kl. 5–6** → PL **kl. 4**. Wartość: pętla sprzężenia zwrotnego (termostat, spłuczka – przykłady moje do sprawdzenia). Polska kl. 4: sekwencja/warunek/pętla są; **sprzężenie zwrotne – nieznane**. Pomysł: SVG „czujnik → porównaj z celem → popraw” na przykładzie grzejnika.
- **C4. Internet rzeczy (物联网实践与探索), kl. 7–9** → PL **kl. 8**. Polska kl. 8: brak IoT/mikrokontrolerów jako wymagania. Łączy się z J10/K10 – trzeci kraj w dziale „Czujniki i sterowanie”.
- **C5. SI i inteligentne społeczeństwo (人工智能与智慧社会), kl. 7–9** → PL **kl. 8** (polska kl. 8 – brak SI). Łączy się z K12. Uwaga: pomijać wątki ideologiczne, jeśli są w tym module.
- **C6. Internet – zastosowania (互联网应用与创新), kl. 7–9** → PL kl. 8 (Polska ma sieci – mała nowość).
- **C7. Kompas własnej roboty (przykład z 科学 kl. 3–4)** → PL **kl. 3/4** (magnesy – łączy się z J2/K2).
- **C8. Nowe technologie wytwarzania (劳动, kl. 7–9): druk 3D, cięcie laserowe, CNC** → PL **kl. 8** – tylko część techniczna (jak działa, do czego służy; „warstwa po warstwie” vs „wycinanie”). Polska: nieznane.

### Inferences
- Chiński przedmiot 信息科技 to najczystszy przykład „ścieżki” od kodowania danych (kl. 3–4) przez algorytmy i sterowanie (kl. 5–6) po IoT i SI (kl. 7–9). Jako **mapa** pasuje do wszystkich trzech klas, ale do aplikacji nadaje się dopiero po odczytaniu PDF (zasada „nie piszemy faktów z pamięci”).
- 科学 i 劳动 dają głównie kontekst (inżynieria, druk 3D) – mniej konkretnych, sprawdzalnych wymagań niż Japonia i Korea.

### Gaps
- Nie przeczytałem żadnego chińskiego dokumentu źródłowego (blokada sieci). Do odblokowania: http://www.moe.gov.cn (proxy nie obsługuje przekierowania na HTTP) lub lustrzany PDF (statics.scnu.edu.cn). Wszystkie cytaty chińskie pochodzą ze streszczeń wyszukiwarki i mogą się różnić od oryginału.
- Nie wiem, jak dokładnie brzmią wymagania 科学 dla maszyn prostych (dźwignia, krążek) ani w których klasach są – wyszukiwanie nie dało tekstu.
- Nie wiem, czy w obecnym (2026) roku w Chinach zapowiedziano zmiany standardu 2022.

---

## 4. Czy temat jest nowy dla polskiego ucznia? (zestawienie)

### Takeaway
Z tematów azjatyckich **nowe dla polskich dzieci** (wg notatki polskiej) są przede wszystkim: soroban (wszystkie klasy), magnesy i obwód w kl. 3, dźwignia/równia pochyła i reguła równowagi (wszystkie klasy), sprzężenie zwrotne i czujniki/sterowanie (kl. 4 i 8), SI w kl. 8, mechanizmy i rysunek techniczny w kl. 8, wykres pudełkowy w kl. 8. Programowanie blokowe, roboty i SI w kl. 4 Polska **już ma** (nowa podstawa 2026).

### Cited Findings
- Statusy w polskiej podstawie (jest/częściowo/brak) – z tabeli w [polska-punkt-odniesienia.md](./polska-punkt-odniesienia.md), opartej na [PP2024 – Dz.U. 2024 poz. 996](https://eli.gov.pl/api/acts/DU/2024/996/text/O/D20240996.pdf) i [PP2026 – Dz.U. 2026 poz. 378](https://eli.gov.pl/api/acts/DU/2026/378/text/O/D20260378.pdf).

| Temat (kraj, kod) | Klasa PL | Polska (wg notatki polskiej) | Weryfikacja zagranicy |
|---|---|---|---|
| Soroban (JP J1) | 3 (4) | brak | OFIC |
| Magnesy (JP J2, KR K2, CN C7) | 3 | brak w kl. 3 | OFIC (JP, KR); WTÓRNE (CN) |
| Obwód bateria–żarówka (JP J3) | 3 | częściowo | OFIC |
| Dźwignia, równia pochyła (KR K1) | 3/4 | brak | OFIC |
| Baterie szeregowo/równolegle, silnik (JP J5, KR K3) | 4 | częściowo / nieznane | OFIC |
| Elektromagnes (JP J6, KR K3) | 4 | dopiero kl. 8 (fakultatywnie) | OFIC |
| Reguła równowagi dźwigni (JP J7) | 4 / 8 | brak | OFIC |
| Wielokąty foremne programem (JP J9) | 4 | programowanie jest; połączenie – nieznane | OFIC |
| Wynalazek i patent (KR K4) | 4 | proces projektowy jest; patent – nieznane | OFIC |
| Pojazd: napęd–kierowanie–hamulec (KR K5) | 4 | częściowo | OFIC |
| Budynki vs budowle inżynierskie (KR K6) | 4 | częściowo | OFIC |
| Dane analogowe vs cyfrowe (KR K9) | 4 | nieznane | OFIC |
| Kodowanie danych (CN C1) | 3/4 | brak (system dwójkowy dopiero kl. 8) | WTÓRNE |
| Sprzężenie zwrotne (CN C3) | 4 | nieznane | WTÓRNE |
| Pomiar i sterowanie / physical computing / IoT (JP J10, KR K10, CN C4) | 8 | częściowo (tylko warunki realizacji) | OFIC (JP, KR) |
| SI – trenowanie modelu (KR K12, CN C5) | 8 | brak | OFIC (KR) |
| Mechanizmy i przekładnie (KR K13, JP J12) | 8 | brak w VII–VIII | OFIC |
| Rysunek izometryczny, rzuty (JP J13, KR K15) | 8 | brak w VII–VIII | OFIC |
| Wykres pudełkowy (JP J15) | 8 | prawdopodobnie brak; mediana wyłączona z egzaminu | OFIC |
| Druk 3D, CNC, laser (CN C8) | 8 | nieznane | WTÓRNE |

### Inferences
- Najsilniejsze kandydatury na kolejne działy (zbieżność kilku krajów + luka w Polsce): **kl. 3** – „Magnesy” (JP+KR+CN) i „Soroban” (JP); **kl. 4** – „Obwody: baterie, żarówka, silnik, elektromagnes” (JP+KR) i „Pojazd i wynalazek” (KR); **kl. 8** – „Czujniki i sterowanie” (JP+KR+CN) oraz „SI: jak uczy się maszyna” (KR+CN).

### Gaps
- Statusy „nieznane” wymagają pełnotekstowego sprawdzenia PP2024/PP2026 (np. „patent”, „analogow”, „sprzężeni”, „kwartyl”).

---

## 5. Bezpieczne elementy kulturowe (2–4 na kraj)

### Takeaway
Każdy z elementów poniżej ma oparcie w dokumencie oficjalnym (podstawa programowa lub UNESCO). Najciekawsze dla dzieci: japońskie dzieci same sprzątają szkołę w ramach dyżurów (zapisane w podstawie), uczą się alfabetu łacińskiego (rōmaji) w kl. 3 i liczą na sorobanie; koreańskie dzieci uczą się w kl. 1–2 nazw i dźwięków liter hangul; chińskie liczydło (zhusuan) jest na liście niematerialnego dziedzictwa UNESCO.

### Cited Findings
**Japonia**
- [OFIC] Dyżury i sprzątanie: „清掃などの当番活動や係活動等の自己の役割を自覚して協働することの意義を理解し…” (pol. „rozumieć sens współpracy przy dyżurach, takich jak sprzątanie, i przy pełnieniu funkcji w klasie”) – [小学校学習指導要領, 特別活動, s. 184 (PDF s. 186)](https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_01.pdf). Uwaga: dokument mówi o „dyżurach takich jak sprzątanie” – nie pisać, że „uczniowie sprzątają całą szkołę codziennie” (tego nie potwierdza).
- [OFIC] Rōmaji (alfabet łaciński) w kl. 3: „第３学年においては，日常使われている簡単な単語について，ローマ字で表記されたものを読み，ローマ字で書くこと。” (pol. „w kl. 3 czytać i pisać alfabetem łacińskim proste słowa używane na co dzień”) – [tamże, 国語, s. 32 (PDF s. 34)](https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_01.pdf)
- [OFIC] Znaki kanji przypisane do klas: podstawa ma „別表の学年別漢字配当表” (pol. „tabelę znaków kanji przypisanych do poszczególnych klas”) – [tamże, 国語, s. 29 (PDF s. 31)](https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_01.pdf). Liczby znaków nie sprawdzałem – nie podawać bez weryfikacji.
- [OFIC] Tradycyjne rzemiosło w technice: „我が国の伝統的な技術についても扱い，緻密なものづくりの技などが我が国の伝統や文化を支えてきたことに気付かせること” (pol. „omawiać też tradycyjne japońskie techniki i pokazać, że precyzyjne rzemiosło podtrzymywało tradycję i kulturę”) – [中学校学習指導要領, 技術分野 3⑴ア, s. 135 (PDF s. 137)](https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_02.pdf)
- Soroban (J1) jest jednocześnie elementem kultury.

**Korea Południowa**
- [OFIC] Hangul w kl. 1–2: „[2국04-01] 한글 자모의 이름과 소릿값을 알고 정확하게 발음하고 쓴다.” (pol. „zna nazwy i wartości dźwiękowe liter hangul (spółgłosek i samogłosek), poprawnie wymawia i pisze”) – [교육부 고시 제2022-33호 [별책 5] 국어과 교육과정, w archiwum (붙임2)](https://www.moe.go.kr/boardCnts/viewRenew.do?boardID=141&boardSeq=93458&lev=0&searchType=null&statusYN=W&page=1&s=moe&m=040401&opType=N). Pomysł: „Jak koreańskie dzieci uczą się liter” – kilka liter hangul i ich dźwięki (konkretne litery i dźwięki trzeba sprawdzić w źródle encyklopedycznym, nie z pamięci).
- [OFIC] Koreański sposób nakrycia stołu: „[6실02-06] 우리나라 밥상차림을 이해하고, 함께 식사하는 즐거움을 경험하면서 … 식사 예절을 실천한다.” (pol. „rozumie koreański sposób nakrywania stołu (밥상차림), poznaje radość wspólnego posiłku, przestrzega zasad przy stole”) – [별책 10, 실과 kl. 5–6](https://www.moe.go.kr/boardCnts/fileDown.do?m=040401&s=moe&fileSeq=1512facbda6c234a1641ac7e9c156ca2). Szczegółów nakrycia dokument nie podaje.

**Chiny**
- [OFIC – UNESCO] „Chinese Zhusuan, knowledge and practices of mathematical calculation through the abacus” – wpis na Listę reprezentatywną niematerialnego dziedzictwa ludzkości w 2013 r. (decyzja 8.COM, Baku) – [UNESCO ICH, element 00853](https://ich.unesco.org/en/RL/chinese-zhusuan-knowledge-and-practices-of-mathematical-calculation-through-the-abacus-00853); [decyzja 8.COM 8.8](https://ich.unesco.org/en/decisions/8.COM/8.8). Pomysł: porównanie chińskiego suanpanu z japońskim sorobanem i polskim liczydłem (szczegóły budowy – do sprawdzenia na stronie UNESCO / w encyklopedii).
- [WTÓRNE] 劳动 ma grupę zadań „传统工艺制作” (wykonywanie tradycyjnych wyrobów rzemieślniczych) – [chinanews.com.cn](https://www.chinanews.com.cn/sh/2022/05-07/9748133.shtml). Konkretnych rzemiosł nie potwierdziłem.

### Inferences
- Dobry „kulturowy” kafelek do działu kl. 3: „Jak liczą dzieci w Japonii i w Chinach” (soroban + zhusuan, UNESCO) – łączy kulturę z matematyką i ma mocne źródła.
- Dyżury ze sprzątaniem (Japonia) to ciekawostka bezpieczna, ale trzeba trzymać się dosłownego brzmienia podstawy.

### Gaps
- Nie sprawdzałem źródeł o pisowni chińskiej (pinyin, liczba znaków w klasach) – chiński standard języka niedostępny.
- Nie weryfikowałem w źródłach budowy sorobanu/suanpanu ani konkretnych liter hangul – przed lekcją potrzebne źródło encyklopedyczne.
