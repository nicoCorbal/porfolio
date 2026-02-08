# Informe de Analisis Web — osix.tech

## Fecha del analisis
7 de febrero de 2026

## Resumen ejecutivo

La web de OSIX Tech es actualmente un **portfolio tecnico bien ejecutado visualmente** pero que funciona como escaparate corporativo, no como generador de leads. El problema principal es estructural: **la web solo tiene 1 pagina principal (home) que intenta servir a todos los publicos y a todas las lineas de negocio a la vez**, sin landing pages especificas ni rutas de conversion diferenciadas. De las 8 lineas de negocio activas, solo 2 tienen presencia minima (Nessie y TAKE como proyectos en portfolio) y 1 tiene landing page propia (KTED — bien ejecutada). Las 5 restantes son invisibles en la web. El lenguaje esta orientado a la tecnologia, no al dolor del cliente. No hay WhatsApp flotante, no hay blog, no hay pagina de casos de exito, y el schema.org dice que la empresa esta en Estados Unidos en lugar de Espana. La base tecnica (Astro, i18n, SEO basico) es solida y permite escalar rapidamente; el deficit es de contenido y estructura comercial, no de tecnologia.

---

## 1. Inventario de contenido actual

### 1.1 URLs activas y funcionales

| URL | Titulo | Tipo | Meta description |
|-----|--------|------|------------------|
| `/` | Redirect | Redirect a `/en/` o `/es/` segun idioma del navegador | — |
| `/en/` | OSIX Tech - AI-Powered Software Development & Automation | Homepage | "Leaders in custom software development, AI automation, and digital transformation..." |
| `/es/` | OSIX Tech - Desarrollo de Software & Automatizacion con IA | Homepage | "Lideres en desarrollo de software personalizado, automatizacion con IA..." |
| `/en/projects/nessie` | Nessie - AI Assistant | Pagina de proyecto | Descripcion del producto |
| `/es/projects/nessie` | Nessie - Asistente IA | Pagina de proyecto | Descripcion del producto |
| `/en/projects/take` | TAKE App - Mobile Application | Pagina de proyecto | Descripcion del producto |
| `/es/projects/take` | TAKE App - Aplicacion Movil | Pagina de proyecto | Descripcion del producto |
| `/en/kted/a` | Data Spaces Kit - Up to 30,000EUR grant | Landing KTED variante A | SEO keywords especificos |
| `/es/kted/a` | Kit Espacios de Datos - Hasta 30,000EUR de subvencion | Landing KTED variante A | SEO keywords especificos |
| `/en/kted/b` y `/es/kted/b` | Idem variante B | Landing KTED | Idem |
| `/en/kted/c` y `/es/kted/c` | Idem variante C | Landing KTED | Idem |
| `/en/privacy` | Privacy Policy | Legal | — |
| `/es/privacy` | Politica de Privacidad | Legal | — |

**Total: 14 paginas funcionales** (7 en cada idioma, contando las 3 variantes KTED como 1 logica).

### 1.2 URLs en sitemap que devuelven 404

| URL | Estado |
|-----|--------|
| `/en/projects/echoia` | **404** |
| `/es/projects/echoia` | **404** |
| `/en/projects/kharon` | **404** |
| `/es/projects/kharon` | **404** |

**Hallazgo critico:** El sitemap.xml declara 4 URLs que no existen. Esto perjudica la reputacion del sitio ante Google.

### 1.3 URLs que NO estan en el sitemap pero deberian

- `/en/projects/take` y `/es/projects/take` — Existen pero no estan en el sitemap.
- `/en/kted/a`, `/en/kted/b`, `/en/kted/c` (y sus equivalentes en ES) — No estan en el sitemap.

### 1.4 Mapa del sitio actual vs optimo

```
ACTUAL                              OPTIMO (segun especificacion)
/                                   /
/en/ (home todo-en-uno)             /en/ (home como filtro rapido)
/es/ (home todo-en-uno)             /es/ (home como filtro rapido)
/en/projects/nessie                 /en/nessie-oficina (landing)
/en/projects/take                   /en/nessie-industrial (landing)
/en/kted/[a|b|c]                    /en/espacios-de-datos (landing, ya ~existe)
/en/privacy                         /en/fidelizacion-hosteleria (landing)
                                    /en/desarrollo-a-medida (landing)
                                    /en/renovacion-web (landing)
                                    /en/casos-de-exito (portfolio)
                                    /en/sobre-nosotros (empresa)
                                    /en/blog (contenido SEO)
                                    /en/projects/nessie (detalle proyecto)
                                    /en/projects/take (detalle proyecto)
                                    /en/privacy (legal)
[NO EXISTE]                         [Sitemap.xml limpio y actualizado]
```

---

## 2. Analisis de la Home

### 2.1 Headline

**Actual (ES):** "Automatizacion Inteligente para desafios reales"
**Actual (EN):** "AI-powered automation for real-world problems"

**Diagnostico:** El headline es **aceptable pero generico**. Describe lo que OSIX hace en terminos tecnologicos, no en terminos de resultado para el cliente. Un visitante no tecnico no sabe que significa "automatizacion inteligente". No menciona para quien es (B2B, empresas gallegas, industria...).

**Deberia ser algo como:** "Hacemos que tu empresa trabaje mas rapido con inteligencia artificial" o "Soluciones de IA y desarrollo a medida para empresas".

### 2.2 Bloques de entrada por servicio

**No existen.** La home salta directamente del hero a un logo slider y despues a una seccion de "Nuestros Servicios" que contiene:
- Historia de la empresa ("Origen, Vision y Ambicion") — texto corporativo
- 4 valores abstractos: "Seguridad por defecto", "IA Integrada", "Software Adaptado", "Escalabilidad desde la base"
- 2 categorias de servicio: "Sistemas Impulsados por IA" y "Automatizacion de Procesos"
- Una estadistica (42% aumento de productividad) sin fuente ni contexto
- Citas motivacionales aleatorias (Alan Kay, Tony Hsieh, etc.)

**Hallazgo critico:** No hay "puertas de entrada" claras que dirijan a las diferentes lineas de negocio. Un dueno de cafeteria, un director de planta industrial y un gerente de consultoria ven exactamente la misma pagina sin saber cual es su camino. Las dos categorias de servicio ("AI-Driven Systems" y "Process Automation") son demasiado abstractas para generar identificacion.

### 2.3 Social proof

**Parcial.** Existe un logo slider con: AVTE, ICIGA, IGAPE, IR, Shearn, TAKE.

**Problemas:**
- No aparecen los clientes mas relevantes: **Nueva Pescanova, Instituto Relacional, Grupo +Suarez, Academia NOS, TestOposiciones/Postal 3**
- No hay testimonios ni frases de clientes
- Los logos no tienen contexto — un visitante no sabe que relacion tiene OSIX con cada logo (cliente? partner? sponsor?)
- IGAPE aparece como "partner" cuando en realidad es el organismo que financia el proyecto

### 2.4 CTA visible sin scroll

**Si existe**, pero limitado. Hay dos botones en el hero:
- "Ver Proyectos" (scroll a seccion de proyectos)
- "Contactar" (scroll a seccion de contacto)

**Problema:** Ambos son acciones internas (scroll), no CTAs de conversion. "Ver Proyectos" no convierte leads. "Contactar" es generico. Deberia haber un CTA orientado a la accion del visitante: "Cuentanos tu caso", "Hablemos de tu proyecto", etc.

### 2.5 WhatsApp flotante

**No existe.** No hay ningun componente de WhatsApp en toda la web. Ni flotante, ni en el footer, ni en la seccion de contacto.

### 2.6 Antipatrones presentes

| Antipatron | Presente? | Detalle |
|-----------|-----------|---------|
| Lista de tecnologias | **No** (bien) | No aparecen Python, React, etc. en la home |
| Sliders genericos | **Si** (parcial) | El logo slider es aceptable, pero las citas aleatorias son relleno sin valor de conversion |
| Descripcion larga del equipo | **Si** | 7 miembros del equipo con cargo tecnico y bio en la home (no en pagina separada) |
| Todo mezclado sin jerarquia | **Si** | La home es: Hero > Logos > Historia/Valores/Servicios/Metricas/Citas (mezclados en bento grid) > Proyectos > Equipo > Contacto. No hay jerarquia clara de "que hago > para quien > prueba > contacto" |

### 2.7 Test de los 5 segundos

**Resultado: FALLA.** En 5 segundos el visitante ve:
1. Un logo 3D animado (impresionante pero no comunica nada)
2. "Automatizacion Inteligente para desafios reales"
3. Dos botones ("Ver Proyectos", "Contactar")

**Lo que NO sabe:** Que OSIX hace software a medida, que trabaja con industria/hosteleria/consultoras, que tiene productos concretos, que esta en Galicia, ni por que deberia quedarse.

---

## 3. Analisis de Landing Pages

### 3.1 Inventario de landing pages necesarias vs existentes

| Landing page necesaria | Existe? | URL actual | Estado |
|----------------------|---------|------------|--------|
| Nessie Oficina (gestion documental IA) | **NO** | Solo existe `/projects/nessie` como ficha de portfolio | Pagina de producto, no landing de conversion |
| Nessie Industrial (IA para planta) | **NO** | No existe ninguna referencia | Gap total |
| KTED / Espacios de Datos | **SI** | `/es/kted/a` (y variantes b, c) | **Bien ejecutada** — la mejor pagina de toda la web |
| Fidelizacion hosteleria (TAKE/Fika) | **NO** | Solo existe `/projects/take` como ficha de portfolio | Pagina de producto, no landing de conversion |
| Desarrollo a medida / Consultoria IA | **NO** | No existe | Gap total |
| Webs baratas / Renovacion web | **NO** | No existe | Gap total |

**Resultado: 1 de 6 landing pages necesarias existe (KTED).** Deficit del 83%.

### 3.2 Analisis de la pagina de KTED (la que si funciona)

La landing de KTED es **significativamente mejor que el resto de la web**:

**Aciertos:**
- Headline orientado al beneficio: "Hasta 30.000EUR de subvencion"
- Urgencia clara: "Plazo abierto hasta 31 marzo 2026"
- Social proof con numeros: "100% Exito", "+50 Proyectos", "24h Respuesta"
- Proceso en 5 pasos claros
- FAQ que resuelve objeciones ("No hay desembolso inicial", "No es competitiva")
- Formulario con campos relevantes (nombre, empresa, email, telefono, sector, mensaje)
- Logos institucionales (Red.es, NextGenerationEU)
- Sistema de variantes A/B/C para testing
- SEO keywords especificos

**Esto demuestra que el equipo SABE hacer landing pages efectivas. El problema es que no se ha replicado para las demas lineas.**

### 3.3 Analisis de paginas de proyecto (Nessie y TAKE)

Estas son **fichas de portfolio**, no landing pages de conversion:

**Nessie (`/projects/nessie`):**
- Titulo: "Habla con tus documentos. Encuentra respuestas, no archivos" — buen tagline
- Lista de features tecnicas (busqueda semantica, formatos multiples, etc.)
- Casos de uso mencionados brevemente (consultorias, industria, equipos grandes)
- **No hay formulario de contacto especifico**
- **No hay caso de exito real** (no menciona Pescanova, IR, ni +Suarez)
- **No hay diferenciacion Nessie Oficina vs Nessie Industrial**
- **No hay CTA de baja friccion** — solo "Ver Mas Proyectos" y "Contactar"

**TAKE (`/projects/take`):**
- Descripcion de app de cafeteria con features (menu, juego, wallet, dashboard)
- **Marca TAKE, no marca OSIX** — parece pagina del producto, no caso de exito de OSIX
- Precio: "$0 USD" — confuso, no es relevante aqui
- **No hay enlace a la app real ni evidencia de uso**

### 3.4 URLs

Las URLs actuales de proyecto (`/projects/nessie`) son razonables para portfolio pero no para landing pages. Las landing deberian tener URLs descriptivas como `/nessie-oficina`, `/nessie-industrial`, `/fidelizacion-hosteleria`.

---

## 4. Analisis de Casos de Exito

### 4.1 Pagina dedicada de casos de exito

**No existe.** No hay seccion de portfolio con mini-casos, ni pagina `/casos` o `/portfolio`.

### 4.2 Presencia de casos en la web actual

La seccion de "Proyectos" en la home muestra 3 tarjetas en carrusel:
1. TAKE App — Aplicacion Movil
2. Nessie — Asistente IA
3. KTED — Espacios de Datos

**Problemas:**
- Son descripciones de producto, no casos de exito (no hay: sector, problema, solucion, resultado)
- No aparecen los proyectos mas relevantes para generar confianza:
  - **Nueva Pescanova** (industria alimentaria — proyecto en marcha)
  - **Instituto Relacional** (consultoria — cliente piloto Nessie)
  - **Grupo +Suarez** (consultoria — cliente piloto Nessie)
  - **Academia NOS** (educacion — multiples desarrollos)
  - **TestOposiciones / Postal 3** (educacion — gamificacion para 3.700 usuarios)
  - **Grille Cooperativa** (agroalimentario — evaluacion de empleados)
- No hay datos concretos: ni metricas, ni testimonios, ni resultados medibles
- KTED aparece como "proyecto" cuando es un servicio de consultoria

---

## 5. Analisis Tecnico SEO

### 5.1 Meta tags

| Elemento | Estado | Detalle |
|----------|--------|---------|
| `<title>` | OK | Presente y diferenciado por idioma |
| `<meta description>` | OK pero generico | "Leaders in custom software development, AI automation, and digital transformation" — muy amplio |
| `<meta keywords>` | Presente | "software development, web development, mobile development, artificial intelligence, automation..." — demasiado generico, sin keywords locales |
| `<meta robots>` | OK | "index, follow, max-image-preview:large..." |
| `<link canonical>` | OK | Implementado correctamente |
| `<link hreflang>` | OK | en/es con x-default a /en/ |

### 5.2 Estructura de headings (Home)

```
H1: "Automatizacion Inteligente para desafios reales" (duplicado — dos H1 en la misma seccion)
H2: "Nuestros Servicios"
H3: "Origen, Vision y Ambicion" (dentro de servicios)
H3: Titulos de tarjetas de servicio
H2: "Nuestros Proyectos"
H2: "Nuestro Equipo"
H2: "Nuestro Contacto"
```

**Problemas:**
- **Doble H1** en el hero (dos lineas separadas como H1 en vez de un solo H1)
- Los headings no contienen keywords de busqueda relevantes
- No hay H2/H3 optimizados para SEO local ("desarrollo software Santiago de Compostela", etc.)

### 5.3 Structured Data / Schema.org

**Implementado pero con errores:**

```json
{
  "@type": "Organization",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"  // ERROR: deberia ser "ES"
  }
}
```

**Hallazgo critico:** El schema.org declara que OSIX Tech esta en **Estados Unidos** en lugar de Espana. Esto perjudica gravemente el SEO local en Galicia/Espana.

**Otros problemas del schema:**
- No hay `LocalBusiness` schema (importante para SEO local)
- No hay `PostalAddress` completa (falta calle, ciudad, CP)
- No hay `areaServed` para Galicia/Espana
- El `contactPoint` dice "sales" pero el email es `contact@osix.tech` (diferente al `info@osix.tech` visible en la web)
- No hay `Service` schema por cada linea de negocio

### 5.4 Velocidad de carga (estimacion por peso del codigo)

**Factores de riesgo:**
- Three.js cargado en el hero para el logo 3D — **peso significativo** para un elemento decorativo
- GSAP y Framer Motion tambien cargados
- Loading screen de 1 segundo obligatoria antes de ver contenido
- Google Analytics y gtag cargados en el head (bloqueante)

**Positivos:**
- Astro genera HTML estatico (SSG) — rapido por defecto
- Imagenes procesadas a WebP
- Sin framework CSS pesado (Tailwind se purga)

### 5.5 Responsive / Movil

**Implementado** con breakpoints en Tailwind. La bento grid se reorganiza a una sola columna en movil. El logo 3D se oculta en pantallas pequenas.

**Problemas potenciales:**
- El bento grid tiene `min-height: 250px` forzado en movil para cada celda — puede resultar en scroll muy largo
- Las tarjetas con efecto flip requieren hover, que no funciona en movil tactil
- No se oculta el scrollbar en toda la web (`scrollbar-width: none`) — decision de diseno cuestionable para UX

### 5.6 Sitemap.xml y robots.txt

**Sitemap:**
- Existe en `https://osix.tech/sitemap.xml`
- Contiene 4 URLs que dan 404 (echoia, kharon)
- Faltan URLs de KTED y TAKE

**Robots.txt:**
- Bien configurado
- Bloquea crawlers de scraping (AhrefsBot, SemrushBot, etc.) — esto impide analizar la competencia pero tambien impide que estas herramientas indexen la web. Puede ser intencional.

### 5.7 Open Graph y Twitter Cards

**Bien implementados:**
- og:type, og:url, og:title, og:description, og:image con dimensiones
- Twitter Card con summary_large_image
- @osixtech como site y creator

**Problema:** La imagen OG es `/favicon.png` — deberia ser una imagen de 1200x630 con branding profesional, no un favicon.

### 5.8 SEO Local

**Practicamente inexistente:**

| Elemento SEO local | Estado |
|-------------------|--------|
| Google Business Profile | No verificable desde la web |
| Direccion fisica en schema.org | **Incorrecta** (dice "US") |
| Ciudad/region en keywords | **No** — "Santiago de Compostela" no aparece en meta keywords |
| NAP consistente (Name, Address, Phone) | **No** — no hay telefono en ninguna parte |
| Keywords locales en headings | **No** — ningun H1/H2 menciona Galicia ni Santiago |
| Paginas optimizadas para busquedas locales | **No** |
| Schema LocalBusiness | **No** |

**Keywords objetivo no capturados:**
- "empresa inteligencia artificial Galicia" — no hay contenido orientado
- "desarrollo software Santiago de Compostela" — no se menciona
- "app a medida Galicia" — no se menciona
- "digitalizacion empresas Galicia" — no se menciona
- "ayudas espacios de datos Espana" — solo en KTED (bien)
- "fidelizacion hosteleria app" — no hay contenido

---

## 6. Analisis de Copywriting

### 6.1 Orientacion del lenguaje

**Orientado a la tecnologia, no al cliente.** Ejemplos concretos:

| Texto actual | Problema | Alternativa orientada al cliente |
|-------------|----------|----------------------------------|
| "Automatizacion Inteligente para desafios reales" | Abstracto, no dice para quien | "Tu empresa mas eficiente con inteligencia artificial" |
| "Sistemas Impulsados por IA" | Jerga tecnica | "Asistentes inteligentes para tu equipo" |
| "Automatizacion de Procesos" | Generico | "Elimina tareas repetitivas y ahorra horas cada semana" |
| "Origen, Vision y Ambicion" | Autocentrado | Deberia ser sobre el cliente, no sobre OSIX |
| "Escalabilidad desde la base" | Jerga | No relevante para el visitante objetivo |
| "Seguridad por defecto" | Feature tecnica | "Tus datos protegidos siempre" |

### 6.2 Jerga para no-tecnicos

La seccion de servicios usa terminos que un dueno de cafeteria, un gerente de gestorias o un director de planta no entiende:
- "asistentes inteligentes" (aceptable)
- "analitica predictiva" (no entendido por publico general)
- "modelos de lenguaje" (no entendido)
- "operacional efficiency" (ingles corporativo generico)

### 6.3 Tono

**Inconsistente.** Mezcla de:
- Tono startup/tech ("bold vision with technical excellence")
- Tono corporativo generico ("delivering solutions that build trust and create lasting impact for clients and investors")
- Citas motivacionales genericas (Alan Kay, Tony Hsieh)
- Texto de la seccion "Our History" que parece escrito para inversores, no para clientes

**La landing de KTED** tiene un tono completamente diferente (directo, orientado a beneficios concretos). Deberia ser el modelo para toda la web.

### 6.4 CTAs

| CTA | Ubicacion | Problema |
|-----|-----------|----------|
| "Ver Proyectos" | Hero | No convierte leads — solo navega |
| "Contactar" | Hero | Generico, sin orientar a la accion |
| "Enviar Mensaje" | Formulario de contacto | Aceptable pero frio |
| "Visit Nessie page" | Pagina de Nessie | Autoenlace, no CTA de conversion |
| "Ver Mas Proyectos" | Paginas de proyecto | No convierte |
| "Solicitar informacion" | Landing KTED | **Bien** — baja friccion |

---

## 7. Analisis de Conversion

### 7.1 Formularios de contacto

| Formulario | Ubicacion | Campos | Problema |
|-----------|-----------|--------|----------|
| Formulario principal | Home (seccion contacto) | Nombre, Email, Mensaje | **Muy generico** — no pregunta que servicio interesa, no segmenta leads |
| Formulario KTED | Landing KTED | Nombre, Email, Empresa, Telefono, Sector, Mensaje | **Bien** — recoge informacion util para cualificacion |

**Hallazgo:** Solo hay 2 formularios en toda la web. El principal no recoge informacion util para cualificacion de leads (no pregunta empresa, telefono, ni que servicio interesa).

### 7.2 Vias de contacto

| Via | Presente? | Detalle |
|-----|-----------|---------|
| Formulario web | Si | Solo en home y KTED |
| Email | Si | info@osix.tech visible en contacto |
| Telefono | **No** | No hay telefono en ninguna parte |
| WhatsApp | **No** | No existe |
| Chat en vivo | **No** | No existe |
| LinkedIn | Si | En schema.org pero no visible como boton de contacto |
| Redes sociales en footer | **No** | Solo links a GitHub y LinkedIn en schema, no visibles |

### 7.3 Flujo de conversion

```
Visitante llega a la home
  → Ve logo 3D animado (1 segundo de carga obligatoria)
  → Lee headline generico
  → Scroll largo hasta seccion de servicios (abstracta)
  → Mas scroll hasta proyectos (3 tarjetas en carrusel)
  → Mas scroll hasta equipo (7 bios tecnicas)
  → Mas scroll hasta formulario de contacto (nombre, email, mensaje)
  → Enviar
```

**Problemas del flujo:**
1. **Loading screen de 1 segundo** antes de ver cualquier contenido — friccion innecesaria
2. **No hay segmentacion** — todos los visitantes hacen el mismo recorrido
3. **El formulario esta al final** de un scroll muy largo
4. **No hay "atajos"** para visitantes que ya saben lo que quieren
5. **No hay lead magnet** ni incentivo para dejar datos
6. **No hay pagina de "gracias"** despues de enviar el formulario — solo un mensaje inline
7. **No hay tracking de conversion** diferenciado (el formulario de la home y el de KTED van por el mismo EmailJS)

### 7.4 Friccion en el proceso

| Punto de friccion | Impacto |
|-------------------|---------|
| Loading screen obligatoria (1s) | Abandono temprano |
| No hay CTA above the fold orientado a conversion | Visitante no sabe que hacer |
| Scroll largo hasta el formulario | Pierde visitantes por el camino |
| Formulario no pregunta que servicio interesa | Lead no cualificado |
| No hay telefono ni WhatsApp | El visitante que prefiere llamar no puede |
| No hay respuesta inmediata post-formulario (no hay chatbot/auto-reply) | El visitante no sabe si funciono |

---

## 8. Gap Analysis Consolidado

### 8.1 Tabla comparativa

| Elemento | Existe | Deberia existir | Gap | Impacto en leads |
|----------|--------|-----------------|-----|------------------|
| Landing page Nessie Oficina | No | Si | **CRITICO** | Alto |
| Landing page Nessie Industrial | No | Si | **CRITICO** | Alto |
| Landing page KTED | **Si** | Si | OK | — |
| Landing page fidelizacion hosteleria | No | Si | **ALTO** | Medio |
| Landing page desarrollo a medida | No | Si | **ALTO** | Alto |
| Landing page webs baratas | No | Si | **ALTO** | Medio |
| WhatsApp flotante | No | Si | **ALTO** | Alto |
| Pagina de casos de exito | No | Si | **ALTO** | Alto |
| Blog / recursos | No | Si | **MEDIO** | Medio (largo plazo) |
| Pagina Sobre Nosotros separada | No | Si | **MEDIO** | Bajo |
| Formulario inteligente (campo "que te interesa") | No | Si | **ALTO** | Alto |
| Telefono visible | No | Si | **ALTO** | Alto |
| Schema.org correcto (pais ES) | No | Si | **CRITICO** | Alto (SEO) |
| SEO local (keywords Galicia/Santiago) | No | Si | **ALTO** | Alto |
| Logos de clientes reales (Pescanova, IR) | Parcial | Si | **MEDIO** | Medio |
| Testimonios de clientes | No | Si | **MEDIO** | Medio |
| Imagen OG profesional (1200x630) | No | Si | **MEDIO** | Medio |
| Sitemap.xml limpio | No | Si | **MEDIO** | Medio (SEO) |
| Home con bloques de entrada por servicio | No | Si | **CRITICO** | Alto |
| Headline orientado a resultado | Parcial | Si | **ALTO** | Alto |
| AwardsSection visible | No (comentada) | Si | **BAJO** | Bajo |
| Equipo en pagina separada (no en home) | No | Si | **BAJO** | Bajo |
| Google Business Profile | No verificable | Si | **ALTO** | Alto (SEO local) |
| Redes sociales visibles en footer | No | Si | **BAJO** | Bajo |

### 8.2 Quick Wins (alto impacto, bajo esfuerzo)

Estos cambios se pueden hacer en **1-3 dias** con el stack actual:

1. **Corregir schema.org: cambiar "US" a "ES"** y anadir direccion completa de Santiago de Compostela. Anadir schema `LocalBusiness`. (30 minutos — impacto SEO inmediato)

2. **Anadir WhatsApp flotante** con mensaje pre-rellenado tipo "Hola, me interesa..." en todas las paginas. (2-3 horas — impacto directo en leads)

3. **Limpiar sitemap.xml**: eliminar echoia y kharon, anadir TAKE y KTED. (30 minutos)

4. **Anadir campo "Que te interesa?" al formulario de contacto** con dropdown de servicios (Nessie, KTED, Desarrollo a medida, Webs, Otro). Anadir campo de telefono opcional. (2-3 horas)

5. **Cambiar headline del hero** a algo orientado al resultado: "Tu empresa, mas eficiente con inteligencia artificial" o "Soluciones de IA y desarrollo a medida para empresas". (15 minutos)

6. **Anadir numero de telefono** en el header y en la seccion de contacto. (30 minutos)

7. **Anadir meta keywords locales**: "inteligencia artificial Galicia", "desarrollo software Santiago de Compostela", "digitalizacion empresas Galicia". (30 minutos)

8. **Cambiar imagen OG** de favicon.png a una imagen profesional de 1200x630 con branding. (1 hora)

9. **Actualizar logos de partners/clientes** para incluir nombres reconocibles: Nueva Pescanova, Instituto Relacional, etc. Con texto "Empresas que confian en nosotros". (1-2 horas)

10. **Eliminar loading screen** o reducirla a 300ms maximo. Un segundo de pantalla en negro antes de ver contenido es friction gratuita. (30 minutos)

### 8.3 Cambios Estructurales (alto impacto, mayor esfuerzo)

Estos requieren **1-4 semanas** de trabajo:

#### Prioridad 1: Landing pages de servicio (1-2 semanas)

Crear landing pages siguiendo el modelo de KTED para:
1. **Nessie Oficina** (`/nessie-oficina`) — la linea con clientes pilotos reales
2. **Nessie Industrial** (`/nessie-industrial`) — por Nueva Pescanova
3. **Desarrollo a medida / Consultoria IA** (`/desarrollo-a-medida`) — la linea generica
4. **Fidelizacion hosteleria** (`/fidelizacion`) — por la campana local
5. **Webs baratas** (`/webs`) — por la campana de vibe coding

Cada una con: dolor → solucion → caso/prueba → formulario con campos relevantes.

El equipo ya demostro con KTED que sabe hacer esto. Es cuestion de replicar la estructura con contenido diferente.

#### Prioridad 2: Redisenar la Home como filtro rapido (3-5 dias)

Sustituir el bento grid de servicios abstractos por **3-4 bloques visuales claros** que funcionen como puertas de entrada:
- "Tengo documentos que nadie encuentra" → Nessie
- "Quiero fidelizar a mis clientes" → Fidelizacion
- "Necesito ayuda con IA" → Consultoria
- "Mi web da vergüenza" → Webs

Cada bloque con una frase de dolor y un enlace a la landing correspondiente.

#### Prioridad 3: Pagina de Casos de Exito (3-5 dias)

Crear `/casos-de-exito` con mini-casos:
- Sector | Problema | Solucion | Resultado
- Al menos 3-4 casos con datos suficientes (anonimizados si hay NDA)

#### Prioridad 4: Blog inicial (1-2 semanas para los primeros 3-5 articulos)

Crear estructura de blog y los primeros articulos orientados a SEO:
- "Que son los espacios de datos y como acceder a 30.000EUR" → enlaza a KTED
- "Como funciona un asistente IA para documentacion" → enlaza a Nessie
- "5 senales de que tu web esta espantando clientes" → enlaza a Webs

---

## 9. Plan de accion priorizado

### Fase 1: Quick wins (semana 1)
- [ ] Corregir schema.org (pais, direccion, LocalBusiness)
- [ ] Limpiar sitemap.xml
- [ ] Anadir WhatsApp flotante
- [ ] Anadir telefono visible
- [ ] Mejorar formulario de contacto (campo servicio + telefono)
- [ ] Cambiar headline del hero
- [ ] Actualizar meta keywords con SEO local
- [ ] Cambiar imagen OG
- [ ] Actualizar logos de clientes
- [ ] Reducir/eliminar loading screen

### Fase 2: Landing pages (semanas 2-3)
- [ ] Landing Nessie Oficina
- [ ] Landing Nessie Industrial
- [ ] Landing Desarrollo a medida
- [ ] Landing Fidelizacion hosteleria
- [ ] Landing Webs baratas
- [ ] Formulario especifico en cada landing (como KTED)

### Fase 3: Rediseno Home (semana 3-4)
- [ ] Sustituir bento grid por bloques de entrada por servicio
- [ ] Mover equipo a pagina separada `/sobre-nosotros`
- [ ] Simplificar flujo: hero → bloques servicio → social proof → CTA

### Fase 4: Contenido y SEO (semanas 4-6)
- [ ] Pagina de casos de exito con mini-casos
- [ ] Primeros 3-5 articulos de blog
- [ ] Google Business Profile completo
- [ ] Revisar y optimizar meta descriptions por pagina
- [ ] Structured data por servicio (schema Service)

### Fase 5: Optimizacion continua (mes 2+)
- [ ] A/B testing de headlines y CTAs
- [ ] Mas articulos de blog (1-2/mes)
- [ ] Testimonios de clientes conforme se obtengan
- [ ] Tracking de conversion por landing page
- [ ] Metricas de embudo: visitas → leads → reuniones → cierre

---

## Anexo: Errores tecnicos puntuales

| Error | Ubicacion | Detalle |
|-------|-----------|---------|
| Schema.org pais "US" | `src/pages/[lang]/index.astro:43` | `addressCountry: "US"` — debe ser `"ES"` |
| Doble H1 en hero | `src/components/Hero.astro:21-22` | Dos `<h1>` en la misma pagina |
| Email inconsistente | Schema vs footer vs contacto | `contact@osix.tech` (schema), `info@osix.tech` (contacto), `osixtechteam@gmail.com` (footer) |
| Sitemap con URLs rotas | `sitemap.xml` | echoia y kharon devuelven 404 |
| Imagen OG = favicon | `src/layouts/Layout.astro:30` | `image = '/favicon.png'` — no es una imagen OG adecuada |
| Loading screen 1s | `src/pages/[lang]/index.astro:90` | `<LoadingScreen duration={1000} />` |
| AwardsSection comentada | `src/pages/[lang]/index.astro:96` | `<!--<section id="awards">-->` — decidir si se muestra o se elimina |
| Footer muestra "IGAPE TICKET INNOVA 2026" sin contexto | `src/layouts/Layout.astro:156-157` | El visitante no sabe que es IGAPE ni por que aparece ahi |
| Paginas KTED no indexadas en sitemap | `sitemap.xml` | Las 6 URLs de KTED no estan en el sitemap |
| TAKE no indexado en sitemap | `sitemap.xml` | `/projects/take` no esta en el sitemap |
