# Project Requirements Document: Marathon Finder

The table below outlines the detailed functional requirements of **Marathon Finder**.

| Requirement ID | Description                     | User Story                                                                                         | Expected Behavior / Outcome                                                                                                       |
| -------------- | ------------------------------- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| FR001          | View upcoming marathons         | As a visitor, I want to see a list of upcoming marathons so I can plan which ones to join.         | Homepage lists marathons sorted ascending by date. Each card shows name, city, date (localized), and a link to the official site. |
| FR002          | Data source (JSON / API)        | As a developer, I want the data to come from a JSON file or public API so it stays easy to update. | MVP reads from `data/marathons.json`. Later we can swap to a fetch call to an API without changing the UI.                        |
| FR003          | Date filtering                  | As a visitor, I only want to see future events.                                                    | Past-dated items are filtered out at render time.                                                                                 |
| FR004          | Search & basic filter (phase 2) | As a visitor, I want to filter by city/country and search by name.                                 | Client-side text search and dropdown filters; combined filters reduce the visible list.                                           |
| FR005          | Accessibility                   | As a visitor using assistive tech, I need accessible components.                                   | Semantic headings, focus states, and color contrast meeting WCAG AA; links use `aria-label` where helpful.                        |
| FR006          | Responsive layout               | As a mobile user, I want a clean grid on all devices.                                              | Tailwind responsive grid with 1/2/3 columns at sm/lg breakpoints.                                                                 |
| FR007          | Performance baseline            | As a user, I want fast loads.                                                                      | Lighthouse performance score ≥ 90 on modern desktop; images & assets optimized.                                                   |
| FR008          | Error states                    | As a visitor, I want graceful fallbacks if data fails to load.                                     | If API fetch fails (future), show a non-blocking notice and a retry CTA.                                                          |
| FR009          | CI lint/type checks             | As a maintainer, I want quality gates.                                                             | `npm run lint` and `tsc --noEmit` must pass in CI.                                                                                |
| FR010          | Deployable build                | As a maintainer, I want to deploy easily.                                                          | `npm run build && npm start` works locally and on common platforms (Vercel, Azure Static Web Apps).                               |

## Non-Functional Requirements

* **Stack**: Next.js (App Router), TypeScript (strict), Tailwind CSS.
* **Style**: Minimal, accessible, card-based UI.
* **Security**: No secrets in repo. Use `.env.local` for future API keys.
* **Telemetry (optional)**: Add privacy-friendly analytics later (e.g., Vercel Analytics).
* **Internationalization (phase 2)**: Date localized via `toLocaleDateString`; future content i18n TBD.

## Success Metrics

* Time-to-first-list: < 2 seconds on mid-range laptop (dev server).
* Lighthouse Performance ≥ 90, Accessibility ≥ 95.
* < 10% bundle size increase when adding filters.

## Out of Scope (MVP)

* User accounts, registration, or payments.
* Admin CMS.
* Complex mapping/geo features.

## Acceptance Criteria (MVP)

* Running `npm run dev` serves a homepage at `/` with at least 6 major upcoming marathons loaded from `data/marathons.json`.
* Cards display **name, city, date, official link**.
* Layout responsive at 360px, 768px, 1280px.
* Lint and typecheck pass with no errors.

## Risks & Mitigations

* **Unreliable public APIs** → Ship with static JSON and an adapter layer.
* **Date localization differences** → Use `toLocaleDateString` with options; add tests.
* **Performance regression** → Keep UI lightweight; avoid client-side libraries until needed.
