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

export const casesData: Record<string, CaseStudyData[]> = {
  es: [
    {
      id: 'take',
      title: 'TAKE App',
      client: 'Cafetería TAKE',
      product: 'BOND',
      services: ['desarrollo-a-medida'],
      stats: [],
      images: ['/projects/take/front.png', '/projects/take/home.png', '/projects/take/menu.png', '/projects/take/game.png', '/projects/take/events.png', '/projects/take/rewards.png'],
      summary: 'Tarjeta de fidelización digital con Google y Apple Wallet, sistema de puntos automático y dashboard de analíticas de consumo. Primer piloto real del producto en hostelería.',
      results: [
        'Fidelización digital en Google y Apple Wallet',
        'Sistema de puntos automático',
        'Analíticas de consumo en tiempo real',
        'Validación con clientes reales',
      ],
    },
    {
      id: 'consultoria',
      title: 'Consultoría especializada',
      client: 'Consultora de metodologías relacionales',
      product: 'Nessie',
      services: ['desarrollo-a-medida'],
      stats: [],
      summary: 'Gestión documental con IA, integración con email, búsqueda semántica sobre toda la documentación y unificación de carteras de clientes con matching de subvenciones.',
      results: [
        'Gestión documental completa con IA',
        'Integración con email corporativo',
        'Búsqueda semántica global',
        'Matching de subvenciones automático',
      ],
    },
    {
      id: 'iciga',
      title: 'ICIGA',
      client: 'Distribuidor de material de laboratorio',
      product: 'IRIS',
      services: ['desarrollo-a-medida'],
      stats: [],
      summary: 'Monitorización de 6 bandejas de entrada, clasificación automática de solicitudes y cruce contra una base de datos de más de 63.000 productos químicos.',
      results: [
        'Monitorización de 6 bandejas',
        'Clasificación automática por IA',
        'Cruce contra +63.000 productos',
        'Integración completa con ERP',
      ],
    },
    {
      id: 'shearn',
      title: 'Shearn',
      client: 'Plataforma educativa propia',
      services: ['desarrollo-a-medida'],
      stats: [],
      summary: 'Plataforma de resolución de ejercicios de dibujo técnico. Motor 2D paso a paso y módulo 3D en Three.js para reconstrucción de sólidos a partir de vistas ortográficas.',
      results: [
        'Motor 2D de soluciones paso a paso',
        'Reconstrucción 3D con Three.js',
        'Herramienta educativa completa',
        'Desarrollo íntegramente interno',
      ],
    },
    {
      id: 'gamificacion',
      title: 'Plataforma de gamificación',
      client: 'Academia de oposiciones online',
      services: ['desarrollo-a-medida'],
      stats: [],
      summary: 'Red social con retos 1v1, ligas con sistema ELO, economía de puntos y monedas, coach virtual con rachas motivacionales y catálogo de premios canjeables.',
      results: [
        'Ligas competitivas con sistema ELO',
        'Red social con retos 1v1',
        'Coach virtual motivacional',
        'Integración con Laravel y Odoo',
      ],
    },
    {
      id: 'grille',
      title: 'Grille S. Coop. Galega',
      client: 'Cooperativa del sector agrícola',
      services: ['desarrollo-a-medida'],
      stats: [],
      summary: 'App móvil de evaluación del rendimiento agrícola con criterios personalizables, informes PDF y funcionamiento offline. Disponible en castellano y gallego.',
      results: [
        'Evaluación con criterios configurables',
        'Informes PDF consolidados',
        'Funcionamiento offline completo',
        'Interfaz bilingüe (ES/GL)',
      ],
    },
  ],
  en: [
    {
      id: 'take',
      title: 'TAKE App',
      client: 'TAKE Coffee Shop',
      product: 'BOND',
      services: ['desarrollo-a-medida'],
      stats: [],
      images: ['/projects/take/front.png', '/projects/take/home.png', '/projects/take/menu.png', '/projects/take/game.png', '/projects/take/events.png', '/projects/take/rewards.png'],
      summary: 'Digital loyalty card with Google and Apple Wallet, automatic points system, and consumption analytics dashboard. First real product pilot in hospitality.',
      results: [
        'Digital loyalty on Google & Apple Wallet',
        'Automatic points system',
        'Real-time consumption analytics',
        'Validation with real customers',
      ],
    },
    {
      id: 'consultoria',
      title: 'Specialized Consultancy',
      client: 'Relational methodologies consultancy',
      product: 'Nessie',
      services: ['desarrollo-a-medida'],
      stats: [],
      summary: 'AI-powered document management, email integration, semantic search across all documentation, and client portfolio unification with grant matching.',
      results: [
        'Complete AI document management',
        'Corporate email integration',
        'Global semantic search',
        'Automatic grant matching',
      ],
    },
    {
      id: 'iciga',
      title: 'ICIGA',
      client: 'Laboratory supplies distributor',
      product: 'IRIS',
      services: ['desarrollo-a-medida'],
      stats: [],
      summary: 'Monitoring 6 inboxes, automatic classification of requests, and cross-referencing against a database of over 63,000 chemical products.',
      results: [
        'Monitoring of 6 inboxes',
        'AI-powered automatic classification',
        'Cross-reference against 63,000+ products',
        'Full ERP integration',
      ],
    },
    {
      id: 'shearn',
      title: 'Shearn',
      client: 'In-house educational platform',
      services: ['desarrollo-a-medida'],
      stats: [],
      summary: 'Technical drawing exercise solving platform. Step-by-step 2D engine and Three.js 3D module for solid reconstruction from orthographic views.',
      results: [
        'Step-by-step 2D solution engine',
        '3D reconstruction with Three.js',
        'Complete educational tool',
        'Fully in-house development',
      ],
    },
    {
      id: 'gamificacion',
      title: 'Gamification Platform',
      client: 'Online exam prep academy',
      services: ['desarrollo-a-medida'],
      stats: [],
      summary: 'Social network with 1v1 challenges, competitive leagues with ELO system, points economy, virtual coach with motivational streaks, and redeemable rewards catalog.',
      results: [
        'Competitive leagues with ELO system',
        'Social network with 1v1 challenges',
        'Motivational virtual coach',
        'Laravel and Odoo integration',
      ],
    },
    {
      id: 'grille',
      title: 'Grille S. Coop. Galega',
      client: 'Agricultural sector cooperative',
      services: ['desarrollo-a-medida'],
      stats: [],
      summary: 'Mobile performance evaluation app for agriculture with customizable criteria, PDF reports, and offline functionality. Available in Spanish and Galician.',
      results: [
        'Configurable evaluation criteria',
        'Consolidated PDF reports',
        'Full offline functionality',
        'Bilingual interface (ES/GL)',
      ],
    },
  ],
};

export function getAllCases(lang: string = 'es'): CaseStudyData[] {
  return casesData[lang] || casesData.es;
}

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
