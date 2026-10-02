# Clario

**AI-Powered Website Assistant for Businesses**

Clario is a smart, conversational assistant that lives on your website. It answers customer questions, captures leads, books appointments, and keeps you — the business owner — in the loop with real-time notifications. Under the hood it uses large-language-model APIs and workflow automation so you can focus on running your business instead of answering repetitive queries.

---

## Planned Features

| Feature | Description |
|---|---|
| **Website Chat Assistant** | Embeddable chat widget that lets visitors talk to an AI assistant in real time. |
| **AI-Powered FAQ Responses** | Automatically answers common questions using your business knowledge base. |
| **Lead Capture & Qualification** | Collects visitor information and scores leads so you know who to follow up with first. |
| **Appointment Booking** | Lets customers schedule meetings directly through the chat interface. |
| **n8n Workflow Automation** | Connects Clario to external tools (email, CRM, calendars) via n8n workflows. |
| **Business Owner Notifications** | Sends you alerts (email, SMS, push) when important events happen. |

---

## Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React |
| Backend | Node.js + Express |
| Database | SQLite |
| AI / LLM | Groq API |
| Automation | n8n |

---

## Development Roadmap

### Phase 1 — Foundation
- [x] Project structure & repository setup
- [ ] Backend server with Express + SQLite
- [ ] Basic REST API (health check, config)

### Phase 2 — Chat Core
- [ ] React frontend with chat UI
- [ ] Groq API integration for AI responses
- [ ] Conversation history storage

### Phase 3 — Business Features
- [ ] FAQ knowledge-base management
- [ ] Lead capture form & qualification logic
- [ ] Appointment booking flow

### Phase 4 — Automation & Notifications
- [ ] n8n workflow templates (email, CRM sync)
- [ ] Real-time notifications for business owners
- [ ] Webhook integrations

### Phase 5 — Polish & Deploy
- [ ] Embeddable chat widget (iframe / script tag)
- [ ] Admin dashboard for business owners
- [ ] Production deployment guide

---

## Project Structure

```
clario/
├── frontend/        # React application (chat widget + admin dashboard)
├── backend/         # Node.js / Express API server
├── n8n-workflows/   # Exportable n8n workflow JSON files
├── docs/            # Project documentation, guides, and architecture notes
├── .gitignore
└── README.md
```

---

## Getting Started

> 🚧 **Coming soon** — package installation and dev-server instructions will be added once the frontend and backend are scaffolded.

---

## License

TBD
