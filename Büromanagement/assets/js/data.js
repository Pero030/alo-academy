// --- Daten für Büromanagement-Spiel ---

const orders = [
  {
    id: 1,
    orderNumber: "2024-001",
    orderDate: "15.05.2024",
    customer: {
      name: "Max Mustermann",
      address: "Musterstraße 123",
      city: "12345 Musterstadt",
    },
    items: [
      {
        name: "Bürostuhl ergonomisch",
        articleNumber: "BS-001",
        quantity: 5,
        price: 249.0,
      },
    ],
    subtotal: 1245.0,
    vat: 236.55,
    total: 1481.55,
    correctAnswers: {
      rechnungsnummer: "RE-2024-001",
      rechnungsdatum: "15.05.2024",
      kundenname: "Max Mustermann",
      kundenadresse: "Musterstraße 123",
      kundenstadt: "12345 Musterstadt",
      nettopreis: "1245.00",
      mwst: "236.55",
      gesamtbetrag: "1481.55",
    },
  },
  {
    id: 2,
    orderNumber: "2024-002",
    orderDate: "16.05.2024",
    customer: {
      name: "Anna Schmidt",
      address: "Hauptstraße 45",
      city: "10115 Berlin",
    },
    items: [
      {
        name: "Schreibtisch 160cm",
        articleNumber: "SD-003",
        quantity: 2,
        price: 399.0,
      },
    ],
    subtotal: 798.0,
    vat: 151.62,
    total: 949.62,
    correctAnswers: {
      rechnungsnummer: "RE-2024-002",
      rechnungsdatum: "16.05.2024",
      kundenname: "Anna Schmidt",
      kundenadresse: "Hauptstraße 45",
      kundenstadt: "10115 Berlin",
      nettopreis: "798.00",
      mwst: "151.62",
      gesamtbetrag: "949.62",
    },
  },
  {
    id: 3,
    orderNumber: "2024-003",
    orderDate: "17.05.2024",
    customer: {
      name: "Thomas Müller",
      address: "Bahnhofstraße 78",
      city: "80331 München",
    },
    items: [
      {
        name: "Aktenschrank",
        articleNumber: "AS-005",
        quantity: 1,
        price: 299.0,
      },
    ],
    subtotal: 299.0,
    vat: 56.81,
    total: 355.81,
    correctAnswers: {
      rechnungsnummer: "RE-2024-003",
      rechnungsdatum: "17.05.2024",
      kundenname: "Thomas Müller",
      kundenadresse: "Bahnhofstraße 78",
      kundenstadt: "80331 München",
      nettopreis: "299.00",
      mwst: "56.81",
      gesamtbetrag: "355.81",
    },
  },
  {
    id: 4,
    orderNumber: "2024-004",
    orderDate: "18.05.2024",
    customer: {
      name: "Julia Weber",
      address: "Marktplatz 12",
      city: "60311 Frankfurt",
    },
    items: [
      {
        name: 'Monitor 27"',
        articleNumber: "MO-007",
        quantity: 4,
        price: 349.0,
      },
    ],
    subtotal: 1396.0,
    vat: 265.24,
    total: 1661.24,
    correctAnswers: {
      rechnungsnummer: "RE-2024-004",
      rechnungsdatum: "18.05.2024",
      kundenname: "Julia Weber",
      kundenadresse: "Marktplatz 12",
      kundenstadt: "60311 Frankfurt",
      nettopreis: "1396.00",
      mwst: "265.24",
      gesamtbetrag: "1661.24",
    },
  },
  {
    id: 5,
    orderNumber: "2024-005",
    orderDate: "19.05.2024",
    customer: {
      name: "Michael Fischer",
      address: "Nordstraße 56",
      city: "20095 Hamburg",
    },
    items: [
      {
        name: "Drucker Laser",
        articleNumber: "DL-009",
        quantity: 1,
        price: 449.0,
      },
    ],
    subtotal: 449.0,
    vat: 85.31,
    total: 534.31,
    correctAnswers: {
      rechnungsnummer: "RE-2024-005",
      rechnungsdatum: "19.05.2024",
      kundenname: "Michael Fischer",
      kundenadresse: "Nordstraße 56",
      kundenstadt: "20095 Hamburg",
      nettopreis: "449.00",
      mwst: "85.31",
      gesamtbetrag: "534.31",
    },
  },
  {
    id: 6,
    orderNumber: "2024-006",
    orderDate: "20.05.2024",
    customer: {
      name: "Sandra Koch",
      address: "Südring 23",
      city: "70173 Stuttgart",
    },
    items: [
      {
        name: "Besprechungstisch",
        articleNumber: "BT-011",
        quantity: 1,
        price: 899.0,
      },
    ],
    subtotal: 899.0,
    vat: 170.81,
    total: 1069.81,
    correctAnswers: {
      rechnungsnummer: "RE-2024-006",
      rechnungsdatum: "20.05.2024",
      kundenname: "Sandra Koch",
      kundenadresse: "Südring 23",
      kundenstadt: "70173 Stuttgart",
      nettopreis: "899.00",
      mwst: "170.81",
      gesamtbetrag: "1069.81",
    },
  },
  {
    id: 7,
    orderNumber: "2024-007",
    orderDate: "21.05.2024",
    customer: {
      name: "Andreas Becker",
      address: "Westend 89",
      city: "04109 Leipzig",
    },
    items: [
      {
        name: "Laptop Stand",
        articleNumber: "LS-013",
        quantity: 5,
        price: 79.0,
      },
    ],
    subtotal: 395.0,
    vat: 75.05,
    total: 470.05,
    correctAnswers: {
      rechnungsnummer: "RE-2024-007",
      rechnungsdatum: "21.05.2024",
      kundenname: "Andreas Becker",
      kundenadresse: "Westend 89",
      kundenstadt: "04109 Leipzig",
      nettopreis: "395.00",
      mwst: "75.05",
      gesamtbetrag: "470.05",
    },
  },
  {
    id: 8,
    orderNumber: "2024-008",
    orderDate: "22.05.2024",
    customer: {
      name: "Monika Wagner",
      address: "Ostallee 34",
      city: "01067 Dresden",
    },
    items: [
      {
        name: "Whiteboard 120x90",
        articleNumber: "WB-015",
        quantity: 2,
        price: 199.0,
      },
    ],
    subtotal: 398.0,
    vat: 75.62,
    total: 473.62,
    correctAnswers: {
      rechnungsnummer: "RE-2024-008",
      rechnungsdatum: "22.05.2024",
      kundenname: "Monika Wagner",
      kundenadresse: "Ostallee 34",
      kundenstadt: "01067 Dresden",
      nettopreis: "398.00",
      mwst: "75.62",
      gesamtbetrag: "473.62",
    },
  },
  {
    id: 9,
    orderNumber: "2024-009",
    orderDate: "23.05.2024",
    customer: {
      name: "Peter Hoffmann",
      address: "Nordpark 67",
      city: "40210 Düsseldorf",
    },
    items: [
      {
        name: "Aktenvernichter",
        articleNumber: "AV-017",
        quantity: 1,
        price: 189.0,
      },
    ],
    subtotal: 189.0,
    vat: 35.91,
    total: 224.91,
    correctAnswers: {
      rechnungsnummer: "RE-2024-009",
      rechnungsdatum: "23.05.2024",
      kundenname: "Peter Hoffmann",
      kundenadresse: "Nordpark 67",
      kundenstadt: "40210 Düsseldorf",
      nettopreis: "189.00",
      mwst: "35.91",
      gesamtbetrag: "224.91",
    },
  },
  {
    id: 10,
    orderNumber: "2024-010",
    orderDate: "24.05.2024",
    customer: {
      name: "Carla Richter",
      address: "Südstraße 91",
      city: "50667 Köln",
    },
    items: [
      { name: "Pultwagen", articleNumber: "PW-019", quantity: 2, price: 149.0 },
    ],
    subtotal: 298.0,
    vat: 56.62,
    total: 354.62,
    correctAnswers: {
      rechnungsnummer: "RE-2024-010",
      rechnungsdatum: "24.05.2024",
      kundenname: "Carla Richter",
      kundenadresse: "Südstraße 91",
      kundenstadt: "50667 Köln",
      nettopreis: "298.00",
      mwst: "56.62",
      gesamtbetrag: "354.62",
    },
  },
];

// Kunden-Datenbank (30 Einträge: 10 Kunden × 3 Varianten)
const customers = [];

// Für jeden Kunden 3 Varianten erstellen (1 korrekt, 2 mit Fehlern)
orders.forEach((order, index) => {
  const baseCustomer = order.customer;

  // Korrekte Variante
  customers.push({
    id: `C${index * 3 + 1}`,
    orderId: order.id,
    name: baseCustomer.name,
    address: baseCustomer.address,
    city: baseCustomer.city,
    isCorrect: true,
  });

  // Variante mit Fehler 1 (falsche Adresse)
  customers.push({
    id: `C${index * 3 + 2}`,
    orderId: order.id,
    name: baseCustomer.name,
    address: baseCustomer.address.replace(/\d+/g, (match) =>
      String(parseInt(match) + 1),
    ),
    city: baseCustomer.city,
    isCorrect: false,
  });

  // Variante mit Fehler 2 (falsche Stadt)
  customers.push({
    id: `C${index * 3 + 3}`,
    orderId: order.id,
    name: baseCustomer.name,
    address: baseCustomer.address,
    city: baseCustomer.city.replace(/\d+/g, (match) =>
      String(parseInt(match) + 10),
    ),
    isCorrect: false,
  });
});

// Produkte-Datenbank (30 Einträge: 10 Produkte × 3 Varianten)
const products = [];

// Basis-Produkte aus den Bestellungen extrahieren
const baseProducts = [
  {
    name: "Bürostuhl ergonomisch",
    articleNumber: "BS-001",
    stock: 50,
    price: 249.0,
  },
  {
    name: "Schreibtischlampe LED",
    articleNumber: "SL-002",
    stock: 100,
    price: 49.0,
  },
  {
    name: "Schreibtisch 160cm",
    articleNumber: "SD-003",
    stock: 25,
    price: 399.0,
  },
  { name: "Bürohocker", articleNumber: "BH-004", stock: 40, price: 129.0 },
  { name: "Aktenschrank", articleNumber: "AS-005", stock: 30, price: 299.0 },
  { name: "Regal System", articleNumber: "RS-006", stock: 60, price: 149.0 },
  { name: 'Monitor 27"', articleNumber: "MO-007", stock: 35, price: 349.0 },
  {
    name: "Tastatur mechanisch",
    articleNumber: "TM-008",
    stock: 80,
    price: 89.0,
  },
  { name: "Drucker Laser", articleNumber: "DL-009", stock: 20, price: 449.0 },
  { name: "Papier 500 Blatt", articleNumber: "PP-010", stock: 200, price: 9.0 },
  {
    name: "Besprechungstisch",
    articleNumber: "BT-011",
    stock: 15,
    price: 899.0,
  },
  { name: "Stühle Set 4", articleNumber: "SS-012", stock: 20, price: 599.0 },
  { name: "Laptop Stand", articleNumber: "LS-013", stock: 45, price: 79.0 },
  { name: "Mauspad XL", articleNumber: "MP-014", stock: 90, price: 19.0 },
  {
    name: "Whiteboard 120x90",
    articleNumber: "WB-015",
    stock: 25,
    price: 199.0,
  },
  { name: "Magnete Set", articleNumber: "MG-016", stock: 50, price: 29.0 },
  { name: "Aktenvernichter", articleNumber: "AV-017", stock: 30, price: 189.0 },
  { name: "Laminiergerät", articleNumber: "LG-018", stock: 40, price: 79.0 },
  { name: "Pultwagen", articleNumber: "PW-019", stock: 35, price: 149.0 },
  { name: "Ablagekörbe", articleNumber: "AK-020", stock: 80, price: 29.0 },
];

// Für jedes Produkt 3 Varianten erstellen (1 korrekt, 2 mit Fehlern)
baseProducts.forEach((product, index) => {
  // Korrekte Variante
  products.push({
    id: `P${index * 3 + 1}`,
    name: product.name,
    articleNumber: product.articleNumber,
    stock: product.stock,
    price: product.price,
    isCorrect: true,
  });

  // Variante mit Fehler 1 (falscher Preis)
  products.push({
    id: `P${index * 3 + 2}`,
    name: product.name,
    articleNumber: product.articleNumber,
    stock: product.stock,
    price: product.price * 1.1,
    isCorrect: false,
  });

  // Variante mit Fehler 2 (falscher Lagerbestand)
  products.push({
    id: `P${index * 3 + 3}`,
    name: product.name,
    articleNumber: product.articleNumber,
    stock: product.stock - 10,
    price: product.price,
    isCorrect: false,
  });
});

const tasks = {
  rechnung: {
    title: "Rechnung erstellen",
    task: "Erstelle eine korrekte Rechnung für einen Kunden mit allen gesetzlichen Pflichtangaben.",
    description:
      "Ein Kunde hat Artikel bestellt. Erstelle eine Rechnung mit allen Pflichtangaben wie Rechnungsnummer, Datum, Kundenadresse, Artikelbeschreibung, Nettopreis, MwSt. und Gesamtbetrag.",
    correctAnswers: {},
  },
  korrespondenz: {
    title: "Korrespondenz führen",
    task: "Schreibe eine professionelle E-Mail an einen Kunden bezüglich einer Bestellung.",
    description:
      "Ein Kunde fragt nach dem Status seiner Bestellung. Antworte professionell, höflich und informativ.",
    correctItems: [
      {
        item: "Betreffzeile",
        correct: true,
        reason: "Richtig! Eine klare Betreffzeile ist wichtig.",
      },
      {
        item: "Anrede",
        correct: true,
        reason: "Richtig! Eine höfliche Anrede ist professionell.",
      },
      {
        item: "Bestellnummer",
        correct: true,
        reason: "Richtig! Die Bestellnummer hilft bei der Zuordnung.",
      },
      {
        item: "Status-Information",
        correct: true,
        reason: "Richtig! Der Kunde möchte wissen, wo seine Bestellung steht.",
      },
      {
        item: "Liefertermin",
        correct: true,
        reason: "Richtig! Ein voraussichtlicher Liefertermin ist hilfreich.",
      },
      {
        item: "Grußformel",
        correct: true,
        reason: "Richtig! Eine professionelle Grußformel gehört dazu.",
      },
    ],
    wrongItems: [
      {
        item: "Emojis",
        correct: false,
        reason:
          "Falsch. Emojis sind in geschäftlicher Korrespondenz unprofessionell.",
      },
      {
        item: "Abkürzungen",
        correct: false,
        reason:
          'Falsch. Abkürzungen wie "u." oder "z.B." sollten vermieden werden.',
      },
      {
        item: "Umgangssprache",
        correct: false,
        reason:
          "Falsch. Umgangssprache ist in geschäftlichen E-Mails unangemessen.",
      },
    ],
  },
  dokument: {
    title: "Dokument archivieren",
    task: "Archiviere ein Dokument korrekt im digitalen Archivierungssystem.",
    description:
      "Ein wichtiges Dokument muss archiviert werden. Wähle die korrekten Archivierungsparameter.",
    correctItems: [
      {
        item: "Kategorie",
        correct: true,
        reason: "Richtig! Die Kategorie erleichtert die spätere Suche.",
      },
      {
        item: "Schlagwörter",
        correct: true,
        reason: "Richtig! Schlagwörter helfen bei der schnellen Wiederfindung.",
      },
      {
        item: "Zugriffsberechtigung",
        correct: true,
        reason: "Richtig! Die Zugriffsberechtigung muss definiert werden.",
      },
    ],
    wrongItems: [
      {
        item: "Farbliche Markierung",
        correct: false,
        reason:
          "Falsch. Farbliche Markierungen sind für die digitale Archivierung irrelevant.",
      },
      {
        item: "Handschriftliche Notizen",
        correct: false,
        reason:
          "Falsch. Handschriftliche Notizen sollten digitalisiert werden.",
      },
      {
        item: "Persönliche Bewertung",
        correct: false,
        reason:
          "Falsch. Persönliche Bewertungen gehören nicht in die Archivierung.",
      },
    ],
  },
  meeting: {
    title: "Meeting organisieren",
    task: "Organisiere ein Team-Meeting und erstelle eine Agenda.",
    description:
      "Ein wöchentliches Team-Meeting muss organisiert werden. Erstelle eine strukturierte Agenda.",
    correctItems: [
      {
        item: "Thema",
        correct: true,
        reason: "Richtig! Ein klares Thema ist wichtig für das Meeting.",
      },
      {
        item: "Teilnehmerliste",
        correct: true,
        reason: "Richtig! Alle Teilnehmer sollten geladen werden.",
      },
      {
        item: "Zeitplan",
        correct: true,
        reason: "Richtig! Ein Zeitplan hilft, das Meeting effizient zu halten.",
      },
      {
        item: "Agenda-Punkte",
        correct: true,
        reason: "Richtig! Klare Agenda-Punkte strukturieren das Meeting.",
      },
      {
        item: "Vorbereitungsaufgaben",
        correct: true,
        reason: "Richtig! Teilnehmer sollten vorbereitet sein.",
      },
      {
        item: "Protokoll",
        correct: true,
        reason: "Richtig! Ein Protokoll dokumentiert die Ergebnisse.",
      },
    ],
    wrongItems: [
      {
        item: "Kein Zeitlimit",
        correct: false,
        reason: "Falsch. Ohne Zeitlimit kann das Meeting endlos dauern.",
      },
      {
        item: "Unklare Agenda",
        correct: false,
        reason: "Falsch. Eine unklare Agenda führt zu ineffizienten Meetings.",
      },
      {
        item: "Fehlende Teilnehmer",
        correct: false,
        reason: "Falsch. Wichtige Teilnehmer sollten nicht vergessen werden.",
      },
    ],
  },
  bericht: {
    title: "Bericht erstellen",
    task: "Erstelle einen professionellen Geschäftsbericht für die Geschäftsführung.",
    description:
      "Erstelle einen monatlichen Geschäftsbericht mit den wichtigsten Kennzahlen.",
    correctItems: [
      {
        item: "Zeitraum",
        correct: true,
        reason: "Richtig! Der Berichtszeitraum muss klar definiert sein.",
      },
      {
        item: "Zusammenfassung",
        correct: true,
        reason: "Richtig! Eine Zusammenfassung gibt einen schnellen Überblick.",
      },
      {
        item: "Kennzahlen",
        correct: true,
        reason: "Richtig! Wichtige Kennzahlen sollten dargestellt werden.",
      },
      {
        item: "Analyse",
        correct: true,
        reason: "Richtig! Eine Analyse der Zahlen ist wichtig.",
      },
      {
        item: "Empfehlungen",
        correct: true,
        reason:
          "Richtig! Handlungsempfehlungen sind für die Geschäftsführung wertvoll.",
      },
      {
        item: "Anlagen",
        correct: true,
        reason: "Richtig! Anlagen wie Diagramme ergänzen den Bericht.",
      },
    ],
    wrongItems: [
      {
        item: "Unstrukturierte Daten",
        correct: false,
        reason: "Falsch. Unstrukturierte Daten sind schwer zu lesen.",
      },
      {
        item: "Fehlende Quellen",
        correct: false,
        reason: "Falsch. Quellenangaben sind für die Glaubwürdigkeit wichtig.",
      },
      {
        item: "Keine Zusammenfassung",
        correct: false,
        reason:
          "Falsch. Ohne Zusammenfassung ist der Bericht schwer erfassbar.",
      },
    ],
  },
  personal: {
    title: "Personalverwaltung",
    task: "Erstelle eine Stellenausschreibung für eine neue Position.",
    description:
      "Eine neue Position muss besetzt werden. Erstelle eine professionelle Stellenausschreibung.",
    correctItems: [
      {
        item: "Jobtitel",
        correct: true,
        reason: "Richtig! Der Jobtitel muss klar und attraktiv sein.",
      },
      {
        item: "Aufgabenbeschreibung",
        correct: true,
        reason: "Richtig! Die Aufgaben müssen klar beschrieben werden.",
      },
      {
        item: "Anforderungen",
        correct: true,
        reason: "Richtig! Die Anforderungen sollten realistisch sein.",
      },
      {
        item: "Vorteile",
        correct: true,
        reason: "Richtig! Unternehmensvorteile machen die Stelle attraktiv.",
      },
      {
        item: "Bewerbungsfrist",
        correct: true,
        reason: "Richtig! Eine Bewerbungsfrist ist wichtig.",
      },
      {
        item: "Kontaktdaten",
        correct: true,
        reason: "Richtig! Kontaktdaten für Bewerbungen sind erforderlich.",
      },
    ],
    wrongItems: [
      {
        item: "Vage Anforderungen",
        correct: false,
        reason: "Falsch. Vage Anforderungen führen zu unpassenden Bewerbungen.",
      },
      {
        item: "Keine Aufgabenbeschreibung",
        correct: false,
        reason:
          "Falsch. Ohne Aufgabenbeschreibung wissen Bewerber nicht, was sie erwartet.",
      },
      {
        item: "Unrealistische Anforderungen",
        correct: false,
        reason:
          "Falsch. Unrealistische Anforderungen schrecken qualifizierte Bewerber ab.",
      },
    ],
  },
  projekt: {
    title: "Projektmanagement",
    task: "Erstelle einen Projektplan für ein neues Projekt.",
    description:
      "Ein neues Projekt soll gestartet werden. Erstelle einen strukturierten Projektplan.",
    correctItems: [
      {
        item: "Projektziel",
        correct: true,
        reason: "Richtig! Ein klares Projektziel ist essenziell.",
      },
      {
        item: "Meilensteine",
        correct: true,
        reason: "Richtig! Meilensteine helfen, den Fortschritt zu messen.",
      },
      {
        item: "Ressourcen",
        correct: true,
        reason: "Richtig! Die benötigten Ressourcen müssen geplant werden.",
      },
      {
        item: "Zeitplan",
        correct: true,
        reason: "Richtig! Ein realistischer Zeitplan ist wichtig.",
      },
      {
        item: "Risikoanalyse",
        correct: true,
        reason: "Richtig! Eine Risikoanalyse hilft, Probleme zu vermeiden.",
      },
      {
        item: "Kommunikationsplan",
        correct: true,
        reason: "Richtig! Ein Kommunikationsplan hält alle informiert.",
      },
    ],
    wrongItems: [
      {
        item: "Kein Ziel",
        correct: false,
        reason:
          "Falsch. Ohne klares Ziel kann das Projekt nicht erfolgreich sein.",
      },
      {
        item: "Unrealistischer Zeitplan",
        correct: false,
        reason: "Falsch. Ein unrealistischer Zeitplan führt zu Verzögerungen.",
      },
      {
        item: "Fehlende Ressourcen",
        correct: false,
        reason:
          "Falsch. Ohne Ressourcenplanung kann das Projekt nicht umgesetzt werden.",
      },
    ],
  },
};

const kommunikationScenarios = [
  {
    id: 1,
    context: "📞 Telefongespräch – Eingehender Anruf",
    situation:
      'Ein Kunde ruft aufgebracht an: "Meine Bestellung ist 3 Tage überfällig und niemand hilft mir!" Wie reagierst du?',
    answers: [
      {
        text: "Das liegt an der Spedition, nicht an uns.",
        correct: false,
        feedback:
          "Kunden interessiert die interne Zuständigkeit nicht – du repräsentierst das gesamte Unternehmen.",
      },
      {
        text: "Ich verstehe Ihre Frustration und entschuldige mich. Ich schaue das sofort für Sie nach.",
        correct: true,
        feedback:
          "Empathie zeigen, Verantwortung übernehmen und konkrete Hilfe anbieten ist professionelle Kommunikation.",
      },
      {
        text: "Sie hätten früher anrufen sollen.",
        correct: false,
        feedback:
          "Den Kunden zu beschuldigen verschlimmert die Situation erheblich.",
      },
      {
        text: "Bitte schicken Sie uns eine E-Mail.",
        correct: false,
        feedback:
          "Den Kunden abzuwimmeln ohne direkte Hilfe ist schlechter Kundenservice.",
      },
    ],
  },
  {
    id: 2,
    context: "✉️ Schriftliche Kommunikation – Geschäftsbrief",
    situation:
      "Du verfasst einen formellen Geschäftsbrief an eine unbekannte Person. Welche Anrede ist korrekt?",
    answers: [
      {
        text: "Hey!",
        correct: false,
        feedback: "Viel zu informell für einen Geschäftsbrief.",
      },
      {
        text: "Hallo zusammen,",
        correct: false,
        feedback:
          "Diese Anrede ist für Gruppen, nicht für einzelne unbekannte Personen.",
      },
      {
        text: "Sehr geehrte Damen und Herren,",
        correct: true,
        feedback:
          'Richtig! Bei unbekannten Empfängern ist "Sehr geehrte Damen und Herren," die korrekte Standardanrede.',
      },
      {
        text: "Liebe Geschäftspartner,",
        correct: false,
        feedback: "Zu informell für einen ersten offiziellen Geschäftskontakt.",
      },
    ],
  },
  {
    id: 3,
    context: "👥 Interne Kommunikation – Teamarbeit",
    situation:
      "Ein Kollege bittet dich dringend, eine zusätzliche Aufgabe zu übernehmen. Du bist jedoch bereits voll ausgelastet. Was tust du?",
    answers: [
      {
        text: '"Ja, kein Problem!" – und hoffst, dass du es irgendwie schaffst.',
        correct: false,
        feedback:
          "Unrealistische Zusagen führen zu Enttäuschungen und beschädigen das Vertrauen im Team.",
      },
      {
        text: '"Nein." – ohne weitere Erklärung.',
        correct: false,
        feedback:
          'Ein einfaches "Nein" ohne Alternativvorschlag ist nicht konstruktiv.',
      },
      {
        text: '"Ich bin gerade ausgelastet. Können wir gemeinsam priorisieren, was wichtiger ist?"',
        correct: true,
        feedback:
          "Ehrliche Kommunikation mit Lösungsansatz ist professionell und stärkt die Teamarbeit.",
      },
      {
        text: "Die Anfrage stillschweigend ignorieren.",
        correct: false,
        feedback:
          "Aufgaben zu ignorieren schadet dem Team und zerstört das Vertrauen dauerhaft.",
      },
    ],
  },
  {
    id: 4,
    context: "📋 Kundenservice – Reklamation",
    situation:
      "Ein Kunde möchte eine Reklamation für ein fehlerhaftes Produkt einreichen. Wie reagierst du?",
    answers: [
      {
        text: '"Das kann kein Fehler von uns sein."',
        correct: false,
        feedback:
          "Defensives Reagieren eskaliert den Konflikt und schadet dem Unternehmensimage.",
      },
      {
        text: '"Wenden Sie sich direkt an den Hersteller."',
        correct: false,
        feedback:
          "Als Verkäufer bist du der erste Ansprechpartner – den Kunden weiterzuschicken ist unprofessionell.",
      },
      {
        text: '"Ich nehme Ihre Reklamation auf. Sie erhalten innerhalb von 2 Werktagen eine Rückmeldung."',
        correct: true,
        feedback:
          "Verbindliche Zusagen mit klarem Zeitrahmen zeigen Professionalität und geben dem Kunden Sicherheit.",
      },
      {
        text: '"Das Produkt war korrekt als Sie es erhalten haben."',
        correct: false,
        feedback:
          "Dem Kunden zu widersprechen ohne Prüfung ist unhöflich und gefährdet die Kundenbeziehung.",
      },
    ],
  },
  {
    id: 5,
    context: "📧 Digitale Kommunikation – E-Mail-Sicherheit",
    situation:
      'Du erhältst eine E-Mail mit Betreff "DRINGEND: Bestätigung erforderlich" von einem unbekannten Absender. Was tust du?',
    answers: [
      {
        text: "Sofort auf den Link in der E-Mail klicken.",
        correct: false,
        feedback:
          "Gefährlich! Das könnte ein Phishing-Angriff sein. Unbekannte Links niemals ungeklärt öffnen.",
      },
      {
        text: "Absender und Inhalt kritisch prüfen, dann entscheiden.",
        correct: true,
        feedback:
          "Richtig! Kritisches Prüfen von E-Mails ist grundlegend für IT-Sicherheit im Büro.",
      },
      {
        text: "Die E-Mail sofort an alle Kollegen weiterleiten.",
        correct: false,
        feedback:
          "Verdächtige E-Mails nie weiterleiten – das verbreitet mögliche Schadsoftware.",
      },
      {
        text: "Ohne zu lesen sofort löschen.",
        correct: false,
        feedback:
          "Nicht optimal – erst prüfen, dann entscheiden. Es könnte auch eine echte wichtige Anfrage sein.",
      },
    ],
  },
  {
    id: 6,
    context: "📝 Büromanagement – Protokollführung",
    situation:
      "In einem Meeting wurden wichtige Entscheidungen getroffen. Du wurdest gebeten, das Protokoll zu führen. Was gehört ins Protokoll?",
    answers: [
      {
        text: "Nur die Namen der Anwesenden.",
        correct: false,
        feedback:
          "Namen allein reichen nicht – Entscheidungen und Aufgaben müssen ebenfalls dokumentiert sein.",
      },
      {
        text: "Datum, Teilnehmer, Beschlüsse, Verantwortliche und Fristen.",
        correct: true,
        feedback:
          "Richtig! Ein vollständiges Protokoll mit allen relevanten Informationen schafft Verbindlichkeit und Klarheit.",
      },
      {
        text: "Nur meine eigenen Aufgaben.",
        correct: false,
        feedback:
          "Ein Protokoll dient allen Beteiligten – nicht nur dir selbst.",
      },
      {
        text: "Gar nichts – ich merke mir alles.",
        correct: false,
        feedback:
          "Ohne schriftliche Dokumentation können Entscheidungen vergessen oder falsch erinnert werden.",
      },
    ],
  },
  {
    id: 7,
    context: "📞 Externe Kommunikation – Lieferantenkontakt",
    situation:
      "Ein Lieferant fragt nach dem Status einer Bestellung, über die du keine Informationen hast. Was tust du?",
    answers: [
      {
        text: '"Keine Ahnung, fragen Sie jemand anderen."',
        correct: false,
        feedback:
          "Unhöflich und unprofessionell gegenüber einem wichtigen Geschäftspartner.",
      },
      {
        text: '"Diese Bestellung existiert bei uns nicht."',
        correct: false,
        feedback: "Das kannst du nicht wissen, ohne es zu prüfen.",
      },
      {
        text: '"Ich schaue das nach und melde mich bis heute Nachmittag bei Ihnen."',
        correct: true,
        feedback:
          "Verbindlichkeit und eine klare Rückmelde-Zusage sind Zeichen professioneller Kommunikation.",
      },
      {
        text: "Den Anruf stumm schalten und warten.",
        correct: false,
        feedback:
          "Den Gesprächspartner zu ignorieren zerstört die Geschäftsbeziehung.",
      },
    ],
  },
];

const tutorialSteps = [
  {
    title: "Willkommen!",
    text: "Willkommen bei der Büromanagement Academy! Hier lernst du alles über den Beruf des Kaufmanns/-frau für Büromanagement. Verrate uns bitte deinen Namen, damit wir personalisiert starten können.",
    action: "Name bestätigen",
    isNameInput: true,
  },
  {
    title: "Deine Mission",
    text: "Deine Mission ist es, ein effizientes Büromanagement aufzubauen! Du wirst Schritt für Schritt lernen, wie man professionelle Dokumente verwaltet, Buchhaltung betreibt, Kundenkommunikation führt und Projekte managt. Alles basiert auf realen Büromanagement-Praktiken und Berufsinhalten.",
    action: "Verstanden",
  },
  {
    title: "5 Missionen",
    text: "Das Spiel besteht aus 5 aufeinander aufbauenden Missionen: 1) Dokumentenmanagement - Verwalte Dokumente professionell, 2) Buchhaltung & Rechnungswesen - Führe Buchungen korrekt durch, 3) Kommunikation & Kundenmanagement - Kommuniziere professionell, 4) Projektmanagement - Organisiere Projekte effizient, 5) Abschluss - Erhalte dein Zertifikat. Jede Mission schaltet die nächste frei.",
    action: "Weiter",
  },
  {
    title: "Mission 1: Dokumentenmanagement",
    text: "In Mission 1 lernst du, wie man Dokumente korrekt archiviert, strukturiert und schnell wiederfindet. Du lernst Aufbewahrungsfristen, digitale Archivierungssysteme und Ablagekonzepte kennen. Gute Dokumentenverwaltung ist die Basis eines effizienten Büros.",
    action: "Weiter",
  },
  {
    title: "Mission 2: Buchhaltung & Rechnungswesen",
    text: "Buchhaltung ist das Herzstück jedes Unternehmens! In Mission 2 erfassst du Geschäftsvorfälle korrekt, erstellst Rechnungen mit allen Pflichtangaben und lernst die Grundlagen der Doppelten Buchhaltung. Du lernst, wie man Belege ordnet und Konten richtig führt.",
    action: "Weiter",
  },
  {
    title: "Mission 3: Kommunikation & Kundenmanagement",
    text: "Kommunikation ist das Fundament! In Mission 3 schreibst du professionelle E-Mails, führst Kundengespräche und erstellte Angebote. Du lernst, wie man Kunden bindet, Beschwerden professionell behandelt und langfristige Kundenbeziehungen aufbaut.",
    action: "Weiter",
  },
  {
    title: "Mission 4: Projektmanagement",
    text: "Projektmanagement ist eine Schlüsselkompetenz! In Mission 4 planst du Projekte, definierst Meilensteine, steuerst Ressourcen und überwachst Zeitpläne. Du lernst, wie man Risiken analysiert, Teams koordiniert und Projekte erfolgreich abschließt.",
    action: "Weiter",
  },
  {
    title: "Lernpfad & Fortschritt",
    text: "Links in der Sidebar siehst du deinen Lernpfad mit allen Missionen. Nach jeder erfolgreichen Mission wird die nächste freigeschaltet. Der Fortschrittsbalken oben zeigt deinen Gesamtfortschritt. Du kannst jederzeit pausieren und später weitermachen - dein Fortschritt wird automatisch gespeichert.",
    action: "Weiter",
  },
  {
    title: "Belohnungen & Zertifikat",
    text: "Nach jeder erfolgreichen Mission erhältst du Fortschrittspunkte. Wenn du alle Missionen abgeschlossen hast, erhältst du ein personalisiertes Zertifikat für deine Büromanagement-Kenntnisse! Dieses Zertifikat bestätigt, dass du die Grundlagen von Dokumentenmanagement, Buchhaltung, Kommunikation und Projektmanagement beherrschst.",
    action: "Weiter",
  },
  {
    title: "Bereit zum Start?",
    text: "Du startest jetzt mit einer ausführlichen Einleitung, wo du alles über Büromanagement lernst: globale Statistiken, die Ausbildung zum Kaufmann/-frau für Büromanagement, Karrierewege (Fachwirt, Studium, Zertifikate), die 5 Säulen des Erfolgs und die wichtigsten Kennzahlen. Danach geht es direkt zu Mission 1 - Dokumentenmanagement. Viel Spaß beim Aufbau deiner Büromanagement-Karriere!",
    action: "Starten",
  },
];

// Budget-Management Daten für Mission 4
const budgetData = {
  totalBudget: 100000,
  departments: [
    {
      id: "marketing",
      name: "Marketing",
      description: "Werbung, Social Media, Events",
      minBudget: 15000,
      recommendedBudget: 20000,
      color: "#38bdf8"
    },
    {
      id: "it",
      name: "IT & Technik",
      description: "Software, Hardware, Wartung",
      minBudget: 20000,
      recommendedBudget: 25000,
      color: "#a855f7"
    },
    {
      id: "personal",
      name: "Personal",
      description: "Gehälter, Weiterbildung",
      minBudget: 30000,
      recommendedBudget: 35000,
      color: "#22c55e"
    },
    {
      id: "buero",
      name: "Büro & Verwaltung",
      description: "Miete, Materialien, Versicherung",
      minBudget: 10000,
      recommendedBudget: 20000,
      color: "#f59e0b"
    }
  ]
};
