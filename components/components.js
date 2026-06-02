import {
    db,
    collection,
    getDocs,
    query,
    doc,
    getDoc
} from "../assets/js/firebase.js";

(function () {

  const infoReadStorageKey = "aloAcademyReadInfos";
  const themeStorageKey = "aloAcademyColorTheme";
  const customThemeStorageKey = "aloAcademyCustomColorTheme";

  const colorThemes = [
    {
      id: "default",
      name: "Blau / Lila",
      primary: "#38bdf8",
      primaryDark: "#0ea5e9",
      secondary: "#a855f7",
      secondaryDark: "#9333ea",
      backgroundA: "#1e293b",
      backgroundB: "#334155",
      backgroundC: "#0f172a"
    },
    {
      id: "green",
      name: "Gruen / Mint",
      primary: "#22c55e",
      primaryDark: "#16a34a",
      secondary: "#14b8a6",
      secondaryDark: "#0f766e",
      backgroundA: "#052e16",
      backgroundB: "#064e3b",
      backgroundC: "#022c22"
    },
    {
      id: "orange",
      name: "Orange / Rot",
      primary: "#f97316",
      primaryDark: "#ea580c",
      secondary: "#ef4444",
      secondaryDark: "#b91c1c",
      backgroundA: "#431407",
      backgroundB: "#7c2d12",
      backgroundC: "#1c1917"
    },
    {
      id: "pink",
      name: "Pink / Rose",
      primary: "#ec4899",
      primaryDark: "#db2777",
      secondary: "#f43f5e",
      secondaryDark: "#be123c",
      backgroundA: "#4a044e",
      backgroundB: "#831843",
      backgroundC: "#1f1021"
    },
    {
      id: "yellow",
      name: "Gelb / Gold",
      primary: "#eab308",
      primaryDark: "#ca8a04",
      secondary: "#f59e0b",
      secondaryDark: "#b45309",
      backgroundA: "#422006",
      backgroundB: "#713f12",
      backgroundC: "#1c1917"
    }
  ];

  function hexToRgb(hex) {
    const normalized = hex.replace("#", "");
    const value = parseInt(normalized, 16);
    return [
      (value >> 16) & 255,
      (value >> 8) & 255,
      value & 255
    ].join(", ");
  }

  function getColorTheme(themeId) {
    if (themeId === "custom") {
      try {
        const customTheme = JSON.parse(
          localStorage.getItem(customThemeStorageKey) || "{}"
        );

        if (customTheme.primary && customTheme.secondary) {
          return {
            id: "custom",
            name: "Eigene Farben",
            primary: customTheme.primary,
            primaryDark: customTheme.primary,
            secondary: customTheme.secondary,
            secondaryDark: customTheme.secondary,
            backgroundA: "#1e293b",
            backgroundB: "#334155",
            backgroundC: "#0f172a"
          };
        }
      } catch (error) {
      }

      return {
        id: "custom",
        name: "Eigene Farben",
        primary: "#38bdf8",
        primaryDark: "#0ea5e9",
        secondary: "#a855f7",
        secondaryDark: "#9333ea",
        backgroundA: "#1e293b",
        backgroundB: "#334155",
        backgroundC: "#0f172a"
      };
    }

    return colorThemes.find(function(theme) {
      return theme.id === themeId;
    }) || colorThemes[0];
  }

  function ensureThemeStyle() {
    let style = document.getElementById("aloColorThemeStyle");

    if (!style) {
      style = document.createElement("style");
      style.id = "aloColorThemeStyle";
      document.head.appendChild(style);
    }

    style.textContent = `
      :root {
        --alo-primary: #38bdf8;
        --alo-primary-dark: #0ea5e9;
        --alo-primary-rgb: 56, 189, 248;
        --alo-secondary: #a855f7;
        --alo-secondary-dark: #9333ea;
        --alo-secondary-rgb: 168, 85, 247;
        --alo-bg-a: #1e293b;
        --alo-bg-b: #334155;
        --alo-bg-c: #0f172a;
      }

      body {
        background-image:
          radial-gradient(circle at top left, rgba(var(--alo-primary-rgb), 0.3), transparent 60%) !important,
          radial-gradient(circle at bottom right, rgba(var(--alo-secondary-rgb), 0.25), transparent 60%) !important,
          linear-gradient(135deg, var(--alo-bg-a), var(--alo-bg-b), var(--alo-bg-a)) !important;
      }

      .topbar,
      .global-footer {
        background: var(--alo-bg-c) !important;
      }

      h1,
      h2,
      h3,
      .section h1,
      .section h2,
      .section h3,
      .sidebar h2,
      .modal h3 {
        color: var(--alo-primary) !important;
      }

      .hero-title,
      .sidebar h2,
      .modal h3 {
        background: linear-gradient(135deg, var(--alo-primary), var(--alo-secondary)) !important;
        -webkit-background-clip: text !important;
        background-clip: text !important;
      }

      .primary-btn,
      .modal-btn,
      .info-icon-btn,
      #saveProductBtn:hover,
      #saveSEOBtn:hover,
      #finishGameBtn:hover {
        background: linear-gradient(135deg, var(--alo-primary), var(--alo-primary-dark)) !important;
        box-shadow: 0 10px 30px rgba(var(--alo-primary-rgb), 0.35) !important;
      }

      .purple-btn,
      .helper-btn,
      #saveProductBtn,
      #saveSEOBtn,
      #finishGameBtn {
        background: linear-gradient(135deg, var(--alo-secondary), var(--alo-secondary-dark)) !important;
        box-shadow: 0 10px 30px rgba(var(--alo-secondary-rgb), 0.35) !important;
      }

      .mission.blue-border,
      .glass-card.blue-theme,
      input,
      textarea,
      select {
        border-color: var(--alo-primary) !important;
      }

      .mission.purple-border,
      .glass-card.purple-theme {
        border-color: var(--alo-secondary) !important;
      }

      .section::before,
      .sidebar::before,
      .modal::before,
      .intro-hero::before,
      .start-screen-card::before,
      .hero-card::before,
      .shop-builder-sidebar::before,
      .pro-tip::before {
        background: conic-gradient(var(--alo-primary), var(--alo-secondary), var(--alo-primary), var(--alo-secondary), var(--alo-primary)) !important;
      }

      .topbar-right button[onclick*="openInfoBell"],
      .topbar-right button[onclick*="location.href"],
      .topbar-right button[onclick*="confirmRestart"] {
        background: rgba(var(--alo-primary-rgb), 0.18) !important;
        border-color: rgba(var(--alo-primary-rgb), 0.45) !important;
      }

      .topbar-right button[onclick*="openSettingsPin"],
      .topbar-right button[onclick*="checkBuilderPin"] {
        background: rgba(var(--alo-secondary-rgb), 0.18) !important;
        border-color: rgba(var(--alo-secondary-rgb), 0.45) !important;
      }

      .topbar-right button[onclick*="openThemePicker"] {
        background: linear-gradient(135deg, var(--alo-primary), var(--alo-secondary)) !important;
        border-color: rgba(255,255,255,0.35) !important;
      }

      .alo-theme-swatch {
        width: 100%;
        min-height: 74px;
        border-radius: 16px;
        color: white;
        border: 2px solid rgba(255,255,255,0.16);
        cursor: pointer;
        font-weight: 900;
        font-size: 15px;
      }

      .alo-theme-swatch.active {
        outline: 4px solid #ffffff !important;
        outline-offset: 3px;
      }
    `;
  }

  function applyColorTheme(themeId) {
    const theme = getColorTheme(themeId);
    const root = document.documentElement;

    ensureThemeStyle();

    root.style.setProperty("--alo-primary", theme.primary);
    root.style.setProperty("--alo-primary-dark", theme.primaryDark);
    root.style.setProperty("--alo-primary-rgb", hexToRgb(theme.primary));
    root.style.setProperty("--alo-secondary", theme.secondary);
    root.style.setProperty("--alo-secondary-dark", theme.secondaryDark);
    root.style.setProperty("--alo-secondary-rgb", hexToRgb(theme.secondary));
    root.style.setProperty("--alo-bg-a", theme.backgroundA);
    root.style.setProperty("--alo-bg-b", theme.backgroundB);
    root.style.setProperty("--alo-bg-c", theme.backgroundC);
  }

  function saveColorTheme(themeId) {
    localStorage.setItem(themeStorageKey, themeId);
    applyColorTheme(themeId);
    renderThemeButtons(themeId);
  }

  function saveCustomColorTheme() {
    const primaryInput = document.getElementById("customPrimaryColor");
    const secondaryInput = document.getElementById("customSecondaryColor");

    if (!primaryInput || !secondaryInput) return;

    localStorage.setItem(
      customThemeStorageKey,
      JSON.stringify({
        primary: primaryInput.value,
        secondary: secondaryInput.value
      })
    );

    saveColorTheme("custom");
  }

  function getSavedColorThemeId() {
    return localStorage.getItem(themeStorageKey) || "default";
  }

  function closeThemePicker() {
    const modal = document.getElementById("themePickerModal");
    if (modal) modal.remove();
    document.body.classList.remove("modal-open");
  }

  function renderThemeButtons(activeThemeId) {
    const grid = document.getElementById("themePickerGrid");
    if (!grid) return;

    const themes = colorThemes.concat([getColorTheme("custom")]);

    grid.innerHTML = themes.map(function(theme) {
      const activeClass = theme.id === activeThemeId ? " active" : "";

      return (
        '<button class="alo-theme-swatch' + activeClass + '" onclick="saveColorTheme(\'' + theme.id + '\')" ' +
        'style="background: linear-gradient(135deg, ' + theme.primary + ', ' + theme.secondary + ');">' +
          theme.name +
        '</button>'
      );
    }).join("");
  }

  function openThemePicker() {
    closeThemePicker();

    const activeThemeId = getSavedColorThemeId();
    const activeTheme = getColorTheme(activeThemeId);
    const modal = document.createElement("div");

    modal.id = "themePickerModal";
    modal.className = "modal-overlay";
    modal.style.display = "flex";
    modal.style.zIndex = "100000";
    modal.onclick = function(event) {
      if (event.target === modal) closeThemePicker();
    };

    modal.innerHTML =
      '<div class="modal" style="max-width: 680px;">' +
        '<div class="modal-content-scroll" style="padding: 44px;">' +
          '<h3 style="margin-bottom: 18px;">Website-Farbe</h3>' +
          '<p style="font-size: 17px; margin-bottom: 28px;">Wähle ein Farbschema. Die Auswahl wird lokal in diesem Browser gespeichert.</p>' +
          '<div id="themePickerGrid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 16px;"></div>' +
          '<div style="margin-top: 28px; padding: 22px; border-radius: 18px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.14);">' +
            '<h4 style="color: white; margin: 0 0 16px 0; font-size: 18px;">Eigene Farben</h4>' +
            '<div style="display:grid; grid-template-columns: 1fr 1fr; gap: 16px;">' +
              '<label style="color: white; font-weight: 800;">Hauptfarbe<input id="customPrimaryColor" type="color" value="' + activeTheme.primary + '" style="height: 54px; padding: 4px; margin-top: 8px;"></label>' +
              '<label style="color: white; font-weight: 800;">Zweitfarbe<input id="customSecondaryColor" type="color" value="' + activeTheme.secondary + '" style="height: 54px; padding: 4px; margin-top: 8px;"></label>' +
            '</div>' +
            '<button class="modal-btn" onclick="saveCustomColorTheme()" style="margin-top: 20px; width: 100%;">Eigene Farben speichern</button>' +
          '</div>' +
          '<button class="modal-btn" onclick="closeThemePicker()" style="margin-top: 30px;">Schließen</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(modal);
    document.body.classList.add("modal-open");
    renderThemeButtons(activeThemeId);
  }

  applyColorTheme(getSavedColorThemeId());

  async function getInfos() {

    const q = query(collection(db, "infos"));

    const snapshot = await getDocs(q);

    const infos = [];

    snapshot.forEach((docItem) => {
      infos.push({
        firebaseId: docItem.id,
        ...docItem.data()
      });
    });

    return infos.reverse();
  }

  function getInfoId(info) {
    if (info && info.id) return String(info.id);
    return "legacy:" + [info && info.date, info && info.title, info && info.text].join("|");
  }

  function getReadInfoIds() {
    try {
      const ids = JSON.parse(localStorage.getItem(infoReadStorageKey) || "[]");
      return Array.isArray(ids) ? ids : [];
    } catch (error) {
      return [];
    }
  }

  function setReadInfoIds(ids) {
    localStorage.setItem(infoReadStorageKey, JSON.stringify(ids));
  }

  function escapeHtml(value) {

    return String(value || "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
  }

  function formatInfoText(text) {

    const escaped =
        escapeHtml(text);

    return escaped.replace(

        /((https?:\/\/)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}[^\s<]*)/g,

        function(url) {

            return '<a href="' + url + '" target="_blank" rel="noopener noreferrer" style="color:#38bdf8; font-weight:700; text-decoration:underline;">' +

                url +

            '</a>';
        }
    );
  }

  function closeInfoBell() {
    const overlay = document.getElementById("infoBellOverlay");
    if (overlay) overlay.remove();
    document.body.classList.remove("modal-open");
  }

  function markInfoRead(encodedId, button) {

    const id =
        decodeURIComponent(encodedId);

    const readIds =
        getReadInfoIds();

    if (!readIds.includes(id)) {

        readIds.push(id);

        setReadInfoIds(readIds);
    }

    updateInfoBadge();

    if (button) {

      const card =
          button.closest(".info-card");

      if (card) {

          card.dataset.read = "true";
      }

        button.outerHTML =
          '<span style="background: rgba(34,197,94,0.16); color: #86efac; border: 1px solid rgba(34,197,94,0.35); padding: 8px 13px; border-radius: 999px; font-size: 13px; font-weight: 800;">Gelesen</span>';
    }
  }

  function deleteSingleInfo(infoId, button) {

    const hiddenInfos =
        JSON.parse(
            localStorage.getItem(
                "aloAcademyHiddenInfos"
            ) || "[]"
        );

    if (!hiddenInfos.includes(infoId)) {

        hiddenInfos.push(infoId);

        localStorage.setItem(
            "aloAcademyHiddenInfos",
            JSON.stringify(hiddenInfos)
        );
    }

    updateInfoBadge();

    const card =
        button.closest(
            ".info-card"
        );

    if (card) {

        card.remove();
    }

    const unreadCards =
        document.querySelectorAll(
            '.info-card[data-read="false"]'
        );

    const unreadCount =
        unreadCards.length;

    const unreadLabel =
        document.querySelector(
            "#infoBellOverlay .unread-count"
        );

    if (unreadLabel) {

        unreadLabel.textContent =
            unreadCount +
            " ungelesen";
    }
  }

  async function markAllInfosRead() {

    const infos =
        await getInfos();

    const allIds =
        infos.map(getInfoId);

    setReadInfoIds(
        Array.from(
            new Set(
                [].concat(
                    getReadInfoIds(),
                    allIds
                )
            )
        )
    );

    updateInfoBadge();

    document
        .querySelectorAll(".info-card")
        .forEach(function(card) {

            card.dataset.read = "true";

            const buttonContainer =
                card.querySelector(
                    'button[onclick*="markInfoRead"]'
                );

            if (buttonContainer) {

                buttonContainer.outerHTML =
                    '<span style="background: rgba(34,197,94,0.16); color: #86efac; border: 1px solid rgba(34,197,94,0.35); padding: 8px 13px; border-radius: 999px; font-size: 13px; font-weight: 800;">Gelesen</span>';
            }
        });

    const unreadLabel =
        document.querySelector(
            "#infoBellOverlay .unread-count"
        );

    if (unreadLabel) {

        unreadLabel.textContent =
            "0 ungelesen";
    }
  }

  async function openInfoBell() {
    closeInfoBell();

    const infos = await getInfos();
    const readIds = getReadInfoIds();
    const hiddenInfos =
      JSON.parse(
          localStorage.getItem(
              "aloAcademyHiddenInfos"
          ) || "[]"
      );
    const visibleInfos = infos.filter(function(info) {

    return !hiddenInfos.includes(
        getInfoId(info)
    );

});

    const unreadCount = visibleInfos.filter(function (info) {

        return !readIds.includes(
            getInfoId(info)
        );

    }).length;
    const overlay = document.createElement("div");
    overlay.id = "infoBellOverlay";
    overlay.className = "modal-overlay";
    overlay.style.display = "flex";
    overlay.style.zIndex = "100000";
    overlay.onclick = function (event) {
      if (event.target === overlay) closeInfoBell();
    };

    const infoItems = visibleInfos.length

      ? visibleInfos

          .map(function (info) {

          const id = getInfoId(info);

          const isRead =
              readIds.includes(id);

          const readControl = isRead

            ? '<div style="display:flex; gap:10px; align-items:center;">' +

                '<span style="background: rgba(34,197,94,0.16); color: #86efac; border: 1px solid rgba(34,197,94,0.35); padding: 8px 13px; border-radius: 999px; font-size: 13px; font-weight: 800;">Gelesen</span>' +

                '<button onclick="deleteSingleInfo(\'' + id + '\', this)" style="background:#ef4444; color:white; border:none; padding:8px 13px; border-radius:999px; font-size:13px; font-weight:800; cursor:pointer;">Löschen</button>' +

              '</div>'

            : '<div style="display:flex; gap:10px; align-items:center;">' +

                '<button onclick="markInfoRead(\'' + encodeURIComponent(id) + '\', this)" style="background:#22c55e; color:white; border:none; padding:8px 13px; border-radius:999px; font-size:13px; font-weight:800; cursor:pointer;">Gelesen</button>' +

                '<button onclick="deleteSingleInfo(\'' + id + '\', this)" style="background:#ef4444; color:white; border:none; padding:8px 13px; border-radius:999px; font-size:13px; font-weight:800; cursor:pointer;">Löschen</button>' +

              '</div>';

          return '<div class="info-card" data-read="' + isRead + '"  style="text-align:left; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.14); border-radius:18px; padding:22px; margin-bottom:16px;">' +

            '<div style="display:flex; justify-content:space-between; align-items:flex-start; gap:18px; margin-bottom:10px;">' +

              '<h4 style="color:#38bdf8; font-size:22px; margin:0;">' +
                escapeHtml(info.title) +
              '</h4>' +

              readControl +

            '</div>' +

            '<p style="color:rgba(255,255,255,0.86); font-size:17px; line-height:1.7; margin:0; white-space:pre-wrap;">' +
              formatInfoText(info.text) +
            '</p>' +

            (info.date
              ? '<p style="color:rgba(255,255,255,0.45); font-size:12px; margin:14px 0 0 0;">' +
                  escapeHtml(info.date) +
                '</p>'
              : '') +

          '</div>';

        }).join("")

      : '<p style="color: rgba(255,255,255,0.75); font-size: 20px;">Aktuell gibt es keine Infos.</p>';

    const allReadButton = infos.length && unreadCount > 0
      ? '<button class="modal-btn" onclick="markAllInfosRead()" style="margin-top: 22px; margin-right: 12px; background: #22c55e; color: white;">Alle gelesen</button>'
      : "";

    overlay.innerHTML =
      '<div class="modal" style="max-width: 760px;">' +
        '<div class="modal-content-scroll" style="padding: 50px;">' +
          '<div style="display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-bottom: 18px;">' +
            '<h3 style="margin-bottom: 0;">Infos</h3>' +
            '<span class="unread-count" style="color: rgba(255,255,255,0.65); font-size: 14px; font-weight: 800;">' + unreadCount + ' ungelesen</span>' +
          '</div>' +
          '<div style="max-height: 52vh; overflow-y: auto; padding-right: 6px;">' + infoItems + '</div>' +
          '<div style="text-align: center;">' +
            allReadButton +
            '<button class="modal-btn" onclick="closeInfoBell()" style="margin-top: 22px;">Schließen</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    document.body.appendChild(overlay);
    document.body.classList.add("modal-open");
  }

  function closeSettingsPinModal() {
    const modal = document.getElementById("settingsPinModal");
    if (modal) modal.remove();
    document.body.classList.remove("modal-open");
  }

  async function submitSettingsPin() {

    const input =
        document.getElementById(
            "settingsHeaderPinInput"
        );

    const pin =
        input.value.trim();

    const settingsRef =
        doc(
            db,
            "settings",
            "security"
        );

    const snapshot =
        await getDoc(settingsRef);

    const settingsPin =
        snapshot.data().settingsPin;

    if (pin === settingsPin) {

        sessionStorage.setItem(
            "aloAcademySettingsUnlocked",
            "true"
        );

        const modal =
            document.getElementById(
                "settingsPinModal"
            );

        const basePath =
            modal
                ? modal.dataset.basePath || "."
                : ".";

        window.location.href =
            basePath + "/settings.html";

    } else {

        alert("Falscher PIN");

    }
  }

  function openSettingsPin(basePath) {
    closeSettingsPinModal();

    const modal = document.createElement("div");
    modal.id = "settingsPinModal";
    modal.className = "modal-overlay";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "settingsPinTitle");
    modal.dataset.basePath = basePath || ".";
    modal.style.display = "flex";
    modal.style.zIndex = "100000";

    modal.innerHTML =
      '<div class="modal" style="max-width: 500px; width: 90%; max-height: 85vh; text-align: center;">' +
        '<div class="modal-content-scroll" style="padding: 50px">' +
          '<h3 id="settingsPinTitle" style="font-size: 28px; color: #a855f7; margin-bottom: 25px;">⚙️ Einstellungen</h3>' +
          '<p style="color: #ffffff; line-height: 1.8; font-size: 18px; margin-bottom: 25px;">Bitte gib die PIN ein, um die Einstellungen zu öffnen:</p>' +
          '<input type="password" id="settingsHeaderPinInput" placeholder="PIN eingeben" style="width: 100%; padding: 15px; border-radius: 12px; border: 2px solid #a855f7; background: rgba(168, 85, 247, 0.1); color: #ffffff; font-size: 18px; text-align: center; margin-bottom: 25px; outline: none;" />' +
          '<div id="settingsPinErrorMessage" style="color: #ef4444; font-size: 16px; margin-bottom: 20px; display: none;">Falsche PIN!</div>' +
          '<div style="display: flex; gap: 20px; justify-content: center;">' +
            '<button class="modal-btn" onclick="submitSettingsPin()" style="background: #a855f7; color: white">Bestätigen</button>' +
            '<button class="modal-btn" onclick="closeSettingsPinModal()" style="background: #ef4444; color: white">Abbrechen</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    modal.onclick = function (event) {
      if (event.target === modal) closeSettingsPinModal();
    };

    document.body.appendChild(modal);
    document.body.classList.add("modal-open");

    const input = document.getElementById("settingsHeaderPinInput");
    if (input) {
      input.focus();
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") submitSettingsPin();
        if (event.key === "Escape") closeSettingsPinModal();
      });
    }
  }

  async function updateInfoBadge() {

    const readIds =
        getReadInfoIds();

    const infos =
        await getInfos();

    const hiddenInfos =
        JSON.parse(
            localStorage.getItem(
                "aloAcademyHiddenInfos"
            ) || "[]"
        );

    const count = infos.filter(function (info) {

        const id =
            getInfoId(info);

        return (
            !readIds.includes(id) &&
            !hiddenInfos.includes(id)
        );

    }).length;

    document
        .querySelectorAll(
            "[data-info-count]"
        )
        .forEach(function (badge) {

            if (count > 0) {

                badge.textContent =
                    String(count);

                badge.style.display =
                    "inline-block";

            } else {

                badge.textContent = "";

                badge.style.display =
                    "none";
            }
        });
  }

  async function loadComponent(mount) {
    const name = mount.dataset.component;
    const variant = mount.dataset.variant || "default";
    const base = mount.dataset.componentBase || ".";
    const url = base + "/components/" + name + ".html";

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(response.status + " " + response.statusText);

      const html = await response.text();
      const doc = new DOMParser().parseFromString(html, "text/html");
      const template = doc.querySelector(
        'template[data-component-template="' + name + '"][data-variant="' + variant + '"]',
      );

      if (!template) throw new Error("Template " + name + "/" + variant + " nicht gefunden");
      mount.outerHTML = template.innerHTML;
      updateInfoBadge();
    } catch (error) {
      console.error("Komponente konnte nicht geladen werden: " + name + "/" + variant, error);
    }
  }

  function loadComponents() {
    document.querySelectorAll("[data-component]").forEach(loadComponent);
    updateInfoBadge();
  }

  window.openInfoBell = openInfoBell;
  window.closeInfoBell = closeInfoBell;
  window.markInfoRead = markInfoRead;
  window.markAllInfosRead = markAllInfosRead;
  window.openSettingsPin = openSettingsPin;
  window.submitSettingsPin = submitSettingsPin;
  window.closeSettingsPinModal = closeSettingsPinModal;
  window.updateInfoBadge = updateInfoBadge;
  window.deleteSingleInfo = deleteSingleInfo;
  window.openThemePicker = openThemePicker;
  window.closeThemePicker = closeThemePicker;
  window.saveColorTheme = saveColorTheme;
  window.saveCustomColorTheme = saveCustomColorTheme;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadComponents);
  } else {
    loadComponents();
  }
})();
