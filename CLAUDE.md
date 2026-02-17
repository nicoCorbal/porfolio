# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a multilingual portfolio/landing page for OSIX built with Astro, React, and TypeScript. The site supports English and Spanish with static site generation and dynamic language routing.

## Key Technologies

- **Astro 5.7** - Static site generator (static output mode)
- **React 19** - Interactive components
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling with Plus Jakarta Sans and Orbitron fonts
- **Three.js/GSAP/Framer Motion** - Animations
- **EmailJS** - Contact form functionality
- **Rive** - Interactive animations
- **i18next** - Internationalization

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Astro CLI commands
npm run astro [command]
```

## Architecture

### Project Structure
- `/src/pages/[lang]/` - Dynamic language routing (en/es) with static generation
- `/src/components/` - Mixed Astro (.astro) and React (.jsx) components
- `/src/content/` - Markdown content organized by language with content collections
- `/src/data/` - TypeScript data files (products, services definitions)
- `/src/utils/` - Utility functions (EmailJS configuration)
- `/public/locales/` - Translation JSON files for i18next
- `/public/animations/` - Rive animation files (.riv)
- `/public/projects/` - Project images

### Key Patterns
1. **Static Generation**: Uses `prerender: true` and `getStaticPaths()` for language routes
2. **Internationalization**: i18next with JSON locale files and TypeScript data objects
3. **Mixed Components**: Astro components for layout/structure, React components for interactivity
4. **Content Collections**: Markdown files organized by language (en/es) for policy pages
5. **Data-Driven Products/Services**: Products and services defined in TypeScript with multilingual support

### Important Files
- `astro.config.mjs` - Static output, React + Tailwind integrations
- `src/i18n.ts` - i18next initialization with HTTP backend
- `src/content.config.ts` - Content collections for en/es markdown
- `src/data/products-multilingual.ts` - Product data with case studies
- `src/data/services-multilingual.ts` - Service data with highlights
- `src/pages/[lang]/index.astro` - Main landing page with all sections
- `src/layouts/Layout.astro` - Base layout with SEO, meta tags, global styles
- `tailwind.config.cjs` - Tailwind configuration with custom fonts

## Environment Variables

The project uses EmailJS for contact forms. Required variables:
- `PUBLIC_EMAILJS_SERVICE_ID`
- `PUBLIC_EMAILJS_TEMPLATE_ID`
- `PUBLIC_EMAILJS_PUBLIC_KEY`

## Component Architecture

### Layout Components
- `Layout.astro` - Base layout with meta tags, fonts, global styles
- `Header.astro` - Navigation with language support
- `Footer.astro` - Footer component
- `LoadingScreen.astro/.tsx` - Initial loading animation

### Section Components
- `Hero.astro` - Hero section with 3D logo
- `ProductosHomeSection.astro` - Products grid with links to product pages
- `ServiciosHomeSection.astro` - Services grid with links to service pages
- `CasosExitoSection.astro` - Case studies / success stories
- `AboutSection.astro` - About/team information with slider
- `StaticContactSection.astro` - Contact form with EmailJS

### Interactive Components
- `AboutSlider.jsx` - React component for team member carousel
- Most components accept `lang` prop for internationalization

## Data Management

### Products System
Products are defined in `src/data/products-multilingual.ts` with:
- Multilingual support (en/es)
- Rich metadata (features, case studies, images)
- TypeScript interfaces for type safety
- Helper functions: `getProduct()`, `getAllProducts()`, `getProductIds()`
- Product pages at `/[lang]/productos/[id]`

### Services System
Services are defined in `src/data/services-multilingual.ts` with:
- Multilingual support (en/es)
- Highlights and descriptions
- Helper functions: `getService()`, `getAllServices()`, `getServiceIds()`
- Service pages at `/[lang]/servicios/[id]`

### Content Collections
Markdown content in `src/content/[lang]/` for:
- Privacy policies
- Information security policies
- Organized by language with proper schema validation

## Styling Approach

- **Tailwind CSS** with custom font configuration
- **Global styles** in `Layout.astro` including:
  - Scrollbar hiding across all browsers
  - Markdown content styling
  - Base typography and spacing
- **Custom fonts**: Plus Jakarta Sans (primary), Orbitron (accent)
- **Responsive design** with mobile-first approach