/* Klasa 8 – przedmioty-odnośniki do ścieżki egzaminacyjnej.
 * Polski, matematyka i angielski w klasie 8 uczą się według tej samej podstawy (Dz.U. 2024 poz. 996)
 * co ścieżka „Egzamin ósmoklasisty”, więc nie powielamy treści – kafelek prowadzi do egzamin.html.
 * Format: link: { track: '<id ścieżki>', subject: '<id przedmiotu w tamtej ścieżce>' }, topics: []. */
window.SUBJECTS.push(
  {
    id: 'polski',
    name: 'Język polski',
    icon: '📚',
    color: '#d6604d',
    link: { track: 'egzamin8', subject: 'polski' },
    linkNote: 'Lektury, gramatyka, formy wypowiedzi – ta sama podstawa co na egzaminie.',
    topics: [],
  },
  {
    id: 'matematyka',
    name: 'Matematyka',
    icon: '📐',
    color: '#3b82c4',
    link: { track: 'egzamin8', subject: 'matematyka' },
    linkNote: 'Działy egzaminacyjne – ta sama podstawa co w klasie 8. Dział „Symetrie” (poza egzaminem) jest na osobnym kafelku.',
    topics: [],
  },
  {
    id: 'angielski',
    name: 'Język angielski',
    icon: '🇬🇧',
    color: '#2f9e6e',
    link: { track: 'egzamin8', subject: 'angielski' },
    linkNote: 'Gramatyka, słownictwo, reading i listening – ta sama podstawa co na egzaminie.',
    topics: [],
  },
);
