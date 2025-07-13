# AI Customer Executive

**AI Customer Executive** is a production-grade, next-generation conversational AI system built to automate **human-like voice conversations** over phone calls. Designed for real-time, intelligent interactions, this system integrates seamlessly with **Asterisk-like telecom servers** for global scalability and deployment.

---

## Core Capabilities

- **Real-Time Conversation**: Instant speech-to-text (STT) and text-to-speech (TTS) using [Deepgram](https://deepgram.com)
- **LLM-Powered Responses**: Uses **OpenAI GPT-4o** for natural and human-like responses
- **Phone Call Automation**: Compatible with **Asterisk** or similar VoIP infrastructures
- **Ultra Low Latency**: Less than **25ms** from audio input to AI response
- **AI Intelligence Layer**:
  - Extracts sentiment, objective, motive, and response context
  - Stores entire conversation in structured **JSON** format
- **End-to-End Interaction Flow**: Handles sales pitching, Q&A, and post-sale customer service

---

## Design & Architecture

Built using a **Bottom-Up Development Approach** and **SOLID Principles** for scalability and performance.

### LLD Principles Implemented

- **Single Responsibility Principle (SRP)**  
  Each module—like STT handler, TTS handler, authentication middleware, and response generation—has one focused responsibility.

- **Interface Segregation Principle (ISP)**  
  Components are designed with decoupled interfaces so that STT, TTS, AI logic, and storage logic can evolve independently.

- **Bottom-Up Architecture**  
  The system is built starting from the foundational streaming pipeline and scaling up to full conversation orchestration and data logging.

### Modular Overview

| Module                  | Responsibility                                   |
|------------------------|--------------------------------------------------|
| `/lib/authMiddleware`  | JWT-based route authentication                   |
| `/api/auth/deepgram`   | On-demand Deepgram token provisioning            |
| `WebSocket handler`    | Streams real-time audio for processing           |
| `OpenAI GPT-4o Layer`  | Handles dynamic response generation              |
| `Conversation Parser`  | Extracts and classifies metadata from dialogue   |

---

Flowchart:
<img width="1890" height="370" alt="image" src="https://github.com/user-attachments/assets/4f893a8b-c4b7-4606-bfa4-6e870dcfae72" />

---

## Business Use Cases

- **Sales Automation**: Cold calls with persuasive dialogue generated on-the-fly
- **Customer Support**: Post-sale inquiries and service automation
- **User Analytics**: Record and analyze conversations for insights and improvement
- **CRM/Database Integration**: Store conversation metadata in any database like MongoDB, Firebase, or PostgreSQL

---

## Technology Stack

- **Next.js** with App Router
- **OpenAI GPT-4o** for LLM-based responses
- **Deepgram** for STT and TTS
- **WebSockets** for low-latency streaming
- **JWT** for secure authentication
- **Vercel** for deployment

---

## Production-Ready Features

- Real-time processing and response within 25ms
- Authentication with JWT
- Sentiment and motive-aware AI
- Global scalability via cloud infrastructure
- Structured logs for training, fine-tuning, and analytics

---

##Hosted On:
https://ai-customer-executive-prishal-ai-in.vercel.app

## Add On:
```
DEEPGRAM_STT_DOMAIN=https://api.deepgram.com
DEEPGRAM_API_KEY=Your API Key Here
NEXT_PUBLIC_DEEPGRAM_SOCKET_URL=wss://agent.deepgram.com/v1/agent/converse
DEEPGRAM_ENV=development or production
JWT_SECRET=YOUR-JWT-SECRET
```

