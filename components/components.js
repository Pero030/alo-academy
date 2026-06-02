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
  const themeModeStorageKey = "aloAcademyThemeMode";
  const borderAnimationStorageKey = "aloAcademyBorderAnimation";

  function getThemeMode() {
    try {
      const mode = localStorage.getItem(themeModeStorageKey);
      return mode === "dark" || mode === "white" ? mode : "standard";
    } catch (error) {
      return "standard";
    }
  }

  function isBorderAnimationEnabled() {
    try {
      return localStorage.getItem(borderAnimationStorageKey) !== "off";
    } catch (error) {
      return true;
    }
  }

  function ensureThemeModeStyle() {
    if (document.getElementById("aloThemeModeStyle")) return;

    const style = document.createElement("style");
    style.id = "aloThemeModeStyle";
    style.textContent = `
      body[data-alo-theme-mode="dark"] {
        background: #000000 !important;
        background-image: none !important;
        color: #ffffff !important;
      }

      body[data-alo-theme-mode="white"] {
        background: #ffffff !important;
        background-image: none !important;
        color: #111827 !important;
      }

      body[data-alo-theme-mode="white"] :where(
        .topbar,
        .global-footer,
        .hero-card,
        .section,
        .sidebar,
        .modal,
        .glass-card,
        .mission,
        .info-box,
        .info-card,
        .tutorial-box,
        .intro-hero,
        .pro-tip,
        .start-screen-card
      ):not(#shopLivePreview *) {
        box-shadow: 0 8px 22px rgba(17, 24, 39, 0.10) !important;
        filter: none !important;
      }

      body[data-alo-theme-mode="white"] :where(.main-logo, .footer-logo) {
        filter: none !important;
      }

      body[data-alo-border-animation="off"] :where(
        .hero-card,
        .section,
        .sidebar,
        .modal,
        .intro-hero,
        .start-screen-card,
        .pro-tip,
        .glass-card
      ):not(#shopLivePreview *)::before {
        animation: none !important;
        transform: translate(-50%, -50%) rotate(0deg) !important;
      }

      body[data-alo-theme-mode="dark"] :where(
        main,
        .landing-main,
        .topbar,
        .global-footer,
        .section,
        .sidebar,
        .content,
        .card,
        .glass-card,
        .mission,
        .info-box,
        .info-card,
        .tutorial-box,
        .hero-card,
        .start-screen-card,
        .intro-hero,
        .pro-tip,
        .modal,
        .modal-content-scroll,
        #startScreen
      ):not(#shopLivePreview *):not(.shop-builder-sidebar):not(.shop-builder-scroll-content) {
        background: #000000 !important;
        background-image: none !important;
        color: #ffffff !important;
        border-color: rgba(255, 255, 255, 0.35) !important;
      }

      body[data-alo-theme-mode="white"] :where(
        main,
        .landing-main,
        .topbar,
        .global-footer,
        .section,
        .sidebar,
        .content,
        .card,
        .glass-card,
        .mission,
        .info-box,
        .info-card,
        .tutorial-box,
        .hero-card,
        .start-screen-card,
        .intro-hero,
        .pro-tip,
        .modal,
        .modal-content-scroll,
        #startScreen
      ):not(#shopLivePreview *):not(.shop-builder-sidebar):not(.shop-builder-scroll-content) {
        background: #ffffff !important;
        background-image: none !important;
        color: #111827 !important;
        border-color: rgba(17, 24, 39, 0.22) !important;
      }

      body[data-alo-theme-mode="dark"] :where(
        .section,
        .sidebar,
        .modal,
        .intro-hero,
        .hero-card,
        .start-screen-card,
        .pro-tip
      )::after {
        background: #000000 !important;
      }

      body[data-alo-theme-mode="white"] :where(
        .section,
        .sidebar,
        .modal,
        .intro-hero,
        .hero-card,
        .start-screen-card,
        .pro-tip
      )::after {
        background: #ffffff !important;
      }

      body[data-alo-theme-mode="dark"] :where(
        p,
        span,
        label,
        li,
        strong,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6
      ):not(#shopLivePreview *):not([data-info-count]) {
        color: #ffffff !important;
        -webkit-text-fill-color: #ffffff !important;
      }

      body[data-alo-theme-mode="white"] :where(
        p,
        span,
        label,
        li,
        strong,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6
      ):not(#shopLivePreview *):not([data-info-count]) {
        color: #111827 !important;
        -webkit-text-fill-color: #111827 !important;
      }

      body[data-alo-theme-mode="dark"] :where(input, textarea, select):not(#shopLivePreview *) {
        background: #000000 !important;
        color: #ffffff !important;
        -webkit-text-fill-color: #ffffff !important;
        border-color: rgba(255, 255, 255, 0.35) !important;
      }

      body[data-alo-theme-mode="white"] :where(input, textarea, select):not(#shopLivePreview *) {
        background: #ffffff !important;
        color: #111827 !important;
        -webkit-text-fill-color: #111827 !important;
        border-color: rgba(17, 24, 39, 0.25) !important;
      }

      body[data-alo-theme-mode] :where(button, .primary-btn, .purple-btn, .modal-btn, .helper-btn, .info-icon-btn) {
        -webkit-text-fill-color: currentColor !important;
      }

      .alo-theme-options {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 14px;
        margin-top: 26px;
      }

      .alo-animation-row {
        margin-top: 24px;
        padding: 18px;
        border: 1px solid rgba(255, 255, 255, 0.14);
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        text-align: left;
      }

      .alo-animation-row strong {
        display: block;
        font-size: 17px;
      }

      .alo-animation-row span {
        display: block;
        font-size: 14px;
        opacity: 0.75;
        margin-top: 2px;
      }

      .alo-animation-toggle {
        min-width: 130px;
        border-radius: 999px;
        padding: 12px 18px;
        font-weight: 900;
        border: 1px solid rgba(34, 197, 94, 0.45);
        background: rgba(34, 197, 94, 0.18);
        color: #ffffff;
      }

      .alo-animation-toggle.off {
        border-color: rgba(239, 68, 68, 0.45);
        background: rgba(239, 68, 68, 0.18);
      }

      .alo-theme-option {
        min-height: 92px;
        border-radius: 14px;
        border: 2px solid rgba(255, 255, 255, 0.18);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
        font-size: 16px;
        font-weight: 900;
      }

      .alo-theme-option span {
        font-size: 13px;
        opacity: 0.75;
      }

      .alo-theme-option.active {
        outline: 4px solid #38bdf8 !important;
        outline-offset: 3px;
      }

      @media (max-width: 700px) {
        .alo-theme-options {
          grid-template-columns: 1fr;
        }

        .alo-animation-row {
          align-items: stretch;
          flex-direction: column;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function applyThemeMode() {
    ensureThemeModeStyle();

    const mode = getThemeMode();

    if (mode === "standard") {
      document.body.removeAttribute("data-alo-theme-mode");
      updateThemeLogos(mode);
      return;
    }

    document.body.dataset.aloThemeMode = mode;
    updateThemeLogos(mode);
  }

  function getWhiteModeLogoSrc(originalSrc) {
    return originalSrc.replace(/Logo\.png(?:\?.*)?$/, "Logo-Zertifikat.png");
  }

  function updateThemeLogos(mode) {
    const useWhiteLogo = mode === "white";

    document.querySelectorAll(".main-logo, .footer-logo").forEach(function (logo) {
      if (!logo.dataset.defaultSrc) {
        logo.dataset.defaultSrc = logo.getAttribute("src") || "";
      }

      const defaultSrc = logo.dataset.defaultSrc;
      logo.setAttribute("src", useWhiteLogo ? getWhiteModeLogoSrc(defaultSrc) : defaultSrc);
    });
  }

  function applyBorderAnimationSetting() {
    ensureThemeModeStyle();

    if (isBorderAnimationEnabled()) {
      document.body.removeAttribute("data-alo-border-animation");
      return;
    }

    document.body.dataset.aloBorderAnimation = "off";
  }

  function safelyApplyThemeMode() {
    try {
      applyThemeMode();
      applyBorderAnimationSetting();
    } catch (error) {
      console.warn("Theme mode could not be applied.", error);
      document.body.removeAttribute("data-alo-theme-mode");
    }
  }

  function closeThemePicker() {
    const modal = document.getElementById("themePickerModal");
    if (modal) modal.remove();
    document.body.classList.remove("modal-open");
  }

  function saveThemeMode(mode) {
    try {
      if (mode === "dark" || mode === "white") {
        localStorage.setItem(themeModeStorageKey, mode);
      } else {
        localStorage.removeItem(themeModeStorageKey);
      }
    } catch (error) {
      console.warn("Theme mode could not be saved.", error);
    }

    safelyApplyThemeMode();
    closeThemePicker();
  }

  function toggleBorderAnimation() {
    try {
      if (isBorderAnimationEnabled()) {
        localStorage.setItem(borderAnimationStorageKey, "off");
      } else {
        localStorage.removeItem(borderAnimationStorageKey);
      }
    } catch (error) {
      console.warn("Border animation setting could not be saved.", error);
    }

    applyBorderAnimationSetting();
    updateBorderAnimationToggle();
  }

  function updateBorderAnimationToggle() {
    const toggle = document.getElementById("borderAnimationToggle");
    const label = document.getElementById("borderAnimationState");
    const isEnabled = isBorderAnimationEnabled();

    if (toggle) {
      toggle.textContent = isEnabled ? "Animation an" : "Animation aus";
      toggle.classList.toggle("off", !isEnabled);
    }

    if (label) {
      label.textContent = isEnabled
        ? "Der farbige Border-Verlauf bewegt sich."
        : "Der farbige Border-Verlauf steht still.";
    }
  }

  function openThemePicker() {
    closeThemePicker();
    safelyApplyThemeMode();

    const mode = getThemeMode();
    const standardActive = mode === "standard" ? " active" : "";
    const darkActive = mode === "dark" ? " active" : "";
    const whiteActive = mode === "white" ? " active" : "";
    const animationLabel = isBorderAnimationEnabled() ? "Animation an" : "Animation aus";
    const animationState = isBorderAnimationEnabled()
      ? "Der farbige Border-Verlauf bewegt sich."
      : "Der farbige Border-Verlauf steht still.";
    const animationClass = isBorderAnimationEnabled() ? "" : " off";

    const modal = document.createElement("div");
    modal.id = "themePickerModal";
    modal.className = "modal-overlay";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.style.display = "flex";
    modal.style.zIndex = "100000";

    modal.innerHTML =
      '<div class="modal" style="max-width: 680px; width: 92%; text-align: center;">' +
        '<div class="modal-content-scroll" style="padding: 44px;">' +
          '<h3 style="margin-bottom: 16px;">Farben aendern</h3>' +
          '<p style="font-size: 17px; margin-bottom: 0;">Waehle Standard, Darkmode oder Whitemode. Standard ist der aktuelle Look der Seite.</p>' +
          '<div class="alo-theme-options">' +
            '<button class="alo-theme-option' + standardActive + '" data-theme-mode="standard" style="background: linear-gradient(135deg, #1e293b, #334155) !important; color: #ffffff !important;">Standard<span>Aktueller Look</span></button>' +
            '<button class="alo-theme-option' + darkActive + '" data-theme-mode="dark" style="background: #000000 !important; color: #ffffff !important;">Darkmode<span>Schwarz / Weiss</span></button>' +
            '<button class="alo-theme-option' + whiteActive + '" data-theme-mode="white" style="background: #ffffff !important; color: #111827 !important; border-color: rgba(17,24,39,0.35) !important;">Whitemode<span>Weiss / Schwarz</span></button>' +
          '</div>' +
          '<div class="alo-animation-row">' +
            '<div><strong>Border Animation</strong><span id="borderAnimationState">' + animationState + '</span></div>' +
            '<button id="borderAnimationToggle" class="alo-animation-toggle' + animationClass + '" type="button">' + animationLabel + '</button>' +
          '</div>' +
          '<button class="modal-btn" onclick="closeThemePicker()" style="margin-top: 30px;">Schliessen</button>' +
        '</div>' +
      '</div>';

    modal.onclick = function (event) {
      if (event.target === modal) closeThemePicker();
    };

    document.body.appendChild(modal);
    document.body.classList.add("modal-open");

    modal.querySelectorAll("[data-theme-mode]").forEach(function (button) {
      button.addEventListener("click", function () {
        saveThemeMode(button.dataset.themeMode);
      });
    });

    const animationToggle = document.getElementById("borderAnimationToggle");
    if (animationToggle) {
      animationToggle.addEventListener("click", toggleBorderAnimation);
    }
  }

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
      safelyApplyThemeMode();
      updateInfoBadge();
    } catch (error) {
      console.error("Komponente konnte nicht geladen werden: " + name + "/" + variant, error);
    }
  }

  function loadComponents() {
    safelyApplyThemeMode();
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
  window.saveThemeMode = saveThemeMode;
  window.toggleBorderAnimation = toggleBorderAnimation;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadComponents);
  } else {
    loadComponents();
  }
})();
