const products = {
  gamingmouse: {
    title: 'Gaming Maus',
    task: 'Erstelle eine professionelle Produktseite für eine Gaming Maus.',
    imageOptions: [
      { image: '../assets/images/Produkt Bilder/Gaming Maus/Gaming Maus 1.png', correct: true, reason: 'Richtig! Das Produkt ist scharf und perfekt im Fokus.' },
      { image: '../assets/images/Produkt Bilder/Gaming Maus/Gaming Maus 2.png', correct: false, reason: 'Falsch. Das Bild ist leider unscharf.' },
      { image: '../assets/images/Produkt Bilder/Gaming Maus/Gaming Maus 3.png', correct: false, reason: 'Falsch. Es sind zu viele andere Gegenstände auf dem Bild.' }
    ],
    correctKeywords: ['Gaming Maus', 'RGB', 'ergonomisch', '12.000 DPI', 'Präzision', 'High-Speed', 'PC Zubehör', 'Gamer Hardware'],
    wrongKeywords: ['Büromaus', 'leise Klicks', 'Bluetooth', 'Batteriebetrieben', 'billig', 'Kugelschreibermouse', 'Vintage', 'Touchpad']
  },
  headphones: {
    title: 'Bluetooth Kopfhörer',
    task: 'Schreibe eine SEO Produktseite für Bluetooth Kopfhörer.',
    imageOptions: [
      { image: '../assets/images/Produkt Bilder/Bluetooth Kopfhörer/Bluetooth Kopfhörer 1.png', correct: true, reason: 'Richtig! Das Produkt ist scharf und perfekt im Fokus.' },
      { image: '../assets/images/Produkt Bilder/Bluetooth Kopfhörer/Bluetooth Kopfhörer 2.png', correct: false, reason: 'Falsch. Das Bild ist leider unscharf.' },
      { image: '../assets/images/Produkt Bilder/Bluetooth Kopfhörer/Bluetooth Kopfhörer 3.png', correct: false, reason: 'Falsch. Es sind zu viele andere Gegenstände auf dem Bild.' }
    ],
    correctKeywords: ['Bluetooth Kopfhörer', 'Noise Cancelling', 'kabellos', '30h Akku', 'Premium Sound', 'Hi-Fi Audio', 'Over-Ear', 'Freisprecheinrichtung'],
    wrongKeywords: ['In-Ear', 'Kabelgebunden', 'Sport', 'Wasserdicht', 'Studio-Monitor', 'Grammophon', 'Lautsprecher', 'MP3-Player']
  },
  smartwatch: {
    title: 'Smartwatch Pro',
    task: 'Erstelle eine Produktseite für eine Smartwatch.',
    imageOptions: [
      { image: '../assets/images/Produkt Bilder/Smartwatch Pro/Smartwatch Pro 1.png', correct: true, reason: 'Richtig! Das Produkt ist scharf und perfekt im Fokus.' },
      { image: '../assets/images/Produkt Bilder/Smartwatch Pro/Smartwatch Pro 2.png', correct: false, reason: 'Falsch. Das Bild ist leider unscharf.' },
      { image: '../assets/images/Produkt Bilder/Smartwatch Pro/Smartwatch Pro 3.png', correct: false, reason: 'Falsch. Es sind zu viele andere Gegenstände auf dem Bild.' }
    ],
    correctKeywords: ['Smartwatch', 'GPS', 'Herzfrequenz', 'Wasserdicht', '7 Tage Akku', 'Fitness Tracker', 'Smart Features', 'OLED Display'],
    wrongKeywords: ['Analog Uhr', 'Lederarmband', 'Luxusuhr', 'SIM-Karte', 'Tauchcomputer', 'Taschenuhr', 'Sonnenuhr', 'Wanduhr']
  },
  protein: {
    title: 'Protein Pulver',
    task: 'Erstelle eine Produktseite für Protein Pulver.',
    imageOptions: [
      { image: '../assets/images/Produkt Bilder/Protein Pulver/Protein Pulver 1.png', correct: true, reason: 'Richtig! Das Produkt ist scharf und perfekt im Fokus.' },
      { image: '../assets/images/Produkt Bilder/Protein Pulver/Protein Pulver 2.png', correct: false, reason: 'Falsch. Das Bild ist leider unscharf.' },
      { image: '../assets/images/Produkt Bilder/Protein Pulver/Protein Pulver 3.png', correct: false, reason: 'Falsch. Es sind zu viele andere Gegenstände auf dem Bild.' }
    ],
    correctKeywords: ['Protein Pulver', 'Whey', 'Muskelaufbau', '25g Protein', 'Fitness', 'Supplement', 'Shake', 'Aminosäuren'],
    wrongKeywords: ['Abnehmkur', 'Vitaminpillen', 'Vegan', 'Mahlzeitersatz', 'Energy Drink', 'Fast Food', 'Süßigkeiten', 'Limo']
  },
  backpack: {
    title: 'Laptop Rucksack',
    task: 'Erstelle eine Produktseite für einen Laptop Rucksack.',
    imageOptions: [
      { image: '../assets/images/Produkt Bilder/Laptop Rucksack/Laptop Rucksack 1.png', correct: true, reason: 'Richtig! Das Produkt ist scharf und perfekt im Fokus.' },
      { image: '../assets/images/Produkt Bilder/Laptop Rucksack/Laptop Rucksack 2.png', correct: false, reason: 'Falsch. Das Bild ist leider unscharf.' },
      { image: '../assets/images/Produkt Bilder/Laptop Rucksack/Laptop Rucksack 3.png', correct: false, reason: 'Falsch. Es sind zu viele andere Gegenstände auf dem Bild.' }
    ],
    correctKeywords: ['Laptop Rucksack', '15,6 Zoll', 'Wasserdicht', 'USB Port', 'Diebstahlschutz', 'Business Bag', 'Notebook Tasche', 'Reisegepäck'],
    wrongKeywords: ['Wanderrucksack', 'Schultasche', 'Handtasche', 'Koffer', 'Kinderrucksack', 'Einkaufsnetz', 'Plastiktüte', 'Turnbeutel']
  },
  keyboard: {
    title: 'Gaming Tastatur',
    task: 'Erstelle eine Produktseite für eine Gaming Tastatur.',
    imageOptions: [
      { image: '../assets/images/Produkt Bilder/Gaming Tastatur/Gaming Tastatur 1.png', correct: true, reason: 'Richtig! Das Produkt ist scharf und perfekt im Fokus.' },
      { image: '../assets/images/Produkt Bilder/Gaming Tastatur/Gaming Tastatur 2.png', correct: false, reason: 'Falsch. Das Bild ist leider unscharf.' },
      { image: '../assets/images/Produkt Bilder/Gaming Tastatur/Gaming Tastatur 3.png', correct: false, reason: 'Falsch. Es sind zu viele andere Gegenstände auf dem Bild.' }
    ],
    correctKeywords: ['Gaming Tastatur', 'Mechanisch', 'RGB', 'Cherry MX', 'Anti-Ghosting', 'E-Sports', 'Keycaps', 'USB-C'],
    wrongKeywords: ['Office Tastatur', 'Funk-Tastatur', 'Laptop-Tastatur', 'Leise Tastatur', 'Tablet-Zubehör', 'Schreibmaschine', 'Klavier', 'Fernbedienung']
  },
  lamp: {
    title: 'LED Schreibtischlampe',
    task: 'Erstelle eine Produktseite für eine LED Schreibtischlampe.',
    imageOptions: [
      { image: '../assets/images/Produkt Bilder/LED Schreibtischlampe/LED Schreibtischlampe 1.png', correct: true, reason: 'Richtig! Das Produkt ist scharf und perfekt im Fokus.' },
      { image: '../assets/images/Produkt Bilder/LED Schreibtischlampe/LED Schreibtischlampe 2.png', correct: false, reason: 'Falsch. Das Bild ist leider unscharf.' },
      { image: '../assets/images/Produkt Bilder/LED Schreibtischlampe/LED Schreibtischlampe 3.png', correct: false, reason: 'Falsch. Es sind zu viele andere Gegenstände auf dem Bild.' }
    ],
    correctKeywords: ['LED Lampe', 'Dimmbar', 'USB Port', 'Augenschutz', 'Tageslichtweiß', 'Home Office', 'Leselicht', 'Modern Design'],
    wrongKeywords: ['Deckenlampe', 'Nachtlicht', 'Stehlampe', 'Glühbirne', 'Smart Home', 'Taschenlampe', 'Kerze', 'Lagerfeuer']
  },
  bottle: {
    title: 'Edelstahl Trinkflasche',
    task: 'Erstelle eine Produktseite für eine Trinkflasche.',
    imageOptions: [
      { image: '../assets/images/Produkt Bilder/Edelstahl Trinkflasche/Edelstahl Trinkflasche 1.png', correct: true, reason: 'Richtig! Das Produkt ist scharf und perfekt im Fokus.' },
      { image: '../assets/images/Produkt Bilder/Edelstahl Trinkflasche/Edelstahl Trinkflasche 2.png', correct: false, reason: 'Falsch. Das Bild ist leider unscharf.' },
      { image: '../assets/images/Produkt Bilder/Edelstahl Trinkflasche/Edelstahl Trinkflasche 3.png', correct: false, reason: 'Falsch. Es sind zu viele andere Gegenstände auf dem Bild.' }
    ],
    correctKeywords: ['Trinkflasche', 'Edelstahl', 'BPA-frei', 'Isoliert', '750ml', 'Outdoor', 'Nachhaltig', 'Eco-Friendly'],
    wrongKeywords: ['Sport-Plastikflasche', 'Glaskaraffe', 'Thermoskanne', 'Shaker', 'Trinkrucksack', 'Benzinkanister', 'Weinglas', 'Tasse']
  },
  chair: {
    title: 'Gaming Stuhl',
    task: 'Erstelle eine Produktseite für einen Gaming Stuhl.',
    imageOptions: [
      { image: '../assets/images/Produkt Bilder/Gaming Stuhl/Gaming Stuhl 1.png', correct: true, reason: 'Richtig! Das Produkt ist scharf und perfekt im Fokus.' },
      { image: '../assets/images/Produkt Bilder/Gaming Stuhl/Gaming Stuhl 2.png', correct: false, reason: 'Falsch. Das Bild ist leider unscharf.' },
    ],
    correctKeywords: ['Gaming Stuhl', 'Ergonomisch', '4D Armlehnen', 'Lendenwirbelstütze', 'bis 150kg', 'Racing Design', 'Nackenkissen', 'Wippfunktion'],
    wrongKeywords: ['Bürostuhl', 'Chefsessel', 'Klappstuhl', 'Massagesessel', 'Holzstuhl', 'Sofa', 'Hocker', 'Liegestuhl']
  },
  camera: {
    title: '4K Action Kamera',
    task: 'Erstelle eine Produktseite für eine 4K Action Kamera.',
    imageOptions: [
      { image: '../assets/images/Produkt Bilder/4K Action Kamera/4K Action Kamera 1.png', correct: true, reason: 'Richtig! Das Produkt ist scharf und perfekt im Fokus.' },
      { image: '../assets/images/Produkt Bilder/4K Action Kamera/4K Action Kamera 2.png', correct: false, reason: 'Falsch. Das Bild ist leider unscharf.' },
      { image: '../assets/images/Produkt Bilder/4K Action Kamera/4K Action Kamera 3.png', correct: false, reason: 'Falsch. Es sind zu viele andere Gegenstände auf dem Bild.' }
    ],
    correctKeywords: ['Action Cam', '4K Video', 'Wasserdicht', 'WiFi', 'Bildstabilisierung', 'Vlogging', 'Unterwasser', 'Weitwinkel'],
    wrongKeywords: ['Spiegelreflex', 'Webcam', 'Überwachungskamera', 'Analogkamera', 'Fotodrucker', 'Fernglas', 'Teleskop', 'Mikroskop']
  }
};

const tutorialSteps = [
  { title: "Willkommen!", text: "Willkommen bei der E-Commerce Academy! Hier lernst du alles über den Beruf des E-Commerce-Kaufmanns. Verrate uns bitte deinen Namen für deinen Shop, damit wir personalisiert starten können.", action: "Name bestätigen", isNameInput: true },
  { title: "Deine Mission", text: "Deine Mission ist es, ein erfolgreiches E-Commerce Imperium aufzubauen! Du wirst Schritt für Schritt lernen, wie man professionelle Produktseiten erstellt, Shops für Suchmaschinen optimiert, überzeugende Verkaufstexte schreibt und einen kompletten Online-Shop gestaltet. Alles basiert auf realen E-Commerce-Praktiken und Berufsinhalten.", action: "Verstanden" },
  { title: "5 Missionen", text: "Das Spiel besteht aus 5 aufeinander aufbauenden Missionen: 1) Produkt-Design - Erstelle professionelle Produktseiten, 2) SEO-Strategie - Optimiere für Suchmaschinen, 3) Conversion-Power - Schreibe verkaufsfördernde Texte, 4) Shop Builder - Gestalte deinen eigenen Shop, 5) Abschluss - Erhalte dein Zertifikat. Jede Mission schaltet die nächste frei.", action: "Weiter" },
  { title: "Mission 1: Produkt-Design", text: "In Mission 1 wählst du aus 10 verschiedenen Produkten (Gaming Maus, Smartwatch, Bluetooth Kopfhörer, etc.) und erstellst eine professionelle Produktseite. Du lernst, wie man das richtige Produktbild auswählt (scharf, fokussiert, ohne Ablenkungen) und die passenden SEO-Keywords identifiziert, die Kunden suchen.", action: "Weiter" },
  { title: "Mission 2: SEO-Strategie", text: "SEO (Search Engine Optimization) ist entscheidend für den Erfolg! In Mission 2 erstellst du einen optimierten SEO-Titel für deine Produktseite und wählst aus einer Liste von Keywords die richtigen aus. Du lernst den Unterschied zwischen relevanten Keywords (z.B. 'Gaming Maus', 'RGB', 'ergonomisch') und irrelevanten Begriffen.", action: "Weiter" },
  { title: "Mission 3: Conversion-Power", text: "Conversion bedeutet: Besucher in Käufer verwandeln! In Mission 3 schreibst du überzeugende Produkttexte, die Kunden zum Kauf animieren. Du lernst Conversion-Optimierung, Copywriting-Techniken und wie man Bedürfnisse anspricht. Ein guter Text kann die Conversion-Rate verdoppeln!", action: "Weiter" },
  { title: "Mission 4: Shop Builder", text: "Der Shop Builder ist das Highlight! Hier gestaltest du deinen eigenen Online-Shop von Grund auf. Du wählst die Shop-Farbe, das Logo-Icon, die Schriftart, das Layout, Header & Footer Farben und Trust-Elemente. Alles wird live in einer Vorschau angezeigt - so siehst du sofort, wie dein Shop aussehen wird!", action: "Weiter" },
  { title: "Lernpfad & Fortschritt", text: "Links in der Sidebar siehst du deinen Lernpfad mit allen Missionen. Nach jeder erfolgreichen Mission wird die nächste freigeschaltet. Der Fortschrittsbalken oben zeigt deinen Gesamtfortschritt. Du kannst jederzeit pausieren und später weitermachen - dein Fortschritt wird automatisch gespeichert.", action: "Weiter" },
  { title: "Belohnungen & Zertifikat", text: "Nach jeder erfolgreichen Mission erhältst du Fortschrittspunkte. Wenn du alle Missionen abgeschlossen hast, erhältst du ein personalisiertes Zertifikat für deine E-Commerce-Kenntnisse! Dieses Zertifikat bestätigt, dass du die Grundlagen von Produkt-Design, SEO, Conversion-Optimierung und Shop-Gestaltung beherrschst.", action: "Weiter" },
  { title: "Bereit zum Start?", text: "Du startest jetzt mit einer ausführlichen Einleitung, wo du alles über E-Commerce lernst: globale Statistiken (>7,5 Mrd. $ Umsatz), die Ausbildung zum E-Commerce-Kaufmann, Karrierewege (Fachwirt, Studium, Bootcamps), die 5 Säulen des Erfolgs und die wichtigsten Kennzahlen. Danach geht es direkt zu Mission 1 - Produkt-Design. Viel Spaß beim Aufbau deines E-Commerce Imperiums!", action: "Starten" }
];
