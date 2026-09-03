# Prashan Adhikari — Developer Portfolio

<div align="center">

[![Next.js](https://img.shields.io/badge/-Next_JS_14-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/-Framer_Motion-black?style=for-the-badge&logoColor=white&logo=framer&color=0055FF)](https://www.framer.com/motion/)
[![Three.js](https://img.shields.io/badge/-Three.js-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000)](https://threejs.org/)
[![Sentry](https://img.shields.io/badge/-Sentry-black?style=for-the-badge&logoColor=white&logo=sentry&color=362D59)](https://sentry.io/)
[![Vercel](https://img.shields.io/badge/-Vercel-black?style=for-the-badge&logoColor=white&logo=vercel&color=000000)](https://vercel.com/)

**A modern, animated personal portfolio — built with Next.js 14, TypeScript, and Three.js.**

[Live Site](https://portfolio-prashan1.vercel.app/) · [LinkedIn](https://www.linkedin.com/in/prashan-adhikari-902915242/) · [GitHub](https://github.com/Prashan33)

</div>

---

## Overview

A production-grade personal portfolio built to present my engineering work, technical depth, and design sensibility in a single polished experience. It is designed for recruiters and collaborators who want to quickly understand who I am, what I can build, and how I think — without scrolling through a résumé.

The site is fully statically rendered via the Next.js App Router, animated end-to-end with Framer Motion, enhanced with interactive 3D (Three.js globe), and instrumented with Sentry for real-world error monitoring. Every section is component-driven, data-driven, and tuned for responsiveness and performance.

---

## Key Highlights

- Built on **Next.js 14 (App Router) + TypeScript** for type-safe, production-grade rendering.
- Custom **3D interactive globe** (Three.js + react-three-fiber + three-globe) with animated arcs and points.
- Rich motion design — **Framer Motion** powers scroll effects, staggered reveals, and the animated contact modal.
- Modular **Aceternity-style UI primitives** (Spotlight, Bento Grid, Pin cards, Canvas Reveal, Infinite Moving Cards, Moving Borders, Floating Navbar, Text Generate Effect).
- **Sentry** integrated on client, server, and edge runtimes for full-stack error + session replay monitoring.
- **Data-driven architecture** — all content (projects, testimonials, experience, nav) centralized in `data/index.ts`, so the UI stays pure and easy to update.
- Deployed on **Vercel** with a one-command deploy script.

---

## Why This Project Matters

A developer portfolio is more than a résumé — it is the first technical artifact a recruiter evaluates. The problem it solves:

- **Signal over noise.** Recruiters get a concise, visually strong summary of my skills and real shipped work within seconds.
- **Proof of craft.** The site itself is the work sample — animations, responsiveness, component architecture, and type safety are all on display.
- **Single source of truth.** Every project, testimonial, and experience item lives in one data file, making it easy to keep the narrative consistent across GitHub, LinkedIn, and recruiter conversations.

---

## Key Features

- **Cinematic Hero** — Triple-spotlight lighting, animated grid background, and a character-by-character text-generate headline.
- **Bento Grid About Section** — Six-tile responsive layout with profile image, tech-stack globe visualization, and embedded contact card.
- **Interactive 3D Globe** — Built with three-globe and react-three-fiber, rendering animated arcs, points, and atmospheric glow.
- **Projects Showcase** — 3D "Pin" cards with hover perspective, tech-stack pills, tech-icon stacks, and live/repo action links for every project.
- **Testimonials Carousel** — Infinite-scroll moving cards with real quotes from mentors and UNT professors.
- **Experience Cards** — Animated moving-border cards highlighting full-stack, AI, DSA, and independent development focus areas.
- **"My Approach" Section** — Three-phase developer workflow (Planning → Development → Testing) with on-hover Canvas Reveal shader effects.
- **Floating Navbar** — Scroll-aware, auto-hiding navigation anchored to page sections.
- **Animated Contact Modal** — Spring-animated popup with LinkedIn, GitHub, and one-click copy-to-clipboard email (with live "Copied!" state).
- **Error Monitoring** — Sentry wired into client, server, and edge runtimes with session replay.
- **Dark Mode by Default** — `next-themes` with system-awareness and no hydration flash.
- **Fully Responsive** — Tuned for mobile, tablet, and desktop from 360px upward.

---

## Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Framework | **Next.js 14 (App Router)** | File-based routing, SSR/SSG, metadata API |
| Language | **TypeScript 5** | Type-safe components and data contracts |
| Styling | **Tailwind CSS 3** | Utility-first styling + custom design tokens |
| Animation | **Framer Motion 11** | Page transitions, modal spring physics, stagger effects |
| 3D / WebGL | **Three.js, react-three-fiber, react-three-drei, three-globe** | Interactive globe with animated arcs |
| UI Primitives | **Aceternity UI patterns + shadcn/ui conventions** | Spotlight, Pin, Bento, Canvas Reveal, Moving Borders |
| Icons | **react-icons, @tabler/icons-react, lucide-react** | Consistent iconography across sections |
| Theming | **next-themes** | Dark-mode-first, hydration-safe |
| Lottie | **react-lottie** | Vector animations (e.g. confetti) |
| Monitoring | **@sentry/nextjs** | Client + server + edge error tracking, session replay |
| Tooling | **ESLint, PostCSS, Autoprefixer** | Code quality and CSS pipeline |
| Deployment | **Vercel** | Edge-optimized hosting, `npm run deploy` one-liner |

Each dependency was chosen deliberately — no unused boilerplate, no bloat. Three.js and Sentry are included because they deliver concrete value (the globe visualization and real production observability, respectively).

---

## How It Works

The portfolio is a single-page Next.js application composed of independent, data-driven sections rendered in sequence from `app/page.tsx`.

```
User visits site
      │
      ▼
 app/layout.tsx  ───► ThemeProvider (dark mode) + Inter font + custom SVG favicon
      │
      ▼
 app/page.tsx    ───► Composes the experience in order:
                      FloatingNav → Hero → Grid (Bento) → RecentProjects
                        → Clients (Testimonials) → Experience → Approach → Footer
      │
      ▼
 components/*    ───► Each section is a pure component that reads from data/index.ts
      │
      ▼
 components/ui/* ───► Low-level animated primitives (Spotlight, Pin, Globe, etc.)
      │
      ▼
 Sentry          ───► Captures runtime errors + session replays in production
```

**Design principle:** the UI layer never owns content. Projects, testimonials, nav links, and experience items live in [data/index.ts](data/index.ts) as typed arrays — so updating a project or adding a testimonial is a one-line change, not a UI refactor.

---

## Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, theme provider, metadata
│   ├── page.tsx            # Home page — composes all sections
│   ├── provider.tsx        # next-themes wrapper
│   ├── globals.css         # Tailwind layers + custom global styles
│   └── api/                # Sentry example route
├── components/
│   ├── Hero.tsx            # Spotlight + text-generate headline
│   ├── Grid.tsx            # Bento grid "About" section
│   ├── RecentProjects.tsx  # 3D Pin project cards
│   ├── Clients.tsx         # Infinite-scroll testimonials
│   ├── Experience.tsx      # Moving-border experience cards
│   ├── Approach.tsx        # 3-phase canvas-reveal workflow
│   ├── Footer.tsx          # Animated contact modal
│   ├── MagicButton.tsx     # Shared CTA button
│   └── ui/                 # Aceternity-style animated primitives
│       ├── BentoGrid.tsx
│       ├── CanvasRevealEffect.tsx
│       ├── FloatingNavbar.tsx
│       ├── Globe.tsx / GridGlobe.tsx
│       ├── InfiniteCards.tsx
│       ├── MovingBorders.tsx
│       ├── Pin.tsx
│       ├── Spotlight.tsx
│       └── TextGenerateEffect.tsx
├── data/
│   ├── index.ts            # Single source of truth for all content
│   ├── globe.json          # Globe geometry/config
│   └── confetti.json       # Lottie animation data
├── lib/
│   └── utils.ts            # cn() + shared helpers
├── public/                 # Images, SVG icons, tech logos
├── sentry.client.config.ts
├── sentry.server.config.ts
├── sentry.edge.config.ts
├── tailwind.config.ts
├── next.config.mjs         # Wrapped with withSentryConfig
└── tsconfig.json
```

---

## Installation and Setup

**Prerequisites:** Node.js 18+ and npm.

```bash
# 1. Clone the repo
git clone https://github.com/Prashan33/Portfolio.git
cd Portfolio

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local dev server with hot reload |
| `npm run build` | Production build (static optimization + Sentry source maps) |
| `npm run start` | Run the production build locally |
| `npm run lint` | Lint the codebase with `next lint` |
| `npm run deploy` | Deploy to Vercel production (`vercel --prod`) |

---

## Usage

- **Update projects** — edit the `projects` array in [data/index.ts](data/index.ts). Each entry accepts `title`, `des`, `img`, `tech`, `iconLists`, `liveLink`, and `repoLink`.
- **Update testimonials** — edit the `testimonials` array in the same file.
- **Update experience cards** — edit the `workExperience` array.
- **Replace images** — drop new images/icons into [public/](public/) and reference them by path.
- **Change theme colors** — customize tokens in [tailwind.config.ts](tailwind.config.ts).
- **Deploy** — push to the connected Vercel project, or run `npm run deploy`.

No backend, no CMS, no environment variables are required for a standard local run. (Sentry will run silently in development without credentials.)

---

## Future Improvements

- [ ] MDX-powered blog section for writing about projects and engineering lessons.
- [ ] Automated lighthouse + accessibility audits in CI.
- [ ] Internationalization (i18n) — English + Hindi + Nepali.
- [ ] Dynamic Open Graph images per section for richer link previews.
- [ ] Analytics dashboard (Vercel Analytics or Plausible) with engagement metrics.
- [ ] Contact form backed by a serverless route (Resend / Nodemailer) instead of mailto.
- [ ] View-transitions API for section-to-section navigation.

---

## Why This Project Stands Out

- **Real engineering, not a template fork.** Every section was wired up by hand — the component tree, the data contracts, the Sentry integration, and the animation choreography are all deliberate.
- **Type-safe top to bottom.** Content schemas are typed in `data/index.ts`, so renaming a field surfaces immediately across every component.
- **Performance-conscious.** Next.js App Router + static rendering + Tailwind JIT + hidden source maps in production = fast cold loads and small bundles.
- **Production-grade observability.** Sentry is wired on client, server, and edge runtimes — reflecting how I would approach a real-world app, not just a demo.
- **Design + code discipline.** Motion is used to reinforce content hierarchy, not to show off. Every animation has a reason.
- **Maintainable by design.** Adding a new project, testimonial, or experience card is a one-line change — the site is built to evolve alongside my career.

---

## Author

**Prashan Adhikari**
Computer Science · University of North Texas · Class of 2026

- Portfolio: [portfolio-prashan1.vercel.app](https://portfolio-prashan1.vercel.app/)
- GitHub: [@Prashan33](https://github.com/Prashan33)
- LinkedIn: [prashan-adhikari](https://www.linkedin.com/in/prashan-adhikari-902915242/)
- Email: [prashanadhikari2486@gmail.com](mailto:prashanadhikari2486@gmail.com)

Open to **software engineering internships, new-grad SWE roles, and collaboration on full-stack / AI projects** starting 2026.

---

_Last updated: September 2026_
