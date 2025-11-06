# Copilot Instructions — Marathon Finder

## Project Name

**Marathon Finder**

## What This App Is

A minimal, fast Next.js site that lists upcoming major marathons with basic filtering. MVP reads from a local JSON file; later we may fetch from a public API.

## Technologies

* **Framework**: Next.js (App Router)
* **Language**: TypeScript (strict mode)
* **Styling**: Tailwind CSS
* **Package Manager**: npm
* **Testing (phase 2)**: Vitest + Testing Library (components), Playwright (E2E)
* **CI**: GitHub Actions for lint, typecheck, (later) tests

## Goals For Copilot

1. Prefer **simple, idiomatic App Router** code with server components where possible.
2. Keep the UI **accessible (WCAG AA)** and **responsive** without heavy libs.
3. Maintain **strict TypeScript** and **ESLint** compliance out of the box.
4. Make it easy to **swap the data source** (JSON → API) via a small data-access layer.

## Coding Conventions & Best Practices

* **TypeScript**

  * Enable strict mode. Provide explicit types for functions and props.
  * Use `zod` (phase 2) for runtime validation if we start consuming remote data.
* **Next.js**

  * Use the **App Router** (`app/`) with server components by default.
  * Keep the homepage as a server component importing JSON at build/runtime.
  * If/when we fetch from an API, use `fetch()` in a server component with caching set appropriately (`{ next: { revalidate: 3600 } }` when public).
* **Tailwind CSS**

  * Keep classlists concise; avoid unnecessary wrappers.
  * Prefer utility-first; extract to components only when repetition emerges.
  * Respect contrast and focus states. Use `rounded-2xl`, `shadow-sm`, and adequate spacing (`p-4+`).
* **Accessibility**

  * Semantic headings (`h1` once per page).
  * Links have clear text; add `aria-label` only when needed.
  * Don’t rely on color alone to convey meaning.
* **Performance**

  * Avoid client-side libraries until needed (no global state libs for MVP).
  * Keep images external and lazy if added later.
* **Testing (phase 2)**

  * Unit test pure functions (date filtering/sorting).
  * Component tests for card rendering and empty/error states.
  * E2E: verify filtering + navigation.
* **Project Hygiene**

  * No secrets committed. Use `.env.example` to document vars if we add APIs.
  * Commit messages: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`.
  * Keep PRs small and focused.

## File Layout (MVP)

```
/app
  /globals.css           # Tailwind base
  /page.tsx              # Server component: renders list
/data
  /marathons.json        # Source of truth (MVP)
/docs
  /prd.md                # Project Requirements Document
  /copilot.md            # This instruction file
```

## Tasks Copilot Can Start With

1. Create the `data` folder and `marathons.json` with 6–10 major events (date in ISO).
2. Implement the homepage list (server component) with sorting & future-only filter.
3. Add a small data-access function (e.g., `getMarathons()`), returning typed data.
4. Add a simple text search (client component) and filter by city/country (phase 2).
5. Add basic tests for sorting/filtering (phase 2).

## Definition of Done (MVP)

* `npm run dev` shows a responsive, accessible grid of upcoming marathons.
* Type check and lint pass with zero errors.
* No runtime warnings in console.
