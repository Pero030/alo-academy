// --- Kern-Spiellogik (Missionen & Shop Builder) ---

let currentImageOptions = [];

function loadProductMission() {
  const key = document.getElementById("productSelect")?.value;
  const mission = document.getElementById("productMission");
  if (!key || !products[key]) {
    if (mission) mission.style.display = "none";
    return;
  }
  const product = products[key];
  if (mission) mission.style.display = "block";
  const title = document.getElementById("selectedProductTitle");
  const task = document.getElementById("productTaskText");
  if (title) title.innerText = product.title;
  if (task) task.innerText = product.task;
  renderImages(product.imageOptions);
}

// Preload-Funktion für Produktbilder
function preloadProductImages() {
  const imageUrls = [];
  // Sammle alle Bild-URLs aus dem products-Objekt (in data.js definiert)
  if (typeof products !== "undefined") {
    Object.values(products).forEach((product) => {
      if (product.imageOptions) {
        product.imageOptions.forEach((item) => {
          if (item.image) imageUrls.push(item.image);
        });
      }
    });
  }

  // Lade jedes Bild im Hintergrund
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
  console.log(`${imageUrls.length} Bilder werden im Hintergrund vorgeladen...`);
}

// Starte Preloading sobald das Skript lädt (auf der Startseite)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", preloadProductImages);
} else {
  preloadProductImages();
}

function renderImages(images) {
  currentImageOptions = images;
  const container = document.getElementById("imageChoices");
  if (!container) return;

  const isKeyboard =
    images.length > 0 && images[0].image.includes("Gaming Tastatur");
  const fitType = isKeyboard ? "cover" : "contain";

  container.innerHTML = images
    .map(
      (item, index) => `
    <div class="image-choice-item" onclick="chooseImage(${index}, this)" style="cursor:pointer; border-radius:12px; overflow:hidden; transition:0.3s; border:3px solid transparent; background: white; display: flex; align-items: center; justify-content: center; height: 300px;">
      <img src="${item.image}" style="width:100%; height:100%; object-fit:${fitType}; display:block;">
    </div>
  `,
    )
    .join("");
}

function chooseImage(index, element) {
  const item = currentImageOptions[index];
  if (!item) return;
  const feedback = document.getElementById("imageFeedback");
  if (!feedback) return;
  document.querySelectorAll(".image-choice-item").forEach((el) => {
    el.style.borderColor = "transparent";
    el.style.transform = "scale(1)";
  });
  element.style.borderColor = item.correct ? "#22c55e" : "#ef4444";
  element.style.transform = "scale(1.05)";
  const color = item.correct ? "rgba(34,197,94,0.2)" : "rgba(239,68,68,0.2)";
  const textColor = item.correct ? "#86efac" : "#fca5a5";
  feedback.innerHTML = `<div style="padding:15px; margin-top:15px; border-radius:12px; background:${color}; color:${textColor}; border-left:4px solid ${item.correct ? "#22c55e" : "#ef4444"};">
    <strong>${item.correct ? "✓" : "✗"}</strong> ${item.reason}
  </div>`;
  if (item.correct) {
    selectedImageUrl = item.image;
    // Sofort in der Vorschau aktualisieren
    const previewImg = document.getElementById("previewProductImg");
    if (previewImg) previewImg.src = item.image;
    addProgress(10);
  } else {
    selectedImageUrl = "";
  }
}

function createProduct() {
  const name = document.getElementById("productName")?.value?.trim();
  const desc = document.getElementById("productDescription")?.value?.trim();
  const meta = document.getElementById("metaTitle")?.value?.trim();
  const alt = document.getElementById("altText")?.value?.trim();
  const price = document.getElementById("productPrice")?.value?.trim();
  const vat = document.getElementById("productVat")?.value;
  const feedback = document.getElementById("productFeedback");
  const currentKey = document.getElementById("productSelect")?.value;
  const saveBtn = document.getElementById("saveProductBtn");

  // Zuerst prüfen, ob alles ausgefüllt ist
  if (!name || !desc || !meta || !alt || !price || !selectedImageUrl) {
    if (feedback) {
      feedback.innerText = !selectedImageUrl
        ? "Bitte wähle zuerst das richtige Produktbild aus!"
        : "Bitte fülle alle Felder aus!";
      feedback.style.display = "block";
      feedback.style.background = "rgba(239, 68, 68, 0.2)";
      feedback.style.color = "#fca5a5";
    }
    if (saveBtn) saveBtn.style.display = "none"; // Speichern-Button verstecken
    return;
  }

  // Dann MwSt prüfen
  if (!vat) {
    showModal("Hinweis", "Bitte wähle einen Mehrwertsteuersatz aus.");
    if (saveBtn) saveBtn.style.display = "none";
    return;
  }

  const correctVat = currentKey === "protein" ? "7" : "19";
  if (vat !== correctVat) {
    const errorText =
      currentKey === "protein"
        ? "Protein Pulver gilt als Nahrungsmittel und wird mit 7% MwSt. versteuert."
        : "Dieses Produkt ist ein technisches Gerät oder Zubehör und muss mit 19% MwSt. versteuert werden.";
    showModal("Falsche MwSt.", errorText);
    if (saveBtn) saveBtn.style.display = "none";
    return;
  }

  // Wenn alles korrekt ist: Vorschau rendern
  const preview = document.getElementById("shopPreview");
  if (preview) {
    preview.innerHTML = `
      <div style="display:flex; gap:20px; align-items:start;">
        <div style="width:120px; height:120px; background:white; border-radius:12px; overflow:hidden; display:flex; align-items:center; justify-content:center; border:1px solid #e2e8f0; flex-shrink:0;">
          <img src="${selectedImageUrl}" style="max-width:100%; max-height:100%; object-fit:contain; display:block;">
        </div>
        <div style="flex:1;">
          <h3 style="color:#0f172a; margin-bottom:10px;">${name}</h3>
          <p style="color:#334155; line-height:1.6; font-size:14px;">${desc}</p>
          <p style="color:#0f172a; font-weight:bold; margin-top:10px; font-size:18px;">${parseFloat(price).toFixed(2).replace(".", ",")} € <span style="font-size:12px; font-weight:normal; color:#64748b;">(inkl. ${vat}% MwSt.)</span></p>
        </div>
      </div>
      <hr style="margin:15px 0; border-color:#e2e8f0;">
      <p style="color:#475569; font-size:12px;"><strong>Meta:</strong> ${meta}</p>
      <p style="color:#475569; font-size:12px;"><strong>Alt Text:</strong> ${alt}</p>`;
  }

  if (feedback) {
    feedback.innerText =
      "Produkt erfolgreich erstellt! Klicke auf Speichern, um fortzufahren.";
    feedback.style.display = "block";
    feedback.style.background = "rgba(34, 197, 94, 0.2)";
    feedback.style.color = "#86efac";
  }

  if (saveBtn) saveBtn.style.display = "block";
  addProgress(20);
  saveGame();
}

function publishProduct() {
  createProduct();
}

function addKeyword(word) {
  seoWords.push(word);
  const builder = document.getElementById("seoBuilder");
  if (builder) builder.innerText = seoWords.join(" | ");
}

function resetPuzzle() {
  seoWords = [];
  const builder = document.getElementById("seoBuilder");
  if (builder) builder.innerText = "";
}

function renderKeywordsForCurrentProduct() {
  const key = document.getElementById("productSelect")?.value;
  const puzzle = document.getElementById("seoPuzzle");
  if (key && products[key] && puzzle) {
    const product = products[key];
    const allKeywords = [
      ...product.correctKeywords,
      ...product.wrongKeywords,
    ].sort(() => Math.random() - 0.5);
    puzzle.innerHTML = allKeywords
      .map(
        (kw) => `
      <div class="seo-keyword-btn" onclick="toggleKeyword('${kw}', this)" style="cursor:pointer; display:inline-block; margin:5px; padding:10px 20px; font-size:18px; background:rgba(255,255,255,0.05); border:2px solid #a855f7; border-radius:12px; color:white; transition: 0.3s;">
        ${kw}
      </div>
    `,
      )
      .join("");
  }
}

function toggleKeyword(word, element) {
  if (seoWords.includes(word)) {
    // Wort entfernen
    seoWords = seoWords.filter((w) => w !== word);
    element.style.borderColor = "#a855f7"; // Wieder Lila
    element.style.background = "rgba(255,255,255,0.05)";
  } else {
    // Wort hinzufügen
    seoWords.push(word);
    element.style.borderColor = "#38bdf8"; // Jetzt Blau
    element.style.background = "rgba(56,189,248,0.1)";
  }

  const builder = document.getElementById("seoBuilder");
  if (builder) builder.innerText = seoWords.join(" | ");
}

function checkSEOPuzzle() {
  const feedback = document.getElementById("seoFeedback");
  const saveBtn = document.getElementById("saveSEOBtn");
  const key = document.getElementById("productSelect")?.value;
  if (!feedback || !key || !products[key]) return;
  const product = products[key];
  const selectedWrongWords = seoWords.filter((w) =>
    product.wrongKeywords.includes(w),
  );
  const selectedCorrectWords = seoWords.filter((w) =>
    product.correctKeywords.includes(w),
  );
  if (seoWords.length < 3) {
    feedback.innerText = "Nutze mindestens 3 passende Keywords.";
    feedback.style.display = "block";
    feedback.style.background = "rgba(239, 68, 68, 0.2)";
    feedback.style.color = "#fca5a5";
    return;
  }
  if (selectedWrongWords.length > 0) {
    feedback.innerText = `Fehler: "${selectedWrongWords.join(", ")}" passen nicht.`;
    feedback.style.display = "block";
    feedback.style.background = "rgba(239, 68, 68, 0.2)";
    feedback.style.color = "#fca5a5";
    return;
  }
  feedback.innerText = "Hervorragend! Keywords passen perfekt.";
  feedback.style.display = "block";
  feedback.style.background = "rgba(34, 197, 94, 0.2)";
  feedback.style.color = "#86efac";
  if (saveBtn) saveBtn.style.display = "block";
  saveGame();
}

function checkConversion() {
  const text = document.getElementById("conversionText")?.value?.trim();
  const feedback = document.getElementById("conversionFeedback");
  const finishBtn = document.getElementById("finishGameBtn");
  if (!text || !feedback) return;
  if (text.length < 30) {
    feedback.innerText = "Der Text ist zu kurz.";
    feedback.style.display = "block";
    feedback.style.background = "rgba(239, 68, 68, 0.2)";
    feedback.style.color = "#fca5a5";
    return;
  }
  const convincingWords = [
    "garantie",
    "kostenlos",
    "exklusive",
    "sichern",
    "jetzt",
    "sofort",
    "limitiert",
    "angebot",
    "versand",
  ];
  const hasConvincingWord = convincingWords.some((word) =>
    text.toLowerCase().includes(word),
  );
  if (!hasConvincingWord) {
    feedback.innerText = 'Nutze Wörter wie "Garantie" oder "kostenlos".';
    feedback.style.display = "block";
    feedback.style.background = "rgba(56, 189, 248, 0.2)";
    feedback.style.color = "#7dd3fc";
    return;
  }
  feedback.innerText = "Ausgezeichneter Text!";
  feedback.style.display = "block";
  feedback.style.background = "rgba(34, 197, 94, 0.2)";
  feedback.style.color = "#86efac";

  // Text in die Vorschau übernehmen
  const previewLongDesc = document.getElementById("previewLongDesc");
  if (previewLongDesc) {
    previewLongDesc.innerText = text;
  }

  if (finishBtn) finishBtn.style.display = "block";
  saveGame();
}

function updateShopStyle(type, value, element) {
  const preview = document.getElementById("shopLivePreview");
  const header = document.getElementById("previewHeader");
  const logo = document.getElementById("previewLogo");
  const logoIcon = document.getElementById("logoIcon");
  const nav = document.getElementById("previewNav");
  const main = document.getElementById("previewMain");
  const buyBtn = document.getElementById("previewBuyBtn");

  if (element) {
    element.parentElement
      .querySelectorAll(".secondary-btn, .color-swatch")
      .forEach((el) => el.classList.remove("active-choice"));
    element.classList.add("active-choice");
  }

  if (type === "theme") {
    if (logo) logo.style.color = value;
    if (buyBtn) buyBtn.style.background = value;

    // Top Seller Badge Farbe ebenfalls anpassen
    const topSellerBadge = document.getElementById("previewBadge");
    if (topSellerBadge) topSellerBadge.style.background = value;

    // Den ausgewählten Varianten-Button (Standard) ebenfalls anpassen
    const variantButtons = document.querySelectorAll(
      '#previewMain [style*="border: 2px solid"]',
    );
    variantButtons.forEach((btn) => {
      if (btn.innerText.includes("Standard")) {
        btn.style.borderColor = value;
      }
    });

    // Thumbnail Rahmen anpassen
    const activeThumbnail = document.querySelector(
      '#previewImageWrapper [style*="border: 2px solid #38bdf8"]',
    );
    if (activeThumbnail) activeThumbnail.style.borderColor = value;

    // Newsletter-Elemente ebenfalls an das Theme anpassen
    const newsletterTitle = document.getElementById("newsletterTitle");
    const newsletterBtn = document.getElementById("newsletterBtn");
    if (newsletterTitle) newsletterTitle.style.color = value;
    if (newsletterBtn) newsletterBtn.style.background = value;
  }
  if (type === "logoIcon" && logoIcon) {
    logoIcon.innerText = value;
  }
  if (type === "font" && preview) {
    // Die Schriftart für den Haupt-Vorschau-Container setzen
    preview.style.setProperty("font-family", value, "important");

    // Alle Kind-Elemente innerhalb der Vorschau finden und die Schriftart erzwingen
    const allPreviewElements = preview.querySelectorAll("*");
    allPreviewElements.forEach((el) => {
      el.style.setProperty("font-family", value, "important");
    });

    // Explizite Zuweisung für wichtige Container
    if (header) header.style.setProperty("font-family", value, "important");
    if (main) main.style.setProperty("font-family", value, "important");
    const footer = document.getElementById("previewFooter");
    if (footer) footer.style.setProperty("font-family", value, "important");

    // Auch das Logo und die Navigation
    const logo = document.getElementById("previewLogo");
    if (logo) logo.style.setProperty("font-family", value, "important");
    const nav = document.getElementById("previewNav");
    if (nav) nav.style.setProperty("font-family", value, "important");
  }
  if (type === "layout" && main) {
    if (value === "centered") {
      main.style.flexDirection = "column";
      main.style.textAlign = "center";
      main.style.alignItems = "center";
    } else {
      main.style.flexDirection = "row";
      main.style.textAlign = "left";
      main.style.alignItems = "center";
    }
  }
  if (type === "headerFooterColor") {
    const footer = document.getElementById("previewFooter");
    if (value === "glass") {
      const glassBg = "rgba(255, 255, 255, 0.4)";
      const blur = "blur(10px)";
      header.style.background = glassBg;
      header.style.backdropFilter = blur;
      header.style.color = "#1e293b";
      if (nav) nav.style.color = "#475569";
      if (footer) {
        footer.style.background = glassBg;
        footer.style.backdropFilter = blur;
        footer.style.color = "#1e293b";
        footer
          .querySelectorAll("span, div")
          .forEach((el) => (el.style.color = "#1e293b"));
      }
    } else {
      header.style.background = value;
      header.style.backdropFilter = "none";
      if (footer) footer.style.background = value;

      // Erweiterte Dunkelheits-Prüfung für alle verfügbaren Farben
      const darkColors = [
        "#0f172a", // Dunkelblau (DQR)
        "#1e293b", // Dark (Shop-Farbe)
        "#000000", // Schwarz
        "#6366f1", // Indigo
        "#a855f7", // Purple
        "#8b5cf6", // Violett
        "#ef4444", // Rot
        "#f43f5e", // Rose
      ];

      const isDark = darkColors.includes(value.toLowerCase());
      const textColor = isDark ? "white" : "black";
      const navColor = isDark ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.7)";

      header.style.color = textColor;
      if (nav) nav.style.color = navColor;
      if (footer) {
        footer.style.color = textColor;
        footer.querySelectorAll("span, div, a").forEach((el) => {
          el.style.color = textColor;
          el.style.opacity = "1"; // Opazität erzwingen, damit es kein Grau wird
        });
      }
    }
  }
  if (type === "newsletterBg" && preview) {
    const newsletter = document.getElementById("previewNewsletter");
    const nlInputGroup = document.getElementById("newsletterInputGroup");
    if (newsletter) {
      newsletter.style.background = value;

      // Erweiterte Dunkelheits-Prüfung für Newsletter
      const darkColors = [
        "#0f172a",
        "#1e293b",
        "#000000",
        "#6366f1",
        "#a855f7",
        "#8b5cf6",
        "#ef4444",
        "#f43f5e",
      ];

      const isDark = darkColors.includes(value.toLowerCase());
      const textColor = isDark ? "white" : "black";
      const borderColor = isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";

      newsletter.style.color = textColor;
      const nlTitle = document.getElementById("newsletterTitle");
      if (nlTitle) nlTitle.style.color = textColor;
      const nlDesc = newsletter.querySelector("p");
      if (nlDesc) nlDesc.style.color = textColor; // Jetzt direkt Weiß oder Schwarz

      if (nlInputGroup) {
        nlInputGroup.style.setProperty(
          "border",
          `1px solid ${borderColor}`,
          "important",
        );
      }
    }
  }
  if (type === "nav" && nav) {
    if (value === "center") {
      header.style.flexDirection = "column";
      header.style.gap = "15px";
    } else {
      header.style.flexDirection = "row";
      header.style.gap = "0";
    }
  }
  if (type === "radius" && buyBtn) {
    buyBtn.style.borderRadius = value;
  }
  if (type === "bg" && preview) {
    preview.style.background = value;
  }
}

function toggleShopElement(elementId, element) {
  let targetId = "";
  if (elementId === "trust-badges") targetId = "previewTrustBadges";
  if (elementId === "newsletter") targetId = "previewNewsletter";
  if (elementId === "guarantee") targetId = "previewGuarantee";

  const el = document.getElementById(targetId);
  if (el) {
    const isHidden = el.style.display === "none" || el.style.display === "";
    el.style.display = isHidden
      ? elementId === "trust-badges"
        ? "flex"
        : "block"
      : "none";
    if (element)
      isHidden
        ? element.classList.add("active-choice")
        : element.classList.remove("active-choice");
  }
}

// Cookie Consent Logik
function initCookieConsent() {
  const modal = document.getElementById("cookieModal");
  const checkbox = document.getElementById("cookieAgree");
  const btn = document.getElementById("cookieAcceptBtn");

  if (modal) {
    modal.style.display = "flex";
    document.body.classList.add("modal-open");
  }

  if (checkbox && btn) {
    // Checkbox beim Öffnen immer zurücksetzen
    checkbox.checked = false;
    btn.style.opacity = "0.5";
    btn.style.pointerEvents = "none";

    checkbox.addEventListener("change", function () {
      if (this.checked) {
        btn.style.opacity = "1";
        btn.style.pointerEvents = "all";
      } else {
        btn.style.opacity = "0.5";
        btn.style.pointerEvents = "none";
      }
    });
  }
}

function acceptCookies() {
  const modal = document.getElementById("cookieModal");
  if (modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
}

// Initialisierung beim Laden der Seite ENTFERNT, da nur beim Spielstart gewünscht
// document.addEventListener('DOMContentLoaded', initCookieConsent);

function showLegal(type) {
  const modal = document.getElementById("legalModal");
  const content = document.getElementById("legalContent");

  let text = "";
  const shopName = localStorage.getItem("ecommercePlayerName") || "Dein Shop";

  if (type === "datenschutz") {
    text = `<h3>Datenschutzerklärung</h3>
            <p><strong style="color: #38bdf8;">1. Art der Anwendung</strong></p>
            <p>Bei diesem Spiel handelt es sich um eine <strong>Online-Anwendung</strong>. Der Zugriff erfolgt über das Internet, jedoch ist die Datenverarbeitung so konzipiert, dass Ihre Privatsphäre maximal geschützt bleibt.</p>

            <p><strong style="color: #a855f7;">2. Lokale Datenspeicherung im Browser</strong></p>
            <p>Sämtliche spielrelevanten Daten, die Sie innerhalb der Anwendung eingeben (z.B. Ihr Name, der Name Ihres Shops oder getroffene Design-Entscheidungen), werden <strong>ausschließlich lokal in Ihrem Browser gespeichert</strong> (im sogenannten LocalStorage).</p>
            <p>Es findet <strong>keine Übertragung</strong> dieser persönlichen Spieldaten an unsere Server oder an Dritte statt. Die Daten verbleiben auf Ihrem Endgerät.</p>

            <p><strong style="color: #38bdf8;">3. Lokale Speicherung von Downloads (Zertifikat)</strong></p>
            <p>Innerhalb der Anwendung haben Sie die Möglichkeit, ein Bild (Screenshot) Ihrer erstellten Shopseite als Zertifikat herunterzuladen. Dieses Bild wird direkt in Ihrem Browser generiert und <strong>lokal auf Ihrem Computer gespeichert</strong>. Eine Speicherung oder Übermittlung dieses Bildes an unsere Server erfolgt zu keinem Zeitpunkt.</p>

            <p><strong style="color: #a855f7;">4. Server-Log-Files</strong></p>
            <p>Da dies eine Online-Anwendung ist, erhebt der Provider der Seiten automatisch Informationen in sogenannten Server-Log-Files (z.B. IP-Adresse, Browsertyp). Diese sind technisch notwendig für den Betrieb der Webseite, werden aber nicht mit Ihren lokalen Spieldaten verknüpft.</p>

            <p><strong style="color: #38bdf8;">5. Ihre Rechte & Kontrolle</strong></p>
            <p>Sie haben die volle Kontrolle über Ihre Daten. Da alles lokal gespeichert ist, können Sie sämtliche Spielstände jederzeit selbst löschen, indem Sie den Browser-Cache oder die Website-Daten leeren.</p>

            <p><i>Stand: 10.Mai.2026.</i></p>`;
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
            Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.</p>`;
  } else if (type === "nutzung") {
    text = `<h3>Nutzungsbedingungen</h3>
            <p><strong style="color: #38bdf8;">1. Geltungsbereich</strong></p>
            <p>Diese Nutzungsbedingungen gelten für die Nutzung des Spiels "E-Commerce Academy". Mit der Nutzung der Anwendung erklären Sie sich mit den folgenden Bedingungen einverstanden.</p>

            <p><strong style="color: #a855f7;">2. Zweck der Anwendung</strong></p>
            <p>Die Anwendung dient rein zu Bildungs- und Unterhaltungszwecken im Rahmen des E-Commerce-Unterrichts. Es findet kein echter Warenhandel statt. Alle im Spiel getätigten Transaktionen sind fiktiv.</p>

            <p><strong style="color: #38bdf8;">3. Urheberrecht</strong></p>
            <p>Die in der Anwendung verwendeten Grafiken, Texte und das Spieldesign sind urheberrechtlich geschützt. Eine kommerzielle Nutzung oder Vervielfältigung außerhalb des Bildungskontexts ist ohne ausdrückliche Genehmigung nicht gestattet.</p>

            <p><strong style="color: #a855f7;">4. Haftung für Inhalte</strong></p>
            <p>Wir übernehmen keine Gewähr für die Richtigkeit der im Spiel vermittelten wirtschaftlichen oder rechtlichen Tipps, da diese zur Vereinfachung didaktisch reduziert wurden.</p>

            <p><strong style="color: #38bdf8;">5. Beendigung der Nutzung</strong></p>
            <p>Da keine Benutzerkonten existieren, kann die Nutzung jederzeit durch einfaches Schließen des Browsers beendet werden. Ein Löschen der lokalen Daten im Browser setzt alle Spielstände zurück.</p>

            <p><i>Stand: 11. Mai 2026</i></p>`;
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

function loadShopBuilderData() {
  const name = document.getElementById("productName")?.value || "Dein Produkt";
  const desc =
    document.getElementById("productDescription")?.value || "Beschreibung...";
  const conversionText = document.getElementById("conversionText")?.value || "";
  const price = document.getElementById("productPrice")?.value || "79,99";
  const vat = document.getElementById("productVat")?.value || "19";
  const playerName = localStorage.getItem("ecommercePlayerName") || "Dein Shop";

  const pName = document.getElementById("previewName");
  const pDesc = document.getElementById("previewProductDesc");
  const pLongDesc = document.getElementById("previewLongDesc");
  const pImg = document.getElementById("previewProductImg");
  const pPrice = document.getElementById("previewPrice");
  const footer = document.getElementById("previewFooter");
  const logoText = document.getElementById("logoText");

  if (pName) pName.innerText = name;
  if (pDesc) pDesc.innerText = desc;
  if (pLongDesc && conversionText) pLongDesc.innerText = conversionText;
  if (pImg && selectedImageUrl) pImg.src = selectedImageUrl;
  if (pPrice) {
    const formattedPrice = parseFloat(price.toString().replace(",", "."))
      .toFixed(2)
      .replace(".", ",");
    pPrice.innerHTML = `${formattedPrice} € <span style="display:block; font-size:12px; font-weight:normal; color:#64748b; margin-top:5px;">inkl. ${vat}% MwSt.</span>`;
  }

  if (logoText) {
    logoText.innerText = (playerName || "Dein Shop").trim();
  }

  if (footer) {
    const safeName = (playerName || "E-Commerce Experte").trim();
    const copyrightElement = document.getElementById("previewCopyright");
    if (copyrightElement) {
      copyrightElement.innerText = `© 2026 alle Rechte gehören ${safeName}`;
    }
  }
}

function helpPrice() {
  const product = getCurrentProduct();
  const input = document.getElementById("productPrice");
  if (product && input) {
    // Beispielpreise basierend auf Produkt
    const prices = {
      gamingmouse: "49.99",
      headphones: "129.00",
      smartwatch: "199.00",
      protein: "24.99",
      backpack: "89.90",
      keyboard: "149.90",
      lamp: "39.00",
      bottle: "19.95",
      chair: "299.00",
      camera: "349.00",
    };
    const key = document.getElementById("productSelect").value;
    input.value = prices[key] || "79.99";
  } else {
    showModal("Tipp", "Wähle zuerst ein Produkt aus.");
  }
}

function finalizeShopDesign() {
  // Konfetti sofort auslösen
  triggerConfetti();
  // Dann das Modal anzeigen
  showModal(
    "Shop veröffentlicht!",
    "Du hast alle Aufgaben gemeistert!\nGlückwunsch, dein Shop ist jetzt live.",
    "Beenden",
  );
}

function getCurrentProduct() {
  const key = document.getElementById("productSelect")?.value;
  return key && products[key] ? products[key] : null;
}

function helpProductName() {
  const product = getCurrentProduct();
  const input = document.getElementById("productName");
  if (product && input) {
    input.value = product.title;
  } else {
    showModal("Tipp", "Wähle zuerst ein Produkt aus.");
  }
}

function helpDescription() {
  const product = getCurrentProduct();
  const input = document.getElementById("productDescription");
  if (product && input) {
    const key = document.getElementById("productSelect")?.value;
    if (key === "bottle") {
      input.value = `Edelstahl-Trinkflasche – Dein robuster Begleiter für Sport, Freizeit & Beruf
Suchst du nach einer nachhaltigen Lösung für deinen täglichen Flüssigkeitsbedarf? Entdecke die Edelstahl-Trinkflasche, die perfekt auf die Bedürfnisse von anspruchsvollen Anwendern zugeschnitten ist. Egal ob eiskaltes Wasser beim intensiven Workout oder heißer Kaffee im Büro – diese Flasche liefert maximale Performance, wann immer du sie brauchst.`;
    } else if (key === "lamp") {
      input.value = `Du suchst die ultimative LED Schreibtischlampe für dein Homeoffice oder den Gaming-Desk? Gefunden. Diese smarte Bürolampe vereint modernes Design mit maximaler Performance. Egal ob als dimmbare Tischleuchte beim Arbeiten oder als Leselampe beim Lernen – sie ist ideal für Profis, Studierende und Einsteiger.`;
    } else if (key === "keyboard") {
      input.value = `Diese mechanische ${product.title} – rasiert im Match komplett. Per kabelgebundener USB-Verbindung zockst du absolut verzögerungsfrei mit voller Zero-Latency-Garantie. Das fette Vollformat liefert dir das komplette Key-Setup inklusive Numpad. Dank echtem deutschen Layout sind Essentials wie Strg, Entf, Bild↑ und Bild↓ sofort am Start. Absoluter Blickfang ist die krasse RGB-Beleuchtung mit sickem Farbverlauf über die Tasten – clean gecrafted mit fettem Logo direkt über den Pfeiltasten.

        • Mechanische Tastatur

        • Deutsches Layout (Strg, Entf, Bild↑ usw.)

        • RGB‑Beleuchtung mit Farbverlauf

        • Vollformat (inkl. Numpad)

        • Kabelgebunden `;
    } else if (key === "backpack") {
      input.value = `Entdecke den perfekten Laptop Rucksack für den Alltag im Büro oder Reisen. Der moderne Rucksack bietet Platz für Laptops bis 15,6 Zoll und überzeugt mit wasserabweisendem Material, ergonomischem Tragekomfort und cleveren Fächern für Zubehör, Dokumente so wie persönliche Gegenstände. Ideal für Arbeit, Schule, Uni oder unterwegs.`;
    } else if (key === "protein") {
      input.value = `Dieses Protein Pulver mit Vanillegeschmack unterstützt deine eiweißreiche Ernährung und eignet sich für Sport, Alltag und Regeneration. Eine Portion liefert 24 g Eiweiß und lässt sich einfach mit Wasser, Milch oder einem Pflanzendrink mischen. Die feine Löslichkeit sorgt für eine cremige Konsistenz ohne starkes Klumpen. Das Produkt ist ideal für alle, die ihre tägliche Proteinzufuhr unkompliziert ergänzen möchten.`;
    } else if (key === "smartwatch") {
      input.value = `Entdecke die Smartwatch Pro – dein smarter Begleiter für Alltag, Sport und Gesundheit. Dank präzisem GPS-Tracking, Herzfrequenzmessung in Echtzeit und intuitiver Bedienung behältst du deine Aktivitäten und Ziele jederzeit im Blick. Leistungsstark, modern und komfortabel – ideal für alle, die Technik zuverlässig im Alltag nutzen möchten.`;
    } else if (key === "headphones") {
      input.value = `Erlebe Musik, Podcasts und Anrufe ganz ohne Kabel. Die Bluetooth Kopfhörer verbinden sich schnell mit deinem Smartphone und bieten dir einen klaren Klang für Alltag, Sport, Schule oder unterwegs. Dank kabellosem Design hast du volle Bewegungsfreiheit, während das integrierte Mikrofon bequemes Telefonieren ermöglicht. Ideal für alle, die praktische, moderne und zuverlässige Kopfhörer suchen.`;
    } else if (key === "gamingmouse") {
      input.value = `Präzise. Schnell. Kompakt.
Unsere kabelgebundene Gaming-Maus mit 16.000 DPI optischem Sensor liefert blitzschnelles Tracking ohne Latenz. Ideal für Shooter, MMO oder MOBA.
Deine Vorteile auf einen Blick:
- 16.000 DPI – 6 einstellbare Stufen per Knopfdruck
- Ultra-leicht (69g) – perfekt für Low-Sens-Gamer & lange Sessions
- RGB-Beleuchtung – 16,8 Mio. Farben, 4 Effekte
- Kabelgebunden – kein Input-Lag, keine Batterie
- Ergonomisch für Rechtshänder – mit rutschfesten Griffen
Für wen?
Für Gamer, die eine reaktionsschnelle, leichte und zuverlässige Maus suchen – ohne Kompromisse bei Features oder Verarbeitung.
Lieferumfang: Maus, Anleitung, Ersatz-Gleitfüße
Jetzt in den Warenkorb – dein nächster Flick Shot wartet.`;
    } else if (key === "chair") {
      input.value = `Erlebe maximalen Komfort und modernes Gaming-Design mit diesem hochwertigen Gaming Stuhl im exklusiven ALO Academy Look. Die ergonomische Form unterstützt deine Haltung bei langen Gaming-Sessions, im Homeoffice oder beim Streaming. Dank der hohen Rückenlehne, den gepolsterten Armlehnen sowie den enthaltenen Nacken- und Lendenkissen sitzt du jederzeit bequem und konzentriert.

Das edle schwarze Kunstleder mit violett-blauen Akzenten verleiht dem Gaming Chair einen futuristischen Premium-Look. Die stabile Konstruktion, die leichtgängigen Rollen und die höhenverstellbare Sitzfläche sorgen für optimale Beweglichkeit und individuelle Anpassung an deinen Schreibtisch.

Ob für ambitionierte Gamer, Content Creator oder das moderne Büro-Setup – dieser ergonomische Gaming Stuhl kombiniert Style, Komfort und Performance auf höchstem Niveau.

Highlights:
Ergonomischer Gaming Stuhl mit hoher Rückenlehne
Inklusive Nacken- und Lendenkissen
Höhenverstellbar und drehbar
Gepolsterte Armlehnen für mehr Komfort
Hochwertiges Kunstleder mit Premium-Optik
Modernes Gaming-Design mit RGB-inspirierten Farbakzenten
Ideal für Gaming, Homeoffice & Streaming`;
    } else if (key === "camera") {
      input.value = `Halte jedes Abenteuer in gestochen scharfer Qualität fest – mit der leistungsstarken 4K Action Kamera von ALO Academy. Ob beim Sport, Reisen, Vloggen, Motorradfahren oder Outdoor-Einsatz: Diese kompakte Ultra-HD Kamera liefert beeindruckende Videoaufnahmen mit hoher Detailgenauigkeit und flüssiger Performance.

Dank des integrierten Displays behältst du deine Aufnahmen jederzeit im Blick. Die robuste Bauweise, die einfache Bedienung sowie die vielseitige Halterung machen die Kamera zum perfekten Begleiter für Action, Content Creation und Alltag. Durch das Weitwinkelobjektiv entstehen dynamische Aufnahmen mit maximalem Sichtfeld.

Die moderne 4K-Technologie sorgt für klare Videos und hochwertige Bilder – ideal für YouTube, TikTok, Instagram oder professionelle Erinnerungen unterwegs.

Highlights:
4K Ultra HD Action Kamera
Kompaktes und robustes Design
Integriertes Display für Live-Ansicht
Weitwinkelobjektiv für dynamische Aufnahmen
Ideal für Sport, Reisen & Vlogging
Einfache Montage dank Action-Halterung
Perfekt für Outdoor- und Abenteuer-Aufnahmen`;
    } else {
      const kw = product.correctKeywords.slice(0, 3).join(", ");
      input.value = `Entdecke die ${product.title} – perfekt für anspruchsvolle Anwender. Mit ${kw} überzeugt dieses Produkt durch erstklassige Qualität und maximale Performance. Ideal für Profis und Einsteiger gleichermaßen.`;
    }
  } else {
    showModal("Tipp", "Wähle zuerst ein Produkt aus.");
  }
}

function helpMetaTitle() {
  const product = getCurrentProduct();
  const input = document.getElementById("metaTitle");
  if (product && input) {
    const key = document.getElementById("productSelect")?.value;
    if (key === "bottle") {
      input.value = "Edelstahl Trinkflasche BPA-frei & auslaufsicher";
    } else if (key === "lamp") {
      input.value = "Moderne LED Schreibtischlampe & Bürolampe dimmbar";
    } else if (key === "keyboard") {
      input.value = "Gaming Tastatur mechanisch – RGB, Numpad & Zero Latency";
    } else if (key === "backpack") {
      input.value = "Laptop Rucksack 15,6 Zoll kaufen | Wasserdicht & Modern";
    } else if (key === "protein") {
      input.value = "Protein Pulver Vanille kaufen, 24 g Eiweiß pro Portion.";
    } else if (key === "smartwatch") {
      input.value = "Smartwatch Pro mit GPS & Herzfrequenz | Fitness Smartwatch für Alltag & Sport.";
    } else if (key === "headphones") {
      input.value = "Bluetooth Kopfhörer kabellos mit Mikrofon kaufen";
    } else if (key === "gamingmouse") {
      input.value = "Gaming Maus kabelgebunden 16.000 DPI ultra-leicht RGB";
    } else if (key === "chair") {
      input.value = "Ergonomischer Gaming Stuhl mit Nacken- und Lendenkissen, höhenverstellbar und ideal für Gaming, Homeoffice & Streaming. Modernes Premium-Design.";
    } else if (key === "camera") {
      input.value = "Leistungsstarke 4K Action Kamera mit Ultra-HD-Qualität, Weitwinkelobjektiv und Display. Ideal für Sport, Reisen, Vlogging und Outdoor-Abenteuer.";
    } else {
      const kw = product.correctKeywords.slice(0, 2).join(" | ");
      input.value = `${product.title} kaufen – ${kw} | Dein Shop`;
    }
  } else {
    showModal("Tipp", "Wähle zuerst ein Produkt aus.");
  }
}

function helpAltText() {
  const product = getCurrentProduct();
  const input = document.getElementById("altText");
  if (product && input) {
    const key = document.getElementById("productSelect")?.value;
    if (key === "bottle") {
      input.value = "Schwarze Trinkflasche aus Edelstahl mit dem Nexora Logo, auf neutralem Hintergrund";
    } else if (key === "keyboard") {
      input.value = "Produktfoto Mechanische Gaming-Tastatur mit RGB-Beleuchtung auf neutralem Hintergrund";
    } else if (key === "backpack") {
      input.value = "Produktfoto Schwarzer Laptop Rucksack für 15,6 Zoll Notebook im modernem Design auf neutralem Hintergrund";
    } else if (key === "protein") {
      input.value = "Produktfoto Protein Pulver Dose in Schwarz mit Goldener schrift auf neutralem Hintergrund";
    } else if (key === "smartwatch") {
      input.value = "Produktfoto Smartwatch Pro mit GPS- und Herzfrequenzanzeige auf neutralem Hintergrund";
    } else if (key === "headphones") {
      input.value = "Produktfoto Schwarze Bluetooth Kopfhörer mit LED verschiedene Farben, Noise Cancelling, kabellos auf neutralem Hintergrund";
    } else if (key === "gamingmouse") {
      input.value = "Produktfoto Kabelgebundene Gaming Maus mit 16000 DPI, RGB Beleuchtung aus verschiedenen Winkeln auf neutralem Hintergrund";
    } else if (key === "chair") {
      input.value = "Produktfoto Ergonomischer schwarzer Gaming Stuhl mit violett-blauen Akzenten, hoher Rückenlehne, Armlehnen sowie Nacken- und Lendenkissen neutralem Hintergrund";
    } else if (key === "camera") {
      input.value = "Schwarze 4K Ultra HD Action Kamera mit Weitwinkelobjektiv, integriertem Display und Halterung auf neutralem Hintergrund";
    } else {
      const kw = product.correctKeywords.slice(0, 3).join(", ");
      input.value = `Produktfoto ${product.title} mit ${kw} auf neutralem Hintergrund`;
    }
  } else {
    showModal("Tipp", "Wähle zuerst ein Produkt aus.");
  }
}

function helpSEO() {
  const product = getCurrentProduct();
  if (product) {
    // Alle richtigen Keywords automatisch hinzufügen
    product.correctKeywords.forEach((kw) => {
      if (!seoWords.includes(kw)) addKeyword(kw);
    });
  } else {
    showModal("Tipp", "Wähle zuerst ein Produkt aus.");
  }
}

function helpConversion() {
  const product = getCurrentProduct();
  const input = document.getElementById("conversionText");
  if (product && input) {
    const key = document.getElementById("productSelect")?.value;
    if (key === "chair") {
      input.value = "Sichere dir jetzt die Gaming Stuhl mit Gaming Stuhl, Ergonomisch, mit modernem ALO Academy Design! Kostenloser Versand, 30 Tage Geld-zurück-Garantie und exklusive Angebote nur für kurze Zeit. Vertrauen auf Qualität – überzeuge dich selbst und bestelle noch heute!";
    } else if (key === "camera") {
      input.value = "Kompakte 4K Action Kamera mit Ultra-HD-Auflösung, Weitwinkelobjektiv und praktischem Display. Perfekt für Sport, Reisen, Vlogging und actionreiche Aufnahmen unterwegs.";
    } else {
      const kw = product.correctKeywords.slice(0, 3).join(", ");
      input.value = `Sichere dir jetzt die ${product.title} mit ${kw}! Kostenloser Versand, 30 Tage Geld-zurück-Garantie und exklusive Angebote nur für kurze Zeit. Vertrauen auf Qualität – überzeuge dich selbst und bestelle noch heute!`;
    }
  } else {
    showModal("Tipp", "Wähle zuerst ein Produkt aus.");
  }
}

