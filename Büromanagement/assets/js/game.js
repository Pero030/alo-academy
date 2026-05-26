// --- Kern-Spiellogik für Büromanagement ---

let level = 1;
let unlockedTasks = { task2: false, task3: false, task4: false, task5: false };
let selectedImageUrl = "";
let seoWords = [];
let currentTaskOptions = [];
let currentTaskOptions2 = [];
let currentTaskOptions3 = [];
let currentTaskOptions4 = [];
let selectedTaskItem = "";
let progress = 0;
let playerName = "";

function loadTaskMission() {
  const key = document.getElementById("taskSelect")?.value;
  const mission = document.getElementById("taskMission");
  if (!key || !tasks[key]) {
    if (mission) mission.style.display = "none";
    return;
  }
  const task = tasks[key];
  if (mission) mission.style.display = "block";
  const title = document.getElementById("selectedTaskTitle");
  const taskText = document.getElementById("taskText");
  if (title) title.innerText = task.title;
  if (taskText) taskText.innerText = task.description;
  renderTaskItems(task.correctItems, task.wrongItems);
}

function loadTaskMission2() {
  const key = document.getElementById("taskSelect2")?.value;
  const mission = document.getElementById("taskMission2");
  if (!key || !tasks[key]) {
    if (mission) mission.style.display = "none";
    return;
  }
  const task = tasks[key];
  if (mission) mission.style.display = "block";
  const title = document.getElementById("selectedTaskTitle2");
  const taskText = document.getElementById("taskText2");
  if (title) title.innerText = task.title;
  if (taskText) taskText.innerText = task.description;
  renderTaskItems2(task.correctItems, task.wrongItems);
}

function loadTaskMission3() {
  const key = document.getElementById("taskSelect3")?.value;
  const mission = document.getElementById("taskMission3");
  if (!key || !tasks[key]) {
    if (mission) mission.style.display = "none";
    return;
  }
  const task = tasks[key];
  if (mission) mission.style.display = "block";
  const title = document.getElementById("selectedTaskTitle3");
  const taskText = document.getElementById("taskText3");
  if (title) title.innerText = task.title;
  if (taskText) taskText.innerText = task.description;
  renderTaskItems3(task.correctItems, task.wrongItems);
}

function loadTaskMission4() {
  const key = document.getElementById("taskSelect4")?.value;
  const mission = document.getElementById("taskMission4");
  if (!key || !tasks[key]) {
    if (mission) mission.style.display = "none";
    return;
  }
  const task = tasks[key];
  if (mission) mission.style.display = "block";
  const title = document.getElementById("selectedTaskTitle4");
  const taskText = document.getElementById("taskText4");
  if (title) title.innerText = task.title;
  if (taskText) taskText.innerText = task.description;
  renderTaskItems4(task.correctItems, task.wrongItems);
}

function renderTaskItems(correctItems, wrongItems) {
  currentTaskOptions = [...correctItems, ...wrongItems];
  const container = document.getElementById("taskChoices");
  if (!container) return;

  const shuffled = currentTaskOptions.sort(() => Math.random() - 0.5);

  container.innerHTML = shuffled
    .map(
      (item, index) => `
    <div class="task-choice-item" onclick="chooseTaskItem(${index}, this)" style="cursor:pointer; border-radius:12px; overflow:hidden; transition:0.3s; border:3px solid transparent; background: rgba(255, 255, 255, 0.05); padding: 20px; margin-bottom: 10px;">
      <div style="color: white; font-size: 16px;">${item.item}</div>
    </div>
  `,
    )
    .join("");
}

function renderTaskItems2(correctItems, wrongItems) {
  currentTaskOptions2 = [...correctItems, ...wrongItems];
  const container = document.getElementById("taskChoices2");
  if (!container) return;

  const shuffled = currentTaskOptions2.sort(() => Math.random() - 0.5);

  container.innerHTML = shuffled
    .map(
      (item, index) => `
    <div class="task-choice-item" onclick="chooseTaskItem2(${index}, this)" style="cursor:pointer; border-radius:12px; overflow:hidden; transition:0.3s; border:3px solid transparent; background: rgba(255, 255, 255, 0.05); padding: 20px; margin-bottom: 10px;">
      <div style="color: white; font-size: 16px;">${item.item}</div>
    </div>
  `,
    )
    .join("");
}

function renderTaskItems3(correctItems, wrongItems) {
  currentTaskOptions3 = [...correctItems, ...wrongItems];
  const container = document.getElementById("taskChoices3");
  if (!container) return;

  const shuffled = currentTaskOptions3.sort(() => Math.random() - 0.5);

  container.innerHTML = shuffled
    .map(
      (item, index) => `
    <div class="task-choice-item" onclick="chooseTaskItem3(${index}, this)" style="cursor:pointer; border-radius:12px; overflow:hidden; transition:0.3s; border:3px solid transparent; background: rgba(255, 255, 255, 0.05); padding: 20px; margin-bottom: 10px;">
      <div style="color: white; font-size: 16px;">${item.item}</div>
    </div>
  `,
    )
    .join("");
}

function renderTaskItems4(correctItems, wrongItems) {
  currentTaskOptions4 = [...correctItems, ...wrongItems];
  const container = document.getElementById("taskChoices4");
  if (!container) return;

  const shuffled = currentTaskOptions4.sort(() => Math.random() - 0.5);

  container.innerHTML = shuffled
    .map(
      (item, index) => `
    <div class="task-choice-item" onclick="chooseTaskItem4(${index}, this)" style="cursor:pointer; border-radius:12px; overflow:hidden; transition:0.3s; border:3px solid transparent; background: rgba(255, 255, 255, 0.05); padding: 20px; margin-bottom: 10px;">
      <div style="color: white; font-size: 16px;">${item.item}</div>
    </div>
  `,
    )
    .join("");
}

function chooseTaskItem(index, element) {
  const item = currentTaskOptions[index];
  if (!item) return;
  const feedback = document.getElementById("taskFeedback");
  if (!feedback) return;
  document.querySelectorAll(".task-choice-item").forEach((el) => {
    el.style.borderColor = "transparent";
    el.style.transform = "scale(1)";
  });
  element.style.borderColor = item.correct ? "#22c55e" : "#ef4444";
  element.style.transform = "scale(1.02)";
  const color = item.correct ? "rgba(34,197,94,0.2)" : "rgba(239,68,68,0.2)";
  const textColor = item.correct ? "#86efac" : "#fca5a5";
  feedback.innerHTML = `<div style="padding:15px; margin-top:15px; border-radius:12px; background:${color}; color:${textColor}; border-left:4px solid ${item.correct ? "#22c55e" : "#ef4444"};">
    <strong>${item.correct ? "✓" : "✗"}</strong> ${item.reason}
  </div>`;
  if (item.correct) {
    selectedTaskItem = item.item;
    addProgress(10);
  } else {
    selectedTaskItem = "";
  }
}

function chooseTaskItem2(index, element) {
  const item = currentTaskOptions2[index];
  if (!item) return;
  const feedback = document.getElementById("taskFeedback2");
  if (!feedback) return;
  document.querySelectorAll(".task-choice-item").forEach((el) => {
    el.style.borderColor = "transparent";
    el.style.transform = "scale(1)";
  });
  element.style.borderColor = item.correct ? "#22c55e" : "#ef4444";
  element.style.transform = "scale(1.02)";
  const color = item.correct ? "rgba(34,197,94,0.2)" : "rgba(239,68,68,0.2)";
  const textColor = item.correct ? "#86efac" : "#fca5a5";
  feedback.innerHTML = `<div style="padding:15px; margin-top:15px; border-radius:12px; background:${color}; color:${textColor}; border-left:4px solid ${item.correct ? "#22c55e" : "#ef4444"};">
    <strong>${item.correct ? "✓" : "✗"}</strong> ${item.reason}
  </div>`;
  if (item.correct) {
    selectedTaskItem = item.item;
    addProgress(10);
  } else {
    selectedTaskItem = "";
  }
}

function chooseTaskItem3(index, element) {
  const item = currentTaskOptions3[index];
  if (!item) return;
  const feedback = document.getElementById("taskFeedback3");
  if (!feedback) return;
  document.querySelectorAll(".task-choice-item").forEach((el) => {
    el.style.borderColor = "transparent";
    el.style.transform = "scale(1)";
  });
  element.style.borderColor = item.correct ? "#22c55e" : "#ef4444";
  element.style.transform = "scale(1.02)";
  const color = item.correct ? "rgba(34,197,94,0.2)" : "rgba(239,68,68,0.2)";
  const textColor = item.correct ? "#86efac" : "#fca5a5";
  feedback.innerHTML = `<div style="padding:15px; margin-top:15px; border-radius:12px; background:${color}; color:${textColor}; border-left:4px solid ${item.correct ? "#22c55e" : "#ef4444"};">
    <strong>${item.correct ? "✓" : "✗"}</strong> ${item.reason}
  </div>`;
  if (item.correct) {
    selectedTaskItem = item.item;
    addProgress(10);
  } else {
    selectedTaskItem = "";
  }
}

function chooseTaskItem4(index, element) {
  const item = currentTaskOptions4[index];
  if (!item) return;
  const feedback = document.getElementById("taskFeedback4");
  if (!feedback) return;
  document.querySelectorAll(".task-choice-item").forEach((el) => {
    el.style.borderColor = "transparent";
    el.style.transform = "scale(1)";
  });
  element.style.borderColor = item.correct ? "#22c55e" : "#ef4444";
  element.style.transform = "scale(1.02)";
  const color = item.correct ? "rgba(34,197,94,0.2)" : "rgba(239,68,68,0.2)";
  const textColor = item.correct ? "#86efac" : "#fca5a5";
  feedback.innerHTML = `<div style="padding:15px; margin-top:15px; border-radius:12px; background:${color}; color:${textColor}; border-left:4px solid ${item.correct ? "#22c55e" : "#ef4444"};">
    <strong>${item.correct ? "✓" : "✗"}</strong> ${item.reason}
  </div>`;
  if (item.correct) {
    selectedTaskItem = item.item;
    addProgress(10);
  } else {
    selectedTaskItem = "";
  }
}

function addProgress(amount) {
  progress += amount;
  if (progress > 100) progress = 100;
  const progressBar = document.getElementById("progress");
  if (progressBar) {
    progressBar.style.width = progress + "%";
  }
  updateMissionStatus();
}

function updateMissionStatus() {
  // Mission-Status basierend auf Fortschritt aktualisieren
  if (progress >= 20) {
    unlockMission("menu2");
  }
  if (progress >= 40) {
    unlockMission("menu3");
  }
  if (progress >= 60) {
    unlockMission("menu4");
  }
  if (progress >= 80) {
    unlockMission("menu7");
  }
}

function unlockMission(menuId) {
  const menu = document.getElementById(menuId);
  if (menu) {
    menu.classList.remove("locked");
    menu.style.opacity = "1";
    menu.style.pointerEvents = "auto";
    menu.style.tabIndex = "0";
  }
}

function unlockTask2() {
  addProgress(20);
  goToTask("task2Section");
}

function unlockTask3() {
  addProgress(20);
  goToTask("task3Section");
}

function unlockTask4() {
  addProgress(20);
  goToTask("task4Section");
}

function finishGame() {
  addProgress(20);
  saveGame();
  showModal(
    "Spiel abgeschlossen!",
    `Herzlichen Glückwunsch, ${playerName}! Du hast alle Aufgaben erfolgreich gelöst. Klicke auf "Zertifikat anzeigen", um dein Zertifikat herunterzuladen.`,
    "Zertifikat anzeigen",
    generateCertificate
  );
}

function saveGame() {
  const saveData = {
    playerName: playerName,
    progress: progress,
    unlockedTasks: unlockedTasks,
    timestamp: new Date().toISOString(),
  };
  localStorage.setItem("buromanagementSave", JSON.stringify(saveData));
}

function loadGame() {
  const saveData = localStorage.getItem("buromanagementSave");
  if (saveData) {
    const data = JSON.parse(saveData);
    playerName = data.playerName;
    progress = data.progress;
    unlockedTasks = data.unlockedTasks || {
      task2: false,
      task3: false,
      task4: false,
      task5: false,
    };
    const progressBar = document.getElementById("progress");
    if (progressBar) {
      progressBar.style.width = progress + "%";
    }
    applyUnlockStates();
    updateMissionStatus();
    return true;
  }
  return false;
}

// --- Mission 3: Kommunikation ---
let kommunikationIndex = 0;
let kommunikationCorrect = 0;
let kommunikationAnswered = false;

function startKommunikation() {
  kommunikationIndex = 0;
  kommunikationCorrect = 0;
  kommunikationAnswered = false;
  loadKommunikationScenario();
}

function loadKommunikationScenario() {
  kommunikationAnswered = false;
  if (
    !kommunikationScenarios ||
    kommunikationIndex >= kommunikationScenarios.length
  )
    return;
  const scenario = kommunikationScenarios[kommunikationIndex];
  const total = kommunikationScenarios.length;
  const minCorrect = 5;

  const container = document.getElementById("kommunikationContainer");
  if (!container) return;

  // Antworten mischen
  const shuffled = [...scenario.answers].sort(() => Math.random() - 0.5);

  container.innerHTML = `
    <!-- Fortschritt -->
    <div style="margin-bottom:20px;display:flex;justify-content:space-between;align-items:center;">
      <span style="background:rgba(168,85,247,0.2);color:#a855f7;padding:6px 16px;border-radius:20px;font-size:14px;font-weight:700;">Frage ${kommunikationIndex + 1} von ${total}</span>
      <span style="color:#94a3b8;font-size:14px;">✅ ${kommunikationCorrect} von ${minCorrect} benötigt</span>
    </div>
    <div style="width:100%;background:rgba(255,255,255,0.1);border-radius:99px;height:8px;margin-bottom:30px;">
      <div style="width:${Math.round((kommunikationIndex / total) * 100)}%;height:100%;background:linear-gradient(90deg,#a855f7,#38bdf8);border-radius:99px;transition:width 0.5s ease;"></div>
    </div>

    <!-- Kontext-Badge -->
    <div style="margin-bottom:20px;">
      <span style="background:rgba(168,85,247,0.15);color:#d8b4fe;font-size:14px;font-weight:700;padding:8px 18px;border-radius:20px;border:1px solid rgba(168,85,247,0.3);">${scenario.context}</span>
    </div>

    <!-- Situations-Karte -->
    <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.15);border-radius:20px;padding:30px;margin-bottom:30px;">
      <p style="color:#ffffff;font-size:20px;line-height:1.7;margin:0;font-weight:500;">${scenario.situation}</p>
    </div>

    <!-- Antworten 2x2 Grid -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-bottom:25px;">
      ${shuffled
        .map(
          (answer, i) => `
        <button
          onclick="selectKommunikationAnswer(${kommunikationScenarios.indexOf(scenario)}, ${scenario.answers.indexOf(answer)}, this)"
          style="background:rgba(255,255,255,0.05);border:2px solid rgba(255,255,255,0.15);border-radius:16px;
                 padding:20px;color:white;font-size:15px;line-height:1.5;cursor:pointer;text-align:left;
                 transition:all 0.2s ease;
                 "
          onmouseover="if(!this.disabled){this.style.background='rgba(168,85,247,0.15)';this.style.borderColor='#a855f7';}"
          onmouseout="if(!this.disabled){this.style.background='rgba(255,255,255,0.05)';this.style.borderColor='rgba(255,255,255,0.15)';}">
          <span style="display:inline-block;width:28px;height:28px;background:rgba(168,85,247,0.3);border-radius:50%;text-align:center;line-height:28px;font-weight:800;margin-right:10px;font-size:13px;">${["A", "B", "C", "D"][i]}</span>
          ${answer.text}
        </button>
      `,
        )
        .join("")}
    </div>

    <!-- Feedback Bereich -->
    <div id="kommunikationFeedback" style="display:none;"></div>
  `;
}

function selectKommunikationAnswer(scenarioIdx, answerIdx, buttonEl) {
  if (kommunikationAnswered) return;
  kommunikationAnswered = true;

  const scenario = kommunikationScenarios[scenarioIdx];
  const answer = scenario.answers[answerIdx];
  const isCorrect = answer.correct;

  // Alle Buttons deaktivieren und einfärben
  const buttons = buttonEl.parentElement.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.disabled = true;
    btn.style.cursor = "default";
  });

  // Gewählten Button hervorheben
  buttonEl.style.background = isCorrect
    ? "rgba(34,197,94,0.25)"
    : "rgba(239,68,68,0.25)";
  buttonEl.style.borderColor = isCorrect ? "#22c55e" : "#ef4444";

  if (isCorrect) kommunikationCorrect++;

  // Feedback anzeigen
  const feedback = document.getElementById("kommunikationFeedback");
  if (feedback) {
    feedback.style.display = "block";
    feedback.innerHTML = `
      <div style="padding:20px;border-radius:16px;background:${isCorrect ? "rgba(34,197,94,0.15)" : "rgba(239,68,68,0.15)"};
                  border-left:5px solid ${isCorrect ? "#22c55e" : "#ef4444"};">
        <p style="color:white;font-size:16px;margin:0;">
          <strong style="font-size:20px;">${isCorrect ? "✅ Richtig!" : "❌ Falsch!"}</strong><br>
          ${answer.feedback}
        </p>
      </div>`;
  }

  // Nächste Frage oder Ergebnis
  const total = kommunikationScenarios.length;
  const minCorrect = 5;

  setTimeout(() => {
    kommunikationIndex++;
    if (kommunikationIndex < total) {
      loadKommunikationScenario();
    } else {
      showKommunikationResult();
    }
  }, 2200);
}

function showKommunikationResult() {
  const total = kommunikationScenarios.length;
  const minCorrect = 5;
  const passed = kommunikationCorrect >= minCorrect;

  const container = document.getElementById("kommunikationContainer");
  if (!container) return;

  container.innerHTML = `
    <div style="text-align:center;padding:40px 20px;">
      <div style="font-size:80px;margin-bottom:20px;">${passed ? "🎉" : "💪"}</div>
      <h2 style="font-size:36px;color:${passed ? "#22c55e" : "#f59e0b"};margin-bottom:15px;">
        ${passed ? "Mission bestanden!" : "Noch nicht ganz!"}
      </h2>
      <p style="font-size:22px;color:white;margin-bottom:10px;">
        Du hast <strong style="color:${passed ? "#22c55e" : "#ef4444"};font-size:28px;">${kommunikationCorrect}</strong> von <strong>${total}</strong> Fragen richtig beantwortet.
      </p>
      <p style="color:#94a3b8;font-size:16px;margin-bottom:40px;">Mindestens ${minCorrect} von ${total} nötig.</p>

      ${
        passed
          ? `
        <div style="background:rgba(34,197,94,0.15);border:2px solid #22c55e;border-radius:16px;padding:25px;margin-bottom:30px;">
          <p style="color:white;font-size:18px;margin:0;">🌟 Mission 4 wurde freigeschaltet! Du wirst automatisch weitergeleitet...</p>
        </div>`
          : `
        <div style="background:rgba(239,68,68,0.15);border:2px solid #ef4444;border-radius:16px;padding:25px;margin-bottom:30px;">
          <p style="color:white;font-size:18px;margin:0;">Kein Problem – versuche es nochmal und achte auf die Erklärungen.</p>
        </div>
        <button onclick="startKommunikation()" style="background:linear-gradient(135deg,#a855f7,#9333ea);color:white;border:none;padding:18px 45px;border-radius:99px;font-size:18px;font-weight:bold;cursor:pointer;">Nochmal versuchen 🔄</button>`
      }
    </div>
  `;

  if (passed) {
    addProgress(20);
    unlockedTasks.task4 = true;
    applyUnlockStates();
    saveGame();
    setTimeout(() => goToTask("task4Section"), 3000);
  }
}

function restartGame() {
  localStorage.removeItem("buromanagementSave");
  localStorage.removeItem("buromanagementPlayerName");
  localStorage.removeItem("buromanagementSkipStartScreen");
  localStorage.removeItem("buromanagementCurrentOrder");
  localStorage.removeItem("buromanagementUIState");
  progress = 0;
  playerName = "";
  location.reload();
}
