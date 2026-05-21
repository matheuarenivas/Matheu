# Personal Website

A portfolio site for Matheu Arenivas. Pure client-side; no backend.

## Tech stack

- **React 19** + **TypeScript** + **Vite** — UI, types, dev server, build
- **Tailwind CSS v4** — utility-first styling
- **shadcn/ui** — copy-in component primitives (built on `@base-ui`)
- **React Router v7** — client-side routing
- **Lucide** — icon set
- **Three.js / react-three-fiber** (planned) — 3D model renders

## Getting started

```bash
nvm use            # picks up Node 22 from .nvmrc
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run lint
npm run preview    # serve the production build locally
```

## Project structure

```
src/
├── App.tsx                       # route definitions
├── main.tsx                      # root mount + BrowserRouter
├── index.css                     # Tailwind + theme tokens
│
├── components/                   # site-wide shared UI
│   ├── Layout.tsx                # nav + outlet + footer wrapper
│   ├── NavBar.tsx                # responsive nav (desktop links + mobile Sheet)
│   ├── Footer.tsx
│   ├── Logo.tsx                  # logomark + name (swap LogoMark for a custom SVG)
│   └── ui/                       # shadcn primitives (button, sheet, ...)
│
├── pages/                        # routed pages (thin composers)
│   ├── Home.tsx                  # composes <Hero /> + <ProjectGrid />
│   ├── About.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
│
├── sections/                     # reusable page sections
│   ├── Hero.tsx
│   └── ProjectGrid.tsx
│
├── features/
│   └── projects/                 # everything project-related
│       ├── data.ts               # metadata for the grid card
│       ├── ProjectCard.tsx       # grid tile
│       ├── shared/
│       │   ├── ProjectShell.tsx  # common page chrome (back link, padding)
│       │   └── ProjectHero.tsx   # reusable title block
│       └── pages/
│           ├── AtvPage.tsx
│           ├── ProjectTwoPage.tsx
│           ├── ProjectThreePage.tsx
│           └── ProjectFourPage.tsx
│
└── lib/utils.ts                  # cn() helper
```

### How the home grid works

- `features/projects/data.ts` is a metadata list (one entry per project): `slug`, `title`, `tagline`, optional `span` (`'wide' | 'tall'`), and an optional `image` or `gradient` for the card background.
- `sections/ProjectGrid.tsx` renders the grid. At `lg+` the container is a `3×2` aspect frame and each tile fills its grid cell, so all tiles align exactly regardless of span.
- Below `lg`, tiles fall back to uniform squares for clean stacking.

## How to add a new project

1. Add an entry to `src/features/projects/data.ts`:
   ```ts
   {
     slug: 'my-project',
     title: 'My Project',
     tagline: 'One-line description.',
     span: 'wide',                 // optional: 'wide' or 'tall'
     gradient: 'from-... to-...',  // placeholder until you have an image
     // image: '/projects/my-project.jpg',  // drop file in public/projects/
   }
   ```
2. Create the page: `src/features/projects/pages/MyProjectPage.tsx`. Wrap content in `<ProjectShell>` and use `<ProjectHero title="..." tagline="..." />` for the title block.
3. Register the route in `src/App.tsx`:
   ```tsx
   <Route path="/my-project" element={<MyProjectPage />} />
   ```

Each project page is fully isolated — feel free to use a bespoke layout (3D scene, gallery, embedded video, etc.).

## Customization notes

- **Logo:** edit `LogoMark` in `src/components/Logo.tsx` (currently a small SVG monogram). Swap for `<img src="/logo.svg" />` or paste your own `<svg>`.
- **Theme tokens:** `src/index.css` — the `.dark` block defines all colors (background, foreground, muted, secondary, etc.) as OKLCH values.
- **Dark mode:** applied at the root in `src/main.tsx` (`document.documentElement.classList.add('dark')`).
- **Path alias:** `@/*` → `src/*` (configured in `vite.config.ts` and `tsconfig.app.json`).

## Routes

| Path           | Component         |
|----------------|-------------------|
| `/`            | Home              |
| `/about`       | About             |
| `/contact`     | Contact           |
| `/atv`         | AtvPage           |
| `/project-2`   | ProjectTwoPage    |
| `/project-3`   | ProjectThreePage  |
| `/project-4`   | ProjectFourPage   |
| `*`            | NotFound          |

## Node version

Pinned to Node 22 via `.nvmrc`. Tailwind v4 / Vite 8 / React Router 7 all require Node ≥ 20.

## Docker

A multi-stage `Dockerfile` builds the static site with Node and serves it with nginx.

```bash
docker build -t personalwebsite .
docker run --rm -p 8080:80 personalwebsite
# open http://localhost:8080
```

- Build stage: `node:22-alpine`, runs `npm ci && npm run build`
- Runtime stage: `nginx:alpine`, serves `dist/` with a SPA fallback (`try_files ... /index.html`)
  so client-side routes like `/atv` work on refresh
- Hashed assets in `/assets/` are served with `Cache-Control: public, immutable`
- Gzip is enabled for text/CSS/JS/JSON/SVG

Final image is ~25 MB.

## CI

GitHub Actions workflow at `.github/workflows/ci.yml` runs on push to `main` and on PRs:

| Job       | Steps                                                                 |
|-----------|-----------------------------------------------------------------------|
| `quality` | `npm ci` → `npm run lint` → `tsc -b` → `npm run build` → upload `dist` artifact |
| `docker`  | depends on `quality`; builds the Docker image to verify the Dockerfile (cached via GHA cache) |

Concurrency is set so a new push to the same branch cancels in-flight runs.

> **Tests:** no unit/component tests yet. When you want them, install Vitest + React Testing Library
> (`npm i -D vitest @testing-library/react @testing-library/jest-dom jsdom`) and add a `test` job
> between `quality` and `docker`.
