# OSIX Tech - Portfolio & Landing Page

Multilingual portfolio and landing page for [OSIX Tech](https://osix.tech), built with Astro, React, and Three.js. Supports English and Spanish with static site generation.

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Astro 5.7 (static output) |
| **UI** | React 19, Tailwind CSS |
| **3D & Animation** | Three.js, GSAP, Framer Motion, Rive |
| **i18n** | i18next with HTTP backend |
| **Contact** | EmailJS (serverless) |
| **Deployment** | GitHub Pages via GitHub Actions |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables

Create a `.env` file with:

```env
PUBLIC_EMAILJS_SERVICE_ID=your_service_id
PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Project Structure

```
src/
├── pages/
│   ├── index.astro                 # Root redirect + language detection
│   └── [lang]/                     # Dynamic routes (en/es)
│       ├── index.astro             # Main landing page
│       ├── privacy.astro           # Privacy policy
│       ├── projects/[id].astro     # Project detail pages
│       └── kted/[variant].astro    # KTED landing variants
├── components/
│   ├── Hero.astro                  # Hero with 3D logo
│   ├── OsixLogo3D.jsx             # Three.js interactive logo
│   ├── BentoGridSection.astro      # Services bento grid
│   ├── ProjectsSection.astro       # Projects showcase
│   ├── AboutSection.astro          # Team section
│   ├── StaticContactSection.astro  # Contact form (EmailJS)
│   ├── kted/                       # KTED-specific components
│   └── ui/                         # Radix UI primitives
├── data/
│   └── projects-multilingual.ts    # Project definitions (en/es)
├── content/
│   ├── en/                         # English markdown content
│   └── es/                         # Spanish markdown content
└── utils/
    ├── emailjs.js                  # EmailJS config
    └── analytics.ts                # GA4 tracking
public/
├── locales/                        # i18next translation JSONs
├── animations/                     # Rive .riv files
└── projects/                       # Project images & videos
```

## Sections

- **Hero** - Interactive 3D OSIX logo (Three.js) with CTA buttons
- **Logo Slider** - Partner/client logo carousel
- **Services (Bento Grid)** - 12-column grid with metrics, quotes, flip cards, and animations
- **Projects** - Showcase of TAKE (mobile loyalty app), Nessie (AI document assistant), and KTED (Data Spaces)
- **Team** - Team member carousel
- **Contact** - Form with EmailJS integration and validation

## Internationalization

Routes are generated statically for both `en` and `es` via `getStaticPaths()`. Translations live in `/public/locales/{lang}.json` and are loaded by i18next at runtime. Content collections in `/src/content/{lang}/` handle markdown pages.

## Deployment

Automatic deployment to GitHub Pages on push to `master` via the `.github/workflows/deploy.yml` workflow:

1. Builds static site with `withastro/action@v4`
2. Deploys to GitHub Pages with `actions/deploy-pages@v4`

## SEO

- Open Graph & Twitter Card meta tags
- JSON-LD structured data (Organization, WebPage, BreadcrumbList)
- Language alternates (hreflang)
- Sitemap & robots.txt
- Google Analytics 4
