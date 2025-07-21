# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a multilingual portfolio/landing page for OSIX built with Astro, React, and TypeScript. The site supports English and Spanish with dynamic language routing.

## Key Technologies

- **Astro 5.7** - Static site generator with SSR support
- **React 19** - Interactive components
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Three.js/GSAP/Framer Motion** - Animations
- **EmailJS** - Contact form functionality

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

### Project Structure
- `/src/pages/[lang]/` - Dynamic language routing (en/es)
- `/src/components/` - Astro and React components
- `/src/content/` - Markdown content by language
- `/public/locales/` - Translation JSON files
- `/public/animations/` - Rive animation files

### Key Patterns
1. **Internationalization**: Browser-based language detection with manual switching
2. **Hybrid Rendering**: Mix of static and server-rendered pages using `prerender` export
3. **Component Organization**: Shared components with language props
4. **Content Management**: Markdown files organized by language in content collections

### Important Files
- `astro.config.mjs` - Vercel deployment, SSR, integrations
- `src/utils/emailjs.ts` - EmailJS configuration (requires env vars)
- `src/pages/[lang]/index.astro` - Main landing page with all sections
- `src/components/LanguageSelector.astro` - Language switching logic

## Environment Variables

The project uses EmailJS for contact forms. Required variables:
- `PUBLIC_EMAILJS_SERVICE_ID`
- `PUBLIC_EMAILJS_TEMPLATE_ID`
- `PUBLIC_EMAILJS_PUBLIC_KEY`

## Deployment

Configured for Vercel deployment with SSR adapter. The build output is optimized for Vercel's edge functions.

## Development Notes

1. **No Testing Framework**: Consider adding Vitest for unit tests
2. **No Linting/Formatting**: ESLint and Prettier are not configured
3. **Type Safety**: Some components use `.jsx` instead of `.tsx`
4. **Performance**: Videos and animations should be optimized for web delivery
5. **SEO**: Meta tags are implemented but could be enhanced with structured data

## Common Tasks

### Adding a New Language
1. Create new locale file in `/public/locales/[lang].json`
2. Add language option to `LanguageSelector.astro`
3. Create content directories in `/src/content/[lang]/`
4. Update routing logic if needed

### Modifying Sections
Main sections are in `src/pages/[lang]/index.astro`:
- Hero
- Services
- Values
- Projects
- About
- Awards
- Contact

### Working with Animations
- Rive files: `/public/animations/*.riv`
- GSAP animations: Inline in components
- Three.js: Used in specific interactive components