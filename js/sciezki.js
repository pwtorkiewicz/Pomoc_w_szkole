/* Ścieżki nauki (klasa / egzamin). Każda ścieżka to osobna strona HTML ze wspólnym silnikiem js/app.js:
 * strona ustawia <body data-track="…"> i wczytuje tylko swoje pliki danych i lekcji.
 * Każda ścieżka ma własny zapis postępu w localStorage (storeKey), więc wyniki i powtórka błędów
 * dzieci z różnych klas na jednym urządzeniu się nie mieszają.
 * soon: true – na ekranie wyboru znaczek „w przygotowaniu”.
 * young: true – tryb dla młodszego ucznia (większe litery, przycisk 🔊 „Posłuchaj” przy pytaniach i lekcjach,
 *   quiz z 8 losowych pytań działu, gwiazdki zamiast procentów, bez sprawdzianu z całego przedmiotu).
 * speak: true – same przyciski 🔊 (bez reszty trybu young).
 * UWAGA: nie zmieniaj storeKey istniejącej ścieżki – uczeń straciłby zapisany postęp. */
window.TRACKS = [
  {
    id: 'kl3',
    page: 'klasa3.html',
    icon: '🧸',
    name: 'Klasa 3',
    about: 'Edukacja wczesnoszkolna: polski, matematyka, angielski, przyroda, edukacja społeczna i informatyczna, a do tego plastyka, muzyka, technika i WF – lekcje z obrazkami, quizy z gwiazdkami, dyktanda, zegar, monety i kalendarz. Pytania można odsłuchać.',
    storeKey: 'pomoc_kl3_v1',
    color: '#e0803a',
    young: true,
    intro: 'Wybierz, czego chcesz się dziś pouczyć. Zacznij od <b>lekcji</b>, potem zagraj w <b>quiz</b> i zbieraj gwiazdki <span class="stars"><b>★</b></span>. Przycisk 🔊 przeczyta ci pytanie.',
  },
  {
    id: 'kl4',
    page: 'klasa4.html',
    icon: '🎨',
    name: 'Klasa 4',
    about: 'Wszystkie przedmioty według nowej podstawy programowej – lekcje, ściągi, fiszki i quizy: polski, matematyka, angielski, przyroda, historia, informatyka, technika, muzyka, plastyka i WF.',
    storeKey: 'pomoc_kl4_v1',
    color: '#2e9e6b',
  },
  {
    id: 'kl8',
    page: 'klasa8.html',
    icon: '🔬',
    name: 'Klasa 8',
    about: 'Bieżąca nauka w klasie 8: fizyka, chemia, biologia, geografia, historia, WOS, EDB, informatyka, niemiecki (drugi język) i symetrie z matematyki – lekcje, ściągi, fiszki, quizy i zadania otwarte. Polski, matematyka i angielski prowadzą do ścieżki egzaminacyjnej.',
    storeKey: 'pomoc_kl8_v1',
    color: '#8e5bd0',
    intro: 'Wybierz przedmiot. W każdym dziale masz <b>lekcję</b>, <b>ściągę</b>, <b>fiszki</b> i <b>quiz</b>, a w części działów – <b>zadania otwarte</b> z obliczeniami. Błędne odpowiedzi trafią do powtórki. Polski, matematyka i angielski otwierają się w ścieżce egzaminacyjnej (ta sama podstawa programowa).',
  },
  {
    id: 'egzamin8',
    page: 'egzamin.html',
    icon: '🎯',
    name: 'Egzamin ósmoklasisty',
    about: 'Przygotowanie do egzaminu: polski, matematyka, angielski. Ćwiczenia jak w arkuszu CKE, testy próbne.',
    storeKey: 'pomoc8_v2',
    color: '#4f5bd5',
    exam: true,
    intro: 'Wybierz przedmiot. W każdym dziale znajdziesz <b>ściągę</b>, <b>fiszki</b> i <b>quiz</b>. Pytania, na które odpowiesz źle, trafią do powtórki. Są też ćwiczenia jak na egzaminie: <b>zadania otwarte</b>, <b>czytanie ze zrozumieniem</b>, a w angielskim <b>reading</b>, <b>listening</b> i <b>środki językowe</b>.',
  },
];
// Klucz w localStorage z ostatnio wybraną ścieżką (podświetlana na ekranie wyboru).
window.TRACK_LAST_KEY = 'pomoc_sciezka';
