# 🛠️ Shreya Gupta — Engineering Blueprint Portfolio

A **Next.js 15** portfolio built with TypeScript, Tailwind CSS v4, and Framer Motion — designed as an interactive engineering blueprint with push-pins, polaroid project cards, a glass terminal boot sequence, and an AI chatbot powered by Gemini.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Blueprint Theme** | Paper cards, push-pins, tape strips, polaroid frames, and a hand-drawn grid background |
| **Glass Terminal** | Animated boot sequence with typing effect showing system info |
| **Push-Pin Animations** | Pins drop in with spring physics (bounce) on scroll |
| **Project Polaroids** | Cards with blueprint wireframe overlay on hover (grid + corner brackets + crosshair) |
| **Stagger Animations** | Every section fades and slides in as you scroll — cards, icons, buttons all staggered |
| **AI Chatbot (Gemini)** | Ask anything about Shreya's projects, experience, or skills — powered by Google Gemini 2.0 Flash |
| **Tech Stack Grid** | 8 skill icons stagger in on scroll with hover-lift effects |
| **Production Ready** | Docker containerization, GitHub Actions CI/CD, and Sentry error monitoring included |
| **SEO Optimized** | Meta tags, semantic HTML, proper heading hierarchy |
| **Optimized Fonts** | `next/font` for zero-CLS loading of Space Grotesk, Fira Code, and Permanent Marker |

---

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh/) (v1.0+) or Node.js 18+
- A [Google Gemini API key](https://aistudio.google.com/apikey) (free tier works)
- (Optional) [Docker](https://www.docker.com/) for containerized deployment
- (Optional) [Sentry](https://sentry.io/) for error monitoring

### 1. Clone & Install

```bash
git clone https://github.com/techieshreya/portfolio.git
cd portfolio
bun install
```

### 2. Configure Environment

Create a `.env.local` file in the project root:

```env
# Required for AI Chatbot
GOOGLE_GENERATIVE_AI_API_KEY=your-gemini-api-key-here

# Optional: Sentry Monitoring
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
```

> Get your free Gemini API key at [Google AI Studio](https://aistudio.google.com/apikey)

### 3. Run Development Server

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
bun run build
bun start
```

---

## 🐳 Docker Deployment

This project includes a production-optimized `Dockerfile`.

### Build the Image

```bash
docker build -t portfolio .
```

### Run the Container

```bash
docker run -p 3000:3000 -e GOOGLE_GENERATIVE_AI_API_KEY=your-key portfolio
```

Visit [http://localhost:3000](http://localhost:3000) to see the app running in the container.

---

## 🔄 CI/CD & Monitoring

### GitHub Actions
The repository includes a CI workflow in `.github/workflows/ci.yml` that automatically:
- Installs dependencies with Bun
- Lints the codebase
- Builds the Next.js application

### Sentry Integration
Sentry is configured for error monitoring.
1. Add `NEXT_PUBLIC_SENTRY_DSN` to your environment variables (Vercel/Docker/etc).
2. For source map uploads during build, add `SENTRY_AUTH_TOKEN` to your GitHub Repository Secrets.

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── api/chat/route.ts     # AI chatbot streaming endpoint
│   ├── globals.css            # Blueprint theme & Tailwind v4 tokens
│   ├── layout.tsx             # Root layout with fonts & SEO
│   └── page.tsx               # Main page assembling all components
├── components/
│   ├── AnimatedSection.tsx    # Scroll-triggered fade-in wrapper
│   ├── BlueprintCard.tsx      # Paper card with animated pins
│   ├── Chatbot.tsx            # AI chatbot (Gemini 2.0 Flash)
│   ├── Footer.tsx             # Footer with social links
│   ├── Navbar.tsx             # Sticky nav with spring-bouncing pins
│   ├── ProjectPolaroid.tsx    # Polaroid card with wireframe hover
│   ├── SystemStatus.tsx       # Online/Hirable status badge
│   ├── TechStack.tsx          # Staggered skill icon grid
│   └── Terminal.tsx           # Glass terminal with typing animation
├── data/
│   ├── profile.ts             # Personal info, education, experience
│   ├── projects.ts            # Project data
│   └── rag-context.ts         # AI chatbot knowledge base (full resume)
└── actions/
    └── github-status.ts       # Server Action for GitHub status
```

---

## 🎯 Features & Usage

### 🏠 Homepage
Hero section with animated pins, terminal boot sequence, and sliding status badge.

### 📟 Terminal Boot
Top-right of hero. Types out system info followed by `whoami` profile.

### 🖼️ Project Cards
"Selected Operations" section. Polaroid frames with blueprint wireframe overlay on hover.

### 🤖 AI Chatbot
Bottom-right robot icon. Click to chat with the "Portfolio Agent" about Shreya's background using Google Gemini.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| AI | Vercel AI SDK v6 + Google Gemini 2.0 Flash |
| Infrastructure | Docker, GitHub Actions |
| Monitoring | Sentry |
| Package Manager | Bun |

---

## 📄 License

MIT © Shreya Gupta
