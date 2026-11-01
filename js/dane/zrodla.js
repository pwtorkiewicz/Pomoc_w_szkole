/* Opis podstaw, na których przygotowano materiał (strona „Źródła”). */
window.SOURCES = {
  html: `
    <p>Materiał sprawdzono w <b>oryginalnych dokumentach</b>: informatorach i komunikatach Centralnej Komisji Egzaminacyjnej (cke.gov.pl) oraz w <b>tekście podstawy programowej</b> (Dz.U. 2024 poz. 996, eli.gov.pl). Dokumenty pobrano 31 października 2026 r. Materiał dotyczy uczniów, którzy piszą egzamin ósmoklasisty w <b>maju 2027 r.</b> Ramka „Na jakiej podstawie” w każdym dziale podaje numer wymagania z podstawy albo dokument CKE.</p>

    <h3>Podstawa prawna</h3>
    <p>Według informatora CKE od 2025 r. zadania egzaminacyjne sprawdzają wymagania <b>podstawy programowej z rozporządzenia Ministra Edukacji z 28 czerwca 2024 r.</b> (Dz.U. 2024 poz. 996). Nowa podstawa „Kompas Jutra” od 1 września 2026 r. obejmuje tylko klasy I i IV, więc <b>nie dotyczy</b> obecnych ósmoklasistów.</p>

    <h3>Terminy egzaminu w 2027 r. (komunikat CKE z 20.08.2026)</h3>
    <table>
      <tr><th>Przedmiot</th><th>Termin główny</th><th>Termin dodatkowy</th></tr>
      <tr><td>Język polski</td><td>10 maja 2027</td><td>9 czerwca 2027</td></tr>
      <tr><td>Matematyka</td><td>11 maja 2027</td><td>10 czerwca 2027</td></tr>
      <tr><td>Język obcy</td><td>12 maja 2027</td><td>11 czerwca 2027</td></tr>
    </table>
    <p>Wyniki: 6 lipca 2027 r.</p>

    <h3>Co wynika z dokumentów CKE</h3>
    <ul>
      <li><b>Język polski.</b> Na liście lektur obowiązkowych są:
        <ul>
          <li>klasy VII–VIII: <i>Opowieść wigilijna</i>, <i>Zemsta</i>, <i>Kamienie na szaniec</i>, <i>Dziady cz. II</i>, <i>Mały Książę</i>, <i>Balladyna</i>;</li>
          <li>utwory krótsze i fragmenty: fraszki, pieśń, treny VII i VIII, <i>Reduta Ordona</i>, <i>Świtezianka</i>, <i>Pan Tadeusz</i> (księgi I, II, IV, X, XI, XII), <i>Artysta</i>, <i>Latarnik</i>, <i>Quo vadis</i> (fragmenty), <i>Syzyfowe prace</i> (fragmenty).</li>
        </ul>
        Lista będzie wydrukowana na początku arkusza.</li>
      <li><b>Lektury klas IV–VI.</b> Informator zapisuje, że ograniczenie zadań do fragmentu w arkuszu obowiązuje w latach szkolnych <b>2024/2025 i 2025/2026</b>. Dla roku 2026/2027 takiego zapisu nie ma, dlatego aplikacja zawiera treść tych lektur.</li>
      <li><b>Wypracowanie.</b> Uczeń wybiera opowiadanie albo rozprawkę/przemówienie, pisze co najmniej 200 wyrazów i może dostać 20 pkt według 8 kryteriów. Jeśli praca nie odwołuje się do lektury wskazanej w poleceniu, dostaje 0 pkt.</li>
      <li><b>Matematyka.</b> Wymagania obejmują klasy IV–VIII. W arkuszu jest 20–21 zadań (30 pkt), w tym zadania prawda/fałsz i na dobieranie. Kalkulatora nie ma na liście przyborów, potrzebna jest linijka.</li>
      <li><b>Język angielski.</b> Poziom A2 (A2+ w rozumieniu tekstów i nagrań). Z gramatyki obowiązują struktury z listy CKE, w tym <b>zdania warunkowe tylko typu 0 i I</b>. Wypowiedź pisemna to e-mail albo wpis na blogu (50–120 wyrazów, 3 podpunkty, 10 pkt).</li>
    </ul>

    <h3>Co poprawiono po sprawdzeniu dokumentów CKE</h3>
    <ul>
      <li>Polski: dodano lektury klas IV–VI, <i>Syzyfowe prace</i>, dział o frazeologizmach i znaczeniu wyrazów (to częsty temat zadań w informatorze) oraz pełne kryteria oceniania wypracowania.</li>
      <li>Matematyka: dodano symetrię osiową figur (wymaganie z klas IV–VI) i podano działy według informatora.</li>
      <li>Angielski: usunięto zdania warunkowe typu II (są poza listą CKE). Dodano czasowniki modalne, stronę bierną, przyimki i zaimki oraz zasady oceniania wypowiedzi pisemnej.</li>
      <li>Na stronie każdego przedmiotu jest teraz opis egzaminu: termin, czas i punkty.</li>
    </ul>

    <h3>Co poprawiono po sprawdzeniu tekstu podstawy programowej</h3>
    <ul>
      <li><b>Matematyka.</b> W podstawie jest zapis: „Dział XV [Symetrie] dla klas VII i VIII może zostać zrealizowany po egzaminie ósmoklasisty”. Dlatego w aplikacji jest tylko symetria osiowa figur z klas IV–VI. Usunięto treści spoza podstawy:
        <ul>
          <li>potęgi o wykładniku 0 i ujemnym (wymagane są tylko wykładniki całkowite dodatnie, a ujemne pojawiają się wyłącznie w notacji wykładniczej);</li>
          <li>medianę i dominantę (wymagana jest średnia arytmetyczna i odczytywanie danych);</li>
          <li>regułę mnożenia w kombinatoryce (podstawa wymaga zliczania „w przypadkach niewymagających stosowania reguł mnożenia i dodawania”);</li>
          <li>wzór na sumę kątów n-kąta.</li>
        </ul>
        Dodano: wartość bezwzględną, liczby pierwsze, dzielenie z resztą, długość odcinka w układzie współrzędnych, szacowanie pierwiastków, nierówność trójkąta, kąty przy prostych równoległych i proporcjonalność prostą.</li>
      <li><b>Język polski.</b> Potwierdzono, że imiesłowy, słowotwórstwo i składnia są w podstawie klas VII–VIII. Dodano:
        <ul>
          <li>imiesłowowy równoważnik zdania, formy bezosobowe, mowę zależną i niezależną, wypowiedzenia wielokrotnie złożone;</li>
          <li>dział o głoskach, akcencie (z wyjątkami) i ortografii;</li>
          <li>dział o stylach, słownictwie i komunikacji, w tym o manipulacji językowej;</li>
          <li>pojęcia: inwokacja, symbol, alegoria, ironia, reportaż, wywiad.</li>
        </ul></li>
      <li><b>Język angielski.</b> Lista tematów słownictwa ma teraz 13 pozycji, zgodnie z podstawą (wcześniej był tam zbędny temat „Życie społeczne”).</li>
    </ul>

    <h3>Rozbudowa materiału – etap 1 (listopad 2026)</h3>
    <p>1 listopada 2026 r. porównano wszystkie działy aplikacji z wymaganiami szczegółowymi podstawy programowej (Dz.U. 2024 poz. 996) i z listą struktur gramatycznych z informatora CKE z języka angielskiego. Uzupełniono braki, które najbardziej wpływają na wynik egzaminu:</p>
    <ul>
      <li><b>Matematyka:</b> dział „Ułamki zwykłe i dziesiętne” (kl. IV–VI, działy IV i V), dział „Przystawanie trójkątów i dowody” (kl. VII–VIII, dział VIII, wymaganie ogólne IV) oraz tryb <b>zadań otwartych</b> z rozwiązaniami krok po kroku. Część zadań to przykłady podane wprost w podstawie programowej.</li>
      <li><b>Język polski:</b> dział „Interpunkcja i ortografia” (kl. IV–VI II.4.1–2, kl. VII–VIII II.4.1–4).</li>
      <li><b>Język angielski:</b> dział „Rzeczowniki, przedimki, liczebniki” (lista struktur CKE: rzeczownik, przedimek, liczebnik, zaimki) i słownictwo do każdego z 13 tematów z podstawy.</li>
    </ul>
    <p>Kolejne etapy (czytanie ze zrozumieniem, słuchanie, pozostałe wymagania z klas IV–VI) są opisane w pliku <code>docs/PLAN.md</code> w repozytorium.</p>

    <h3>Ograniczenia</h3>
    <ul>
      <li>Informator CKE pokazuje przykłady zadań, a nie wszystkie możliwe typy. Pytania w aplikacji to ćwiczenia przygotowane na podstawie wymagań, a nie oficjalne zadania CKE.</li>
      <li>Zasady punktacji przy zadaniach otwartych są orientacyjne – przygotowane w stylu zasad oceniania CKE, ale nie są oficjalnym kluczem.</li>
      <li>Streszczenia lektur są krótkie. Nie zastąpią przeczytania utworu.</li>
    </ul>

    <h3>Dokumenty źródłowe</h3>
    <ul>
      <li><a href="https://cke.gov.pl/images/_EGZAMIN_OSMOKLASISTY/Informatory/2025/standard/Informator_E8_polski_2025_P1.pdf">Informator o egzaminie ósmoklasisty z języka polskiego od r. szk. 2024/2025</a></li>
      <li><a href="https://cke.gov.pl/images/_EGZAMIN_OSMOKLASISTY/Informatory/2025/standard/Informator_E8_matematyka_2025_P1.pdf">Informator o egzaminie ósmoklasisty z matematyki od r. szk. 2024/2025</a></li>
      <li><a href="https://cke.gov.pl/images/_EGZAMIN_OSMOKLASISTY/Informatory/2025/standard/Informator_P1_2025_angielski.pdf">Informator o egzaminie ósmoklasisty z języka angielskiego od r. szk. 2024/2025</a></li>
      <li><a href="https://cke.gov.pl/images/_EGZAMIN_OSMOKLASISTY/Informatory/2026/20251013%20Informator%20Cz%C4%99%C5%9B%C4%87%20og%C3%B3lna%20E8%20od%202026.pdf">Informator – zasady przeprowadzania egzaminu (aktualizacja z 10.10.2025)</a></li>
      <li><a href="https://cke.gov.pl/images/_EGZAMIN_OSMOKLASISTY/2026_2027/komunikaty/20260820_E8_EM_Komunikat_o_harmonogramie_2027_fin.pdf">Komunikat o harmonogramie egzaminów w 2027 r.</a></li>
      <li><a href="https://cke.gov.pl/images/_EGZAMIN_OSMOKLASISTY/2026_2027/komunikaty/20260820_E8_EM_Komunikat_o_przyborach_2027_fin.pdf">Komunikat o materiałach i przyborach pomocniczych w 2027 r.</a></li>
      <li><a href="https://cke.gov.pl/egzamin-osmoklasisty/informatory/">Wszystkie informatory CKE</a></li>
      <li><a href="https://eli.gov.pl/eli/DU/2024/996/ogl">Rozporządzenie Ministra Edukacji z 28.06.2024 – podstawa programowa (Dz.U. 2024 poz. 996)</a></li>
    </ul>
    <div class="tip">💡 Przed egzaminem zajrzyj na cke.gov.pl. Jeśli CKE opublikuje nowy informator albo komunikat o lekturach na 2027 r., to on będzie obowiązywał.</div>
  `,
};
