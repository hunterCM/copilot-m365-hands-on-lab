# Copilot for Microsoft 365 — Day-in-the-Life Hands-On Lab

A self-contained, interactive learning platform that teaches **Microsoft 365 Copilot**
through 5 realistic "day in the life" scenarios. Each scenario maps a business **role**
to a specific **M365 app** and gives you **5 ready-to-use prompts** to practice with.

## What's inside

| # | Role | App | Scenario focus |
|---|------|-----|----------------|
| 1 | 💼 Account Executive | Outlook | Clear the inbox, rescue a renewal, prep a call |
| 2 | 🧭 People Manager | Microsoft Teams | Recap a meeting, capture actions, coach the team |
| 3 | 📊 Financial Analyst | Excel | Analyze, model and explain quarterly numbers |
| 4 | 🎯 Marketing Lead | Word | Draft a brief, landing copy and a press blurb |
| 5 | 👔 Executive / Chief of Staff | Copilot Chat | Pull cross-app context and plan the day |

Each role has **5 prompts** → **25 hands-on prompts** total.

## Features

- **Role picker** — choose a role to filter straight to the relevant scenario
- **Copy-ready prompts** — one click copies the prompt to paste into Copilot
- **Tips** on every prompt for better results
- **Progress tracking** — mark prompts complete; saved in your browser (localStorage)
- No build step, no dependencies — pure HTML/CSS/JS

## Run it

Just open `index.html` in a browser.

Or serve it locally (optional):

```powershell
# from the project folder
python -m http.server 5500
# then open http://localhost:5500
```

## How to use the lab

1. **Pick your role** in section 1.
2. **Open the matching app** (Outlook, Teams, Excel, Word, or Copilot Chat) in your own M365 tenant.
3. **Copy each prompt** and run it against your real data.
4. **Mark it complete** to track your progress through all 25 prompts.

## Customize

All content lives in `data.js`. Add a role or edit prompts by extending the `LABS` array:

```js
{
  id: "support",
  role: "Customer Support Lead",
  emoji: "🎧",
  app: "Outlook",
  appIcon: "📧",
  scenario: "…",
  prompts: [ { goal: "…", text: "…", tip: "…" } ]
}
```

The UI (role cards, filters, progress total) updates automatically.
