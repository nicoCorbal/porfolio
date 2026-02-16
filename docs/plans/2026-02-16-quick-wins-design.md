# Quick Wins — Phase 1 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Fix all high-impact, low-effort SEO/conversion issues identified in the web analysis report.

**Architecture:** Direct edits to existing Astro components, locale JSON files, and static assets. No new pages or structural changes.

**Tech Stack:** Astro, i18next JSON locales, EmailJS, Tailwind CSS

---

### Task 1: Schema.org Fix

**Files:**
- Modify: `src/pages/[lang]/index.astro:33-54`

**Step 1: Replace organizationSchema**

Replace the entire `organizationSchema` object (lines 33-54) with:

```typescript
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "name": "OSIX Tech",
  "url": "https://osix.tech",
  "logo": "https://osix.tech/logo_w.png",
  "description": seoDescription,
  "telephone": "+34 648935068",
  "email": "info@osix.tech",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Santiago del Estero, 2-4 1G",
    "addressLocality": "Santiago de Compostela",
    "addressRegion": "Galicia",
    "postalCode": "15702",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.8782,
    "longitude": -8.5448
  },
  "areaServed": [
    { "@type": "Country", "name": "Spain" },
    { "@type": "AdministrativeArea", "name": "Galicia" }
  ],
  "sameAs": [
    "https://github.com/osixtech",
    "https://linkedin.com/company/osixtech"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "info@osix.tech",
    "telephone": "+34 648935068",
    "availableLanguage": ["English", "Spanish"]
  }
};
```

**Step 2: Verify build**

Run: `pnpm run build`
Expected: Build succeeds without errors.

**Step 3: Commit**

```bash
git add src/pages/\[lang\]/index.astro
git commit -m "fix[seo]: correct schema.org to ES address, add LocalBusiness"
```

---

### Task 2: Email Consistency

**Files:**
- Modify: `src/components/Footer.astro:32`
- Modify: `src/components/kted/KTEDContact.astro:47`
- Modify: `src/components/kted/variants/ContactA.astro:83,89`

**Step 1: Fix Footer.astro**

Line 32: change `'osixtechteam@gmail.com'` → `'info@osix.tech'`

**Step 2: Fix KTEDContact.astro**

Line 47: change `contact@osix.tech` → `info@osix.tech`

**Step 3: Fix ContactA.astro**

Lines 83 and 89: change `contact@osix.tech` → `info@osix.tech`

**Step 4: Commit**

```bash
git add src/components/Footer.astro src/components/kted/KTEDContact.astro src/components/kted/variants/ContactA.astro
git commit -m "fix[seo]: unify email to info@osix.tech everywhere"
```

---

### Task 3: Sitemap Cleanup

**Files:**
- Modify: `public/sitemap.xml`

**Step 1: Remove echoia and kharon entries**

Delete lines 87-141 (all 4 entries for echoia EN/ES and kharon EN/ES).

**Step 2: Add TAKE project entries**

After the Nessie Spanish entry, add:

```xml
  <!-- Project: TAKE (English) -->
  <url>
    <loc>https://osix.tech/en/projects/take</loc>
    <lastmod>2026-02-16T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="es" href="https://osix.tech/es/projects/take"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://osix.tech/en/projects/take"/>
  </url>

  <!-- Project: TAKE (Spanish) -->
  <url>
    <loc>https://osix.tech/es/projects/take</loc>
    <lastmod>2026-02-16T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://osix.tech/en/projects/take"/>
    <xhtml:link rel="alternate" hreflang="es" href="https://osix.tech/es/projects/take"/>
  </url>
```

**Step 3: Add KTED entries (6 URLs)**

Add entries for `/en/kted/a`, `/en/kted/b`, `/en/kted/c` and their ES equivalents with priority 0.9 and weekly changefreq.

**Step 4: Update all lastmod dates to `2026-02-16T00:00:00+00:00`**

**Step 5: Commit**

```bash
git add public/sitemap.xml
git commit -m "fix[seo]: clean sitemap, remove 404s, add TAKE and KTED"
```

---

### Task 4: Hero Headline Fix (double H1 + copy)

**Files:**
- Modify: `src/components/Hero.astro:19-21`
- Modify: `public/locales/en.json:13-14`
- Modify: `public/locales/es.json:13-14`

**Step 1: Merge two H1s into one in Hero.astro**

Replace lines 19-21:
```astro
<div class="flex flex-col w-full items-center md:items-start justify-end !text-black text-center z-10 hero-title">
  <h1 class="text-2xl sm:text-3xl md:text-5xl font-semibold">{t('hero.title.line1')}</h1>
  <h1 class="text-2xl sm:text-3xl md:text-5xl font-semibold mt-1 md:mt-2">{t('hero.title.line2')}</h1>
</div>
```

With:
```astro
<div class="flex flex-col w-full items-center md:items-start justify-end !text-black text-center z-10 hero-title">
  <h1 class="text-2xl sm:text-3xl md:text-5xl font-semibold">
    <span class="block">{t('hero.title.line1')}</span>
    <span class="block mt-1 md:mt-2">{t('hero.title.line2')}</span>
  </h1>
</div>
```

**Step 2: Update EN locale**

```json
"hero.title.line1": "Smart automation",
"hero.title.line2": "for real business challenges",
```

**Step 3: Update ES locale**

```json
"hero.title.line1": "Automatización inteligente",
"hero.title.line2": "para los desafíos reales de tu negocio",
```

**Step 4: Commit**

```bash
git add src/components/Hero.astro public/locales/en.json public/locales/es.json
git commit -m "fix[seo]: merge double H1 into one, improve headline copy"
```

---

### Task 5: Meta Keywords Local SEO

**Files:**
- Modify: `src/layouts/Layout.astro:33-35`

**Step 1: Update keywords defaults**

Replace the keywords default value (lines 33-35) with:

ES: `'desarrollo software, desarrollo web, desarrollo móvil, inteligencia artificial, automatización, transformación digital, OSIX Tech, tecnología, innovación, inteligencia artificial Galicia, desarrollo software Santiago de Compostela, digitalización empresas Galicia, automatización empresas España, software a medida Galicia'`

EN: `'software development, web development, mobile development, artificial intelligence, automation, digital transformation, OSIX Tech, technology, innovation, AI software Galicia Spain, custom software Santiago de Compostela, business digitalization Galicia, automation solutions Spain'`

**Step 2: Commit**

```bash
git add src/layouts/Layout.astro
git commit -m "fix[seo]: add local SEO keywords for Galicia/Santiago"
```

---

### Task 6: Phone Visible in Contact Section

**Files:**
- Modify: `src/components/StaticContactSection.astro:34-46`
- Modify: `public/locales/en.json` (add phone keys)
- Modify: `public/locales/es.json` (add phone keys)

**Step 1: Add phone entry after email entry in contact info area**

After the email `</div>` block (line 45), add:

```astro
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 bg-black flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
          </div>
          <div>
            <h4 class="font-semibold">{t('contact.phone.title')}</h4>
            <a href="tel:+34648935068" class="font-normal hover:underline">{t('contact.phone.value')}</a>
          </div>
        </div>
```

**Step 2: Add locale keys**

EN: `"contact.phone.title": "Phone"`, `"contact.phone.value": "+34 648 935 068"`
ES: `"contact.phone.title": "Teléfono"`, `"contact.phone.value": "+34 648 935 068"`

**Step 3: Commit**

```bash
git add src/components/StaticContactSection.astro public/locales/en.json public/locales/es.json
git commit -m "feat[ui]: add visible phone number to contact section"
```

---

### Task 7: Contact Form Enhancement

**Files:**
- Modify: `src/components/StaticContactSection.astro:75-121` (form)
- Modify: `src/components/StaticContactSection.astro:180-196` (EmailJS template params in script)
- Modify: `public/locales/en.json`
- Modify: `public/locales/es.json`

**Step 1: Add service dropdown after email field**

After the email `</div>` (after line 101), add:

```astro
          <div>
            <label for="service" class="block text-white mb-2">{t('contact.form.service')}</label>
            <select
              id="service"
              name="service"
              class="w-full px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
              required
            >
              <option value="" disabled selected>{t('contact.form.service.placeholder')}</option>
              <option value="Nessie">Nessie</option>
              <option value="KTED">KTED</option>
              <option value="custom">{t('contact.form.service.custom')}</option>
              <option value="web">{t('contact.form.service.web')}</option>
              <option value="other">{t('contact.form.service.other')}</option>
            </select>
          </div>
```

**Step 2: Add optional phone field after service dropdown**

```astro
          <div>
            <label for="phone" class="block text-white mb-2">{t('contact.form.phone')} <span class="text-gray-400 text-xs">({t('contact.form.optional')})</span></label>
            <input
              type="tel"
              id="phone"
              name="user_phone"
              class="w-full px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
            />
          </div>
```

**Step 3: Update EmailJS templateParams in script**

Add to the templateParams object:
```typescript
service: formData.get('service'),
user_phone: formData.get('user_phone'),
```

**Step 4: Add locale keys**

EN:
```json
"contact.form.service": "What interests you?",
"contact.form.service.placeholder": "Select a service",
"contact.form.service.custom": "Custom Development",
"contact.form.service.web": "Web Design",
"contact.form.service.other": "Other",
"contact.form.phone": "Phone",
"contact.form.optional": "optional"
```

ES:
```json
"contact.form.service": "¿Qué te interesa?",
"contact.form.service.placeholder": "Selecciona un servicio",
"contact.form.service.custom": "Desarrollo a medida",
"contact.form.service.web": "Diseño Web",
"contact.form.service.other": "Otro",
"contact.form.phone": "Teléfono",
"contact.form.optional": "opcional"
```

**Step 5: Commit**

```bash
git add src/components/StaticContactSection.astro public/locales/en.json public/locales/es.json
git commit -m "feat[ui]: add service dropdown and phone to contact form"
```

---

### Task 8: WhatsApp Floating Button

**Files:**
- Modify: `src/layouts/Layout.astro:152-153` (add before `</main>`)

**Step 1: Add WhatsApp button in Layout.astro**

Before the closing `</main>` tag (line 153), add:

```astro
    <!-- WhatsApp Floating Button -->
    <a
      href="https://wa.me/34648935068?text=Hola,%20me%20interesa%20saber%20m%C3%A1s%20sobre%20vuestros%20servicios"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      class="whatsapp-float"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
```

**Step 2: Add CSS in Layout.astro global styles**

```css
  .whatsapp-float {
    position: fixed;
    bottom: 24px;
    right: 24px;
    width: 56px;
    height: 56px;
    background: #1a1a1a;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    transition: transform 0.2s ease, background-color 0.2s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .whatsapp-float:hover {
    transform: scale(1.1);
    background: #333;
  }

  @media (max-width: 768px) {
    .whatsapp-float {
      bottom: 16px;
      right: 16px;
      width: 48px;
      height: 48px;
    }
    .whatsapp-float svg {
      width: 24px;
      height: 24px;
    }
  }
```

**Step 3: Commit**

```bash
git add src/layouts/Layout.astro
git commit -m "feat[ui]: add WhatsApp floating button (dark theme)"
```

---

### Task 9: TestOposiciones Logo

**Files:**
- Copy: `~/Downloads/testsoposiciones.svg` → `src/assets/logos/testsoposiciones.svg`
- Modify: `src/components/LogoSlider.astro:1-16`

**Step 1: Copy logo file**

```bash
cp ~/Downloads/testsoposiciones.svg src/assets/logos/testsoposiciones.svg
```

**Step 2: Add import and entry in LogoSlider.astro**

Add import:
```typescript
import testsoposicionesLogo from '../assets/logos/testsoposiciones.svg';
```

Add to logos array:
```typescript
{ src: testsoposicionesLogo.src, alt: 'TestOposiciones' },
```

**Step 3: Commit**

```bash
git add src/assets/logos/testsoposiciones.svg src/components/LogoSlider.astro
git commit -m "feat[ui]: add TestOposiciones logo to client slider"
```

---

### Task 10: Loading Screen Redirect Fix

**Files:**
- Modify: `src/pages/index.astro:50-57`

**Step 1: Investigate root cause**

The root redirect page at `src/pages/index.astro` shows "Redirecting..." text (line 81-83) and uses both `<meta http-equiv="refresh">` (line 29) and JS `window.location.replace` (line 56). The "Redirecting..." text flashes before the language-specific page loads with its own loading screen.

**Step 2: Fix by hiding body content and making redirect instant**

Replace the body content (lines 76-84) with:

```html
<body style="background: #000; margin: 0;">
  <noscript>
    <meta http-equiv="refresh" content="0; url=/en/" />
    <p style="color: white; font-family: system-ui; text-align: center; margin-top: 50px;">
      Redirecting to <a href="/en/" style="color: white;">OSIX Tech</a>...
    </p>
  </noscript>
</body>
```

This makes the redirect page show a black screen (matching the loading screen) instead of "Redirecting..." on white, so the transition to the loading screen is seamless.

**Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "fix[ui]: black redirect page to match loading screen"
```

---

### Task 11: Fix typo in bento quote

**Files:**
- Modify: `public/locales/en.json:155`

**Step 1: Fix typo**

Change `"automateds"` → `"automated"` in `bento.quote.text4`.

**Step 2: Commit**

```bash
git add public/locales/en.json
git commit -m "fix[i18n]: fix typo 'automateds' in bento quote"
```

---

### Task 12: Final verification

**Step 1: Run full build**

```bash
pnpm run build
```

Expected: Build succeeds with no errors.

**Step 2: Run preview and spot-check**

```bash
pnpm run preview
```

Check:
- Schema.org in page source (search for "addressCountry": "ES")
- Single H1 in hero
- WhatsApp button visible bottom-right
- Phone number in contact section
- Service dropdown in contact form
- TestOposiciones logo in slider
- All emails show info@osix.tech
- Redirect page shows black background
