# CLAUDE.md

## Project

Furbbook — a Facebook-style social network for dogs. The visual aesthetic is that the entire site is made of hair/fur (hairy textures, fuzzy edges, strand patterns).

## Tech

- Astro 5 with React 19 integration, static output
- TypeScript (strict), Tailwind CSS 4 via `@tailwindcss/vite`
- Biome for linting/formatting, Lefthook for pre-commit hooks

## Conventions

- **Fat arrow functions only** — no `function` declarations
- **All user-facing strings** go in `src/i18n/en.json`, never hardcoded in components
- Components import strings from `../i18n/en.json` and reference them by key
- React components live in `src/components/`, Astro pages in `src/pages/`, layouts in `src/layouts/`

## Styling

- Use Tailwind utility classes with the custom theme colors (`fur-cream`, `fur-light`, `fur-medium`, `fur-dark`, `fur-brown`, `fur-chocolate`, `paw-pink`, `paw-dark`, etc.)
- Cards use `fur-card fur-shadow` classes for the hairy texture effect
- Navbar uses `fur-navbar` class for thick fur texture
- Headings can use `fuzzy-text` for a soft fuzzy look
- Dividers use `hair-divider` class
- Inputs use `fur-input` class for subtle strand texture
- Interactive elements use `paw-button` class

## Commands

```bash
npm run dev       # dev server
npm run build     # static build
npm run check     # astro check + biome check
npm run format    # biome format
npm run lint      # biome lint
```

## Build

Builds statically to `dist/`. Deployed to GitHub Pages via `.github/workflows/deploy.yml` on push to `main`. Base path is `/fb-for-dogs`.
