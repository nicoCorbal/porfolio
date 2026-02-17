# Cross-Linking Products, Services & Impact Pages

## Data Model

### cases-multilingual.ts (single source of truth)
```ts
interface CaseStudyData {
  id: string;
  title: string;
  client: string;
  summary: string;
  product?: string;
  services: string[];
  stats: { label: string; value: string }[];
  images?: string[];
  results: string[];
}
```

### products-multilingual.ts
- Remove `caseStudy` embedded field from ProductData
- Add `cases?: string[]` — array of case IDs
- Products reference cases by ID, no duplicate data

### services-multilingual.ts
- No schema change
- Related cases derived at build time: `cases.filter(c => c.services.includes(serviceId))`

## Case Mappings

| Case | Product | Services |
|------|---------|----------|
| take | bond | desarrollo-a-medida |
| consultoria | nessie | desarrollo-a-medida |
| iciga | iris | desarrollo-a-medida |
| shearn | — | desarrollo-a-medida |
| gamificacion | — | desarrollo-a-medida |
| grille | — | desarrollo-a-medida |

Stats: TBD by user (placeholder structure added).

## New Page: /[lang]/impacto/[id].astro

Sections:
1. Hero — black bg, dot pattern, title + client badge
2. Summary — description text
3. Stats — grid of stat cards (value + label)
4. Results — checkmark list
5. Images — ProjectCarousel reuse
6. Related Links — product/service cards
7. CTA — contact

## Cross-Links

**Product pages**: Replace embedded caseStudy with "Success Stories" card section linking to /impacto/[id]
**Service pages**: Add "Success Stories" card section after highlights
**Impact pages**: "Related" section with product + service cards
**Homepage**: ImpactCardSwap cards become clickable links to /impacto/[id]

## Translations

New keys in en.json/es.json for impact page labels, stats title, related section title.
