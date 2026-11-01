/* Zestawy ćwiczeń z języka angielskiego – Reading (rozumienie tekstów pisanych).
 * Typy zadań jak w informatorze CKE (od r. szk. 2024/2025): wybór wielokrotny, dobieranie,
 * zadania z lukami (po angielsku i po polsku). Teksty i zadania napisane do aplikacji –
 * osoby, szkoły, firmy i wydarzenia są wymyślone. Format: README.md, sekcja „Zestawy ćwiczeń”. */
window.EXERCISES = window.EXERCISES || [];

window.EXERCISES.push({
  subject: 'angielski',
  mode: 'reading',
  id: '30em55',
  title: 'Krótkie wiadomości i ogłoszenia',
  kind: 'Teksty użytkowe · wybór wielokrotny',
  basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), język obcy nowożytny – wariant II.1: III.1 (główna myśl), III.2 (intencja autora), III.3 (kontekst), III.4 (określone informacje); tematy I.7, I.8, I.9, I.10; informator CKE: rozumienie tekstów pisanych – wybór wielokrotny.',
  intro: 'Przeczytaj teksty 1–5. W zadaniach 1–5 wybierz odpowiedź zgodną z treścią tekstu.',
  text: `
    <h3>Tekst 1.</h3>
    <div class="box">
      <p><b>GREENFIELD SPORTS CENTRE</b></p>
      <p>Our swimming pool will be closed from 3rd to 14th March because we are repairing the roof. During this time, you can use the pool at Riverside School for free – just show your Greenfield membership card at the entrance. The gym and the tennis courts will stay open as usual.</p>
    </div>
    <h3>Tekst 2.</h3>
    <div class="box">
      <p>Hi Tom, I'm so sorry about yesterday! I forgot about our maths project because I was at my grandma's birthday party. Can we meet today after school and finish it? I'll bring the posters and the glue. Max</p>
    </div>
    <h3>Tekst 3.</h3>
    <div class="box">
      <p><b>MIA'S TRAVEL BLOG</b> – Monday, 12 July</p>
      <p>We arrived in Lockwood by train early this morning. Our hotel room wasn't ready yet, so we left our bags at reception and went for a walk to the old castle. Then it started to rain really hard, so we ran into a little café near the castle. We stayed there for two hours, drank hot chocolate and played cards. Tomorrow we're taking a bus tour around the town – I hope the weather will be better!</p>
    </div>
    <h3>Tekst 4.</h3>
    <div class="box">
      <p>Please switch off your phones or put them on silent. Taking photos and filming are not allowed during the show. You can buy ice cream and drinks in the café on the ground floor during the 15-minute break between the two parts of the play.</p>
    </div>
    <h3>Tekst 5.</h3>
    <div class="box">
      <p><b>To:</b> Techno Corner – customer service<br><b>Subject:</b> Order 4471</p>
      <p>Hello,</p>
      <p>Two weeks ago I ordered headphones from your online shop. They arrived yesterday, but they are blue, not black as I ordered. Also, the left speaker doesn't work. I'd like to send them back and get my money back – I don't want a new pair. Could you tell me how to do it?</p>
      <p>Regards,<br>Olivia Hart</p>
    </div>`,
  items: [
    {
      id: 'zw9rfg',
      q: 'Tekst 1. The notice is mainly about',
      options: ['a new swimming pool at Riverside School.', 'a different place where members can swim for a short time.', 'new opening hours of the gym and the tennis courts.'],
      answer: 1,
      explain: 'Basen jest zamknięty od 3 do 14 marca, a w tym czasie można pływać gdzie indziej: „you can use the pool at Riverside School for free”. Nie ma mowy o nowym basenie, a siłownia i korty działają „as usual” – bez zmian.',
    },
    {
      id: 'fcpht9',
      q: 'Tekst 2. Max wrote the message to',
      options: ['invite Tom to a birthday party.', 'ask Tom to bring some things to school.', 'say sorry to Tom.'],
      answer: 2,
      explain: 'Max przeprasza: „I\'m so sorry about yesterday! I forgot about our maths project”. Przyjęcie u babci już się odbyło, a plakaty i klej przyniesie sam Max („I\'ll bring the posters and the glue”).',
    },
    {
      id: 'z86urb',
      q: 'Tekst 3. What did Mia and her family do when it started to rain?',
      options: ['They waited in a café.', 'They went back to their hotel.', 'They went on a bus tour.'],
      answer: 0,
      explain: '„Then it started to rain really hard, so we ran into a little café near the castle. We stayed there for two hours”. Wycieczka autobusowa jest zaplanowana dopiero na jutro („Tomorrow we\'re taking a bus tour”).',
    },
    {
      id: '4s0z8f',
      q: 'Tekst 4. Where can you see this notice?',
      options: ['in a cinema', 'at a sports centre', 'in a theatre'],
      answer: 2,
      explain: 'Kluczowe słowo to „the play” – sztuka teatralna, podzielona na dwie części z przerwą („the 15-minute break between the two parts of the play”). W kinie ogląda się film, a nie sztukę.',
    },
    {
      id: 'ss9msg',
      q: 'Tekst 5. What does Olivia want?',
      options: ['to get black headphones instead of the blue ones', 'to return the headphones and get a refund', 'to order a second pair of headphones'],
      answer: 1,
      explain: 'Olivia pisze: „I\'d like to send them back and get my money back – I don\'t want a new pair”. Czyli chce zwrócić słuchawki i odzyskać pieniądze, a nie dostać nowe (czarne) ani zamówić drugą parę.',
    },
  ],
});

window.EXERCISES.push({
  subject: 'angielski',
  mode: 'reading',
  id: 'wlep0j',
  title: 'Lis w nocy – zdania do luk',
  kind: 'Opowiadanie · dobieranie zdań do luk',
  basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), język obcy nowożytny – wariant II.1: III.5 (związki między częściami tekstu); tematy I.8 (podróżowanie i turystyka), I.13 (świat przyrody); informator CKE: rozumienie tekstów pisanych – dobieranie (zdania do luk, jedno zdanie dodatkowe).',
  intro: 'Przeczytaj tekst, z którego usunięto pięć zdań. Do każdej luki (1–5) dobierz brakujące zdanie (A–F), tak aby otrzymać spójny i logiczny tekst. Uwaga! Jedno zdanie podano dodatkowo – nie pasuje do żadnej luki.',
  text: `
    <h3>A FOX IN THE NIGHT</h3>
    <p>Last summer my cousin Leo and I went camping with our scout group near Lake Silver. On the first evening our leader, Mrs Grant, gave us one important rule: never keep food in your tent. <span class="gapno">(1)</span> ______ Leo, of course, didn't listen. He was hungry after the long walk, so he hid a bag of crisps and two sandwiches in the tent.</p>
    <p>In the middle of the night I woke up because I heard a strange noise. Something was moving around our tent. <span class="gapno">(2)</span> ______ I switched on my torch very slowly and looked outside. Two shiny eyes were looking at me! It was a young fox, and it wasn't afraid of me at all. <span class="gapno">(3)</span> ______ Leo left the bag open near the entrance before he went to sleep.</p>
    <p>I woke Leo up and we both shouted. The fox ran away into the forest, and the crisps went with it. <span class="gapno">(4)</span> ______ She wasn't angry, but she told us to clean everything up immediately.</p>
    <p>In the morning Leo told everyone that a wild animal attacked our tent. <span class="gapno">(5)</span> ______ Now, whenever we go camping, Leo puts all his food in a closed box in the car.</p>
    <div class="box">
      <p><b>A.</b> In its mouth it was holding Leo's bag of crisps.</p>
      <p><b>B.</b> Luckily, Leo put all his food in a closed box in the car.</p>
      <p><b>C.</b> All the noise woke up Mrs Grant, who came to see what was wrong.</p>
      <p><b>D.</b> “Animals can smell it from far away, and some of them aren't shy,” she explained.</p>
      <p><b>E.</b> But everybody laughed when I told them the real story about the little fox.</p>
      <p><b>F.</b> At first I thought it was Leo, but he was fast asleep next to me.</p>
    </div>`,
  items: [
    {
      id: 'lj6i5f',
      q: 'Luka (1) – które zdanie pasuje?',
      options: ['In its mouth it was holding Leo\'s bag of crisps.', 'Luckily, Leo put all his food in a closed box in the car.', 'All the noise woke up Mrs Grant, who came to see what was wrong.', '“Animals can smell it from far away, and some of them aren\'t shy,” she explained.', 'But everybody laughed when I told them the real story about the little fox.', 'At first I thought it was Leo, but he was fast asleep next to me.'],
      answer: 3,
      explain: 'Zdanie D wyjaśnia zasadę pani Grant: „it” to jedzenie („never keep food in your tent”), a „she explained” odnosi się do opiekunki. Zdanie B nie pasuje – zaraz potem czytamy, że Leo „didn\'t listen” i schował jedzenie w namiocie.',
    },
    {
      id: 'evppfn',
      q: 'Luka (2) – które zdanie pasuje?',
      options: ['In its mouth it was holding Leo\'s bag of crisps.', 'Luckily, Leo put all his food in a closed box in the car.', 'All the noise woke up Mrs Grant, who came to see what was wrong.', '“Animals can smell it from far away, and some of them aren\'t shy,” she explained.', 'But everybody laughed when I told them the real story about the little fox.', 'At first I thought it was Leo, but he was fast asleep next to me.'],
      answer: 5,
      explain: 'Coś porusza się przy namiocie („Something was moving around our tent”), więc narrator najpierw myśli, że to Leo – ale Leo śpi obok (F). Dopiero potem zapala latarkę i widzi lisa.',
    },
    {
      id: '0nymyv',
      q: 'Luka (3) – które zdanie pasuje?',
      options: ['In its mouth it was holding Leo\'s bag of crisps.', 'Luckily, Leo put all his food in a closed box in the car.', 'All the noise woke up Mrs Grant, who came to see what was wrong.', '“Animals can smell it from far away, and some of them aren\'t shy,” she explained.', 'But everybody laughed when I told them the real story about the little fox.', 'At first I thought it was Leo, but he was fast asleep next to me.'],
      answer: 0,
      explain: 'Lis trzyma w pysku paczkę chipsów (A). Następne zdanie wyjaśnia, skąd ją wziął: „Leo left the bag open near the entrance” – „the bag” to właśnie ta paczka.',
    },
    {
      id: 'l7zbqm',
      q: 'Luka (4) – które zdanie pasuje?',
      options: ['In its mouth it was holding Leo\'s bag of crisps.', 'Luckily, Leo put all his food in a closed box in the car.', 'All the noise woke up Mrs Grant, who came to see what was wrong.', '“Animals can smell it from far away, and some of them aren\'t shy,” she explained.', 'But everybody laughed when I told them the real story about the little fox.', 'At first I thought it was Leo, but he was fast asleep next to me.'],
      answer: 2,
      explain: 'Chłopcy krzyczą („we both shouted”), więc hałas budzi panią Grant (C). Po luce jest „She wasn\'t angry” – „she” to właśnie opiekunka, która przyszła sprawdzić, co się stało.',
    },
    {
      id: 'iszcl6',
      q: 'Luka (5) – które zdanie pasuje?',
      options: ['In its mouth it was holding Leo\'s bag of crisps.', 'Luckily, Leo put all his food in a closed box in the car.', 'All the noise woke up Mrs Grant, who came to see what was wrong.', '“Animals can smell it from far away, and some of them aren\'t shy,” she explained.', 'But everybody laughed when I told them the real story about the little fox.', 'At first I thought it was Leo, but he was fast asleep next to me.'],
      answer: 4,
      explain: 'Leo opowiada, że namiot zaatakowało dzikie zwierzę, „But” (E) wprowadza kontrast: wszyscy się śmieją, gdy narrator mówi, że to był mały lis. Zdanie B jest dodatkowe – przeczy historii, bo Leo trzymał jedzenie w namiocie.',
    },
  ],
});

window.EXERCISES.push({
  subject: 'angielski',
  mode: 'reading',
  id: '043d2g',
  title: 'Warsztaty na wakacje – osoby do ofert',
  kind: 'Ogłoszenia · dobieranie',
  basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), język obcy nowożytny – wariant II.1: III.4 (określone informacje); tematy I.5 (życie prywatne – czas wolny), I.9 (kultura), I.10 (sport), I.12 (nauka i technika); informator CKE: rozumienie tekstów pisanych – dobieranie.',
  intro: 'Przeczytaj, czego szukają cztery osoby (1–4), oraz opisy warsztatów wakacyjnych (A–E). Do każdej osoby dopasuj właściwy warsztat. Uwaga! Jeden opis podano dodatkowo – nie pasuje do żadnej osoby.',
  text: `
    <h3>SUMMER WORKSHOPS FOR TEENAGERS</h3>
    <div class="box"><p><b>A. ROBOT LAB</b> – Build and program your own small robot! Monday to Friday, 9 a.m. – 12 p.m. No experience needed, but you must bring your own laptop.</p></div>
    <div class="box"><p><b>B. WILD WEEKENDS</b> – Two weekends in the forest with our nature guides. Watch birds, look for animal tracks and sleep in tents. Not for people who hate insects!</p></div>
    <div class="box"><p><b>C. SPLASH SCHOOL</b> – Learn to sail on Lake Mirren. Classes every weekday from 2 p.m. to 5 p.m. You must be able to swim. Life jackets provided.</p></div>
    <div class="box"><p><b>D. STAGE STARS</b> – Act, sing and dance with professional actors. At the end of the course you perform in a real show for your families. Monday to Friday, 6 – 8 p.m.</p></div>
    <div class="box"><p><b>E. CLICK!</b> – Photography for beginners. Learn to take great pictures with your phone in the city park and the old town. Monday to Thursday, 10 a.m. – 12 p.m.</p></div>
    <h3>Who is looking for what?</h3>
    <p><b>1. Kasia:</b> I love animals and being outside, and spiders or mosquitoes don't scare me. On weekdays I help in my parents' shop, so I'm only free on Saturdays and Sundays.</p>
    <p><b>2. Tom:</b> I want to try a new sport on the water this summer. I'm a strong swimmer. I've got a job at a bakery in the mornings, so I'm only free after lunch.</p>
    <p><b>3. Ola:</b> I've always wanted to know how machines work, but I've never tried anything like that. My parents gave me a laptop for my birthday, so I've got everything I need.</p>
    <p><b>4. Ben:</b> I'm quite shy, but I'd like to change that. My dream is to be on stage one day. During the day I look after my little sister until my mum comes home from work at 5 p.m.</p>`,
  items: [
    {
      id: 'd4bwdb',
      q: '1. Kasia – który warsztat (A–E)?',
      options: ['ROBOT LAB', 'WILD WEEKENDS', 'SPLASH SCHOOL', 'STAGE STARS', 'CLICK!'],
      answer: 1,
      explain: 'Kasia kocha zwierzęta i przyrodę, nie boi się owadów i ma czas tylko w weekendy („I\'m only free on Saturdays and Sundays”). WILD WEEKENDS to „Two weekends in the forest” – obserwowanie ptaków i tropów zwierząt. Pozostałe warsztaty odbywają się w dni powszednie.',
    },
    {
      id: 'hhojw9',
      q: '2. Tom – który warsztat (A–E)?',
      options: ['ROBOT LAB', 'WILD WEEKENDS', 'SPLASH SCHOOL', 'STAGE STARS', 'CLICK!'],
      answer: 2,
      explain: 'Tom chce spróbować sportu na wodzie, dobrze pływa i jest wolny dopiero po południu („only free after lunch”). SPLASH SCHOOL to żeglarstwo, zajęcia „from 2 p.m. to 5 p.m.”, a warunkiem jest umiejętność pływania.',
    },
    {
      id: 'bxb96r',
      q: '3. Ola – który warsztat (A–E)?',
      options: ['ROBOT LAB', 'WILD WEEKENDS', 'SPLASH SCHOOL', 'STAGE STARS', 'CLICK!'],
      answer: 0,
      explain: 'Ola chce wiedzieć, „how machines work”, nie ma doświadczenia i ma laptop. ROBOT LAB: „No experience needed, but you must bring your own laptop”.',
    },
    {
      id: 'kah59m',
      q: '4. Ben – który warsztat (A–E)?',
      options: ['ROBOT LAB', 'WILD WEEKENDS', 'SPLASH SCHOOL', 'STAGE STARS', 'CLICK!'],
      answer: 3,
      explain: 'Ben marzy o scenie („to be on stage”) i jest wolny dopiero po 17, gdy mama wraca z pracy. STAGE STARS to zajęcia aktorskie z występem na koniec, „Monday to Friday, 6 – 8 p.m.”. Dodatkowy opis to CLICK! (fotografia) – nikt go nie szuka.',
    },
  ],
});

window.EXERCISES.push({
  subject: 'angielski',
  mode: 'reading',
  id: 'fg410y',
  title: 'Tydzień zdrowego jedzenia – luki po angielsku',
  kind: 'Ogłoszenie · luki w zdaniach (po angielsku)',
  basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), język obcy nowożytny – wariant II.1: III.4 (określone informacje), VIII.2 (przekazywanie w języku obcym informacji sformułowanych w tym języku); tematy I.3 (edukacja), I.6 (żywienie); informator CKE: rozumienie tekstów pisanych – zadanie z lukami.',
  intro: 'Przeczytaj ogłoszenie. Uzupełnij luki w zdaniach 1–5 zgodnie z treścią tekstu, tak aby jak najbardziej precyzyjnie oddać sens informacji. Luki uzupełnij w języku angielskim.',
  text: `
    <div class="box">
      <h3>BROOKSIDE SCHOOL – HEALTHY FOOD WEEK, 12–16 May</h3>
      <p>Join us for a week of tasty and healthy fun!</p>
      <p><b>Monday:</b> At lunchtime the school canteen gives everyone a free bowl of soup. It's made from vegetables from our school garden!</p>
      <p><b>Tuesday:</b> Cooking workshop with Anna Wells, the chef of the Olive Tree restaurant. There is space for only 15 students. Sign up with Mr Price in room 24 by Friday 9 May.</p>
      <p><b>Wednesday:</b> No sweets or fizzy drinks in the school shop today – only fruit, nuts and water.</p>
      <p><b>Thursday:</b> Breakfast Quiz in the library at 8 a.m. The winning class gets a big basket of fruit.</p>
      <p><b>Friday:</b> Picnic in the school garden at 12.30. Bring your own plate and cup – no plastic, please! We'll also give a prize for the most colourful salad.</p>
    </div>`,
  items: [
    {
      id: 'uz191o',
      type: 'input',
      q: 'The vegetables for Monday\'s soup come from the ______.',
      accept: ['school garden', 'the school garden', 'our school garden', 'garden', 'school\'s garden'],
      explain: 'W poniedziałek: „It\'s made from vegetables from our school garden!” – warzywa pochodzą ze szkolnego ogrodu.',
    },
    {
      id: 'ybliad',
      type: 'input',
      q: 'Only ______ students can take part in the cooking workshop.',
      accept: ['15', 'fifteen'],
      explain: '„There is space for only 15 students.” Liczba 24 to numer sali pana Price\'a, a nie liczba miejsc.',
    },
    {
      id: '65pxh0',
      type: 'input',
      q: 'The last day to sign up for the cooking workshop is ______.',
      accept: ['Friday 9 May', 'Friday, 9 May', '9 May', '9th May', 'May 9', 'May 9th', 'Friday 9th May', 'Friday, May 9', 'the 9th of May', '9th of May'],
      explain: '„Sign up with Mr Price in room 24 by Friday 9 May” – „by” znaczy „najpóźniej do”. Sam „Friday” to za mało: w Tygodniu Zdrowego Jedzenia jest też piątek 16 maja.',
    },
    {
      id: '2sv8jj',
      type: 'input',
      q: 'The class that wins the Breakfast Quiz gets a ______.',
      accept: ['basket of fruit', 'big basket of fruit', 'fruit basket', 'big fruit basket', 'basket with fruit', 'big basket with fruit', 'basket of fruits', 'basket with fruits'],
      explain: 'Czwartek: „The winning class gets a big basket of fruit.” Nagroda za najbardziej kolorową sałatkę dotyczy piątkowego pikniku.',
    },
    {
      id: '08pj3f',
      type: 'input',
      q: 'For the picnic, everyone has to bring their own ______.',
      accept: ['plate and cup', 'plate and a cup', 'a plate and a cup', 'cup and plate', 'cup and a plate', 'a cup and a plate', 'plates and cups', 'cups and plates', 'plate, cup', 'cup, plate'],
      explain: 'Piątek: „Bring your own plate and cup – no plastic, please!” Trzeba wpisać obie rzeczy – talerz i kubek.',
    },
  ],
});

window.EXERCISES.push({
  subject: 'angielski',
  mode: 'reading',
  id: '062q8x',
  title: 'Noc Kosmosu – luki po polsku',
  kind: 'Ogłoszenie · luki w wiadomości (po polsku)',
  basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), język obcy nowożytny – wariant II.1: III.4 (określone informacje), VIII.2 (przekazywanie w języku polskim informacji sformułowanych w języku obcym); tematy I.9 (kultura), I.12 (nauka i technika); informator CKE: rozumienie tekstów pisanych – zadanie z lukami (w języku polskim).',
  intro: 'Przeczytaj ogłoszenie. Uzupełnij luki 1–5 w wiadomości Oli zgodnie z treścią tekstu, tak aby jak najbardziej precyzyjnie oddać sens informacji. Luki uzupełnij w języku polskim.',
  text: `
    <div class="box">
      <h3>NORTHBRIDGE SCIENCE CENTRE<br>SPACE NIGHT – Saturday 18 October, 7–11 p.m.</h3>
      <p>Spend an evening with the stars!</p>
      <p>• Look at the night sky through our big telescope on the roof (only if the sky is clear).<br>
      • Meet Dr Helen Moss, who builds small satellites, and ask her your questions.<br>
      • Make your own model rocket and take it home.</p>
      <p><b>Tickets:</b> adults £8, students £5, children under 10 free. Students must show their school ID card.</p>
      <p>Buy your tickets online – you can't buy them at the door.</p>
      <p>Bring warm clothes – it can get cold on the roof! The café on the ground floor is open until 10 p.m.</p>
    </div>
    <h3>Wiadomość Oli</h3>
    <div class="box">
      <p>Cześć Kuba!</p>
      <p>W sobotę w centrum nauki jest Noc Kosmosu. Jeśli niebo będzie czyste, będzie można oglądać gwiazdy przez teleskop na <span class="gapno">(1)</span> ______ budynku. Spotkamy też panią naukowiec, która buduje małe <span class="gapno">(2)</span> ______. Każdy zrobi model rakiety i zabierze go do domu.</p>
      <p>Bilet dla nas kosztuje 5 funtów, ale musimy pokazać <span class="gapno">(3)</span> ______. Twój brat ma 8 lat, więc wejdzie <span class="gapno">(4)</span> ______. Biletów nie da się kupić na miejscu, więc kupię je <span class="gapno">(5)</span> ______ jeszcze dziś. Weź ciepłe ubranie!</p>
      <p>Ola</p>
    </div>`,
  items: [
    {
      id: 'dqkgm0',
      type: 'input',
      q: 'Luka (1): „…przez teleskop na ______ budynku.”',
      accept: ['dachu', 'dach'],
      explain: '„our big telescope on the roof” – teleskop stoi na dachu (roof = dach). Dlatego trzeba też wziąć ciepłe ubranie: „it can get cold on the roof”.',
    },
    {
      id: 'wz86ui',
      type: 'input',
      q: 'Luka (2): „…panią naukowiec, która buduje małe ______.”',
      accept: ['satelity', 'satelitów', 'satelitę', 'sztuczne satelity', 'satelity kosmiczne'],
      explain: '„Dr Helen Moss, who builds small satellites” – buduje małe satelity.',
    },
    {
      id: 'mgwztm',
      type: 'input',
      q: 'Luka (3): „…ale musimy pokazać ______.”',
      accept: ['legitymacje', 'legitymacje szkolne', 'legitymacje uczniowskie', 'nasze legitymacje', 'nasze legitymacje szkolne', 'legitymację', 'legitymację szkolną', 'legitymację uczniowską'],
      explain: '„students £5 […] Students must show their school ID card” – uczniowie płacą 5 funtów, ale muszą pokazać legitymację szkolną.',
    },
    {
      id: 'iqe1z8',
      type: 'input',
      q: 'Luka (4): „Twój brat ma 8 lat, więc wejdzie ______.”',
      accept: ['za darmo', 'bezpłatnie', 'darmowo', 'gratis'],
      explain: '„children under 10 free” – dzieci poniżej 10 lat wchodzą za darmo, a brat Kuby ma 8 lat.',
    },
    {
      id: 'wr1mie',
      type: 'input',
      q: 'Luka (5): „…więc kupię je ______ jeszcze dziś.”',
      accept: ['przez internet', 'online', 'on-line', 'w internecie', 'internetowo', 'przez stronę internetową', 'na stronie internetowej', 'w sieci'],
      explain: '„Buy your tickets online – you can\'t buy them at the door” – bilety kupuje się tylko przez internet.',
    },
  ],
});

window.EXERCISES.push({
  subject: 'angielski',
  mode: 'reading',
  id: '265wjv',
  title: 'Tydzień bez telefonu',
  kind: 'Artykuł · nagłówki do akapitów i wybór wielokrotny',
  basis: 'Podstawa programowa (Dz.U. 2024 poz. 996), język obcy nowożytny – wariant II.1: III.1 (główna myśl części tekstu), III.4 (określone informacje), III.5 (związki między częściami tekstu); tematy I.3 (edukacja), I.11 (zdrowie), I.12 (nauka i technika); informator CKE: rozumienie tekstów pisanych – dobieranie, wybór wielokrotny.',
  intro: 'Przeczytaj tekst. W zadaniach 1–4 dobierz do każdego akapitu (1–4) właściwy nagłówek (A–E). Uwaga! Jeden nagłówek podano dodatkowo. W zadaniach 5–6 wybierz odpowiedź zgodną z treścią tekstu.',
  text: `
    <h3>OUR PHONE-FREE WEEK</h3>
    <p><i>by Julia, class 8B, Hilltown School</i></p>
    <p><span class="gapno">1.</span> Last month our form teacher, Mr Novak, had an unusual idea. He noticed that during breaks nobody in our class talked to each other – everyone was just looking at their phones. So he asked us to leave our phones at home for five school days. Some students weren't happy about it, but in the end all 24 of us agreed to try.</p>
    <p><span class="gapno">2.</span> The first two days were really hard. I kept putting my hand in my pocket to check my messages. A few people felt nervous because they couldn't tell their parents where they were after school. We solved this problem quickly – when we needed to call home, we used the phone in the school office.</p>
    <p><span class="gapno">3.</span> By Wednesday, things started to change. During breaks we played board games and table tennis, and some boys started a chess competition. I had a long conversation with Marta, a girl from my class who I had never really talked to before. Now she is one of my best friends.</p>
    <p><span class="gapno">4.</span> At the end of the week, we wrote down our thoughts. Most of us said that we slept better and had more time for homework. Not everything went well, though: two students forgot about a test because their calendars were on their phones! Our class decided to have one day without phones every month from now on.</p>
    <div class="box">
      <p><b>A.</b> Teachers try it too</p>
      <p><b>B.</b> A difficult start</p>
      <p><b>C.</b> What went well and what didn't</p>
      <p><b>D.</b> A teacher's surprising plan</p>
      <p><b>E.</b> Making new friends</p>
    </div>`,
  items: [
    {
      id: 'mppcls',
      q: 'Akapit 1 – który nagłówek (A–E)?',
      options: ['Teachers try it too', 'A difficult start', 'What went well and what didn\'t', 'A teacher\'s surprising plan', 'Making new friends'],
      answer: 3,
      explain: 'Akapit 1 opisuje pomysł wychowawcy: „our form teacher, Mr Novak, had an unusual idea” – zostawić telefony w domu na pięć dni. Nigdzie nie ma mowy o tym, że nauczyciele też rezygnują z telefonów (nagłówek A jest dodatkowy).',
    },
    {
      id: '60j58z',
      q: 'Akapit 2 – który nagłówek (A–E)?',
      options: ['Teachers try it too', 'A difficult start', 'What went well and what didn\'t', 'A teacher\'s surprising plan', 'Making new friends'],
      answer: 1,
      explain: '„The first two days were really hard” – początek był trudny: odruchowe sprawdzanie wiadomości i problem z kontaktem z rodzicami.',
    },
    {
      id: '1y9tbo',
      q: 'Akapit 3 – który nagłówek (A–E)?',
      options: ['Teachers try it too', 'A difficult start', 'What went well and what didn\'t', 'A teacher\'s surprising plan', 'Making new friends'],
      answer: 4,
      explain: 'Akapit 3 mówi o rozmowach i wspólnych grach na przerwach, a Julia zaprzyjaźnia się z Martą: „Now she is one of my best friends”.',
    },
    {
      id: 'dm97l5',
      q: 'Akapit 4 – który nagłówek (A–E)?',
      options: ['Teachers try it too', 'A difficult start', 'What went well and what didn\'t', 'A teacher\'s surprising plan', 'Making new friends'],
      answer: 2,
      explain: 'Akapit 4 podsumowuje plusy („we slept better and had more time for homework”) i minusy („Not everything went well, though: two students forgot about a test”).',
    },
    {
      id: 'pp0jmh',
      q: 'Why did Mr Novak want the class to try a phone-free week?',
      options: ['Students used their phones during tests.', 'Students didn\'t talk to each other during breaks.', 'Students\' parents asked him to do it.'],
      answer: 1,
      explain: '„He noticed that during breaks nobody in our class talked to each other – everyone was just looking at their phones.” O telefonach na sprawdzianach ani o prośbie rodziców tekst nie mówi.',
    },
    {
      id: 't3fawp',
      q: 'What did the class decide at the end of the week?',
      options: ['to have one day without phones every month', 'to never bring phones to school again', 'to organise a chess competition every month'],
      answer: 0,
      explain: '„Our class decided to have one day without phones every month from now on.” Turniej szachowy zaczęli kilku chłopców w środę – to nie była decyzja klasy na koniec tygodnia.',
    },
  ],
});
