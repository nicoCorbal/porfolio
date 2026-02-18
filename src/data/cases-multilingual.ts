export interface CaseStudyData {
  id: string;
  title: string;
  client: string;
  headline: string;
  summary: string;
  product?: string;
  services: string[];
  stats: { label: string; value: string }[];
  images?: string[];
  video?: string;
  results: string[];
}

export const casesData: Record<string, CaseStudyData[]> = {
  es: [
    {
      id: 'take',
      title: 'TAKE App',
      client: 'Cafetería TAKE',
      headline: 'Fidelización digital con wallet',
      product: 'BOND',
      services: ['desarrollo-a-medida'],
      stats: [
        { label: 'Integración wallet', value: '2 plataformas' },
        { label: 'Puntos', value: 'Automáticos' },
        { label: 'Analíticas', value: 'Tiempo real' },
      ],
      images: ['/projects/take.png'],
      summary: 'Tarjeta de fidelización digital con Google y Apple Wallet, sistema de puntos automático y dashboard de analíticas de consumo. Primer piloto real del producto en hostelería.',
      results: [
        'Fidelización digital en Google y Apple Wallet',
        'Sistema de puntos automático',
        'Analíticas de consumo en tiempo real',
        'Validación con clientes reales',
      ],
    },
    {
      id: 'iciga',
      title: 'ICIGA',
      client: 'Distribuidor de material de laboratorio',
      headline: 'Clasificación automática de pedidos',
      product: 'IRIS',
      services: ['desarrollo-a-medida'],
      images: ['/projects/iciga.jpg'],
      stats: [
        { label: 'Bandejas monitorizadas', value: '6' },
        { label: 'Productos cruzados', value: '63.000+' },
        { label: 'Clasificación', value: 'Automática' },
      ],
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
      headline: 'Dibujo técnico con motor 2D y 3D',
      services: ['desarrollo-a-medida'],
      video: '/projects/shearn.webm',
      stats: [
        { label: 'Motor', value: '2D + 3D' },
        { label: 'Tecnología', value: 'Three.js' },
        { label: 'Desarrollo', value: '100% propio' },
      ],
      summary: 'Plataforma de resolución de ejercicios de dibujo técnico. Motor 2D paso a paso y módulo 3D en Three.js para reconstrucción de sólidos a partir de vistas ortográficas.',
      results: [
        'Motor 2D de soluciones paso a paso',
        'Reconstrucción 3D con Three.js',
        'Herramienta educativa completa',
        'Desarrollo íntegramente interno',
      ],
    },
  ],
  en: [
    {
      id: 'take',
      title: 'TAKE App',
      client: 'TAKE Coffee Shop',
      headline: 'Digital loyalty with wallet',
      product: 'BOND',
      services: ['desarrollo-a-medida'],
      stats: [
        { label: 'Wallet integration', value: '2 platforms' },
        { label: 'Points', value: 'Automatic' },
        { label: 'Analytics', value: 'Real-time' },
      ],
      images: ['/projects/take.png'],
      summary: 'Digital loyalty card with Google and Apple Wallet, automatic points system, and consumption analytics dashboard. First real product pilot in hospitality.',
      results: [
        'Digital loyalty on Google & Apple Wallet',
        'Automatic points system',
        'Real-time consumption analytics',
        'Validation with real customers',
      ],
    },
    {
      id: 'iciga',
      title: 'ICIGA',
      client: 'Laboratory supplies distributor',
      headline: 'Automatic order classification',
      product: 'IRIS',
      services: ['desarrollo-a-medida'],
      images: ['/projects/iciga.jpg'],
      stats: [
        { label: 'Inboxes monitored', value: '6' },
        { label: 'Products cross-referenced', value: '63,000+' },
        { label: 'Classification', value: 'Automatic' },
      ],
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
      headline: 'Technical drawing with 2D & 3D engine',
      video: '/projects/shearn.webm',
      services: ['desarrollo-a-medida'],
      stats: [
        { label: 'Engine', value: '2D + 3D' },
        { label: 'Technology', value: 'Three.js' },
        { label: 'Development', value: '100% in-house' },
      ],
      summary: 'Technical drawing exercise solving platform. Step-by-step 2D engine and Three.js 3D module for solid reconstruction from orthographic views.',
      results: [
        'Step-by-step 2D solution engine',
        '3D reconstruction with Three.js',
        'Complete educational tool',
        'Fully in-house development',
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
