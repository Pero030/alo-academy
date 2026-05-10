const products = {
  gamingmouse: {
    title: 'Gaming Maus',
    task: 'Erstelle eine professionelle Produktseite für eine Gaming Maus.',
    imageOptions: [
      { image: 'assets/images/Produkt Bilder/Gaming Maus/Gaming Maus 1.png', correct: true, reason: 'Richtig! Das Produkt ist scharf und perfekt im Fokus.' },
      { image: 'assets/images/Produkt Bilder/Gaming Maus/Gaming Maus 2.png', correct: false, reason: 'Falsch. Das Bild ist leider unscharf.' },
      { image: 'assets/images/Produkt Bilder/Gaming Maus/Gaming Maus 3.png', correct: false, reason: 'Falsch. Es sind zu viele andere Gegenstände auf dem Bild.' }
    ],
    correctKeywords: ['Gaming Maus', 'RGB', 'ergonomisch', '12.000 DPI', 'Präzision', 'High-Speed', 'PC Zubehör', 'Gamer Hardware'],
    wrongKeywords: ['Büromaus', 'leise Klicks', 'Bluetooth', 'Batteriebetrieben', 'billig', 'Kugelschreibermouse', 'Vintage', 'Touchpad']
  },
  headphones: {
    title: 'Bluetooth Kopfhörer',
    task: 'Schreibe eine SEO Produktseite für Bluetooth Kopfhörer.',
    imageOptions: [
      { image: 'assets/images/Produkt Bilder/Bluetooth Kopfhörer/Bluetooth Kopfhörer 1.png', correct: true, reason: 'Richtig! Das Produkt ist scharf und perfekt im Fokus.' },
      { image: 'assets/images/Produkt Bilder/Bluetooth Kopfhörer/Bluetooth Kopfhörer 2.png', correct: false, reason: 'Falsch. Das Bild ist leider unscharf.' },
      { image: 'assets/images/Produkt Bilder/Bluetooth Kopfhörer/Bluetooth Kopfhörer 3.png', correct: false, reason: 'Falsch. Es sind zu viele andere Gegenstände auf dem Bild.' }
    ],
    correctKeywords: ['Bluetooth Kopfhörer', 'Noise Cancelling', 'kabellos', '30h Akku', 'Premium Sound', 'Hi-Fi Audio', 'Over-Ear', 'Freisprecheinrichtung'],
    wrongKeywords: ['In-Ear', 'Kabelgebunden', 'Sport', 'Wasserdicht', 'Studio-Monitor', 'Grammophon', 'Lautsprecher', 'MP3-Player']
  },
  smartwatch: {
    title: 'Smartwatch Pro',
    task: 'Erstelle eine Produktseite für eine Smartwatch.',
    imageOptions: [
      { image: 'assets/images/Produkt Bilder/Smartwatch Pro/Smartwatch Pro 1.png', correct: true, reason: 'Richtig! Das Produkt ist scharf und perfekt im Fokus.' },
      { image: 'assets/images/Produkt Bilder/Smartwatch Pro/Smartwatch Pro 2.png', correct: false, reason: 'Falsch. Das Bild ist leider unscharf.' },
      { image: 'assets/images/Produkt Bilder/Smartwatch Pro/Smartwatch Pro 3.png', correct: false, reason: 'Falsch. Es sind zu viele andere Gegenstände auf dem Bild.' }
    ],
    correctKeywords: ['Smartwatch', 'GPS', 'Herzfrequenz', 'Wasserdicht', '7 Tage Akku', 'Fitness Tracker', 'Smart Features', 'OLED Display'],
    wrongKeywords: ['Analog Uhr', 'Lederarmband', 'Luxusuhr', 'SIM-Karte', 'Tauchcomputer', 'Taschenuhr', 'Sonnenuhr', 'Wanduhr']
  },
  protein: {
    title: 'Protein Pulver',
    task: 'Erstelle eine Produktseite für Protein Pulver.',
    imageOptions: [
      { image: 'assets/images/Produkt Bilder/Protein Pulver/Protein Pulver 1.png', correct: true, reason: 'Richtig! Das Produkt ist scharf und perfekt im Fokus.' },
      { image: 'assets/images/Produkt Bilder/Protein Pulver/Protein Pulver 2.png', correct: false, reason: 'Falsch. Das Bild ist leider unscharf.' },
      { image: 'assets/images/Produkt Bilder/Protein Pulver/Protein Pulver 3.png', correct: false, reason: 'Falsch. Es sind zu viele andere Gegenstände auf dem Bild.' }
    ],
    correctKeywords: ['Protein Pulver', 'Whey', 'Muskelaufbau', '25g Protein', 'Fitness', 'Supplement', 'Shake', 'Aminosäuren'],
    wrongKeywords: ['Abnehmkur', 'Vitaminpillen', 'Vegan', 'Mahlzeitersatz', 'Energy Drink', 'Fast Food', 'Süßigkeiten', 'Limo']
  },
  backpack: {
    title: 'Laptop Rucksack',
    task: 'Erstelle eine Produktseite für einen Laptop Rucksack.',
    imageOptions: [
      { image: 'assets/images/Produkt Bilder/Laptop Rucksack/Laptop Rucksack 1.png', correct: true, reason: 'Richtig! Das Produkt ist scharf und perfekt im Fokus.' },
      { image: 'assets/images/Produkt Bilder/Laptop Rucksack/Laptop Rucksack 2.png', correct: false, reason: 'Falsch. Das Bild ist leider unscharf.' },
      { image: 'assets/images/Produkt Bilder/Laptop Rucksack/Laptop Rucksack 3.png', correct: false, reason: 'Falsch. Es sind zu viele andere Gegenstände auf dem Bild.' }
    ],
    correctKeywords: ['Laptop Rucksack', '15,6 Zoll', 'Wasserdicht', 'USB Port', 'Diebstahlschutz', 'Business Bag', 'Notebook Tasche', 'Reisegepäck'],
    wrongKeywords: ['Wanderrucksack', 'Schultasche', 'Handtasche', 'Koffer', 'Kinderrucksack', 'Einkaufsnetz', 'Plastiktüte', 'Turnbeutel']
  },
  keyboard: {
    title: 'Gaming Tastatur',
    task: 'Erstelle eine Produktseite für eine Gaming Tastatur.',
    imageOptions: [
      { image: 'assets/images/Produkt Bilder/Gaming Tastatur/Gaming Tastatur 1.png', correct: true, reason: 'Richtig! Das Produkt ist scharf und perfekt im Fokus.' },
      { image: 'assets/images/Produkt Bilder/Gaming Tastatur/Gaming Tastatur 2.png', correct: false, reason: 'Falsch. Das Bild ist leider unscharf.' },
      { image: 'assets/images/Produkt Bilder/Gaming Tastatur/Gaming Tastatur 3.png', correct: false, reason: 'Falsch. Es sind zu viele andere Gegenstände auf dem Bild.' }
    ],
    correctKeywords: ['Gaming Tastatur', 'Mechanisch', 'RGB', 'Cherry MX', 'Anti-Ghosting', 'E-Sports', 'Keycaps', 'USB-C'],
    wrongKeywords: ['Office Tastatur', 'Funk-Tastatur', 'Laptop-Tastatur', 'Leise Tastatur', 'Tablet-Zubehör', 'Schreibmaschine', 'Klavier', 'Fernbedienung']
  },
  lamp: {
    title: 'LED Schreibtischlampe',
    task: 'Erstelle eine Produktseite für eine LED Schreibtischlampe.',
    imageOptions: [
      { image: 'assets/images/Produkt Bilder/LED Schreibtischlampe/LED Schreibtischlampe 1.png', correct: true, reason: 'Richtig! Das Produkt ist scharf und perfekt im Fokus.' },
      { image: 'assets/images/Produkt Bilder/LED Schreibtischlampe/LED Schreibtischlampe 2.png', correct: false, reason: 'Falsch. Das Bild ist leider unscharf.' },
      { image: 'assets/images/Produkt Bilder/LED Schreibtischlampe/LED Schreibtischlampe 3.png', correct: false, reason: 'Falsch. Es sind zu viele andere Gegenstände auf dem Bild.' }
    ],
    correctKeywords: ['LED Lampe', 'Dimmbar', 'USB Port', 'Augenschutz', 'Tageslichtweiß', 'Home Office', 'Leselicht', 'Modern Design'],
    wrongKeywords: ['Deckenlampe', 'Nachtlicht', 'Stehlampe', 'Glühbirne', 'Smart Home', 'Taschenlampe', 'Kerze', 'Lagerfeuer']
  },
  bottle: {
    title: 'Edelstahl Trinkflasche',
    task: 'Erstelle eine Produktseite für eine Trinkflasche.',
    imageOptions: [
      { image: 'assets/images/Produkt Bilder/Edelstahl Trinkflasche/Edelstahl Trinkflasche 1.png', correct: true, reason: 'Richtig! Das Produkt ist scharf und perfekt im Fokus.' },
      { image: 'assets/images/Produkt Bilder/Edelstahl Trinkflasche/Edelstahl Trinkflasche 2.png', correct: false, reason: 'Falsch. Das Bild ist leider unscharf.' },
      { image: 'assets/images/Produkt Bilder/Edelstahl Trinkflasche/Edelstahl Trinkflasche 3.png', correct: false, reason: 'Falsch. Es sind zu viele andere Gegenstände auf dem Bild.' }
    ],
    correctKeywords: ['Trinkflasche', 'Edelstahl', 'BPA-frei', 'Isoliert', '750ml', 'Outdoor', 'Nachhaltig', 'Eco-Friendly'],
    wrongKeywords: ['Sport-Plastikflasche', 'Glaskaraffe', 'Thermoskanne', 'Shaker', 'Trinkrucksack', 'Benzinkanister', 'Weinglas', 'Tasse']
  },
  chair: {
    title: 'Gaming Stuhl',
    task: 'Erstelle eine Produktseite für einen Gaming Stuhl.',
    imageOptions: [
      { image: 'assets/images/Produkt Bilder/Gaming Stuhl/Gaming Stuhl 1.png', correct: true, reason: 'Richtig! Das Produkt ist scharf und perfekt im Fokus.' },
      { image: 'assets/images/Produkt Bilder/Gaming Stuhl/Gaming Stuhl 2.png', correct: false, reason: 'Falsch. Das Bild ist leider unscharf.' },
      { image: 'assets/images/Produkt Bilder/Gaming Stuhl/Gaming Stuhl 3.png', correct: false, reason: 'Falsch. Es sind zu viele andere Gegenstände auf dem Bild.' }
    ],
    correctKeywords: ['Gaming Stuhl', 'Ergonomisch', '4D Armlehnen', 'Lendenwirbelstütze', 'bis 150kg', 'Racing Design', 'Nackenkissen', 'Wippfunktion'],
    wrongKeywords: ['Bürostuhl', 'Chefsessel', 'Klappstuhl', 'Massagesessel', 'Holzstuhl', 'Sofa', 'Hocker', 'Liegestuhl']
  },
  camera: {
    title: '4K Action Kamera',
    task: 'Erstelle eine Produktseite für eine 4K Kamera.',
    imageOptions: [
      { image: 'assets/images/Produkt Bilder/4K Action Kamera/4K Action Kamera 1.png', correct: true, reason: 'Richtig! Das Produkt ist scharf und perfekt im Fokus.' },
      { image: 'assets/images/Produkt Bilder/4K Action Kamera/4K Action Kamera 2.png', correct: false, reason: 'Falsch. Das Bild ist leider unscharf.' },
      { image: 'assets/images/Produkt Bilder/4K Action Kamera/4K Action Kamera 3.png', correct: false, reason: 'Falsch. Es sind zu viele andere Gegenstände auf dem Bild.' }
    ],
    correctKeywords: ['Action Cam', '4K Video', 'Wasserdicht', 'WiFi', 'Bildstabilisierung', 'Vlogging', 'Unterwasser', 'Weitwinkel'],
    wrongKeywords: ['Spiegelreflex', 'Webcam', 'Überwachungskamera', 'Analogkamera', 'Fotodrucker', 'Fernglas', 'Teleskop', 'Mikroskop']
  }
};

const tutorialSteps = [
  { title: "Willkommen!", text: "Verrate uns bitte deinen Namen für deinen Shop.", action: "Name bestätigen", isNameInput: true },
  { title: "Deine Mission", text: "Baue ein E-Commerce Imperium auf.", action: "Verstanden" },
  { title: "Lernpfad", text: "Links siehst du deine Aufgaben.", action: "Los geht's!" }
];
