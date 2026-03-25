# AUREX AI 2026 Website

Official event website for **AUREX AI 2026** — a modern, responsive landing and registration experience built with React, TypeScript, Vite, and Tailwind CSS.

## Overview

This project showcases the full event journey:
- Hero and event highlights
- About and module sections
- Timeline, competitions, speakers, and workshops
- Event details and footer
- Multi-step registration flow (`/register`)

The UI uses a polished, animated style powered by `framer-motion` and a component system based on Radix UI + shadcn/ui patterns.

## Tech Stack

- **Frontend:** React 18, TypeScript
- **Build Tool:** Vite 5
- **Routing:** React Router
- **Styling:** Tailwind CSS
- **UI Primitives:** Radix UI
- **Animation:** Framer Motion
- **State/Data Utilities:** TanStack Query
- **Testing:** Vitest + Testing Library
- **Linting:** ESLint

## Project Structure

- `src/pages` — route pages (`Index`, `Register`, `NotFound`)
- `src/components` — site sections and reusable UI
- `src/components/ui` — shared UI primitives
- `src/hooks` — custom hooks
- `src/lib` — utility helpers
- `src/test` — test setup and specs
- `public` — static assets

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or Bun)

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open the local URL shown in terminal (typically `http://localhost:5173`).

## Available Scripts

- `npm run dev` — start local development server
- `npm run build` — create production build
- `npm run build:dev` — build in development mode
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint
- `npm run test` — run tests once
- `npm run test:watch` — run tests in watch mode

## Deployment

Build the app and deploy the generated `dist/` folder to any static hosting provider:

```bash
npm run build
```

Examples: Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any CDN/static host.

## Quality & Maintenance

Recommended workflow before merging changes:

1. `npm run lint`
2. `npm run test`
3. `npm run build`

## License

This repository currently does not define a license. Add a `LICENSE` file if you plan to distribute or open-source the project.

## Contact

For event-related updates, use the official AUREX AI communication channels or repository maintainers.
