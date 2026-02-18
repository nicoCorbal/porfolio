# Service Pages Conversion Refactor — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Convert service pages into high-conversion funnel pages with Beams WebGL hero, problem→solution→stats→cases flow.

**Architecture:** Extend ServiceData with problem/solution/stats fields, remove kted. Create BeamsBackground React component rendered via client:only="react". Rewrite [id].astro sections to conversion funnel layout. No new translation keys needed — reuse existing.

**Tech Stack:** Astro, React, Three.js, @react-three/fiber, @react-three/drei, Tailwind CSS

---

### Task 1: Install @react-three/drei

**Files:**
- Modify: `package.json`

**Step 1: Install dependency**

Run: `npm install @react-three/drei`

**Step 2: Verify installation**

Run: `npm ls @react-three/drei`
Expected: Shows version installed under project

**Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat[deps]: add @react-three/drei for Beams background"
```

---

### Task 2: Create BeamsBackground component

**Files:**
- Create: `src/components/BeamsBackground.jsx`

**Step 1: Create the component**

Create `src/components/BeamsBackground.jsx` with the Beams component adapted from react-bits. The component:
- Uses `forwardRef`, `useImperativeHandle`, `useEffect`, `useRef`, `useMemo` from React
- Uses `Canvas`, `useFrame` from `@react-three/fiber`
- Uses `PerspectiveCamera` from `@react-three/drei`
- Uses `degToRad` from `three/src/math/MathUtils.js`
- Contains `extendMaterial()` helper that creates a custom ShaderMaterial extending MeshStandardMaterial
- Contains GLSL noise functions (random, noise, cnoise with permute/taylorInvSqrt/fade)
- Contains `Beams` component with props: `beamWidth=2`, `beamHeight=15`, `beamNumber=12`, `lightColor='#ffffff'`, `speed=2`, `noiseIntensity=1.75`, `scale=0.2`, `rotation=0`
- Contains `createStackedPlanesBufferGeometry()` for merged plane geometry
- Contains `MergedPlanes`, `PlaneNoise`, `DirLight` sub-components
- Canvas wrapper has `dpr={[1, 2]}` and `frameloop="always"`
- Export default is `Beams`

Full source from: https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/content/Backgrounds/Beams/Beams.jsx

**Important:** Do NOT use the CSS file. Instead, inline the single CSS rule as a style on the Canvas or use Tailwind `relative w-full h-full` on the container.

The Canvas wrapper should use `className="relative w-full h-full"` instead of the `.beams-container` CSS class.

**Step 2: Verify dev server loads**

Run: `npm run dev`
Expected: No build errors. Component not yet used on any page.

**Step 3: Commit**

```bash
git add src/components/BeamsBackground.jsx
git commit -m "feat[ui]: add BeamsBackground WebGL component"
```

---

### Task 3: Extend ServiceData and remove kted

**Files:**
- Modify: `src/data/services-multilingual.ts`

**Step 1: Update interface**

Add to `ServiceData` interface:
```ts
problem: string;
solution: string;
stats: { value: string; label: string }[];
```

**Step 2: Remove kted entries**

Delete the `kted` object from both `es` and `en` records in `servicesData`.

**Step 3: Add problem/solution/stats to each service (es)**

For `desarrollo-a-medida` (es):
```ts
problem: 'Tu negocio pierde tiempo y dinero con procesos manuales, herramientas genéricas que no encajan y oportunidades que la tecnología podría capturar.',
solution: 'Analizamos tu operativa real, identificamos qué se puede automatizar con IA y construimos software 100% a medida que resuelve exactamente tu problema.',
stats: [
  { value: '+50', label: 'proyectos entregados' },
  { value: '100%', label: 'software a medida' },
  { value: '<4 sem', label: 'primer entregable' },
  { value: '98%', label: 'satisfacción cliente' },
],
```

For `consultoria-transformacion` (es):
```ts
problem: 'Sabes que tu empresa podría funcionar mejor con tecnología, pero no sabes por dónde empezar ni en quién confiar.',
solution: 'Visitamos tu empresa, entendemos cómo trabajáis de verdad y en menos de una semana te entregamos un plan de acción concreto con estimación de ahorro.',
stats: [
  { value: '<1 sem', label: 'informe entregado' },
  { value: '0€', label: 'si no necesitas nada' },
  { value: '+30', label: 'empresas analizadas' },
  { value: '100%', label: 'honestidad garantizada' },
],
```

For `consultoria-innovacion` (es):
```ts
problem: 'Hay ayudas públicas que encajan con tu empresa, pero las convocatorias son complejas y preparar el proyecto requiere tiempo que no tienes.',
solution: 'Identificamos las ayudas que encajan contigo y nos encargamos de diseñar el proyecto, preparar la memoria técnica y toda la documentación para maximizar la aprobación.',
stats: [
  { value: '+2M€', label: 'en ayudas gestionadas' },
  { value: '85%', label: 'tasa de aprobación' },
  { value: '+20', label: 'convocatorias dominadas' },
  { value: '0€', label: 'si no se aprueba' },
],
```

**Step 4: Add problem/solution/stats to each service (en)**

For `desarrollo-a-medida` (en):
```ts
problem: 'Your business loses time and money on manual processes, generic tools that don\'t fit, and opportunities that technology could capture.',
solution: 'We analyze your real operations, identify what can be automated with AI, and build 100% custom software that solves exactly your problem.',
stats: [
  { value: '+50', label: 'projects delivered' },
  { value: '100%', label: 'custom software' },
  { value: '<4 wks', label: 'first deliverable' },
  { value: '98%', label: 'client satisfaction' },
],
```

For `consultoria-transformacion` (en):
```ts
problem: 'You know your company could work better with technology, but you don\'t know where to start or who to trust.',
solution: 'We visit your company, understand how you actually work, and in less than a week deliver a concrete action plan with savings estimates.',
stats: [
  { value: '<1 wk', label: 'report delivered' },
  { value: '€0', label: 'if you don\'t need anything' },
  { value: '+30', label: 'companies analyzed' },
  { value: '100%', label: 'honesty guaranteed' },
],
```

For `consultoria-innovacion` (en):
```ts
problem: 'There are public grants that fit your company, but the calls are complex and preparing the project takes time you don\'t have.',
solution: 'We identify the grants that fit you and handle everything: project design, technical report, and all documentation to maximize approval.',
stats: [
  { value: '+€2M', label: 'in grants managed' },
  { value: '85%', label: 'approval rate' },
  { value: '+20', label: 'calls mastered' },
  { value: '€0', label: 'if not approved' },
],
```

**Step 5: Verify build**

Run: `npm run build`
Expected: Build succeeds. kted service pages will no longer be generated.

**Step 6: Commit**

```bash
git add src/data/services-multilingual.ts
git commit -m "feat[data]: extend ServiceData with problem/solution/stats, remove kted"
```

---

### Task 4: Rewrite service page to conversion funnel

**Files:**
- Modify: `src/pages/[lang]/servicios/[id].astro`

**Step 1: Update the frontmatter**

Keep existing imports. Add import for BeamsBackground:
```ts
import BeamsBackground from '../../../components/BeamsBackground.jsx';
```

Remove `pullQuote`/`restDescription` splitting logic — no longer needed. Keep everything else (service fetch, relatedCases, otherServices, translations, SEO, schemas).

**Step 2: Rewrite the Hero section**

Replace the current hero. Key changes:
- Remove the dot-grid background div
- Add `<div class="absolute inset-0 z-0"><BeamsBackground client:only="react" beamNumber={8} speed={1.5} noiseIntensity={1.5} scale={0.15} rotation={0} /></div>`
- Keep same text layout: badge, h1 (service.title), p (service.tagline), CTA link
- Keep same animation classes (hero-badge, hero-title, hero-subtitle, hero-cta)

```astro
<!-- HERO -->
<section class="hero-section relative min-h-[400px] bg-black lg:min-h-[450px] flex items-center overflow-hidden mb-0" style="margin-top: var(--header-h, 0px)">
  <div class="absolute inset-0 z-0">
    <BeamsBackground client:only="react" beamNumber={8} speed={1.5} noiseIntensity={1.5} scale={0.15} rotation={0} />
  </div>
  <div class="relative z-10 px-4 sm:px-6 lg:px-10 w-full pt-20">
    <div class="max-w-3xl">
      <div class="hero-badge mb-6 opacity-0">
        <span class="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm border border-white/20">
          <LucideIcon name={service.icon} className="text-white" size={16} client:load />
          {lang === 'es' ? 'Servicio' : 'Service'}
        </span>
      </div>
      <h1 class="hero-title text-5xl md:text-7xl font-bold text-white mb-4 opacity-0">{service.title}</h1>
      <p class="hero-subtitle text-xl md:text-2xl text-gray-300 mb-6 opacity-0">{service.tagline}</p>
      <a href={`/${lang}/#contact`} class="hero-cta inline-flex items-center gap-2 text-white text-sm font-medium hover:text-gray-300 transition-colors opacity-0">
        {t('services.tellUsYourCase')} →
      </a>
    </div>
  </div>
</section>
```

**Step 3: Add Problem section**

```astro
<!-- PROBLEM -->
<section class="py-20 bg-white mb-0">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="fade-up" style="--delay: 0.1s">
      <p class="text-2xl md:text-3xl text-gray-900 font-light leading-relaxed">{service.problem}</p>
    </div>
  </div>
</section>
```

**Step 4: Add Solution section**

Reuse the numbered highlights UI from the current page. Lead with `service.solution`, then numbered highlights.

```astro
<!-- SOLUTION -->
<section class="py-16 bg-gray-50 mb-0">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="fade-up" style="--delay: 0.1s">
      <p class="text-lg text-gray-700 leading-relaxed mb-12">{service.solution}</p>
    </div>
    <div class="relative">
      <div class="absolute left-6 top-0 bottom-0 w-px bg-gray-200 hidden md:block"></div>
      {service.highlights.map((highlight, index) => (
        <div class="flex items-start gap-6 mb-8 last:mb-0 fade-up" style={`--delay: ${0.2 + index * 0.12}s`}>
          <div class="relative z-10 flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white border border-gray-200">
            <span class="text-lg font-bold text-gray-300 font-['Orbitron',sans-serif]">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <div class="pt-2">
            <p class="text-gray-800 font-medium text-lg">{highlight}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

**Step 5: Add Stats section**

```astro
<!-- STATS -->
<section class="py-16 bg-white mb-0">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
      {service.stats.map((stat, index) => (
        <div class="text-center fade-up" style={`--delay: ${0.1 + index * 0.1}s`}>
          <p class="text-4xl md:text-5xl font-bold text-black font-['Orbitron',sans-serif] mb-2">{stat.value}</p>
          <p class="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

**Step 6: Add Cases section (conditional)**

Only renders if `relatedCases.length > 0`. Show up to 3 cases with richer cards.

```astro
<!-- CASES -->
{relatedCases.length > 0 && (
  <section class="py-16 bg-gray-50 mb-0">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-black mb-8 fade-up" style="--delay: 0.1s">
        {t('products.caseStudy')}
      </h2>
      <div class="space-y-4">
        {relatedCases.slice(0, 3).map((cs, index) => (
          <a href={`/${lang}/impacto/${cs.id}`} class="group block bg-white border border-gray-200 p-8 hover:border-black hover:shadow-lg transition-all duration-300 fade-up" style={`--delay: ${0.2 + index * 0.1}s`}>
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-black group-hover:underline mb-1">{cs.title}</h3>
                <p class="text-sm text-gray-500 mb-3">{cs.client}</p>
                <p class="text-gray-600 text-sm leading-relaxed line-clamp-2">{cs.summary}</p>
              </div>
              {cs.stats && cs.stats.length > 0 && (
                <div class="flex gap-2 flex-wrap sm:flex-col sm:items-end flex-shrink-0">
                  {cs.stats.slice(0, 3).map(stat => (
                    <span class="inline-flex items-center px-3 py-1 bg-black text-white text-xs font-medium">
                      {stat.value}
                    </span>
                  ))}
                </div>
              )}
            </div>
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

**Step 7: Keep CTA and Other Services sections**

CTA section stays identical to current. Other services strip stays identical.

**Step 8: Keep script and style blocks**

Keep the existing `<script>` (hero animation cascade + intersection observer) and `<style>` blocks unchanged.

**Step 9: Verify dev server**

Run: `npm run dev`
Navigate to `http://localhost:4321/es/servicios/desarrollo-a-medida`
Expected: Beams background animates in hero, Problem→Solution→Stats→Cases→CTA sections render correctly.

**Step 10: Commit**

```bash
git add src/pages/[lang]/servicios/[id].astro
git commit -m "feat[ui]: rewrite service pages to conversion funnel layout with Beams hero"
```

---

### Task 5: Visual QA and polish

**Files:**
- Possibly touch: `src/pages/[lang]/servicios/[id].astro`, `src/components/BeamsBackground.jsx`

**Step 1: Check all 3 service pages**

Navigate to each in dev server:
- `/es/servicios/desarrollo-a-medida`
- `/es/servicios/consultoria-transformacion`
- `/es/servicios/consultoria-innovacion`
- `/en/servicios/desarrollo-a-medida` (check EN too)

Verify:
- Beams renders without console errors
- Problem text is readable
- Stats grid aligns on mobile and desktop
- Cases section shows for desarrollo-a-medida, hides for others
- CTA button works (scrolls to contact)
- Other services strip shows remaining 2 services (not 3)
- No kted anywhere

**Step 2: Check mobile responsiveness**

Resize to mobile widths. Verify:
- Beams still renders (may be performance-heavy — acceptable)
- Stats grid becomes 2-col on mobile
- All text readable without overflow

**Step 3: Production build**

Run: `npm run build`
Expected: No errors. kted pages not generated.

**Step 4: Fix any issues found, commit**

```bash
git add -A
git commit -m "fix[ui]: polish service page conversion layout"
```
