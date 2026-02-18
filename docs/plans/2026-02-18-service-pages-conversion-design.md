# Service Pages Conversion Refactor — Design

## Goal
Convert service pages into maximum-conversion pages with Beams WebGL hero background, problem→solution funnel, stats, and expanded case studies.

## Data Model Changes

Remove `kted` from `services-multilingual.ts`.

Extend `ServiceData`:
```ts
interface ServiceData {
  // existing: id, title, tagline, description, icon, image, highlights
  problem: string;
  solution: string;
  stats: { value: string; label: string }[];
}
```

## Page Structure

1. **Hero** — Beams WebGL bg (Three.js/R3F), existing text layout (badge, h1, tagline, CTA link)
2. **Problem** — White bg, large emotional pain-point text from `service.problem`
3. **Solution** — Gray bg, `service.solution` lead + numbered highlights (reused from current)
4. **Stats** — White bg, 3-4 column grid with large value/label pairs from `service.stats[]`
5. **Cases** — Renders only if cases exist. Richer cards: title, client, stat badges, summary, link. Max 3.
6. **CTA** — Black bg, heading + subtitle + white button → `/#contact`
7. **Other Services** — Horizontal strip (unchanged)

## New Component

`src/components/BeamsBackground.jsx` — Wrapper around react-bits Beams. Uses `@react-three/fiber` + `@react-three/drei`. Rendered via `client:only="react"`.

## Files

| File | Action |
|------|--------|
| `src/data/services-multilingual.ts` | Extend interface, add fields, remove kted |
| `src/pages/[lang]/servicios/[id].astro` | Rewrite to conversion funnel |
| `src/components/BeamsBackground.jsx` | New |

## Unchanged
- Hero animation cascade
- fade-up intersection observer
- SEO structured data
- Other services strip
- Layout/LoadingScreen
