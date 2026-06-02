// --- UI & Navigations-Logik für Büromanagement ---

let confirmMode = "restart";
let tutorialStep = 0;

// Statistik-Informationen
const statInfoData = {
  umsatz: {
    title: "Weltweit Nachgefragt",
    content:
      "Kaufleute für Büromanagement sind weltweit gefragt. In fast jeder Branche - von der Industrie bis zum Dienstleistungssektor - werden qualifizierte Bürokaufleute benötigt. Die Digitalisierung hat die Nachfrage noch weiter erhöht, da Unternehmen administrative Prozesse effizienter gestalten müssen.",
  },
  anteil: {
    title: "Digital Zukunftsfähig",
    content:
      "Der Beruf ist digital zukunftsfähig: Moderne Bürokommunikation, digitale Dokumentenverwaltung und cloudbasierte Zusammenarbeit sind heute Standard. Als Kaufmann/-frau für Büromanagement lernst du, mit modernen Tools wie ERP-Systemen, CRM-Software und Kollaborationsplattformen umzugehen.",
  },
  erreichbarkeit: {
    title: "Vielseitige Einsatzbereiche",
    content:
      "Die Einsatzbereiche sind vielseitig: Von kleinen Unternehmen über mittelständische Betriebe bis hin zu großen Konzernen - überall werden Bürokaufleute benötigt. Branchen wie Finanzdienstleistungen, Gesundheitswesen, Bildung, Verwaltung und Handel bieten zahlreiche Karrieremöglichkeiten.",
  },
  dualer_fokus: {
    title: "Dualer Fokus - Praxis im Betrieb + Theorie in der Berufsschule",
    content:
      "Die duale Ausbildung ist einzigartig: Du bist 3-4 Tage pro Woche im Betrieb und lernst die Praxis direkt am Arbeitsplatz. An 1-2 Tagen besuchst du die Berufsschule und erwerbst theoretisches Wissen. So verbindest du praktische Erfahrung mit fundiertem Fachwissen - der ideale Start in deine Karriere!",
  },
  tools_technik: {
    title: "Tools & Technik - Office, ERP, CRM & Projektmanagement",
    content:
      "Moderne Büros basieren auf leistungsstarken Tools: Office-Pakete wie Microsoft Office oder LibreOffice sind die Basis. ERP-Systeme wie SAP verwalten Geschäftsprozesse. CRM-Systeme wie Salesforce pflegen Kundenbeziehungen und Projektmanagement-Tools wie Trello oder Jira organisieren Aufgaben.",
  },
  recht_sicherheit: {
    title: "Recht & Sicherheit - DSGVO, Arbeitsrecht & Datenschutz",
    content:
      "Büromanagement unterliegt strengen rechtlichen Rahmenbedingungen: Die DSGVO regelt den Datenschutz, das Arbeitsrecht schützt Mitarbeiter und die Datensicherheit ist essenziell. Als Kaufmann/-frau für Büromanagement musst du diese Vorschriften kennen und einhalten.",
  },
  marketing_sales: {
    title: "Finanzen & Controlling - Budgetierung & Kostenkontrolle",
    content:
      "Finanzen sind das Herzstück jedes Unternehmens: Du lernst, Budgets zu planen, Kosten zu kontrollieren und Finanzberichte zu erstellen. Diese Kenntnisse sind essenziell für die wirtschaftliche Stabilität und den Erfolg eines Unternehmens.",
  },
  kundenmanagement: {
    title: "Kundenmanagement - Kommunikation, Support & Kundenbindung",
    content:
      "Gute Kundenkommunikation ist unverzichtbar: Du lernst, professionell mit Kunden zu kommunizieren, Anfragen zu bearbeiten und Support zu leisten. Kundenbindungsmaßnahmen wie persönliche Betreuung und schnelle Reaktionszeiten halten Kunden langfristig loyal.",
  },
  conversion_rate: {
    title: "Effizienzrate - % der Prozesse optimiert",
    content:
      "Die Effizienzrate gibt an, wie viele Prozesse optimiert wurden. Sie wird berechnet als: (Optimierte Prozesse / Gesamtprozesse) × 100. Eine gute Rate liegt zwischen 70-80% im Büro. Optimierungsmöglichkeiten sind Digitalisierung, Automatisierung und Standardisierung von Arbeitsabläufen.",
  },
  akquise_kosten: {
    title: "Bearbeitungszeit - Ø Zeit pro Aufgabe",
    content:
      "Die Bearbeitungszeit gibt an, wie lange eine Aufgabe im Durchschnitt dauert. Berechnung: Gesamtzeit / Anzahl Aufgaben. Ein gesunder Wert sollte je nach Aufgabentyp zwischen 15-60 Minuten liegen. Zu lange Bearbeitungszeiten bedeuten Ineffizienz und Optimierungsbedarf.",
  },
  warenkorb_wert: {
    title: "Prozessqualität - % fehlerfreie Prozesse",
    content:
      "Die Prozessqualität gibt an, wie viele Prozesse fehlerfrei abgeschlossen wurden. Berechnung: (Fehlerfreie Prozesse / Gesamtprozesse) × 100. Eine gute Quote liegt über 95%. Hohe Fehlerquoten bedeuten Nacharbeit und Unzufriedenheit.",
  },
  kundenwert: {
    title: "Kundenzufriedenheit - Bewertung 1-10",
    content:
      "Die Kundenzufriedenheit wird durch Umfragen ermittelt (CSAT Score). Skala von 1 (sehr unzufrieden) bis 10 (sehr zufrieden). Ein guter Wert liegt über 8. Strategien zur Erhöhung: Schnelle Reaktionszeiten, freundlicher Service und proaktive Kommunikation.",
  },
  retourenquote: {
    title: "Dokumentationsquote - % dokumentierte Vorgänge",
    content:
      "Die Dokumentationsquote gibt an, wie viele Vorgänge ordnungsgemäß dokumentiert wurden. Berechnung: (Dokumentierte Vorgänge / Gesamtzahl Vorgänge) × 100. Eine gute Quote liegt über 90%. Vollständige Dokumentation ist essenziell für Revisionssicherheit und Prozessoptimierung.",
  },
  sortiment: {
    title: "Dokumentenmanagement - Ordnung & Struktur",
    content:
      "Dokumentenmanagement ist die Basis eines effizienten Büros: Du lernst, Dokumente zu archivieren, zu strukturieren und schnell wiederzufinden. Digitale Archivierungssysteme und Ablagekonzepte sorgen für Ordnung und ermöglichen effizientes Arbeiten.",
  },
  plattform: {
    title: "Prozesse - Effiziente Arbeitsabläufe",
    content:
      "Effiziente Prozesse sind der Schlüssel zum Erfolg: Du lernst, Arbeitsabläufe zu analysieren, zu optimieren und zu automatisieren. Standardisierte Prozesse sparen Zeit, reduzieren Fehler und erhöhen die Produktivität im gesamten Unternehmen.",
  },
  marketing_saeulen: {
    title: "Kommunikation - Intern & Extern",
    content:
      "Kommunikation ist das Fundament: Du lernst, intern mit Kollegen und Führungskräften zu kommunizieren und extern mit Kunden, Lieferanten und Partnern in Kontakt zu treten. Gute Kommunikation fördert Zusammenarbeit und verhindert Missverständnisse.",
  },
  logistik: {
    title: "Organisation - Termin- & Ressourcenplanung",
    content:
      "Organisation ist deine Stärke: Du lernst, Termine zu planen, Ressourcen zu koordinieren und Prioritäten zu setzen. Kalendermanagement, Meeting-Planung und Ressourcenallokation sorgen für reibungslose Abläufe und verhindern Engpässe.",
  },
  service: {
    title: "Service - Exzellenter Büroservice",
    content:
      "Exzellenter Büroservice unterscheidet gute von großartigen Unternehmen: Ein schneller und freundlicher Service, zuverlässige Unterstützung und proaktive Problemlösung schaffen Vertrauen. Du bist die erste Anlaufstelle für Kollegen und Kunden.",
  },
  fachwirt: {
    title: "Fachwirt - Die Aufstiegsfortbildung (IHK)",
    content:
      "Der Fachwirt für Büromanagement ist eine anerkannte Aufstiegsfortbildung der IHK nach der Ausbildung. Er ist auf DQR-Niveau 6 (Bachelor-Niveau) und dauert in der Regel 1-2 Jahre in Teilzeit. Themen sind unter anderem Strategisches Management, Personalwesen und Unternehmensführung. Absolventen haben exzellente Aufstiegschancen zu Positionen wie Office Manager oder Head of Administration.",
  },
  studium: {
    title: "Studium - BWL, Verwaltung oder Public Management",
    content:
      "Ein Studium in BWL, Verwaltung oder Public Management an Hochschulen bietet eine akademische Ausbildung mit tiefem theoretischen Wissen. Typische Studiengänge sind 'Betriebswirtschaftslehre', 'Verwaltungswirtschaft' oder 'Public Management'. Die Dauer beträgt meist 6-8 Semester (Bachelor) oder 4 Semester (Master). Vorteile sind ein breites Netzwerk, wissenschaftliche Methoden und oft Praktika in Partnerunternehmen.",
  },
  zertifikate: {
    title: "Zertifikate - Profi-Kurse für Office, ERP oder Projektmanagement",
    content:
      "Zertifikate von großen Tech-Unternehmen sind praxisorientierte Qualifikationen: Microsoft bietet Zertifikate für Office 365 und Azure. SAP hat Zertifikate für ERP-Systeme und Business Intelligence. Adobe bietet Zertifikate für Creative Cloud und Dokumentenmanagement. Diese Kurse sind oft online verfügbar und verbessern deine Jobchancen.",
  },
  self_made: {
    title: "Praxiserfahrung - Mit eigenen kleinen Projekten starten",
    content:
      "Der Praxisweg ist der praxisnahste: Du startest eigene kleine Projekte – von der Eventplanung über die Buchhaltung für Freelancer bis zum Social Media Management. Du lernst durch Tun - von der Organisation bis zur Kundenkommunikation. Dieser Weg erfordert viel Disziplin und Eigenmotivation, bietet aber wertvolle praktische Erfahrung.",
  },
  bootcamps: {
    title: "Weiterbildung - Intensive 3-6 monatige Kurse",
    content:
      "Weiterbildungen sind intensive, praxisorientierte Kurse von privaten Anbietern wie CareerFoundry, Ironhack oder Spiced Academy. Sie dauern 3-6 Monate und kombinieren Theorie mit praktischen Projekten. Der Fokus liegt auf schnell anwendbaren Skills und oft auf Job-Placement-Programmen. Weiterbildungen sind eine gute Option für den schnellen Einstieg, kosten aber oft mehrere tausend Euro.",
  },
  hard_skills: {
    title: "Fachliche Kompetenzen (Hard Skills)",
    content:
      "Hard Skills sind deine fachlichen Fähigkeiten: Office-Kompetenz (Word, Excel, PowerPoint), ERP-Systeme (SAP, Oracle), CRM-Software (Salesforce, HubSpot), Buchhaltung (DATEV, Lexware), Projektmanagement (Trello, Jira) und digitale Kommunikation (E-Mail, Video-Konferenzen). Diese Skills sind messbar und durch Zertifikate nachweisbar.",
  },
  soft_skills: {
    title: "Strategisches Denken (Soft Skills)",
    content:
      "Soft Skills sind deine überfachlichen Fähigkeiten: Kommunikationsfähigkeit, Teamarbeit, Problemlösungskompetenz, Zeitmanagement, Organisationstalent, Flexibilität und Kundenorientierung. Diese Skills sind essenziell für den beruflichen Erfolg und werden in Vorstellungsgesprächen oft höher bewertet als reine Fachkenntnisse.",
  },
};

function showElement(id) {
  const el = document.getElementById(id);
  if (el) {
    if (id === "startScreen") {
      el.style.display = "flex";
      document.body.style.overflow = "hidden";
    } else {
      el.style.display = "block";
    }
  }
}

function hideElement(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = "none";
    if (id === "startScreen") {
      document.body.style.overflow = "auto";
    }
  }
}

function showModal(title, text, btnText = "Verstanden", callback = null) {
  const modal = document.getElementById("modalOverlay");
  const mTitle = document.getElementById("modalTitle");
  const mText = document.getElementById("modalText");
  const mBtn = document.getElementById("modalActionBtn");

  if (modal && mTitle && mText) {
    mTitle.innerText = title;
    mText.innerHTML = text.replace(/\n/g, "<br>");
    modal.style.display = "flex";
    document.body.classList.add("modal-open");

    if (mBtn) {
      mBtn.innerText = btnText;
      mBtn.onclick = () => {
        if (callback) {
          callback();
        }
        closeModal();
      };
    }
  }
}

function closeModal() {
  const modal = document.getElementById("modalOverlay");
  if (modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
}

function showInfo(type) {
  const infoData = {
    rechnungsnummer: {
      title: "Rechnungsnummer",
      text: "Die Rechnungsnummer ist eine eindeutige Kennzeichnung für jede Rechnung. Sie folgt meist einem bestimmten Muster, z.B. RE-2024-001. Die Nummer muss auf der Bestellung übereinstimmen."
    },
    rechnungsdatum: {
      title: "Rechnungsdatum",
      text: "Das Rechnungsdatum ist das Datum, an dem die Rechnung erstellt wurde. Es muss im Format DD.MM.YYYY angegeben werden, z.B. 14.05.2026."
    },
    kundenname: {
      title: "Kundenname",
      text: "Der Kundenname muss exakt mit dem Namen auf der Bestellung übereinstimmen. Achte auf die korrekte Schreibweise."
    },
    kundenadresse: {
      title: "Kundenadresse",
      text: "Die Kundenadresse muss exakt mit der Adresse auf der Bestellung übereinstimmen. Achte auf die korrekte Schreibweise von Straße, Hausnummer und Postleitzahl."
    },
    kundenstadt: {
      title: "Kundenstadt",
      text: "Die Kundenstadt muss exakt mit der Stadt auf der Bestellung übereinstimmen. Achte auf die korrekte Schreibweise."
    },
    nettopreis: {
      title: "Nettopreis",
      text: "Der Nettopreis ist der Preis ohne Mehrwertsteuer. Er wird berechnet, indem man den Gesamtbetrag durch 1,19 teilt. Das Format ist z.B. 1245,00."
    },
    mwst: {
      title: "Mehrwertsteuer (MwSt.)",
      text: "Die Mehrwertsteuer beträgt 19% des Nettobetrags. Sie wird berechnet, indem man den Nettobetrag mit 0,19 multipliziert. Das Format ist z.B. 236,55."
    },
    gesamtbetrag: {
      title: "Gesamtbetrag",
      text: "Der Gesamtbetrag ist die Summe aus Nettobetrag und Mehrwertsteuer. Er muss exakt mit dem Betrag auf der Bestellung übereinstimmen. Das Format ist z.B. 1481,55."
    },
    budget_marketing: {
      title: "Marketing-Budget",
      text: "Das Marketing-Budget wird für Werbung, Social Media und Events verwendet. Eine gute Marketingstrategie ist wichtig, um Kunden zu gewinnen und die Marke bekannt zu machen. Mindestens 15.000 € sind erforderlich."
    },
    budget_it: {
      title: "IT & Technik-Budget",
      text: "Das IT-Budget wird für Software, Hardware und Wartung verwendet. Moderne IT-Systeme sind essenziell für effiziente Arbeitsabläufe. Mindestens 20.000 € sind erforderlich."
    },
    budget_personal: {
      title: "Personal-Budget",
      text: "Das Personal-Budget wird für Gehälter und Weiterbildung verwendet. Gute Mitarbeiter sind das wichtigste Kapital eines Unternehmens. Mindestens 30.000 € sind erforderlich."
    },
    budget_buero: {
      title: "Büro & Verwaltung-Budget",
      text: "Das Büro-Budget wird für Miete, Materialien und Versicherung verwendet. Ein angenehmes Arbeitsumfeld und funktionierende Verwaltung sind wichtig. Mindestens 10.000 € sind erforderlich."
    },
    bestellannahme: {
      title: "Bestellannahme",
      text: "Prüfe die eingehende Bestellung sorgfältig. Suche in der Kundendatenbank nach dem richtigen Kunden und in der Produktdatenbank nach dem richtigen Produkt. Wenn du falsche Informationen auswählst, erscheint eine neue Bestellung."
    },
    kommunikation: {
      title: "Professionelle Kommunikation",
      text: "Wähle in jeder Situation die professionellste Antwort. Achte auf höfliche Formulierungen, klare Informationen und lösungsorientierte Kommunikation. Du brauchst mindestens 5 von 7 richtige Antworten."
    },
    kundedatenbank: {
      title: "Kundendatenbank",
      text: "Eine Kundendatenbank ist ein zentrales System, in dem alle Informationen über Kunden gespeichert werden: Name, Adresse, Kontaktdaten, Bestellhistorie und Präferenzen. Im Büromanagement ist die Aufgabe, die Kundendatenbank aktuell zu halten, Kundenanfragen zu beantworten und bei Bestellungen die richtigen Kundendaten zu finden und zu prüfen. Dies ist wichtig für einen guten Kundenservice und effiziente Geschäftsabläufe."
    },
    produktdatenbank: {
      title: "Produktdatenbank",
      text: "Eine Produktdatenbank enthält alle Informationen über die Produkte eines Unternehmens: Artikelnummer, Produktname, Beschreibung, Preis, Lagerbestand und technische Details. Im Büromanagement ist die Aufgabe, die Produktdaten zu pflegen, Preisänderungen einzupflegen und bei Bestellungen die richtigen Produktdaten zu finden und zu prüfen. Dies ist wichtig für korrekte Bestellungen, Rechnungen und Lagerbestandsmanagement."
    }
  };

  const info = infoData[type];
  if (info) {
    showModal(info.title, info.text);
  }
}

function helpRechnungsnummer() {
  if (!currentOrder) {
    showModal("Tipp", "Es ist keine Bestellung geladen.");
    return;
  }
  const input = document.getElementById("rechnungsnummer2");
  if (input) {
    input.value = `RE-${currentOrder.orderNumber}`;
  }
}

function helpRechnungsdatum() {
  if (!currentOrder) {
    showModal("Tipp", "Es ist keine Bestellung geladen.");
    return;
  }
  const input = document.getElementById("rechnungsdatum2");
  if (input) {
    input.value = currentOrder.orderDate;
  }
}

function helpKundenname() {
  if (!currentOrder) {
    showModal("Tipp", "Es ist keine Bestellung geladen.");
    return;
  }
  const input = document.getElementById("kundenname2");
  if (input) {
    input.value = currentOrder.customer.name;
  }
}

function helpKundenadresse() {
  if (!currentOrder) {
    showModal("Tipp", "Es ist keine Bestellung geladen.");
    return;
  }
  const input = document.getElementById("kundenadresse2");
  if (input) {
    input.value = currentOrder.customer.address;
  }
}

function helpKundenstadt() {
  if (!currentOrder) {
    showModal("Tipp", "Es ist keine Bestellung geladen.");
    return;
  }
  const input = document.getElementById("kundenstadt2");
  if (input) {
    input.value = currentOrder.customer.city;
  }
}

function helpNettopreis() {
  if (!currentOrder) {
    showModal("Tipp", "Es ist keine Bestellung geladen.");
    return;
  }
  const input = document.getElementById("nettopreis2");
  if (input) {
    input.value = currentOrder.subtotal.toFixed(2).replace(".", ",");
  }
}

function helpMwst() {
  if (!currentOrder) {
    showModal("Tipp", "Es ist keine Bestellung geladen.");
    return;
  }
  const input = document.getElementById("mwst2");
  if (input) {
    input.value = currentOrder.vat.toFixed(2).replace(".", ",");
  }
}

function helpGesamtbetrag() {
  if (!currentOrder) {
    showModal("Tipp", "Es ist keine Bestellung geladen.");
    return;
  }
  const input = document.getElementById("gesamtbetrag2");
  if (input) {
    input.value = currentOrder.total.toFixed(2).replace(".", ",");
  }
}

function helpBudget(deptId) {
  const dept = budgetData.departments.find(d => d.id === deptId);
  if (dept) {
    const input = document.getElementById(`budget_${deptId}`);
    if (input) {
      input.value = dept.recommendedBudget;
      budgetAllocations[deptId] = dept.recommendedBudget;
      updateBudgetDisplay();
    }
  }
}

// Zertifikat als PNG erstellen und herunterladen
function generateCertificate() {
  console.log("generateCertificate aufgerufen");
  const playerName = localStorage.getItem("buromanagementPlayerName") || "Spieler";
  console.log("Spielername:", playerName);
  const certificateElement = document.getElementById("certificateElement");
  
  if (!certificateElement) {
    console.error("Zertifikat-Element nicht gefunden");
    return;
  }

  // Zertifikat mit Spielerdaten aktualisieren
  const nameElement = document.getElementById("certificateName");
  const dateElement = document.getElementById("certificateDate");
  
  if (nameElement) {
    nameElement.textContent = playerName;
  }
  
  if (dateElement) {
    const today = new Date();
    dateElement.textContent = today.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
  }

  // Element kurz anzeigen für html2canvas
  certificateElement.style.display = "block";
  certificateElement.style.position = "absolute";
  certificateElement.style.top = "0";
  certificateElement.style.left = "0";

  console.log("html2canvas wird aufgerufen");

  // HTML zu PNG konvertieren
  html2canvas(certificateElement, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff",
    allowTaint: true
  }).then(canvas => {
    console.log("Canvas erstellt, Download wird gestartet");
    // Element wieder verstecken
    certificateElement.style.display = "none";
    certificateElement.style.position = "absolute";
    certificateElement.style.top = "-9999px";
    certificateElement.style.left = "-9999px";

    // Canvas zu Data URL konvertieren und herunterladen
    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `Zertifikat_Buromanagement_${playerName.replace(/\s+/g, "_")}.png`;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("Download gestartet");
  }).catch(error => {
    console.error("Fehler beim Erstellen des Zertifikats:", error);
    certificateElement.style.display = "none";
    certificateElement.style.position = "absolute";
    certificateElement.style.top = "-9999px";
    certificateElement.style.left = "-9999px";
  });
}

// Budget-Management Spiel für Mission 4
let budgetAllocations = {};

function initBudgetGame() {
  const container = document.getElementById("departmentInputs");
  if (!container) return;

  container.innerHTML = "";
  budgetAllocations = {};

  budgetData.departments.forEach((dept) => {
    budgetAllocations[dept.id] = 0;

    const deptDiv = document.createElement("div");
    deptDiv.style.cssText = `
      background: rgba(255, 255, 255, 0.1);
      border-radius: 15px;
      padding: 20px;
      border: 2px solid ${dept.color};
    `;

    deptDiv.innerHTML = `
      <h4 style="color: white; font-size: 18px; margin: 0 0 10px 0; font-weight: bold;">${dept.name}</h4>
      <p style="color: rgba(255, 255, 255, 0.7); font-size: 14px; margin: 0 0 15px 0;">${dept.description}</p>
      <div class="input-group-wrapper" style="margin-bottom: 0;">
        <input
          type="number"
          id="budget_${dept.id}"
          value="0"
          min="0"
          max="${budgetData.totalBudget}"
          step="1000"
          oninput="updateBudgetAllocation('${dept.id}')"
          style="
            flex: 1;
            padding: 12px;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: 2px solid ${dept.color};
            font-size: 16px;
            outline: none;
          "
        />
        <div class="button-group-inline">
          <button class="info-icon-btn" onclick="showInfo('budget_${dept.id}')">INFO</button>
          <button class="helper-btn" onclick="helpBudget('${dept.id}')">Hilfe</button>
        </div>
      </div>
      <div style="font-size: 12px; color: rgba(255, 255, 255, 0.6); margin-top: 10px;">
        Mindestens: <span style="color: ${dept.color}; font-weight: bold;">${dept.minBudget.toLocaleString()} €</span>
      </div>
    `;

    container.appendChild(deptDiv);
  });

  updateBudgetDisplay();
}

function updateBudgetAllocation(deptId) {
  const input = document.getElementById(`budget_${deptId}`);
  if (input) {
    let value = parseInt(input.value) || 0;
    if (value < 0) value = 0;
    if (value > budgetData.totalBudget) value = budgetData.totalBudget;
    input.value = value;
    budgetAllocations[deptId] = value;
    updateBudgetDisplay();
  }
}

function updateBudgetDisplay() {
  const totalAllocated = Object.values(budgetAllocations).reduce((sum, val) => sum + val, 0);
  const remaining = budgetData.totalBudget - totalAllocated;

  const remainingDiv = document.getElementById("remainingBudget");
  const progressBar = document.getElementById("budgetProgressBar");

  if (remainingDiv) {
    remainingDiv.textContent = `${remaining.toLocaleString()} €`;
    if (remaining < 0) {
      remainingDiv.style.background = "linear-gradient(135deg, #ef4444, #dc2626)";
    } else if (remaining === 0) {
      remainingDiv.style.background = "linear-gradient(135deg, #22c55e, #16a34a)";
    } else {
      remainingDiv.style.background = "linear-gradient(135deg, #38bdf8, #0ea5e9)";
    }
  }

  if (progressBar) {
    const percentage = (totalAllocated / budgetData.totalBudget) * 100;
    progressBar.style.width = `${percentage}%`;
    if (percentage > 100) {
      progressBar.style.background = "linear-gradient(90deg, #ef4444, #dc2626)";
    } else if (percentage === 100) {
      progressBar.style.background = "linear-gradient(90deg, #22c55e, #16a34a)";
    } else {
      progressBar.style.background = "linear-gradient(90deg, #38bdf8, #0ea5e9)";
    }
  }
}

function checkBudget() {
  const totalAllocated = Object.values(budgetAllocations).reduce((sum, val) => sum + val, 0);
  const feedbackDiv = document.getElementById("budgetFeedback");
  const checkBtn = document.getElementById("checkBudgetBtn");

  if (!feedbackDiv) return;

  feedbackDiv.style.display = "block";

  // Prüfen, ob das Budget vollständig verteilt wurde
  if (totalAllocated !== budgetData.totalBudget) {
    feedbackDiv.style.background = "rgba(239, 68, 68, 0.2)";
    feedbackDiv.style.border = "2px solid #ef4444";
    feedbackDiv.style.color = "#ffffff";
    feedbackDiv.style.padding = "20px";
    feedbackDiv.style.borderRadius = "15px";
    feedbackDiv.innerHTML = `
      <strong>❌ Budget nicht vollständig verteilt!</strong><br>
      Du hast ${totalAllocated.toLocaleString()} € von ${budgetData.totalBudget.toLocaleString()} € verteilt.<br>
      Es fehlen noch ${(budgetData.totalBudget - totalAllocated).toLocaleString()} €.
    `;
    return;
  }

  // Prüfen, ob alle Mindestanforderungen erfüllt sind
  let allRequirementsMet = true;
  let failedDepartments = [];

  budgetData.departments.forEach((dept) => {
    if (budgetAllocations[dept.id] < dept.minBudget) {
      allRequirementsMet = false;
      failedDepartments.push({
        name: dept.name,
        allocated: budgetAllocations[dept.id],
        required: dept.minBudget
      });
    }
  });

  if (!allRequirementsMet) {
    feedbackDiv.style.background = "rgba(239, 68, 68, 0.2)";
    feedbackDiv.style.border = "2px solid #ef4444";
    feedbackDiv.style.color = "#ffffff";
    feedbackDiv.style.padding = "20px";
    feedbackDiv.style.borderRadius = "15px";
    feedbackDiv.innerHTML = `
      <strong>❌ Mindestanforderungen nicht erfüllt!</strong><br>
      Folgende Abteilungen haben nicht das Mindestbudget erhalten:<br><br>
      ${failedDepartments.map(d => `
        • ${d.name}: ${d.allocated.toLocaleString()} € (mindestens ${d.required.toLocaleString()} €)<br>
      `).join('')}
    `;
    return;
  }

  // Alle Anforderungen erfüllt
  feedbackDiv.style.background = "rgba(34, 197, 94, 0.2)";
  feedbackDiv.style.border = "2px solid #22c55e";
  feedbackDiv.style.color = "#ffffff";
  feedbackDiv.style.padding = "20px";
  feedbackDiv.style.borderRadius = "15px";
  feedbackDiv.innerHTML = `
    <strong>✅ Perfekt!</strong><br>
    Du hast das Budget korrekt verteilt und alle Mindestanforderungen erfüllt.<br>
    Mission 4 erfolgreich abgeschlossen!
  `;

  // Button zum Abschließen anzeigen
  if (checkBtn) {
    checkBtn.style.display = "none";
  }

  const saveBtn = document.getElementById("saveTaskBtn4");
  if (saveBtn) {
    saveBtn.style.display = "block";
  }

  // Fortschritt aktualisieren
  progress += 20;
  updateProgress();
  saveGame();
}

function showStatInfo(type) {
  const modal = document.getElementById("statInfoModal");
  const title = document.getElementById("statInfoTitle");
  const content = document.getElementById("statInfoContent");

  if (statInfoData[type]) {
    title.textContent = statInfoData[type].title;
    content.textContent = statInfoData[type].content;
    modal.style.display = "flex";
    document.body.classList.add("modal-open");
  }
}

function closeStatInfo() {
  const modal = document.getElementById("statInfoModal");
  if (modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
}

function goToTask(sectionId) {
  hideElement("introSection");
  hideElement("task1Section");
  hideElement("task2Section");
  hideElement("task3Section");
  hideElement("task4Section");
  hideElement("interactiveTutorial");
  showElement(sectionId);

  // Alle aktiven Klassen entfernen
  document.querySelectorAll(".mission").forEach((el) => {
    el.classList.remove("active");
  });

  // Aktuelles Menü-Item hervorheben
  // Aktuelle Section merken und Zustand speichern
  currentSectionId = sectionId;
  saveUIState();

  let menuId = "";
  if (sectionId === "introSection") menuId = "menu1";
  else if (sectionId === "task1Section") menuId = "menu2";
  else if (sectionId === "task2Section") {
    menuId = "menu3";
    // Bestellung laden wenn Mission 2 über Sidebar geöffnet wird (nicht beim F5-Restore)
    if (!isInitializing)
      setTimeout(() => loadRandomOrder(false, "invoiceData2"), 50);
  } else if (sectionId === "task3Section") {
    menuId = "menu4";
    // Kommunikations-Spiel starten wenn Mission 3 geöffnet wird
    if (!isInitializing) setTimeout(() => startKommunikation(), 50);
  } else if (sectionId === "task4Section") {
    menuId = "menu7";
    // Budget-Spiel initialisieren wenn Mission 4 geöffnet wird
    if (!isInitializing) setTimeout(() => initBudgetGame(), 50);
  }

  const activeMenu = document.getElementById(menuId);
  if (activeMenu) {
    activeMenu.classList.add("active");
  }
}

function backToStart() {
  // User will bewusst wieder den Start-Screen sehen
  localStorage.removeItem("buromanagementForceIntro");
  hideElement("gameContent");
  showElement("startScreen");
}

function startTutorialSinglePage() {
  hideElement("startScreen");
  showElement("gameContent");

  // Sichtbarkeit der Buttons steuern
  const sidebarStartBtn = document.getElementById("sidebarStartBtn");
  const restartBtn = document.querySelector(".restart-btn");
  if (sidebarStartBtn) sidebarStartBtn.style.display = "none";
  if (restartBtn) restartBtn.style.display = "flex";

  goToTask("interactiveTutorial");
  tutorialStep = 0;
  renderTutorialStep();
}

function skipTutorialSinglePage() {
  const modal = document.getElementById("skipNameModal");
  if (modal) modal.style.display = "flex";
}

function submitSkipName() {
  console.log("submitSkipName aufgerufen");
  const name = document.getElementById("skipPlayerNameInput")?.value?.trim();
  console.log("Name:", name);
  if (!name) {
    alert("Bitte gib einen Namen ein!");
    return;
  }
  localStorage.setItem("buromanagementPlayerName", name);
  console.log("Name gespeichert:", name);

  const modal = document.getElementById("skipNameModal");
  if (modal) modal.style.display = "none";
  console.log("Modal versteckt");

  // Startbildschirm schließen
  hideElement("startScreen");
  console.log("Startbildschirm versteckt");

  // Spielinhalt anzeigen
  showElement("gameContent");
  const layout = document.getElementById("gameContent");
  if (layout) layout.style.display = "grid";
  console.log("Spielinhalt angezeigt");

  // Mission 1 freischalten
  unlockedTasks.task2 = true;
  console.log("unlockedTasks.task2:", unlockedTasks.task2);
  applyUnlockStates();
  saveGame();
  console.log("Spielstand gespeichert");

  // Sichtbarkeit der Buttons steuern
  const sidebarStartBtn = document.getElementById("sidebarStartBtn");
  const restartBtn = document.querySelector(".restart-btn");
  if (sidebarStartBtn) sidebarStartBtn.style.display = "none";
  if (restartBtn) restartBtn.style.display = "flex";
  console.log("Button-Sichtbarkeit gesteuert");

  // Direkt zur ersten Mission gehen
  const task1Section = document.getElementById("task1Section");
  console.log("task1Section:", task1Section);
  if (task1Section) {
    task1Section.style.display = "block";
    loadRandomOrder(true); // Zufällige Bestellung beim Skip Tutorial
    console.log("task1Section angezeigt");
  }

  // Alle anderen Sektionen verstecken
  hideElement("introSection");
  hideElement("interactiveTutorial");
  hideElement("task2Section");
  hideElement("task3Section");
  hideElement("task4Section");
  console.log("Andere Sektionen versteckt");

  // Aktive Klasse aktualisieren
  document.querySelectorAll(".mission").forEach((el) => {
    el.classList.remove("active");
  });
  const menu2 = document.getElementById("menu2");
  if (menu2) {
    menu2.classList.add("active");
    console.log("menu2 aktiviert");
  }
}

function renderTutorialStep() {
  const step = tutorialSteps[tutorialStep];
  const hudStep = document.getElementById("tutorialStep");
  const hudTitle = document.getElementById("tutorialTitle");
  const hudText = document.getElementById("tutorialText");
  const hudAction = document.getElementById("tutorialAction");

  if (hudStep) hudStep.innerText = tutorialStep + 1;
  if (hudTitle) hudTitle.innerText = step.title;
  if (hudText) {
    hudText.innerHTML = step.text;
    if (step.isNameInput) {
      hudText.innerHTML +=
        '<br><input type="text" id="playerNameInput" placeholder="Dein Name..." style="width:100%; margin-top:20px; padding:15px; border-radius:12px; background:rgba(255,255,255,0.05); color:white; border:2px solid #38bdf8; font-size:18px; outline:none;">';
      setTimeout(
        () => document.getElementById("playerNameInput")?.focus(),
        100,
      );
    }
  }
  if (hudAction) hudAction.innerText = step.action;
}

function nextTutorialStep() {
  const step = tutorialSteps[tutorialStep];
  if (step.isNameInput) {
    const name = document.getElementById("playerNameInput")?.value?.trim();
    if (!name) {
      alert("Bitte gib einen Namen ein!");
      return;
    }
    localStorage.setItem("buromanagementPlayerName", name);
  }

  tutorialStep++;
  console.log(
    "tutorialStep:",
    tutorialStep,
    "tutorialSteps.length:",
    tutorialSteps.length,
  );
  if (tutorialStep < tutorialSteps.length) {
    renderTutorialStep();
  } else {
    console.log("Tutorial abgeschlossen, rufe completeIntro auf");
    completeIntro();
  }
}

function completeIntro() {
  console.log("completeIntro aufgerufen");
  // Mission 1 freischalten
  unlockedTasks.task2 = true;
  console.log("unlockedTasks.task2:", unlockedTasks.task2);
  applyUnlockStates();
  saveGame();

  console.log("Verstecke interactiveTutorial");
  hideElement("interactiveTutorial");

  // Sichtbarkeit der Buttons steuern
  const sidebarStartBtn = document.getElementById("sidebarStartBtn");
  const restartBtn = document.querySelector(".restart-btn");
  if (sidebarStartBtn) sidebarStartBtn.style.display = "none";
  if (restartBtn) restartBtn.style.display = "flex";

  // Direkt zur ersten Mission gehen
  const task1Section = document.getElementById("task1Section");
  console.log("task1Section:", task1Section);
  if (task1Section) {
    task1Section.style.display = "block";
    loadRandomOrder(true); // Zufällige Bestellung beim Tutorial-Abschluss
    console.log("task1Section.style.display:", task1Section.style.display);
  }

  // Alle anderen Sektionen verstecken
  hideElement("introSection");
  hideElement("task2Section");
  hideElement("task3Section");
  hideElement("task4Section");

  // Aktive Klasse aktualisieren
  document.querySelectorAll(".mission").forEach((el) => {
    el.classList.remove("active");
  });
  const menu2 = document.getElementById("menu2");
  console.log("menu2:", menu2);
  if (menu2) {
    menu2.classList.add("active");
    console.log("menu2.classList:", menu2.classList);
  }
}

function applyUnlockStates() {
  console.log("applyUnlockStates aufgerufen, unlockedTasks:", unlockedTasks);
  const m2 = document.getElementById("menu2");
  const m3 = document.getElementById("menu3");
  const m4 = document.getElementById("menu4");
  const m7 = document.getElementById("menu7");

  if (m2) {
    console.log("m2 gefunden, unlockedTasks.task2:", unlockedTasks.task2);
    if (unlockedTasks.task2) {
      m2.style.opacity = "1";
      m2.style.pointerEvents = "auto";
      m2.tabIndex = 0;
      m2.classList.remove("locked");
      console.log("m2 freigeschaltet");
    } else {
      m2.classList.add("locked");
      m2.style.opacity = "0.5";
      m2.style.pointerEvents = "none";
      console.log("m2 gesperrt");
    }
  } else {
    console.log("m2 nicht gefunden");
  }
  if (m3) {
    if (unlockedTasks.task3) {
      m3.style.opacity = "1";
      m3.style.pointerEvents = "auto";
      m3.tabIndex = 0;
      m3.classList.remove("locked");
    } else {
      m3.classList.add("locked");
      m3.style.opacity = "0.5";
      m3.style.pointerEvents = "none";
    }
  }
  if (m4) {
    if (unlockedTasks.task4) {
      m4.style.opacity = "1";
      m4.style.pointerEvents = "auto";
      m4.tabIndex = 0;
      m4.classList.remove("locked");
    } else {
      m4.classList.add("locked");
      m4.style.opacity = "0.5";
      m4.style.pointerEvents = "none";
    }
  }
  if (m7) {
    if (unlockedTasks.task5) {
      m7.style.opacity = "1";
      m7.style.pointerEvents = "auto";
      m7.tabIndex = 0;
      m7.classList.remove("locked");
    } else {
      m7.classList.add("locked");
      m7.style.opacity = "0.5";
      m7.style.pointerEvents = "none";
    }
  }
}

function confirmRestart(mode = "restart") {
  if (mode === "home") {
    const hasName = localStorage.getItem("buromanagementPlayerName");
    const hasProgress = progress > 0;
    if (!hasName && !hasProgress) {
      window.location.href = "../";
      return;
    }
  }
  confirmMode = mode;
  const modal = document.getElementById("restartConfirmModal");
  if (modal) {
    modal.style.display = "flex";
    document.body.classList.add("modal-open");
  }
}

function handleRestartConfirm() {
  if (confirmMode === "home") {
    localStorage.removeItem("buromanagementSave");
    localStorage.removeItem("buromanagementPlayerName");
    localStorage.removeItem("buromanagementSkipStartScreen");
    window.location.href = "../";
  } else {
    restartGame();
  }
}

function cancelRestart() {
  const modal = document.getElementById("restartConfirmModal");
  if (modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
}

function startGame() {
  const nameInput = document.getElementById("playerName");
  playerName = nameInput.value.trim();

  if (!playerName) {
    showModal("Fehler", "Bitte gib deinen Namen ein, um zu starten.");
    return;
  }

  localStorage.setItem("buromanagementPlayerName", playerName);
  localStorage.setItem("buromanagementSkipStartScreen", "true");

  hideElement("startScreen");
  showElement("gameContent");
  showElement("introSection");

  document.body.style.overflow = "auto";
}

// --- Initialisierung ---
document.addEventListener("DOMContentLoaded", () => {
  const hasSave = localStorage.getItem("buromanagementSave");
  const hasName = localStorage.getItem("buromanagementPlayerName");
  const skipStart = localStorage.getItem("buromanagementSkipStartScreen");
  if (skipStart === "true") {
    localStorage.removeItem("buromanagementSkipStartScreen");
    // Direkt zum Spielinhalt ohne Tutorial-Abfrage
    startFreshGameAfterBeenden();
    return;
  }

  if (hasSave && hasName) {
    // Spiel läuft bereits -> Daten laden
    loadGame();

    // Gespeicherten UI-Zustand prüfen
    const savedUIRaw = localStorage.getItem("buromanagementUIState");
    const savedUI = savedUIRaw ? JSON.parse(savedUIRaw) : null;
    const targetSection = savedUI ? savedUI.section : null;

    // Zur gespeicherten Section navigieren
    if (targetSection === "task4Section" || progress >= 80) {
      goToTask("task4Section");
      setTimeout(() => {
        restoreUIState();
        isInitializing = false;
      }, 100);
    } else if (targetSection === "task3Section" || progress >= 60) {
      goToTask("task3Section");
      setTimeout(() => {
        restoreUIState();
        isInitializing = false;
      }, 100);
    } else if (
      targetSection === "task2Section" ||
      progress >= 40 ||
      unlockedTasks.task3
    ) {
      // Mission 2: UI-Zustand direkt wiederherstellen (inkl. Bestellungs-HTML)
      goToTask("task2Section");
      setTimeout(() => {
        restoreUIState();
        isInitializing = false;
      }, 100);
    } else if (
      targetSection === "task1Section" ||
      progress >= 20 ||
      unlockedTasks.task2
    ) {
      // Mission 1: UI-Zustand direkt wiederherstellen (inkl. Bestellungs-HTML)
      goToTask("task1Section");
      setTimeout(() => {
        restoreUIState();
        isInitializing = false;
      }, 100);
    } else {
      goToTask("introSection");
      isInitializing = false;
    }

    // Sichtbarkeit der Buttons steuern
    const sidebarStartBtn = document.getElementById("sidebarStartBtn");
    const restartBtn = document.querySelector(".restart-btn");
    if (sidebarStartBtn) sidebarStartBtn.style.display = "none";
    if (restartBtn) restartBtn.style.display = "flex";
  } else {
    // Kein Spiel läuft -> Direkt die Einleitung zeigen (Tutorial-Auswahl überspringen)
    hideElement("startScreen");
    showElement("gameContent");
    const layout = document.getElementById("gameContent");
    if (layout) layout.style.display = "grid";

    const sidebarStartBtn = document.getElementById("sidebarStartBtn");
    const restartBtn = document.querySelector(".restart-btn");
    if (sidebarStartBtn) sidebarStartBtn.style.display = "flex";
    if (restartBtn) restartBtn.style.display = "none";

    goToTask("introSection");
    isInitializing = false;
  }
});

function startFreshGameAfterBeenden() {
  // Direkt zum Spielinhalt, Startbildschirm komplett weg
  hideElement("startScreen");
  showElement("gameContent");
  const layout = document.getElementById("gameContent");
  if (layout) layout.style.display = "grid";

  const sidebarStartBtn = document.getElementById("sidebarStartBtn");
  const restartBtn = document.querySelector(".restart-btn");

  // Da kein Spiel offiziell läuft (Name wurde gelöscht), zeigen wir den Start-Button
  if (sidebarStartBtn) sidebarStartBtn.style.display = "flex";
  if (restartBtn) restartBtn.style.display = "none";

  // Sofort zur Einleitung (Büromanagement Grundlagen)
  goToTask("introSection");
  isInitializing = false;
}

function loadTaskMission() {
  const taskSelect = document.getElementById("taskSelect");
  const selectedTask = taskSelect.value;

  if (!selectedTask) return;

  const taskData = tasks[selectedTask];
  if (!taskData) return;

  document.getElementById("selectedTaskTitle").textContent = taskData.title;
  document.getElementById("taskText").textContent = taskData.description;

  const invoiceDataDiv = document.getElementById("invoiceData");
  const taskInputsDiv = document.getElementById("taskInputs");

  taskInputsDiv.innerHTML = "";

  if (selectedTask === "rechnung") {
    invoiceDataDiv.style.display = "block";
    taskInputsDiv.style.display = "flex";

    const fields = [
      {
        id: "rechnungsnummer",
        label: "Rechnungsnummer",
        placeholder: "RE-2024-001",
      },
      {
        id: "rechnungsdatum",
        label: "Rechnungsdatum",
        placeholder: "15.05.2024",
      },
      { id: "kundenname", label: "Kundenname", placeholder: "Max Mustermann" },
      {
        id: "kundenadresse",
        label: "Kundenadresse",
        placeholder: "Musterstraße 123",
      },
      {
        id: "kundenstadt",
        label: "PLZ und Stadt",
        placeholder: "12345 Musterstadt",
      },
      { id: "nettopreis", label: "Nettopreis (€)", placeholder: "1490.00" },
      { id: "mwst", label: "MwSt. (€)", placeholder: "283.10" },
      { id: "gesamtbetrag", label: "Gesamtbetrag (€)", placeholder: "1773.10" },
    ];

    fields.forEach((field) => {
      const inputGroup = document.createElement("div");
      inputGroup.className = "input-group-wrapper";
      inputGroup.innerHTML = `
        <input type="text" id="${field.id}" placeholder="${field.placeholder}" style="padding: 18px; border-radius: 20px; background: rgba(255,255,255,0.05); color: white; border: 2px solid #38bdf8; font-size: 16px; outline: none;">
      `;
      taskInputsDiv.appendChild(inputGroup);
    });
  } else {
    invoiceDataDiv.style.display = "none";
    taskInputsDiv.style.display = "none";

    const taskChoicesDiv = document.getElementById("taskChoices");
    taskChoicesDiv.innerHTML = "";

    if (taskData.correctItems && taskData.wrongItems) {
      const allItems = [...taskData.correctItems, ...taskData.wrongItems].sort(
        () => Math.random() - 0.5,
      );

      allItems.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.style.cssText =
          "display: flex; align-items: center; gap: 15px; background: rgba(255,255,255,0.05); padding: 20px; border-radius: 15px; border: 2px solid rgba(255,255,255,0.1); cursor: pointer; transition: all 0.3s ease;";
        itemDiv.innerHTML = `
          <input type="checkbox" id="item_${index}" value="${item.correct}" onchange="updateTaskSelection()">
          <label for="item_${index}" style="flex: 1; cursor: pointer;">
            <strong style="display: block; font-size: 18px; color: #ffffff;">${item.item}</strong>
          </label>
        `;
        taskChoicesDiv.appendChild(itemDiv);
      });
    }
  }

  document.getElementById("saveTaskBtn").style.display = "block";
  selectedTaskItem = selectedTask;
  currentTaskOptions = [];
}

function updateTaskSelection() {
  const checkboxes = document.querySelectorAll(
    '#taskChoices input[type="checkbox"]',
  );
  currentTaskOptions = [];
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      currentTaskOptions.push(checkbox.value === "true");
    }
  });
}

let currentOrder = null;
let selectedCustomer = null;
let selectedProduct = null;
let currentOrderIndex = 0;
let completedOrders = 0;
let currentSectionId = "introSection";
let isInitializing = true; // Verhindert, dass saveUIState beim Laden den Zustand überschreibt

// --- UI-Zustand speichern (für F5-Stabilität) ---
function saveUIState() {
  if (isInitializing) return;

  // Alle Eingabefelder
  const inputs = {};
  document
    .querySelectorAll('input[type="text"], input[type="number"], textarea')
    .forEach((el) => {
      if (el.id) inputs[el.id] = el.value;
    });

  // Wichtige Elemente inkl. der Bestellungs-Divs
  const elStates = {};
  [
    "invoiceData",
    "invoiceData2",
    "customerSelection",
    "productSelection",
    "taskFeedback",
    "taskFeedback2",
    "taskFeedback3",
    "taskFeedback4",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) elStates[id] = { cssText: el.style.cssText, html: el.innerHTML };
  });

  localStorage.setItem(
    "buromanagementUIState",
    JSON.stringify({
      section: currentSectionId,
      selectedCustomerId: selectedCustomer ? selectedCustomer.id : null,
      selectedProductId: selectedProduct ? selectedProduct.id : null,
      inputs,
      elStates,
    }),
  );
}

// --- UI-Zustand wiederherstellen ---
function restoreUIState() {
  const raw = localStorage.getItem("buromanagementUIState");
  if (!raw) return;
  const state = JSON.parse(raw);

  // Kunden & Produkt wiederherstellen
  if (state.selectedCustomerId)
    selectedCustomer =
      customers.find((c) => c.id === state.selectedCustomerId) || null;
  if (state.selectedProductId)
    selectedProduct =
      products.find((p) => p.id === state.selectedProductId) || null;

  // currentOrder aus localStorage wiederherstellen (für Validierung)
  if (!currentOrder) {
    const savedOrder = localStorage.getItem("buromanagementCurrentOrder");
    if (savedOrder) {
      currentOrder = JSON.parse(savedOrder);
      tasks.rechnung.correctAnswers = currentOrder.correctAnswers;
    }
  }

  // Eingabefelder
  if (state.inputs) {
    Object.entries(state.inputs).forEach(([id, val]) => {
      const el = document.getElementById(id);
      if (el) el.value = val;
    });
  }

  // Alle gespeicherten Elemente (inkl. Bestellungs-HTML) direkt einsetzen
  if (state.elStates) {
    Object.entries(state.elStates).forEach(([id, s]) => {
      const el = document.getElementById(id);
      if (el) {
        el.style.cssText = s.cssText;
        el.innerHTML = s.html;
      }
    });
  }
}

// Hilfsfunktion: Bestellung als HTML in ein Element rendern
function renderOrderHTML(container, order, progressText) {
  const progressBadge = progressText
    ? `<span style="background:#ffd700; color:#1e293b; font-weight:800; padding:4px 14px; border-radius:20px; font-size:14px; margin-left:12px;">${progressText}</span>`
    : "";
  container.innerHTML = `
    <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:30px;border-radius:20px 20px 0 0;margin:-40px -40px 30px -40px;">
      <div style="text-align:center;">
        <h3 style="color:white;font-size:28px;margin-bottom:10px;font-weight:bold;">BESTELLUNG PRÜFEN${progressBadge}</h3>
        <p style="color:rgba(255,255,255,0.9);font-size:16px;">Bestellnummer: #${order.orderNumber} &nbsp;|&nbsp; Datum: ${order.orderDate}</p>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:30px;margin-bottom:30px;">
      <div style="background:#f8fafc;padding:20px;border-radius:15px;border-left:4px solid #667eea;">
        <p style="color:#64748b;font-size:12px;margin-bottom:8px;font-weight:bold;">KUNDE</p>
        <p style="color:#1e293b;font-size:16px;font-weight:bold;">${order.customer.name}</p>
        <p style="color:#64748b;font-size:14px;">${order.customer.address}</p>
        <p style="color:#64748b;font-size:14px;">${order.customer.city}</p>
      </div>
      <div style="background:#f8fafc;padding:20px;border-radius:15px;border-left:4px solid #764ba2;">
        <p style="color:#64748b;font-size:12px;margin-bottom:8px;font-weight:bold;">RECHNUNGSNUMMER</p>
        <p style="color:#667eea;font-size:18px;font-weight:bold;">RE-${order.orderNumber}</p>
        <p style="color:#64748b;font-size:12px;margin-top:10px;font-weight:bold;">RECHNUNGSDATUM</p>
        <p style="color:#1e293b;font-size:16px;font-weight:bold;">${order.orderDate}</p>
      </div>
    </div>
    <table style="width:100%;border-collapse:collapse;margin-bottom:30px;background:white;border-radius:15px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.05);">
      <thead>
        <tr style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);">
          <th style="text-align:left;padding:18px;color:white;font-size:13px;font-weight:bold;">ARTIKELNUMMER</th>
          <th style="text-align:left;padding:18px;color:white;font-size:13px;font-weight:bold;">ARTIKEL</th>
          <th style="text-align:right;padding:18px;color:white;font-size:13px;font-weight:bold;">MENGE</th>
          <th style="text-align:right;padding:18px;color:white;font-size:13px;font-weight:bold;">PREIS</th>
          <th style="text-align:right;padding:18px;color:white;font-size:13px;font-weight:bold;">GESAMT</th>
        </tr>
      </thead>
      <tbody>
        ${order.items
          .map(
            (item) => `
          <tr style="border-bottom:1px solid #f1f5f9;">
            <td style="padding:18px;color:#667eea;font-size:14px;font-weight:bold;">${item.articleNumber}</td>
            <td style="padding:18px;color:#1e293b;font-size:15px;font-weight:500;">${item.name}</td>
            <td style="text-align:right;padding:18px;color:#1e293b;font-size:14px;">${item.quantity}</td>
            <td style="text-align:right;padding:18px;color:#64748b;font-size:14px;">${item.price.toFixed(2).replace(".", ",")} €</td>
            <td style="text-align:right;padding:18px;color:#1e293b;font-size:15px;font-weight:bold;">${(item.quantity * item.price).toFixed(2).replace(".", ",")} €</td>
          </tr>`,
          )
          .join("")}
      </tbody>
    </table>
    <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:25px;border-radius:0 0 20px 20px;text-align:right;margin:0 -40px -40px -40px;">
      <p style="color:rgba(255,255,255,0.9);font-size:15px;margin-bottom:8px;">Zwischensumme: <span style="color:white;font-weight:bold;">${order.subtotal.toFixed(2).replace(".", ",")} €</span></p>
      <p style="color:rgba(255,255,255,0.9);font-size:15px;margin-bottom:8px;">MwSt. (19%): <span style="color:white;font-weight:bold;">${order.vat.toFixed(2).replace(".", ",")} €</span></p>
      <p style="color:white;font-size:24px;font-weight:bold;margin-top:12px;">Gesamtbetrag: ${order.total.toFixed(2).replace(".", ",")} €</p>
    </div>
  `;
}

function loadRandomOrder(forceRandom = false, targetDiv = "invoiceData") {
  // Aktuelles Datum im Format DD.MM.YYYY
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  const currentDate = `${day}.${month}.${year}`;

  // Für Mission 2: aktuelle Bestellung anzeigen (aus localStorage wiederherstellen falls nötig)
  if (targetDiv === "invoiceData2") {
    if (!currentOrder) {
      const savedOrder = localStorage.getItem("buromanagementCurrentOrder");
      currentOrder = savedOrder ? JSON.parse(savedOrder) : orders[0];
    }
    currentOrder.orderDate = currentDate;
    const div2 = document.getElementById("invoiceData2");
    if (div2) renderOrderHTML(div2, currentOrder, null);
    tasks.rechnung.correctAnswers = currentOrder.correctAnswers;
    saveUIState(); // Bestellungs-HTML für Mission 2 speichern
    // Eingabefelder bei jeder Änderung speichern
    [
      "rechnungsnummer2",
      "rechnungsdatum2",
      "kundenname2",
      "kundenadresse2",
      "kundenstadt2",
      "nettopreis2",
      "mwst2",
      "gesamtbetrag2",
    ].forEach((id) => {
      const el = document.getElementById(id);
      if (el && !el.dataset.saveListenerAdded) {
        el.addEventListener("input", saveUIState);
        el.dataset.saveListenerAdded = "true";
      }
    });
    return;
  }

  // Mission 1: gespeicherte Bestellung laden (F5-sicher) oder neue zufällige
  const savedOrder = localStorage.getItem("buromanagementCurrentOrder");
  if (savedOrder && !forceRandom) {
    // Gespeicherte Bestellung wiederherstellen
    currentOrder = JSON.parse(savedOrder);
    currentOrder.orderDate = currentDate; // Datum auf heute aktualisieren
  } else {
    // Neue zufällige Bestellung laden und speichern
    const randomIndex = Math.floor(Math.random() * orders.length);
    currentOrder = JSON.parse(JSON.stringify(orders[randomIndex]));
    currentOrder.orderDate = currentDate;
    localStorage.setItem(
      "buromanagementCurrentOrder",
      JSON.stringify(currentOrder),
    );
  }

  const invoiceDataDiv = document.getElementById(targetDiv);
  if (!invoiceDataDiv) return;

  renderOrderHTML(invoiceDataDiv, currentOrder, null);
  tasks.rechnung.correctAnswers = currentOrder.correctAnswers;
  saveUIState(); // Bestellung inkl. HTML speichern
}

function validateOrder() {
  const feedbackDiv = document.getElementById("taskFeedback");

  if (!selectedCustomer || !selectedProduct) {
    feedbackDiv.style.cssText =
      "display:block; background:rgba(239,68,68,0.15); border:2px solid #ef4444; color:#fff; padding:18px; border-radius:14px; margin-top:15px;";
    feedbackDiv.innerHTML =
      "<strong>❌</strong> Bitte wähle zuerst einen Kunden <em>und</em> ein Produkt aus den Datenbanken.";
    return;
  }

  const orderItem = currentOrder.items[0];

  // Kunde prüfen: muss zur Bestellung gehören UND korrekte Daten haben
  const customerCorrect =
    selectedCustomer.isCorrect && selectedCustomer.orderId === currentOrder.id;

  // Produkt prüfen: Artikelnummer UND Preis müssen stimmen UND korrekte Variante
  const productCorrect =
    selectedProduct.isCorrect &&
    selectedProduct.articleNumber === orderItem.articleNumber &&
    Math.abs(selectedProduct.price - orderItem.price) < 0.01;

  // Detailliertes Feedback für Kunde und Produkt separat
  const kundeHTML = customerCorrect
    ? `<div style="padding:14px;border-radius:10px;background:rgba(34,197,94,0.15);border-left:4px solid #22c55e;">
        ✅ <strong>Kunde:</strong> ${selectedCustomer.name} – Korrekt!
       </div>`
    : `<div style="padding:14px;border-radius:10px;background:rgba(239,68,68,0.15);border-left:4px solid #ef4444;">
        ❌ <strong>Kunde:</strong> Falsch ausgewählt. Bitte Kundendatenbank erneut prüfen.
       </div>`;

  const produktHTML = productCorrect
    ? `<div style="padding:14px;border-radius:10px;background:rgba(34,197,94,0.15);border-left:4px solid #22c55e;">
        ✅ <strong>Produkt:</strong> ${selectedProduct.name} (${selectedProduct.articleNumber}) – Korrekt!
       </div>`
    : `<div style="padding:14px;border-radius:10px;background:rgba(239,68,68,0.15);border-left:4px solid #ef4444;">
        ❌ <strong>Produkt:</strong> Falsch ausgewählt. Gesucht: <strong>${orderItem.name}</strong>, Art.-Nr.: <strong>${orderItem.articleNumber}</strong>, Preis: <strong>€${orderItem.price.toFixed(2).replace(".", ",")}</strong>
       </div>`;

  feedbackDiv.style.cssText = "display:block; margin-top:15px;";
  feedbackDiv.innerHTML = `<div style="display:flex;flex-direction:column;gap:10px;">${kundeHTML}${produktHTML}</div>`;
  saveUIState();

  if (customerCorrect && productCorrect) {
    // Beide richtig → Mission 2 freischalten
    setTimeout(() => {
      feedbackDiv.innerHTML += `
        <div style="margin-top:15px;padding:16px;background:rgba(56,189,248,0.15);border:2px solid #38bdf8;border-radius:12px;text-align:center;font-size:18px;font-weight:bold;color:#38bdf8;">
          🎉 Ausgezeichnet! Mission 2 wird freigeschaltet...
        </div>`;
      addProgress(20);
      unlockedTasks.task3 = true;
      applyUnlockStates();
      saveGame();
      setTimeout(() => {
        goToTask("task2Section");
        loadRandomOrder(false, "invoiceData2");
      }, 2000);
    }, 1500);
  } else {
    // Mind. eine Auswahl falsch → neue Bestellung laden
    setTimeout(() => {
      feedbackDiv.innerHTML += `
        <div style="margin-top:15px;padding:16px;background:rgba(255,255,255,0.06);border-radius:12px;text-align:center;color:#94a3b8;font-style:italic;">
          📩 Neue Bestellung eingegangen! Daten werden geladen...
        </div>`;
      setTimeout(() => {
        selectedCustomer = null;
        selectedProduct = null;
        const cs = document.getElementById("customerSelection");
        if (cs) cs.style.display = "none";
        const ps = document.getElementById("productSelection");
        if (ps) ps.style.display = "none";
        feedbackDiv.style.display = "none";
        localStorage.removeItem("buromanagementCurrentOrder");
        loadRandomOrder(true, "invoiceData");
      }, 2000);
    }, 1500);
  }
}

// Hilfsfunktion: Suchbegriff im Text gelb hervorheben
function highlight(text, query) {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.replace(
    new RegExp(`(${escaped})`, "gi"),
    '<mark style="background:#fef08a;color:#1e293b;border-radius:3px;padding:0 2px;">$1</mark>',
  );
}

let _shuffledCustomers = [];
let _shuffledProducts = [];

function renderCustomerRows(query) {
  const colors = [
    "#38bdf8",
    "#a855f7",
    "#22c55e",
    "#f59e0b",
    "#ef4444",
    "#ec4899",
    "#06b6d4",
    "#8b5cf6",
    "#10b981",
    "#f97316",
  ];
  const q = (query || "").toLowerCase().trim();
  const filtered = q
    ? _shuffledCustomers.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.address.toLowerCase().includes(q) ||
          c.city.toLowerCase().includes(q),
      )
    : _shuffledCustomers;

  const tbody = document.getElementById("customerTbody");
  const noResult = document.getElementById("customerNoResult");
  if (!tbody) return;

  if (filtered.length === 0) {
    tbody.innerHTML = "";
    if (noResult) noResult.style.display = "block";
    return;
  }
  if (noResult) noResult.style.display = "none";

  tbody.innerHTML = filtered
    .map((customer, i) => {
      const initials = customer.name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
      const color =
        colors[_shuffledCustomers.indexOf(customer) % colors.length];
      const bg = i % 2 === 0 ? "#ffffff" : "#f8fafc";
      return `
      <tr style="background:${bg};cursor:pointer;transition:all 0.2s ease;"
          onclick="selectCustomer('${customer.id}')"
          onmouseover="this.style.background='#eff6ff';this.style.transform='translateX(4px)';"
          onmouseout="this.style.background='${bg}';this.style.transform='translateX(0)';">
        <td style="padding:14px 20px;">
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:38px;height:38px;border-radius:50%;background:${color};display:flex;align-items:center;justify-content:center;color:white;font-weight:800;font-size:13px;flex-shrink:0;box-shadow:0 2px 8px ${color}55;">${initials}</div>
            <span style="color:#1e293b;font-weight:600;font-size:14px;">${highlight(customer.name, query)}</span>
          </div>
        </td>
        <td style="padding:14px 20px;color:#475569;font-size:14px;">${highlight(customer.address, query)}</td>
        <td style="padding:14px 20px;color:#475569;font-size:14px;">${highlight(customer.city, query)}</td>
        <td style="padding:14px 20px;text-align:right;">
          <span style="background:#eff6ff;color:#667eea;font-size:11px;font-weight:700;padding:5px 12px;border-radius:20px;border:1px solid #c7d2fe;">Auswählen →</span>
        </td>
      </tr>`;
    })
    .join("");
}

function openCustomerDatabase() {
  const modal = document.getElementById("customerDatabaseModal");
  const customerList = document.getElementById("customerList");

  _shuffledCustomers = [...customers].sort(() => Math.random() - 0.5);

  customerList.innerHTML = `
    <!-- Suchleiste -->
    <div style="margin-bottom:16px;position:relative;">
      <span style="position:absolute;left:16px;top:50%;transform:translateY(-50%);font-size:18px;pointer-events:none;">🔍</span>
      <input id="customerSearch" type="text" placeholder="Name, Adresse oder Stadt suchen..."
        oninput="renderCustomerRows(this.value)"
        style="width:100%;padding:14px 16px 14px 48px;border-radius:12px;border:2px solid #e2e8f0 !important;
               font-size:15px;outline:none;background:#f8fafc !important;color:#1e293b !important;
               box-sizing:border-box;transition:border-color 0.2s;"
        onfocus="this.style.borderColor='#667eea';this.style.background='white';this.style.color='#1e293b';"
        onblur="this.style.borderColor='#e2e8f0';this.style.background='#f8fafc';this.style.color='#1e293b';"/>
    </div>
    <!-- Tabelle -->
    <div style="overflow:hidden;border-radius:16px;box-shadow:0 4px 24px rgba(56,189,248,0.1);">
      <table style="width:100%;border-collapse:collapse;">
        <thead>
          <tr style="background:linear-gradient(135deg,#667eea,#764ba2);">
            <th style="text-align:left;padding:16px 20px;color:white;font-size:11px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;">Kunde</th>
            <th style="text-align:left;padding:16px 20px;color:rgba(255,255,255,0.85);font-size:11px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;">Adresse</th>
            <th style="text-align:left;padding:16px 20px;color:rgba(255,255,255,0.85);font-size:11px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;">Stadt</th>
            <th style="padding:16px 20px;"></th>
          </tr>
        </thead>
        <tbody id="customerTbody"></tbody>
      </table>
      <div id="customerNoResult" style="display:none;text-align:center;padding:40px;color:#94a3b8;font-size:15px;">
        🔍 Kein Kunde gefunden. Bitte anderen Suchbegriff verwenden.
      </div>
    </div>
  `;

  renderCustomerRows("");
  modal.style.display = "flex";
  document.body.classList.add("modal-open");
  setTimeout(() => document.getElementById("customerSearch")?.focus(), 100);
}

function closeCustomerDatabase() {
  const modal = document.getElementById("customerDatabaseModal");
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

function selectCustomer(customerId) {
  selectedCustomer = customers.find((c) => c.id === customerId);
  closeCustomerDatabase();

  const customerSelectionDiv = document.getElementById("customerSelection");
  customerSelectionDiv.style.display = "block";
  customerSelectionDiv.innerHTML = `👤 Kunde ausgewählt: ${selectedCustomer.name}`;
  saveUIState();
}

function selectProduct(productId) {
  selectedProduct = products.find((p) => p.id === productId);
  closeProductDatabase();

  const productSelectionDiv = document.getElementById("productSelection");
  productSelectionDiv.style.display = "block";
  productSelectionDiv.innerHTML = `📦 Produkt ausgewählt: ${selectedProduct.name}`;
  saveUIState();
}

function renderProductRows(query) {
  const q = (query || "").toLowerCase().trim();
  const filtered = q
    ? _shuffledProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.articleNumber.toLowerCase().includes(q) ||
          String(p.price).includes(q),
      )
    : _shuffledProducts;

  const tbody = document.getElementById("productTbody");
  const noResult = document.getElementById("productNoResult");
  const counter = document.getElementById("productCounter");
  if (!tbody) return;

  if (counter)
    counter.textContent = `${filtered.length} von ${_shuffledProducts.length} Produkte`;

  if (filtered.length === 0) {
    tbody.innerHTML = "";
    if (noResult) noResult.style.display = "block";
    return;
  }
  if (noResult) noResult.style.display = "none";

  tbody.innerHTML = filtered
    .map((product, i) => {
      const bg = i % 2 === 0 ? "#ffffff" : "#f8fafc";
      const stockColor =
        product.stock > 50
          ? "#22c55e"
          : product.stock > 20
            ? "#f59e0b"
            : "#ef4444";
      const stockBg =
        product.stock > 50
          ? "#f0fdf4"
          : product.stock > 20
            ? "#fffbeb"
            : "#fef2f2";
      const stockLabel =
        product.stock > 50
          ? "Verfügbar"
          : product.stock > 20
            ? "Begrenzt"
            : "Niedrig";
      return `
      <tr style="background:${bg};cursor:pointer;transition:all 0.2s ease;"
          onclick="selectProduct('${product.id}')"
          onmouseover="this.style.background='#faf5ff';this.style.transform='translateX(4px)';"
          onmouseout="this.style.background='${bg}';this.style.transform='translateX(0)';">
        <td style="padding:14px 20px;">
          <span style="color:#1e293b;font-weight:600;font-size:14px;">${highlight(product.name, query)}</span>
        </td>
        <td style="padding:14px 20px;">
          <code style="background:#f1f5f9;color:#667eea;font-size:12px;font-weight:700;padding:4px 10px;border-radius:8px;letter-spacing:0.5px;">${highlight(product.articleNumber, query)}</code>
        </td>
        <td style="padding:14px 20px;text-align:center;">
          <span style="background:${stockBg};color:${stockColor};font-size:11px;font-weight:700;padding:4px 10px;border-radius:20px;">
            ${product.stock} × ${stockLabel}
          </span>
        </td>
        <td style="padding:14px 20px;text-align:right;">
          <span style="color:#1e293b;font-weight:800;font-size:15px;">${product.price.toFixed(2).replace(".", ",")} €</span>
        </td>
        <td style="padding:14px 20px;text-align:right;">
          <span style="background:#f5f3ff;color:#764ba2;font-size:11px;font-weight:700;padding:5px 12px;border-radius:20px;border:1px solid #ddd6fe;">Auswählen →</span>
        </td>
      </tr>`;
    })
    .join("");
}

function openProductDatabase() {
  const modal = document.getElementById("productDatabaseModal");
  const productList = document.getElementById("productList");

  _shuffledProducts = [...products].sort(() => Math.random() - 0.5);

  productList.innerHTML = `
    <!-- Suchleiste -->
    <div style="margin-bottom:16px;display:flex;gap:12px;align-items:center;">
      <div style="position:relative;flex:1;">
        <span style="position:absolute;left:16px;top:50%;transform:translateY(-50%);font-size:18px;pointer-events:none;">🔍</span>
        <input id="productSearch" type="text" placeholder="Produktname oder Artikelnummer suchen..."
          oninput="renderProductRows(this.value)"
          style="width:100%;padding:14px 16px 14px 48px;border-radius:12px;border:2px solid #e2e8f0 !important;
                 font-size:15px;outline:none;background:#f8fafc !important;color:#1e293b !important;
                 box-sizing:border-box;transition:border-color 0.2s;"
          onfocus="this.style.borderColor='#764ba2';this.style.background='white';this.style.color='#1e293b';"
          onblur="this.style.borderColor='#e2e8f0';this.style.background='#f8fafc';this.style.color='#1e293b';"/>
      </div>
      <span id="productCounter" style="font-size:12px;color:#94a3b8;white-space:nowrap;"></span>
    </div>
    <!-- Tabelle -->
    <div style="overflow:hidden;border-radius:16px;box-shadow:0 4px 24px rgba(168,85,247,0.1);">
      <table style="width:100%;border-collapse:collapse;">
        <thead>
          <tr style="background:linear-gradient(135deg,#667eea,#764ba2);">
            <th style="text-align:left;padding:16px 20px;color:white;font-size:11px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;">Produkt</th>
            <th style="text-align:left;padding:16px 20px;color:rgba(255,255,255,0.85);font-size:11px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;">Art.-Nr.</th>
            <th style="text-align:center;padding:16px 20px;color:rgba(255,255,255,0.85);font-size:11px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;">Lager</th>
            <th style="text-align:right;padding:16px 20px;color:rgba(255,255,255,0.85);font-size:11px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;">Preis</th>
            <th style="padding:16px 20px;"></th>
          </tr>
        </thead>
        <tbody id="productTbody"></tbody>
      </table>
      <div id="productNoResult" style="display:none;text-align:center;padding:40px;color:#94a3b8;font-size:15px;">
        🔍 Kein Produkt gefunden. Bitte anderen Suchbegriff verwenden.
      </div>
    </div>
  `;

  renderProductRows("");
  modal.style.display = "flex";
  document.body.classList.add("modal-open");
  setTimeout(() => document.getElementById("productSearch")?.focus(), 100);
}

function closeProductDatabase() {
  const modal = document.getElementById("productDatabaseModal");
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

function submitTask2() {
  // currentOrder aus localStorage holen falls nicht vorhanden
  if (!currentOrder) {
    const saved = localStorage.getItem("buromanagementCurrentOrder");
    if (saved) {
      currentOrder = JSON.parse(saved);
      tasks.rechnung.correctAnswers = currentOrder.correctAnswers;
    } else {
      return; // Kein Spielstand vorhanden
    }
  }

  const feedbackDiv = document.getElementById("taskFeedback2");
  if (!feedbackDiv) return;

  // Hilfsfunktion: Zahl normalisieren (Komma und Punkt akzeptieren, auf 2 Nachkommastellen)
  const normalizeNum = (val) => parseFloat(val.replace(",", ".")).toFixed(2);

  // Heute-Datum für Datumsvergleich
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const todayStr = `${dd}.${mm}.${yyyy}`;

  // Felder prüfen und detailliertes Feedback aufbauen
  const checks = [
    {
      id: "rechnungsnummer2",
      label: "Rechnungsnummer",
      expected: `RE-${currentOrder.orderNumber}`,
      compare: (v, e) => v.trim() === e,
    },
    {
      id: "rechnungsdatum2",
      label: "Rechnungsdatum",
      expected: todayStr,
      compare: (v, e) => v.trim() === e,
    },
    {
      id: "kundenname2",
      label: "Kundenname",
      expected: currentOrder.customer.name,
      compare: (v, e) => v.trim() === e,
    },
    {
      id: "kundenadresse2",
      label: "Kundenadresse",
      expected: currentOrder.customer.address,
      compare: (v, e) => v.trim() === e,
    },
    {
      id: "kundenstadt2",
      label: "Kundenstadt",
      expected: currentOrder.customer.city,
      compare: (v, e) => v.trim() === e,
    },
    {
      id: "nettopreis2",
      label: "Nettopreis",
      expected: currentOrder.subtotal.toFixed(2),
      compare: (v, e) => {
        try {
          return normalizeNum(v) === e;
        } catch {
          return false;
        }
      },
    },
    {
      id: "mwst2",
      label: "MwSt.",
      expected: currentOrder.vat.toFixed(2),
      compare: (v, e) => {
        try {
          return normalizeNum(v) === e;
        } catch {
          return false;
        }
      },
    },
    {
      id: "gesamtbetrag2",
      label: "Gesamtbetrag",
      expected: currentOrder.total.toFixed(2),
      compare: (v, e) => {
        try {
          return normalizeNum(v) === e;
        } catch {
          return false;
        }
      },
    },
  ];

  let allCorrect = true;
  let feedbackRows = "";

  checks.forEach(({ id, label, expected, compare }) => {
    const input = document.getElementById(id);
    const val = input ? input.value : "";
    const ok = input && compare(val, expected);
    if (!ok) allCorrect = false;
    feedbackRows += `
      <div style="display:flex;align-items:center;gap:10px;padding:10px 14px;
                  background:${ok ? "rgba(34,197,94,0.1)" : "rgba(239,68,68,0.1)"};
                  border-left:4px solid ${ok ? "#22c55e" : "#ef4444"};
                  border-radius:8px;font-size:14px;">
        <span style="font-size:16px;">${ok ? "✅" : "❌"}</span>
        <span style="font-weight:700;color:#1e293b;flex:0 0 120px;">${label}</span>
        <span style="color:${ok ? "#166534" : "#991b1b"};">${ok ? "Korrekt" : `Erwartet: <strong>${expected}</strong> &nbsp;–&nbsp; Eingegeben: <em>${val || "(leer)"}</em>`}</span>
      </div>`;
  });

  feedbackDiv.style.cssText = "display:block;margin-top:20px;";
  feedbackDiv.innerHTML = `
    <div style="background:white;border-radius:16px;padding:20px;display:flex;flex-direction:column;
                gap:8px;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
      <p style="font-weight:800;font-size:15px;color:#1e293b;margin:0 0 8px 0;">
        ${allCorrect ? "🎉 Alle Felder korrekt!" : "📝 Ergebnis:"}
      </p>
      ${feedbackRows}
    </div>`;

  if (allCorrect) {
    addProgress(20);
    unlockedTasks.task4 = true;
    applyUnlockStates();
    saveGame();
    setTimeout(() => goToTask("task3Section"), 2000);
  }
}

function updateProgress() {
  const progressBar = document.getElementById("progress");
  if (progressBar) {
    progressBar.style.width = progress + "%";
  }
}

function showLegal(type) {
  const modal = document.getElementById("legalModal");
  const content = document.getElementById("legalContent");

  let text = "";
  const playerName =
    localStorage.getItem("buromanagementPlayerName") || "Spieler";

  if (type === "datenschutz") {
    text = `<h3>Datenschutzerklärung</h3>
            <p><strong style="color: #38bdf8;">1. Art der Anwendung</strong></p>
            <p>Bei diesem Spiel handelt es sich um eine <strong>Online-Anwendung</strong>. Der Zugriff erfolgt über das Internet, jedoch ist die Datenverarbeitung so konzipiert, dass Ihre Privatsphäre maximal geschützt bleibt.</p>

            <p><strong style="color: #a855f7;">2. Lokale Datenspeicherung im Browser</strong></p>
            <p>Sämtliche spielrelevanten Daten, die Sie innerhalb der Anwendung eingeben (z.B. Ihr Name, Ihr Spielstand oder getroffene Entscheidungen), werden <strong>ausschließlich lokal in Ihrem Browser gespeichert</strong> (im sogenannten LocalStorage).</p>
            <p>Es findet <strong>keine Übertragung</strong> dieser persönlichen Spieldaten an unsere Server oder an Dritte statt. Die Daten verbleiben auf Ihrem Endgerät.</p>

            <p><strong style="color: #38bdf8;">3. Lokale Speicherung von Downloads (Zertifikat)</strong></p>
            <p>Innerhalb der Anwendung haben Sie die Möglichkeit, ein Zertifikat herunterzuladen. Dieses wird direkt in Ihrem Browser generiert und <strong>lokal auf Ihrem Computer gespeichert</strong>. Eine Speicherung oder Übermittlung an unsere Server erfolgt zu keinem Zeitpunkt.</p>

            <p><strong style="color: #a855f7;">4. Server-Log-Files</strong></p>
            <p>Da dies eine Online-Anwendung ist, erhebt der Provider der Seiten automatisch Informationen in sogenannten Server-Log-Files (z.B. IP-Adresse, Browsertyp). Diese sind technisch notwendig für den Betrieb der Webseite, werden aber nicht mit Ihren lokalen Spieldaten verknüpft.</p>

            <p><strong style="color: #38bdf8;">5. Ihre Rechte & Kontrolle</strong></p>
            <p>Sie haben die volle Kontrolle über Ihre Daten. Da alles lokal gespeichert ist, können Sie sämtliche Spielstände jederzeit selbst löschen, indem Sie den Browser-Cache oder die Website-Daten leeren.</p>

            <p><i>Stand: 14. Mai 2026.</i></p>`;
  } else if (type === "impressum") {
    text = `<h3>Impressum</h3>
            <p><strong>Angaben gemäß § 5 TMG:</strong></p>
            <p>Annedore-Leber-Oberschule<br>Paster-Behrens-Strasse 88<br>12359 Berlin</p>
            <p><strong>Kontakt:</strong><br>E-Mail: sekr.br@aloberlin.de</p>
            <p><strong>Vertreten durch:</strong><br>Schulleiter: Herr Thomas Schofer</p>

            <hr style="margin: 30px 0; border: 0; border-top: 1px solid rgba(255,255,255,0.1);">

            <h3 style="font-size: 24px;">Haftungsausschluss</h3>

            <p><strong style="color: #38bdf8;">1. Inhalt des Online-Angebots</strong><br>
            Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens des Autors kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Alle Angebote sind freibleibend und unverbindlich.</p>

            <p><strong style="color: #a855f7;">2. Verweise und Links</strong><br>
            Bei direkten oder indirekten Verweisen auf fremde Webseiten („Hyperlinks“), die außerhalb des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern. Der Autor erklärt hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten erkennbar waren.</p>

            <p><strong style="color: #38bdf8;">3. Urheber- und Kennzeichenrecht</strong><br>
            Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Grafiken, Tondokumente, Videosequenzen und Texte zu beachten, von ihm selbst erstellten Grafiken, Tondokumente, Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente, Videosequenzen und Texte zurückzugreifen.</p>

            <p><strong style="color: #a855f7;">4. Datenschutz</strong><br>
            Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe persönlicher oder geschäftlicher Daten (Email-Adressen, Namen, Anschriften) besteht, so erfolgt die Preisgabe dieser Daten seitens des Nutzers auf ausdrücklich freiwilliger Basis. Die Nutzung der im Rahmen des Impressums oder vergleichbarer Angaben veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderten Informationen ist nicht gestattet.</p>

            <p><strong style="color: #38bdf8;">5. Rechtswirksamkeit dieses Haftungsausschlusses</strong><br>
            Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.`;
  } else if (type === "nutzung") {
    text = `<h3>Nutzungsbedingungen</h3>
            <p><strong style="color: #38bdf8;">1. Geltungsbereich</strong></p>
            <p>Diese Nutzungsbedingungen gelten für die Nutzung des Spiels "Büromanagement Academy". Mit der Nutzung der Anwendung erklären Sie sich mit den folgenden Bedingungen einverstanden.</p>

            <p><strong style="color: #a855f7;">2. Zweck der Anwendung</strong></p>
            <p>Die Anwendung dient rein zu Bildungs- und Unterhaltungszwecken im Rahmen des Büromanagement-Unterrichts. Es findet kein echter Geschäftsbetrieb statt. Alle im Spiel getätigten Transaktionen sind fiktiv.</p>

            <p><strong style="color: #38bdf8;">3. Urheberrecht</strong></p>
            <p>Die in der Anwendung verwendeten Grafiken, Texte und das Spieldesign sind urheberrechtlich geschützt. Eine kommerzielle Nutzung oder Vervielfältigung außerhalb des Bildungskontexts ist ohne ausdrückliche Genehmigung nicht gestattet.</p>

            <p><strong style="color: #a855f7;">4. Haftung für Inhalte</strong></p>
            <p>Wir übernehmen keine Gewähr für die Richtigkeit der im Spiel vermittelten wirtschaftlichen oder rechtlichen Tipps, da diese zur Vereinfachung didaktisch reduziert wurden.</p>

            <p><strong style="color: #38bdf8;">5. Beendigung der Nutzung</strong></p>
            <p>Da keine Benutzerkonten existieren, kann die Nutzung jederzeit durch einfaches Schließen des Browsers beendet werden. Ein Löschen der lokalen Daten im Browser setzt alle Spielstände zurück.</p>

            <p><i>Stand: 14. Mai 2026</i></p>`;
  }

  content.innerHTML = text;
  modal.style.display = "flex";
  document.body.classList.add("modal-open");
}

function closeLegalModal() {
  const modal = document.getElementById("legalModal");
  if (modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
}

// Event Listeners für Modals
document.addEventListener("DOMContentLoaded", function () {
  // Statistik Modal schließen
  const statInfoCloseBtn = document.getElementById("statInfoCloseBtn");
  if (statInfoCloseBtn) {
    statInfoCloseBtn.addEventListener("click", closeStatInfo);
  }

  // Restart Modal
  const restartConfirmBtn = document.getElementById("restartConfirmBtn");
  const restartCancelBtn = document.getElementById("restartCancelBtn");
  if (restartConfirmBtn) {
    restartConfirmBtn.addEventListener("click", handleRestartConfirm);
  }
  if (restartCancelBtn) {
    restartCancelBtn.addEventListener("click", cancelRestart);
  }
});
