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
- Shared types live in `src/types.ts`

## Styling

- **Tailwind-first**: use utility classes for all standard properties. Only use custom CSS for things Tailwind can't express (pseudo-element textures, complex gradients).
- Theme colors: `fur-cream`, `fur-light`, `fur-medium`, `fur-dark`, `fur-brown`, `fur-chocolate`, `paw-pink`, `paw-dark`, etc.
- Theme shadow: use `shadow-fur` utility (defined as `--shadow-fur` in `@theme`)
- Fuzzy text: use `[text-shadow:var(--text-shadow-fuzzy)]` arbitrary value
- Cards: add `fur-card relative overflow-hidden` for hair strand overlay via pseudo-elements
- Navbar: add `fur-navbar relative overflow-hidden` for thick fur texture via pseudo-elements
- Dividers: `hair-divider` class (only the gradient needs CSS, simple props use `@apply`)
- Inputs: `fur-input` class (only the gradient background-image)
- Buttons: use Tailwind utilities directly (`transition-all duration-200 hover:scale-105 active:scale-97`)

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
