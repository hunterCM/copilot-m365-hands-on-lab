/* ============================================================
   App logic: render roles + labs, filtering, copy, progress
   ============================================================ */
(function () {
  const STORAGE_KEY = "copilotLabProgress";
  const roleGrid = document.getElementById("roleGrid");
  const filterBar = document.getElementById("filterBar");
  const labStack = document.getElementById("labStack");
  const toast = document.getElementById("toast");

  let activeFilter = "all";
  let done = loadProgress();

  const totalPrompts = LABS.reduce((n, l) => n + l.prompts.length, 0);
  document.getElementById("progressTotal").textContent = totalPrompts;

  /* ---------- Render role cards ---------- */
  function renderRoles() {
    roleGrid.innerHTML = LABS.map(
      (lab) => `
      <div class="role-card" data-role="${lab.id}" role="button" tabindex="0">
        <div class="role-emoji">${lab.emoji}</div>
        <h4>${lab.role}</h4>
        <div class="role-app">${lab.appIcon} ${lab.app}</div>
        <p class="role-desc">${lab.scenario.split(". ")[0]}.</p>
      </div>`
    ).join("");

    roleGrid.querySelectorAll(".role-card").forEach((card) => {
      const select = () => {
        activeFilter = card.dataset.role;
        renderFilter();
        renderLabs();
        document.getElementById("labs").scrollIntoView({ behavior: "smooth" });
      };
      card.addEventListener("click", select);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(); }
      });
    });
  }

  /* ---------- Render filter chips ---------- */
  function renderFilter() {
    const chips = [{ id: "all", label: "All roles" }].concat(
      LABS.map((l) => ({ id: l.id, label: `${l.emoji} ${l.role}` }))
    );
    filterBar.innerHTML = chips
      .map(
        (c) =>
          `<button class="chip ${activeFilter === c.id ? "active" : ""}" data-filter="${c.id}">${c.label}</button>`
      )
      .join("");
    filterBar.querySelectorAll(".chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        activeFilter = chip.dataset.filter;
        renderFilter();
        renderLabs();
      });
    });
    roleGrid.querySelectorAll(".role-card").forEach((card) => {
      card.classList.toggle("active", card.dataset.role === activeFilter);
    });
  }

  /* ---------- Render lab cards ---------- */
  function renderLabs() {
    const visible = LABS.filter((l) => activeFilter === "all" || l.id === activeFilter);
    labStack.innerHTML = visible
      .map(
        (lab) => `
      <div class="lab-card">
        <div class="lab-head">
          <div class="lab-emoji">${lab.emoji}</div>
          <div>
            <h4>${lab.role}</h4>
            <div class="lab-badges">
              <span class="badge app">${lab.appIcon} ${lab.app}</span>
              <span class="badge">Day in the life</span>
            </div>
            <p class="lab-scenario">${lab.scenario}</p>
          </div>
        </div>
        <div class="prompt-list">
          ${lab.prompts
            .map((p, i) => {
              const key = `${lab.id}-${i}`;
              const isDone = done.includes(key);
              return `
            <div class="prompt">
              <div class="prompt-top">
                <div class="prompt-num">${i + 1}</div>
                <div class="prompt-goal">${p.goal}</div>
              </div>
              <div class="prompt-body">
                <div class="prompt-text">${escapeHtml(p.text)}</div>
                <div class="prompt-actions">
                  <button class="mini-btn copy-btn" data-text="${encodeURIComponent(p.text)}">📋 Copy prompt</button>
                  <button class="mini-btn done-btn ${isDone ? "done" : ""}" data-key="${key}">
                    ${isDone ? "✓ Completed" : "Mark complete"}
                  </button>
                </div>
                ${p.tip ? `<div class="tip">${escapeHtml(p.tip)}</div>` : ""}
              </div>
            </div>`;
            })
            .join("")}
        </div>
      </div>`
      )
      .join("");

    labStack.querySelectorAll(".copy-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const text = decodeURIComponent(btn.dataset.text);
        navigator.clipboard.writeText(text).then(() => showToast("Prompt copied — paste it into Copilot!"));
      });
    });
    labStack.querySelectorAll(".done-btn").forEach((btn) => {
      btn.addEventListener("click", () => toggleDone(btn.dataset.key));
    });

    updateProgress();
  }

  /* ---------- Progress handling ---------- */
  function toggleDone(key) {
    const idx = done.indexOf(key);
    if (idx === -1) { done.push(key); showToast("Nice! Progress saved."); }
    else done.splice(idx, 1);
    saveProgress();
    renderLabs();
  }

  function updateProgress() {
    const count = done.length;
    document.getElementById("progressCount").textContent = count;
    const pct = totalPrompts ? (count / totalPrompts) * 100 : 0;
    document.getElementById("progressFill").style.width = pct + "%";
  }

  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
    catch { return []; }
  }
  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
  }

  document.getElementById("resetBtn").addEventListener("click", () => {
    done = [];
    saveProgress();
    renderLabs();
    showToast("Progress reset.");
  });

  /* ---------- Helpers ---------- */
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove("show"), 2200);
  }
  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );
  }

  /* ---------- Init ---------- */
  renderRoles();
  renderFilter();
  renderLabs();
})();
