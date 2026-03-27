# Furbbook

The social network for good dogs. Made of hair.

## Stack

- [Astro](https://astro.build/) — static site generator
- [React](https://react.dev/) — interactive components
- [TypeScript](https://www.typescriptlang.org/) — type safety
- [Tailwind CSS 4](https://tailwindcss.com/) — styling via `@tailwindcss/vite`
- [Biome](https://biomejs.dev/) — linting and formatting
- [Lefthook](https://github.com/evilmartians/lefthook) — git hooks

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server |
| `npm run build` | Build static site to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run check` | Run Astro checks + Biome |
| `npm run format` | Auto-format with Biome |
| `npm run lint` | Lint with Biome |

## Strings

All user-facing text lives in `src/i18n/en.json`.

## Deploy

The site deploys to GitHub Pages via the workflow in `.github/workflows/deploy.yml`. Push to `main` to trigger a deploy. Make sure GitHub Pages is set to deploy from **GitHub Actions** in repo settings.
