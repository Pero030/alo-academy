// --- Globale Spielvariablen ---
let level = 1;
let progress = 0;
let unlockedTasks = { task2: false, task3: false, advanced: false };
let currentTutorial = 0;
let selectedImageUrl = '';
let seoWords = [];

// --- Initialisierung ---
document.addEventListener('DOMContentLoaded', () => {
  const hasSave = localStorage.getItem('ecommerceAcademySave');
  const hasName = localStorage.getItem('ecommercePlayerName');
  const skipStart = localStorage.getItem('ecommerceSkipStartScreen');
  if (skipStart === 'true') {
    localStorage.removeItem('ecommerceSkipStartScreen');
    // Direkt zum Spielinhalt ohne Tutorial-Abfrage
    startFreshGameAfterBeenden();
    return;
  }
  
  if (hasSave && hasName) {
    // Spiel läuft bereits -> Daten laden und dort weitermachen
    loadGame();
    // Nach dem Laden explizit zur Einleitung springen, wenn das der Wunsch bei F5 ist
    goToTask('introSection');
  } else {
    // Kein Spiel läuft -> Direkt die Einleitung zeigen (Tutorial-Auswahl überspringen)
    hideElement('startScreen');
    showElement('gameContent');
    const layout = document.getElementById('gameContent');
    if (layout) layout.style.display = 'grid';
    
    const sidebarStartBtn = document.getElementById('sidebarStartBtn');
    const restartBtn = document.querySelector('.restart-btn');
    if (sidebarStartBtn) sidebarStartBtn.style.display = 'flex';
    if (restartBtn) restartBtn.style.display = 'none';
    
    goToTask('introSection');
  }
});

// --- Speicher-System ---
function saveGame() {
  const saveData = { 
    level, 
    progress, 
    unlockedTasks,
    currentSection: document.querySelector('.section[style*="display: block"]')?.id || 'introSection'
  };
  localStorage.setItem('ecommerceAcademySave', JSON.stringify(saveData));
  if (typeof updateProgressUI === 'function') updateProgressUI();
}

function loadGame() {
  const saveString = localStorage.getItem('ecommerceAcademySave');
  if (saveString) {
    const save = JSON.parse(saveString);
    level = save.level || 1;
    progress = save.progress || 0;
    unlockedTasks = save.unlockedTasks || { task2: false, task3: false, advanced: false };
    const lastSection = save.currentSection || 'introSection';
    
    if (typeof updateProgressUI === 'function') updateProgressUI();
    applyUnlockStates();
    
    // Spielinhalt anzeigen und zur letzten Sektion springen
    hideElement('startScreen');
    showElement('gameContent');
    const layout = document.getElementById('gameContent');
    if (layout) layout.style.display = 'grid';
    
    // Sidebar Buttons anpassen
    const sidebarStartBtn = document.getElementById('sidebarStartBtn');
    const restartBtn = document.querySelector('.restart-btn');
    if (sidebarStartBtn) sidebarStartBtn.style.display = 'none';
    if (restartBtn) restartBtn.style.display = 'flex';
    
    goToTask(lastSection);
  }
}

function applyUnlockStates() {
  const m2 = document.getElementById('menu2');
  const m3 = document.getElementById('menu3');
  const m4 = document.getElementById('menu4');
  const m7 = document.getElementById('menu7');

  if (m2) {
    if (unlockedTasks.task2) {
      m2.style.opacity = '1';
      m2.style.pointerEvents = 'auto';
      m2.tabIndex = 0;
      m2.classList.remove('locked');
    } else {
      m2.classList.add('locked');
      m2.style.opacity = '0.5';
      m2.style.pointerEvents = 'none';
    }
  }
  if (m3) {
    if (unlockedTasks.task3) {
      m3.style.opacity = '1';
      m3.style.pointerEvents = 'auto';
      m3.tabIndex = 0;
      m3.classList.remove('locked');
    } else {
      m3.classList.add('locked');
      m3.style.opacity = '0.5';
      m3.style.pointerEvents = 'none';
    }
  }
  if (m4) {
    if (unlockedTasks.advanced) {
      m4.style.opacity = '1';
      m4.style.pointerEvents = 'auto';
      m4.tabIndex = 0;
      m4.classList.remove('locked');
    } else {
      m4.classList.add('locked');
      m4.style.opacity = '0.5';
      m4.style.pointerEvents = 'none';
    }
  }
  if (m7) {
    if (unlockedTasks.advanced) {
      m7.style.opacity = '1';
      m7.style.pointerEvents = 'auto';
      m7.tabIndex = 0;
      m7.classList.remove('locked');
    } else {
      m7.classList.add('locked');
      m7.style.opacity = '0.5';
      m7.style.pointerEvents = 'none';
    }
  }
}

function addProgress(amount) {
  progress += amount;
  if (progress > 100) progress = 100;
  saveGame();
}

// --- Tutorial-Logik ---
function renderTutorialStep() {
  const step = tutorialSteps[currentTutorial];
  const hudStep = document.getElementById('tutorialStep');
  const hudTitle = document.getElementById('tutorialTitle');
  const hudText = document.getElementById('tutorialText');
  const hudAction = document.getElementById('tutorialAction');

  if (hudStep) hudStep.innerText = currentTutorial + 1;
  if (hudTitle) hudTitle.innerText = step.title;
  if (hudText) {
    hudText.innerHTML = step.text;
    if (step.isNameInput) {
      hudText.innerHTML += '<br><input type="text" id="playerNameInput" placeholder="Dein Shop Name..." style="width:100%; margin-top:20px; padding:15px; border-radius:12px; background:rgba(255,255,255,0.05); color:white; border:2px solid #38bdf8; font-size:18px; outline:none;">';
      // Fokus auf das Input-Feld setzen
      setTimeout(() => document.getElementById('playerNameInput')?.focus(), 100);
    }
  }
  if (hudAction) hudAction.innerText = step.action;
}

function nextTutorialStep() {
  const step = tutorialSteps[currentTutorial];
  if (step.isNameInput) {
    const name = document.getElementById('playerNameInput')?.value?.trim();
    if (!name) {
      if (typeof showModal === 'function') showModal('Namens-Check', 'Bitte gib einen Namen ein.');
      return;
    }
    localStorage.setItem('ecommercePlayerName', name);
  }

  currentTutorial++;
  if (currentTutorial < tutorialSteps.length) {
    renderTutorialStep();
  } else {
    completeIntro();
  }
}

function startTutorialSinglePage() {
  hideElement('startScreen');
  showElement('gameContent');
  
  // Sichtbarkeit der Buttons steuern
  const sidebarStartBtn = document.getElementById('sidebarStartBtn');
  const restartBtn = document.querySelector('.restart-btn');
  if (sidebarStartBtn) sidebarStartBtn.style.display = 'none';
  if (restartBtn) restartBtn.style.display = 'flex';
  
  goToTask('interactiveTutorial');
  currentTutorial = 0;
  renderTutorialStep();
}

function skipTutorialSinglePage() {
  // Zeige ein kleines Modal oder direkt ein Input-Feld für den Namen
  showModal('Shop-Name wählen', 'Bitte gib einen Namen für deinen Shop ein, bevor du startest:', 'Name bestätigen');
  
  // Wir bauen das Modal kurz um, damit es ein Input-Feld hat
  const mText = document.getElementById('modalText');
  const mBtn = document.getElementById('modalActionBtn');
  
  if (mText) {
    mText.innerHTML = 'Bitte gib einen Namen für deinen Shop ein, bevor du startest:<br><input type="text" id="skipNameInput" placeholder="Dein Shop Name..." style="width:100%; margin-top:20px; padding:15px; border-radius:12px; background:rgba(0,0,0,0.05); color:#0f172a; border:2px solid #38bdf8; font-size:18px; outline:none;">';
    setTimeout(() => document.getElementById('skipNameInput')?.focus(), 100);
  }
  
  if (mBtn) {
    mBtn.onclick = function() {
      const name = document.getElementById('skipNameInput')?.value?.trim();
      if (!name) {
        alert('Bitte gib einen Namen ein!');
        return;
      }
      localStorage.setItem('ecommercePlayerName', name);
      closeModal();

      // Mission 1 freischalten
      unlockedTasks.task2 = true;
      applyUnlockStates();
      saveGame();
      
      // Jetzt erst das Spiel starten
      hideElement('startScreen');
      showElement('gameContent');
      const layout = document.getElementById('gameContent');
      if (layout) layout.style.display = 'grid';
      
      const sidebarStartBtn = document.getElementById('sidebarStartBtn');
      const restartBtn = document.querySelector('.restart-btn');
      if (sidebarStartBtn) sidebarStartBtn.style.display = 'none';
      if (restartBtn) restartBtn.style.display = 'flex';
      
      // Direkt zu Mission 1 (wie gewünscht)
      goToTask('task1Section');
    };
  }
}

function startFreshGameAfterBeenden() {
  // Direkt zum Spielinhalt, Startbildschirm komplett weg
  hideElement('startScreen');
  showElement('gameContent');
  const layout = document.getElementById('gameContent');
  if (layout) layout.style.display = 'grid';

  const sidebarStartBtn = document.getElementById('sidebarStartBtn');
  const restartBtn = document.querySelector('.restart-btn');
  
  // Da kein Spiel offiziell läuft (Name wurde gelöscht), zeigen wir den Start-Button
  if (sidebarStartBtn) sidebarStartBtn.style.display = 'flex';
  if (restartBtn) restartBtn.style.display = 'none';

  // Sofort zur Einleitung (E-Commerce Grundlagen)
  goToTask('introSection');
}

function completeIntro() {
  const introSection = document.getElementById('introSection');
  if (introSection) introSection.style.display = 'none';
  
  // Mission 1 freischalten (menu2)
  unlockedTasks.task2 = true; // In deiner Logik scheint task2 Mission 1 (Produkt-Design) zu entsprechen
  applyUnlockStates();
  saveGame();

  // Nach dem Tutorial direkt zu Mission 1 (Produkt erstellen)
  goToTask('task1Section');
}

function unlockTask2() {
  unlockedTasks.task2 = true;
  applyUnlockStates();
  goToTask('task2Section');
  saveGame();
}

function unlockTask3() {
  unlockedTasks.task3 = true;
  addProgress(20);
  applyUnlockStates();
  goToTask('task3Section');
  saveGame();
}

function finishGame() {
  addProgress(20);
  unlockedTasks.advanced = true;
  applyUnlockStates();
  saveGame();
  goToTask('shopBuilderSection');
}
