import {
  db,
  doc,
  getDoc
} from "./firebase.js";

let helpButtonsEnabled = true;

function getCurrentAcademyKey() {
  const page =
    document.body.dataset.page;

  if (page === "Ecommerce") {
    return "ecommerceEnabled";
  }

  if (page === "Büromanagement") {
    return "bueromanagementEnabled";
  }

  return null;
}

function applyHelpButtonVisibility() {
  document
    .querySelectorAll(".helper-btn")
    .forEach(function (button) {
      if (helpButtonsEnabled) {
        button.style.removeProperty("display");
      } else {
        button.style.setProperty(
          "display",
          "none",
          "important"
        );
      }
    });
}

async function loadHelpButtonVisibility() {
  const academyKey =
    getCurrentAcademyKey();

  if (!academyKey) {
    return;
  }

  try {
    const snapshot =
      await getDoc(
        doc(
          db,
          "settings",
          "helpButtons"
        )
      );

    const data =
      snapshot.exists()
        ? snapshot.data()
        : {};

    helpButtonsEnabled =
      data[academyKey] !== false;

    applyHelpButtonVisibility();
  } catch (error) {
    console.error(
      "Hilfe-Button-Einstellungen konnten nicht geladen werden:",
      error
    );
  }
}

function observeDynamicHelpButtons() {
  const observer =
    new MutationObserver(function () {
      applyHelpButtonVisibility();
    });

  observer.observe(
    document.body,
    {
      childList: true,
      subtree: true
    }
  );
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      loadHelpButtonVisibility();
      observeDynamicHelpButtons();
    }
  );
} else {
  loadHelpButtonVisibility();
  observeDynamicHelpButtons();
}

