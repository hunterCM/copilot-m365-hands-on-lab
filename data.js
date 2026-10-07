/* ============================================================
   Day-in-the-Life Copilot for M365 — Scenario data
   5 roles · 5 apps · 5 prompts each
   ============================================================ */
const LABS = [
  {
    id: "sales",
    role: "Account Executive",
    emoji: "💼",
    app: "Outlook",
    appIcon: "📧",
    scenario:
      "It's 8:30 AM. Priya has 40 unread emails, a renewal at risk, and a customer call in an hour. She uses Copilot in Outlook to clear the noise and walk in prepared.",
    prompts: [
      {
        goal: "Catch up fast",
        text: "Summarize all unread emails from the last 24 hours. Group them by customer account and flag anything that needs a reply today.",
        tip: "Use Copilot's 'Summary' button at the top of a long thread for instant context."
      },
      {
        goal: "Spot the risk",
        text: "Review the email thread with Contoso about their renewal. What are their main concerns and what have we committed to so far?",
        tip: "Ask follow-ups like 'What did we promise on pricing?' to drill deeper."
      },
      {
        goal: "Draft the reply",
        text: "Draft a warm, professional reply to Contoso addressing their pricing concern. Offer a 15-minute call this week and keep it under 120 words.",
        tip: "Change the tone to 'Direct' or 'Formal' before sending."
      },
      {
        goal: "Prep for the call",
        text: "Pull together everything I need before my 9:30 call with Contoso: open action items, last meeting notes, and outstanding questions.",
        tip: "This works best when related meetings live in your calendar."
      },
      {
        goal: "Follow through",
        text: "Create a follow-up email I can send after the call thanking them and listing the three next steps we agreed on.",
        tip: "Leave placeholders like [next step] and fill them in live during the call."
      }
    ]
  },
  {
    id: "manager",
    role: "People Manager",
    emoji: "🧭",
    app: "Microsoft Teams",
    appIcon: "👥",
    scenario:
      "Marcus manages a team of eight. He joins a project sync late and needs to catch up, capture decisions, and keep everyone aligned — without re-watching the recording.",
    prompts: [
      {
        goal: "Catch up on a meeting you missed",
        text: "I joined late — give me a recap of what was discussed in this meeting so far and any decisions already made.",
        tip: "Copilot in Teams works live during the meeting and after it ends."
      },
      {
        goal: "Capture action items",
        text: "List all action items from this meeting with the owner and due date for each. Highlight anything assigned to me.",
        tip: "Ask 'Were there any unassigned tasks?' to avoid dropped balls."
      },
      {
        goal: "Check the room",
        text: "What questions were raised that haven't been answered yet, and what topics caused disagreement?",
        tip: "Great for surfacing risks the team glossed over."
      },
      {
        goal: "Share a clean summary",
        text: "Write a short post-meeting summary I can paste into our Teams channel: 3 decisions, 3 next steps, and the owner of each.",
        tip: "Keep summaries consistent so the team knows where to look."
      },
      {
        goal: "Coach a teammate",
        text: "Draft a supportive message to Jordan recognizing their contribution today and gently reminding them of their deadline on Friday.",
        tip: "Set tone to 'Encouraging' for 1:1 messages."
      }
    ]
  },
  {
    id: "analyst",
    role: "Financial Analyst",
    emoji: "📊",
    app: "Microsoft Excel",
    appIcon: "📈",
    scenario:
      "Dana has a quarterly sales workbook landing in 30 minutes. She uses Copilot in Excel to analyze, model, and explain the numbers instead of wrestling with formulas.",
    prompts: [
      {
        goal: "Understand the data",
        text: "Analyze this table and tell me the top trends, outliers, and anything that looks unusual in the Q3 revenue column.",
        tip: "Your data must be in an Excel table (Ctrl+T) for Copilot to analyze it."
      },
      {
        goal: "Add insight columns",
        text: "Add a column that calculates quarter-over-quarter growth as a percentage for each region, formatted to one decimal place.",
        tip: "Ask Copilot to 'explain the formula' so you learn it too."
      },
      {
        goal: "Visualize it",
        text: "Create a chart that shows revenue by region over the last four quarters, and tell me which region is accelerating fastest.",
        tip: "Request a specific chart type, e.g. 'use a clustered column chart'."
      },
      {
        goal: "Model a scenario",
        text: "If the West region grows 12% next quarter and all others stay flat, what would total revenue be? Show the breakdown.",
        tip: "Copilot is great for quick what-if questions before building a full model."
      },
      {
        goal: "Explain it to leadership",
        text: "Summarize the three most important takeaways from this workbook in plain language for an executive audience.",
        tip: "Paste this summary straight into your deck or email."
      }
    ]
  },
  {
    id: "marketer",
    role: "Marketing Lead",
    emoji: "🎯",
    app: "Microsoft Word",
    appIcon: "📝",
    scenario:
      "Sofia is launching a new product next week. She needs a campaign brief, landing copy, and a press blurb — all on-brand and all before lunch. Copilot in Word drafts the first versions.",
    prompts: [
      {
        goal: "Draft from scratch",
        text: "Draft a one-page campaign brief for the launch of 'Northwind Pulse', a smart energy tracker for small businesses. Include goals, audience, key message, and channels.",
        tip: "Start with a short description and let Copilot expand it."
      },
      {
        goal: "Rewrite for the web",
        text: "Turn this brief into punchy landing page copy with a headline, three benefit bullets, and a call to action.",
        tip: "Ask for 'three headline options' to A/B test."
      },
      {
        goal: "Match the brand voice",
        text: "Rewrite the headline section to sound more energetic and confident, aimed at busy small-business owners.",
        tip: "Give Copilot an example sentence that matches your brand voice."
      },
      {
        goal: "Create a press blurb",
        text: "Write a 90-word press announcement for Northwind Pulse including a quote from our CMO.",
        tip: "Review quotes carefully — always confirm wording with the person."
      },
      {
        goal: "Tighten and polish",
        text: "Review this whole document for clarity and consistency, and suggest where it's too wordy.",
        tip: "Use 'Rewrite' on any highlighted paragraph you don't love."
      }
    ]
  },
  {
    id: "exec",
    role: "Executive / Chief of Staff",
    emoji: "👔",
    app: "Microsoft 365 Copilot Chat",
    appIcon: "💬",
    scenario:
      "Amara runs the office of the CEO. She needs answers that cut across email, chats, meetings, and documents — fast. She uses Copilot Chat as a single front door to everything.",
    prompts: [
      {
        goal: "Pull cross-app context",
        text: "What's the latest status on the Falcon project? Summarize across my recent emails, Teams chats, and meeting notes.",
        tip: "Copilot Chat can reason across all your M365 content you have access to."
      },
      {
        goal: "Prep the leadership team",
        text: "Based on this week's updates, draft three talking points for tomorrow's leadership meeting, each with one supporting data point.",
        tip: "Reference a file directly with / to ground the answer in a specific doc."
      },
      {
        goal: "Find the needle",
        text: "Find the document where we outlined the FY budget assumptions and summarize the key figures.",
        tip: "Use natural language — you don't need the exact file name."
      },
      {
        goal: "Draft an exec update",
        text: "Write a concise all-hands update from the CEO covering wins this quarter, one challenge, and the priority for next quarter.",
        tip: "Ask Copilot to match the CEO's past writing style if you paste an example."
      },
      {
        goal: "Plan the day",
        text: "Look at my calendar and emails for today and tell me the three things I absolutely must handle, in priority order.",
        tip: "Re-run this each morning as a daily planning ritual."
      }
    ]
  }
];
