import {
    db,
    collection,
    getDocs,
    query
} from "../assets/js/firebase.js";

(function () {

  const infoStorageKey = "aloAcademyInfos";
  const infoReadStorageKey = "aloAcademyReadInfos";

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

  function closeInfoBell() {
    const overlay = document.getElementById("infoBellOverlay");
    if (overlay) overlay.remove();
    document.body.classList.remove("modal-open");
  }

  function markInfoRead(encodedId) {
    const id = decodeURIComponent(encodedId);
    const readIds = getReadInfoIds();

    if (!readIds.includes(id)) {
      readIds.push(id);
      setReadInfoIds(readIds);
    }

    updateInfoBadge();
  }

  async function markAllInfosRead() {
    const infos = await getInfos();
    const allIds = infos.map(getInfoId);
    setReadInfoIds(Array.from(new Set([].concat(getReadInfoIds(), allIds))));
    updateInfoBadge();
  }

  async function openInfoBell() {
    closeInfoBell();

    const infos = await getInfos();
    const readIds = getReadInfoIds();
    const unreadCount = infos.filter(function (info) {
      return !readIds.includes(getInfoId(info));
    }).length;
    const overlay = document.createElement("div");
    overlay.id = "infoBellOverlay";
    overlay.className = "modal-overlay";
    overlay.style.display = "flex";
    overlay.style.zIndex = "100000";
    overlay.onclick = function (event) {
      if (event.target === overlay) closeInfoBell();
    };

    const infoItems = infos.length
      ? infos
          .map(function (info) {
            const id = getInfoId(info);
            const isRead = readIds.includes(id);
            const readControl = isRead
              ? '<span style="background: rgba(34,197,94,0.16); color: #86efac; border: 1px solid rgba(34,197,94,0.35); padding: 8px 13px; border-radius: 999px; font-size: 13px; font-weight: 800;">Gelesen</span>'
              : '<button onclick="markInfoRead(\'' + encodeURIComponent(id) + '\')" style="background: #22c55e; color: white; padding: 8px 13px; border-radius: 999px; font-size: 13px; font-weight: 800; border: none; cursor: pointer;">Gelesen</button>';

            return '<div style="text-align: left; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.14); border-radius: 18px; padding: 22px; margin-bottom: 16px;">' +
              '<div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 18px; margin-bottom: 10px;">' +
                '<h4 style="color: #38bdf8; font-size: 22px; margin: 0;">' + escapeHtml(info.title) + '</h4>' +
                readControl +
              '</div>' +
              '<p style="color: rgba(255,255,255,0.86); font-size: 17px; line-height: 1.7; margin: 0; white-space: pre-wrap;">' + escapeHtml(info.text) + '</p>' +
              (info.date ? '<p style="color: rgba(255,255,255,0.45); font-size: 12px; margin: 14px 0 0 0;">' + escapeHtml(info.date) + '</p>' : '') +
            '</div>';
          })
          .join("")
      : '<p style="color: rgba(255,255,255,0.75); font-size: 20px;">Aktuell gibt es keine Infos.</p>';

    const allReadButton = infos.length && unreadCount > 0
      ? '<button class="modal-btn" onclick="markAllInfosRead()" style="margin-top: 22px; margin-right: 12px; background: #22c55e; color: white;">Alle gelesen</button>'
      : "";

    overlay.innerHTML =
      '<div class="modal" style="max-width: 760px;">' +
        '<div class="modal-content-scroll" style="padding: 50px;">' +
          '<div style="display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-bottom: 18px;">' +
            '<h3 style="margin-bottom: 0;">Infos</h3>' +
            '<span style="color: rgba(255,255,255,0.65); font-size: 14px; font-weight: 800;">' + unreadCount + ' ungelesen</span>' +
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

  function submitSettingsPin() {
    const modal = document.getElementById("settingsPinModal");
    if (!modal) return;

    const input = document.getElementById("settingsHeaderPinInput");
    const errorMessage = document.getElementById("settingsPinErrorMessage");
    const basePath = modal.dataset.basePath || ".";

    if (input && input.value === settingsPin) {
      closeSettingsPinModal();
      sessionStorage.setItem("aloAcademySettingsUnlocked", "true");
      window.location.href = basePath + "/settings.html";
      return;
    }

    if (errorMessage) errorMessage.style.display = "block";
    if (input) {
      input.value = "";
      input.focus();
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
    const readIds = getReadInfoIds();
    const infos = await getInfos();
    const count = infos.filter(function (info) {
      return !readIds.includes(getInfoId(info));
    }).length;

    document.querySelectorAll("[data-info-count]").forEach(function (badge) {
      if (count > 0) {
        badge.textContent = String(count);
        badge.style.display = "inline-block";
      } else {
        badge.textContent = "";
        badge.style.display = "none";
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
  window.aloAcademyInfoStorageKey = infoStorageKey;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadComponents);
  } else {
    loadComponents();
  }
})();
