# Cross-Linking Products, Services & Impact Pages — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Interconnect products, services, and impact/success stories with bidirectional links and dedicated impact pages.

**Architecture:** Unify case study data in `cases-multilingual.ts` as single source of truth. Products reference case IDs. Services derive related cases at build time. New `/[lang]/impacto/[id]` pages for each case. Cross-link cards on product/service/impact pages.

**Tech Stack:** Astro, React, TypeScript, Tailwind CSS, existing ProjectCarousel component.

---

### Task 1: Update cases-multilingual.ts — add new fields

**Files:**
- Modify: `src/data/cases-multilingual.ts`

**Step 1: Update interface**

Add `services`, `stats`, `images` fields to `CaseStudyData`:

```ts
export interface CaseStudyData {
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

**Step 2: Update ES case data**

Add to each case:
- `services: ['desarrollo-a-medida']` (all 6 cases)
- `stats: []` (empty placeholder — user fills in real numbers later)
- `images` — move from product caseStudy data where applicable:
  - `take`: `images: ['/projects/take/front.png', '/projects/take/home.png', '/projects/take/menu.png', '/projects/take/game.png', '/projects/take/events.png', '/projects/take/rewards.png']`
  - `consultoria`: no images
  - `iciga`: no images
  - `shearn`, `gamificacion`, `grille`: no images

**Step 3: Update EN case data**

Same additions for English cases.

**Step 4: Add helper functions**

```ts
export function getCase(id: string, lang: string = 'es'): CaseStudyData | undefined {
  return casesData[lang]?.find(c => c.id === id);
}

export function getCaseIds(): string[] {
  return casesData.es.map(c => c.id);
}

export function getCasesByProduct(productId: string, lang: string = 'es'): CaseStudyData[] {
  return (casesData[lang] || casesData.es).filter(c => c.product?.toLowerCase() === productId.toLowerCase());
}

export function getCasesByService(serviceId: string, lang: string = 'es'): CaseStudyData[] {
  return (casesData[lang] || casesData.es).filter(c => c.services.includes(serviceId));
}
```

**Step 5: Verify build**

Run: `npm run build`
Expected: Build succeeds (no consumers yet use new fields).

**Step 6: Commit**

```
feat[data]: extend cases with services, stats, images fields and helper functions
```

---

### Task 2: Update products-multilingual.ts — remove embedded caseStudy, add cases ref

**Files:**
- Modify: `src/data/products-multilingual.ts`

**Step 1: Update ProductData interface**

Remove `caseStudy?: CaseStudy` field. Remove `CaseStudy` interface. Add `cases?: string[]`.

```ts
export interface ProductData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  features: Feature[];
  cases?: string[];
  images: string[];
  video?: string;
  textColor?: 'light' | 'dark';
}
```

**Step 2: Update ES product data**

- `bond`: remove `caseStudy` block, add `cases: ['take']`
- `nessie`: remove `caseStudy` block, add `cases: ['consultoria']`
- `iris`: remove `caseStudy` block, add `cases: ['iciga']`
- `apec`, `moura`, `acta`: add nothing (no cases yet)

**Step 3: Update EN product data**

Same changes for English products.

**Step 4: Remove CaseStudy interface and Feature-only interface remains**

Delete the `CaseStudy` interface entirely.

**Step 5: Commit** (don't build yet — product page template still references old caseStudy)

```
feat[data]: replace embedded caseStudy with case ID references in products
```

---

### Task 3: Update product page — replace inline caseStudy with linked cards

**Files:**
- Modify: `src/pages/[lang]/productos/[id].astro`

**Step 1: Update imports**

Add import for cases:
```ts
import { getCasesByProduct } from '../../../data/cases-multilingual';
```

**Step 2: Get related cases in frontmatter**

After getting the product:
```ts
const relatedCases = getCasesByProduct(id, lang);
```

**Step 3: Replace CASE STUDY section**

Remove the entire `{product.caseStudy && (...)}` block. Replace with a "Success Stories" section that shows cards linking to `/impacto/[id]`:

```astro
{relatedCases.length > 0 && (
  <section class="py-16 bg-gray-50 mb-0">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
      <h2 class="text-3xl font-bold text-black mb-8 fade-up" style="--delay: 0.1s">
        {t('products.caseStudy')}
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedCases.map((cs, index) => (
          <a href={`/${lang}/impacto/${cs.id}`} class="group block bg-white border border-gray-200 p-6 hover:border-black hover:shadow-lg transition-all duration-300 fade-up" style={`--delay: ${0.2 + index * 0.1}s`}>
            <h3 class="text-xl font-bold text-black mb-1 group-hover:underline">{cs.title}</h3>
            <p class="text-sm text-gray-500 mb-3">{cs.client}</p>
            <p class="text-sm text-gray-700 line-clamp-3">{cs.summary}</p>
            <span class="inline-block mt-4 text-sm font-semibold text-black group-hover:translate-x-1 transition-transform duration-200">
              {t('caseStudies.viewMore')} →
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
)}
```

**Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds. Product pages with cases show linked cards.

**Step 5: Commit**

```
feat[ui]: replace inline case study with linked impact cards on product pages
```

---

### Task 4: Update service page — add success stories section

**Files:**
- Modify: `src/pages/[lang]/servicios/[id].astro`

**Step 1: Add imports**

```ts
import { getCasesByService } from '../../../data/cases-multilingual';
```

**Step 2: Get related cases in frontmatter**

```ts
const relatedCases = getCasesByService(id, lang);
```

**Step 3: Add success stories section between HIGHLIGHTS and CTA**

Same card pattern as product page:

```astro
{relatedCases.length > 0 && (
  <section class="py-16 bg-white mb-0">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-black mb-8 fade-up" style="--delay: 0.1s">
        {t('products.caseStudy')}
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedCases.map((cs, index) => (
          <a href={`/${lang}/impacto/${cs.id}`} class="group block bg-white border border-gray-200 p-6 hover:border-black hover:shadow-lg transition-all duration-300 fade-up" style={`--delay: ${0.2 + index * 0.1}s`}>
            {cs.product && (
              <span class="inline-block text-xs font-bold uppercase tracking-wider text-white bg-black px-2 py-0.5 mb-3">{cs.product}</span>
            )}
            <h3 class="text-xl font-bold text-black mb-1 group-hover:underline">{cs.title}</h3>
            <p class="text-sm text-gray-500 mb-3">{cs.client}</p>
            <p class="text-sm text-gray-700 line-clamp-3">{cs.summary}</p>
            <span class="inline-block mt-4 text-sm font-semibold text-black group-hover:translate-x-1 transition-transform duration-200">
              {t('caseStudies.viewMore')} →
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
)}
```

**Step 4: Verify build**

Run: `npm run build`

**Step 5: Commit**

```
feat[ui]: add success stories section to service pages
```

---

### Task 5: Add translation keys

**Files:**
- Modify: `public/locales/es.json`
- Modify: `public/locales/en.json`

**Step 1: Add ES keys**

```json
"impact.badge": "Caso de Éxito",
"impact.stats": "Impacto en Números",
"impact.results": "Resultados",
"impact.related": "Relacionado",
"impact.relatedProduct": "Producto utilizado",
"impact.relatedService": "Servicio relacionado",
"impact.cta.title": "¿Quieres resultados similares?",
"impact.cta.subtitle": "Cuéntanos tu caso y te ayudamos sin compromiso",
"impact.cta.viewAll": "Ver Todos los Casos",
"impact.cta.contact": "Contactar"
```

**Step 2: Add EN keys**

```json
"impact.badge": "Success Story",
"impact.stats": "Impact in Numbers",
"impact.results": "Results",
"impact.related": "Related",
"impact.relatedProduct": "Product used",
"impact.relatedService": "Related service",
"impact.cta.title": "Want similar results?",
"impact.cta.subtitle": "Tell us your case and we'll help you with no commitment",
"impact.cta.viewAll": "View All Cases",
"impact.cta.contact": "Contact"
```

**Step 3: Commit**

```
feat[i18n]: add impact page translation keys
```

---

### Task 6: Create impact page template

**Files:**
- Create: `src/pages/[lang]/impacto/[id].astro`

**Step 1: Create the page**

Full template with sections: hero, summary, stats, results, images, related links, CTA.

```astro
---
import Layout from '../../../layouts/Layout.astro';
import { getCase, getCaseIds } from '../../../data/cases-multilingual';
import { getProduct } from '../../../data/products-multilingual';
import { getService } from '../../../data/services-multilingual';
import LoadingScreen from '../../../components/LoadingScreen.astro';
import { ProjectCarousel } from '../../../components/ProjectCarousel';
import { LucideIcon } from '../../../components/LucideIcon';

export const prerender = true;

export async function getStaticPaths() {
  const caseIds = getCaseIds();
  const languages = ['en', 'es'];
  return languages.flatMap(lang =>
    caseIds.map(id => ({ params: { lang, id } }))
  );
}

const { id = '', lang = 'en' } = Astro.params;
const caseData = getCase(id, lang);

if (!caseData) {
  return Astro.redirect(`/${lang}/404`);
}

const translations = await import(`../../../../public/locales/${lang}.json`);
const t = (key: string) => translations.default[key] || key;

// Get related product and services
const relatedProduct = caseData.product ? getProduct(caseData.product.toLowerCase(), lang) : null;
const relatedServices = caseData.services.map(sId => getService(sId, lang)).filter(Boolean);

// SEO
const seoTitle = `${caseData.title} - ${caseData.client} | OSIX Tech`;
const seoDescription = caseData.summary.substring(0, 160);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": `https://osix.tech/${lang}/` },
    { "@type": "ListItem", "position": 2, "name": lang === 'es' ? 'Impacto' : 'Impact', "item": `https://osix.tech/${lang}/#impact` },
    { "@type": "ListItem", "position": 3, "name": caseData.title, "item": `https://osix.tech/${lang}/impacto/${id}` }
  ]
};

const jsonLd = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": seoTitle,
  "description": seoDescription,
  "url": `https://osix.tech/${lang}/impacto/${id}`,
  "inLanguage": lang,
  "breadcrumb": breadcrumbSchema
}];
---

<Layout lang={lang} title={seoTitle} description={seoDescription} pageType="website" jsonLd={jsonLd}>
  <LoadingScreen duration={1000} />

  <!-- HERO -->
  <section class="hero-section relative min-h-[400px] bg-black lg:min-h-[450px] flex items-center overflow-hidden mb-0">
    <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px); background-size: 20px 20px;"></div>
    <div class="relative z-10 px-4 sm:px-6 lg:px-10 w-full pt-20">
      <div class="max-w-3xl">
        <div class="hero-badge mb-6 opacity-0">
          <span class="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm border border-white/20">
            {t('impact.badge')}
          </span>
        </div>
        <h1 class="hero-title text-5xl md:text-7xl font-bold text-white mb-4 opacity-0">{caseData.title}</h1>
        <p class="hero-subtitle text-xl md:text-2xl text-gray-300 opacity-0">{caseData.client}</p>
      </div>
    </div>
  </section>

  <!-- SUMMARY -->
  <section class="py-16 bg-white mb-0">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="fade-up" style="--delay: 0.1s">
        <p class="text-lg text-gray-800 leading-relaxed text-justify">{caseData.summary}</p>
      </div>
    </div>
  </section>

  <!-- STATS -->
  {caseData.stats && caseData.stats.length > 0 && (
    <section class="py-16 bg-black mb-0">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-white mb-10 fade-up" style="--delay: 0.1s">
          {t('impact.stats')}
        </h2>
        <div class={`grid gap-6 ${caseData.stats.length <= 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
          {caseData.stats.map((stat, index) => (
            <div class="border border-white/20 p-8 text-center fade-up" style={`--delay: ${0.2 + index * 0.1}s`}>
              <span class="block text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</span>
              <span class="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )}

  <!-- RESULTS -->
  <section class="py-16 bg-gray-50 mb-0">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-black mb-10 fade-up" style="--delay: 0.2s">
        {t('impact.results')}
      </h2>
      <div class="grid md:grid-cols-2 gap-6">
        {caseData.results.map((result, index) => (
          <div class="flex items-start gap-4 p-6 bg-white border border-gray-200 fade-up" style={`--delay: ${0.2 + index * 0.1}s`}>
            <svg class="w-6 h-6 text-black mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-gray-800 font-medium">{result}</span>
          </div>
        ))}
      </div>
    </div>
  </section>

  <!-- IMAGES -->
  {caseData.images && caseData.images.length > 0 && (
    <section class="py-16 bg-white mb-0">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        <ProjectCarousel images={caseData.images} projectTitle={caseData.title} client:load />
      </div>
    </section>
  )}

  <!-- RELATED -->
  {(relatedProduct || relatedServices.length > 0) && (
    <section class="py-16 bg-gray-50 mb-0">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-black mb-8 fade-up" style="--delay: 0.1s">
          {t('impact.related')}
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          {relatedProduct && (
            <a href={`/${lang}/productos/${relatedProduct.id}`} class="group block bg-white border border-gray-200 p-6 hover:border-black hover:shadow-lg transition-all duration-300 fade-up" style="--delay: 0.2s">
              <span class="text-xs font-bold uppercase tracking-wider text-gray-500">{t('impact.relatedProduct')}</span>
              <h3 class="text-xl font-bold text-black mt-2 group-hover:underline">{relatedProduct.title}</h3>
              <p class="text-sm text-gray-600 mt-1">{relatedProduct.tagline}</p>
            </a>
          )}
          {relatedServices.map((service, index) => (
            <a href={`/${lang}/servicios/${service.id}`} class="group block bg-white border border-gray-200 p-6 hover:border-black hover:shadow-lg transition-all duration-300 fade-up" style={`--delay: ${0.3 + index * 0.1}s`}>
              <span class="text-xs font-bold uppercase tracking-wider text-gray-500">{t('impact.relatedService')}</span>
              <h3 class="text-xl font-bold text-black mt-2 group-hover:underline">{service.title}</h3>
              <p class="text-sm text-gray-600 mt-1">{service.tagline}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )}

  <!-- CTA -->
  <section class="py-16 bg-black">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
      <h2 class="text-3xl font-bold text-white mb-4">{t('impact.cta.title')}</h2>
      <p class="text-lg text-gray-50 mb-8">{t('impact.cta.subtitle')}</p>
      <div class="flex justify-center gap-4 flex-wrap">
        <a href={`/${lang}/#impact`} class="inline-flex text-black items-center border border-white bg-white hover:bg-black hover:text-white px-6 py-3 text-base font-semibold text-center transition-all duration-300 w-full sm:w-auto">
          {t('impact.cta.viewAll')}
        </a>
        <a href={`/${lang}/#contact`} class="inline-flex items-center border border-white hover:bg-white hover:text-black text-white px-6 py-3 font-semibold text-center transition-all duration-300 w-full sm:w-auto">
          {t('impact.cta.contact')}
        </a>
      </div>
    </div>
  </section>
</Layout>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const initializeAnimations = () => {
      setTimeout(() => { document.querySelector('.hero-badge')?.classList.add('animate'); }, 200);
      setTimeout(() => { document.querySelector('.hero-title')?.classList.add('animate'); }, 400);
      setTimeout(() => { document.querySelector('.hero-subtitle')?.classList.add('animate'); }, 600);

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      setTimeout(() => {
        document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
      }, 1200);
    };

    if ((window as any).isLoadingComplete) {
      initializeAnimations();
    } else {
      window.addEventListener('loadingComplete', initializeAnimations);
    }
  });
</script>

<style>
  .hero-badge { opacity: 0; transform: translateX(-30px); transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); }
  .hero-badge.animate { opacity: 1; transform: translateX(0); }
  .hero-title { opacity: 0; transform: translateX(-100px) skewX(-5deg); transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1); }
  .hero-title.animate { opacity: 1; transform: translateX(0) skewX(0); }
  .hero-subtitle { opacity: 0; transform: translateX(100px); transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1); }
  .hero-subtitle.animate { opacity: 1; transform: translateX(0); }
  .fade-up { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); transition-delay: var(--delay, 0s); }
  .fade-up.in-view { opacity: 1; transform: translateY(0); }
  .hero-section { animation: heroReveal 1s cubic-bezier(0.22, 1, 0.36, 1); }
  @keyframes heroReveal { from { opacity: 0; } to { opacity: 1; } }
</style>
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds. New `/impacto/` pages generated for all 6 cases x 2 languages = 12 pages.

**Step 3: Commit**

```
feat[ui]: add individual impact/success story pages
```

---

### Task 7: Make homepage impact cards clickable

**Files:**
- Modify: `src/components/ImpactCardSwap.jsx`

**Step 1: Wrap card content in a link**

The component receives `cases` but not `lang`. Add `lang` prop and wrap content in an `<a>`:

```jsx
export default function ImpactCardSwap({ cases, lang = 'es' }) {
  return (
    <div className="impact-swap-wrapper">
      <CardSwap
        width={380}
        height={440}
        cardDistance={50}
        verticalDistance={55}
        delay={3000}
        pauseOnHover={true}
        swapOnClick={false}
        skewAmount={4}
        easing="elastic"
      >
        {cases.map((cs) => (
          <Card key={cs.id} customClass="impact-card">
            <a href={`/${lang}/impacto/${cs.id}`} className="impact-card-inner impact-card-link">
              {cs.product && (
                <span className="impact-card-product">{cs.product}</span>
              )}
              <h3 className="impact-card-title">{cs.title}</h3>
              <p className="impact-card-client">{cs.client}</p>
              <p className="impact-card-summary">{cs.summary}</p>
              <ul className="impact-card-results">
                {cs.results.slice(0, 3).map((r, i) => (
                  <li key={i}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {r}
                  </li>
                ))}
              </ul>
            </a>
          </Card>
        ))}
      </CardSwap>
    </div>
  );
}
```

Note: set `swapOnClick: false` since clicking now navigates.

**Step 2: Update CasosExitoSection.astro**

Pass `lang` prop to `ImpactCardSwap`:

```astro
<ImpactCardSwap client:visible cases={cases} lang={lang} />
```

**Step 3: Add CSS for link styling**

In `CasosExitoSection.astro` styles, add:

```css
.impact-cards :global(.impact-card-link) {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
```

**Step 4: Verify build**

Run: `npm run build`

**Step 5: Commit**

```
feat[ui]: make homepage impact cards clickable links to impact pages
```

---

### Task 8: Final build verification

**Step 1: Full build**

Run: `npm run build`
Expected: All pages generated, no errors.

**Step 2: Dev server check**

Run: `npm run dev`
Manually verify:
- Product page (e.g. `/es/productos/bond`) shows "Caso de Exito" card linking to `/es/impacto/take`
- Service page (e.g. `/es/servicios/desarrollo-a-medida`) shows all 6 case cards
- Impact page (e.g. `/es/impacto/take`) shows hero, summary, results, images, related product/service links
- Homepage impact cards are clickable
- English versions all work

**Step 3: Commit if any fixes needed**

```
fix[ui]: address build/visual issues from cross-linking integration
```
