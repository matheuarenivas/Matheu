# Personal Website

Portfolio site for Matheu Arenivas. Pure client-side; no backend.

**Live:** deployed on [Vercel](https://vercel.com).

## Tech stack

- **React 19** + **TypeScript** + **Vite** — UI, types, dev server, build
- **Tailwind CSS v4** — utility-first styling
- **shadcn/ui** — copy-in component primitives (built on `@base-ui`)
- **React Router v7** — client-side routing
- **Lucide** + **react-icons** — icon sets (UI icons + brand logos for the tech-stack marquee)
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
├── index.css                     # Tailwind + theme tokens + marquee keyframes
│
├── components/                   # site-wide shared UI
│   ├── Layout.tsx                # nav + outlet + footer wrapper
│   ├── NavBar.tsx                # responsive nav: links, expandable "Work With Me" panel, mobile Sheet
│   ├── Footer.tsx
│   ├── Logo.tsx                  # logomark (img) + name — swap LogoMark for a custom SVG
│   ├── Marquee.tsx               # reusable CSS-only infinite horizontal marquee
│   └── ui/                       # shadcn primitives (button, sheet, navigation-menu, separator)
│
├── pages/                        # routed pages (thin composers)
│   ├── Home.tsx                  # composes <Hero /> + <TechStack /> + <ProjectGrid />
│   ├── About.tsx                 # Anduril-mission-style narrative w/ hero image
│   └── NotFound.tsx
│
├── sections/                     # reusable page sections
│   ├── Hero.tsx                  # home hero (title + tagline)
│   ├── TechStack.tsx             # infinite marquee of brand-color tech logos
│   └── ProjectGrid.tsx           # 4-tile bento grid (tall + wide + 2 squares at lg)
│
├── features/
│   └── projects/                 # everything project-related
│       ├── data.ts               # metadata for the grid card
│       ├── ProjectCard.tsx       # grid tile (Link → /:slug)
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

public/
├── Logo.svg                      # nav logo + favicon
├── me.jpeg                       # About page hero image
└── resume.pdf                    # (drop in when ready)
```

### Key sections

- **`sections/Hero.tsx`** — headline + tagline at the top of `/`.
- **`sections/TechStack.tsx`** — list of `{ name, Icon, color }` rendered through the reusable `<Marquee>` component. Logos render in their official brand colors. Edit the `techStack` array to add/remove.
- **`sections/ProjectGrid.tsx`** — at `lg+` the container is a `3×2` aspect frame and each tile fills its assigned cell, so all tiles align exactly regardless of span. Below `lg`, tiles fall back to uniform squares for clean stacking.
- **`components/NavBar.tsx`** — desktop nav with an expandable "Work With Me +" panel that slides down on hover. Email / Resume / LinkedIn links live in constants at the top of the file. Mobile collapses to a translucent Sheet drawer with the same items.
- **`pages/About.tsx`** — full-bleed hero image (`/me.jpeg`) with overlaid title, followed by alternating two-column narrative sections and a stats row. Hero path is the `HERO_IMAGE` constant at the top.

### Infinite marquee

The marquee runs via a CSS keyframe defined in `index.css`:

```css
--animate-marquee: marquee 40s linear infinite;
@keyframes marquee { to { transform: translateX(-50%); } }
```

`<Marquee>` duplicates its children once so the second copy slides into the first's slot — seamless loop. Edges are faded with a `mask-image` linear gradient. Hover pauses the animation.

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

- **Logo:** edit `LogoMark` in `src/components/Logo.tsx`. Currently renders `<img src="/Logo.svg" />`.
- **Favicon + tab title:** `index.html`.
- **Contact info:** the `EMAIL`, `RESUME_HREF`, `LINKEDIN_HREF` constants at the top of `src/components/NavBar.tsx`.
- **About hero image:** the `HERO_IMAGE` constant at the top of `src/pages/About.tsx`.
- **Tech stack list:** the `techStack` array in `src/sections/TechStack.tsx`.
- **Theme tokens:** `src/index.css` — the `.dark` block defines all colors as OKLCH values.
- **Dark mode:** applied at the root in `src/main.tsx` (`document.documentElement.classList.add('dark')`).
- **Path alias:** `@/*` → `src/*` (configured in `vite.config.ts` and `tsconfig.app.json`).

## Routes

| Path           | Component         |
|----------------|-------------------|
| `/`            | Home              |
| `/about`       | About             |
| `/atv`         | AtvPage           |
| `/project-2`   | ProjectTwoPage    |
| `/project-3`   | ProjectThreePage  |
| `/project-4`   | ProjectFourPage   |
| `*`            | NotFound          |

## Node version

Pinned to Node 22 via `.nvmrc`. Tailwind v4 / Vite 8 / React Router 7 all require Node ≥ 20.

## Deployment

Production site is on **Vercel** — pushes to `main` auto-deploy. Vercel auto-detects Vite and runs `npm run build`.

A `Dockerfile` is also included for self-hosting:

```bash
docker build -t personalwebsite .
docker run --rm -p 8080:80 personalwebsite
# open http://localhost:8080
```

- Build stage: `node:22-alpine`, runs `npm ci && npm run build`
- Runtime stage: `nginx:alpine`, serves `dist/` with a SPA fallback (`try_files ... /index.html`)
  so client-side routes like `/atv` work on refresh
- Hashed assets in `/assets/` are served with `Cache-Control: public, immutable`
- Gzip enabled for text/CSS/JS/JSON/SVG

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