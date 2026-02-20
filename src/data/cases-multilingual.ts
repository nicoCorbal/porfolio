export interface CaseStudyData {
  id: string;
  title: string;
  client: string;
  headline: string;
  summary: string;
  product?: string;
  services: string[];
  stats: { label: string; value: string }[];
  date?: string;
  images?: string[];
  video?: string;
  results: string[];
}

export const casesData: Record<string, CaseStudyData[]> = {
  es: [
    {
      id: 'take',
      title: 'TAKE App',
      client: 'TAKE - Cafetería',
      headline: 'Aplicación móvil enfocada en la fidelización digital para hostelería',
      product: 'BOND',
      date: 'Agosto 2025',
      services: ['desarrollo-a-medida'],
      stats: [
        { label: 'Integración Wallet', value: 'Google y Apple' },
        { label: 'Descargas', value: '+2500' },
        { label: 'Sellos Registrados', value: '+20.000' },
      ],
      images: ['/projects/take.png'],
      summary: 'Plataforma de fidelización digital todo en uno que integra tarjetas de fidelización en Google y Apple Wallet, carta digital interactiva, minijuego con premios para incentivar la recurrencia y sistema de anuncios de la cafetería. Incluye un dashboard de gestión completo para administrar la carta, premios y anuncios del negocio.',
      results: [
        'Fidelización digital integrada en Google y Apple Wallet',
        'Minijuego gamificado con premios para impulsar la recurrencia',
        'Carta digital interactiva con gestión centralizada desde dashboard',
        'Sistema de anuncios para comunicación directa con clientes',
      ],
    },
    {
      id: 'iciga',
      title: 'IRIS',
      client: 'ICIGA - Distribuidor de material de laboratorio',
      headline: 'Gestión comercial semiautomatizada con integración CRM',
      product: 'IRIS',
      date: 'Noviembre 2025',
      services: ['desarrollo-a-medida'],
      images: ['/projects/iciga.jpg'],
      stats: [
        { label: 'Tiempo ahorrado', value: '60%' },
        { label: 'Productos cruzados', value: '45.000+' },
        { label: 'Bandejas monitorizadas', value: 'Múltiples' },
      ],
      summary: 'Info Retrieval & Intelligence System. Plataforma integral de gestión comercial con agentes de IA que monitoriza 6 bandejas de correo en tiempo real, clasifica automáticamente 10 tipos de solicitudes (pedidos, presupuestos, facturas, incidencias, pagos...), cruza contra dos catálogos con más de 45.000 productos y genera propuestas de respuesta listas para enviar. Incluye pipeline completo de seguimiento de transacciones venta/compra, conexión directa con el ERP y CRM del cliente, verificación de stock en tiempo real y dashboard con analíticas de embudo comercial.',
      results: [
        'Agentes de IA con razonamiento y redacción automática de emails',
        'Pipeline de seguimiento de transacciones de venta y compra',
        'Conexión directa con ERP y CRM',
        'Dashboard en tiempo real con analíticas de embudo comercial',
      ],
    },
    {
      id: 'shearn',
      title: 'Project Certainty',
      client: 'Shearn',
      headline: 'Resolución de dibujo técnico con IA',
      date: 'Julio 2025',
      services: ['desarrollo-a-medida'],
      video: '/projects/shearn.webm',
      stats: [
        { label: 'Motor', value: '2D + 3D' },
        { label: 'Tecnología', value: 'Three.js' },
        { label: 'Desarrollo', value: '100% propio' },
      ],
      summary: 'Prueba de concepto para validar si la IA de julio de 2025 era capaz de resolver ejercicios de dibujo técnico de nivel 2º Bachillerato y Universidad. Motor 2D paso a paso para resolución guiada y módulo 3D en Three.js para reconstrucción de sólidos a partir de vistas ortográficas.',
      results: [
        'PoC exitoso: resolución de ejercicios de 2º Bach y Universidad',
        'Motor 2D de soluciones paso a paso',
        'Reconstrucción 3D con Three.js',
        'Desarrollo íntegramente interno',
      ],
    },
  ],
  en: [
    {
      id: 'take',
      title: 'TAKE App',
      client: 'TAKE - Coffee Shop',
      headline: 'Mobile app focused on digital loyalty',
      product: 'BOND',
      date: 'August 2025',
      services: ['desarrollo-a-medida'],
      stats: [
        { label: 'Wallet integration', value: 'Google & Apple' },
        { label: '+2500', value: 'Downloads' },
        { label: 'Stamps Registered', value: '+20,000' },
      ],
      images: ['/projects/take.png'],
      summary: 'All-in-one digital loyalty platform integrating loyalty cards on Google and Apple Wallet, interactive digital menu, mini-game with prizes to drive repeat visits, and a coffee shop announcement system. Includes a full management dashboard to administer the menu, prizes, and business announcements.',
      results: [
        'Digital loyalty integrated with Google and Apple Wallet',
        'Gamified mini-game with prizes to drive repeat visits',
        'Interactive digital menu with centralized dashboard management',
        'Announcement system for direct customer communication',
      ],
    },
    {
      id: 'iciga',
      title: 'IRIS',
      client: 'ICIGA - Laboratory supplies distributor',
      headline: 'Semi-automated commercial management with CRM integration',
      product: 'IRIS',
      date: 'November 2025',
      services: ['desarrollo-a-medida'],
      images: ['/projects/iciga.jpg'],
      stats: [
        { label: 'Time saved', value: '60%' },
        { label: 'Products cross-referenced', value: '45,000+' },
        { label: 'Inboxes monitored', value: 'Multiple' },
      ],
      summary: 'Info Retrieval & Intelligence System. End-to-end commercial management platform with AI agents that monitors 6 inboxes in real time, automatically classifies 10 types of requests (orders, quotes, invoices, incidents, payments...), cross-references against two catalogs with 45,000+ products, and generates ready-to-send response proposals. Includes a full sales/purchase transaction tracking pipeline, direct ERP and CRM integration, real-time stock verification, and a dashboard with commercial funnel analytics.',
      results: [
        'AI agents with reasoning and automatic email drafting',
        'Full sales and purchase transaction tracking pipeline',
        'Direct ERP and CRM integration',
        'Real-time dashboard with commercial funnel analytics',
      ],
    },
    {
      id: 'shearn',
      title: 'Project Certainty',
      client: 'Shearn',
      headline: 'AI-powered technical drawing solver',
      date: 'July 2025',
      video: '/projects/shearn.webm',
      services: ['desarrollo-a-medida'],
      stats: [
        { label: 'Engine', value: '2D + 3D' },
        { label: 'Technology', value: 'Three.js' },
        { label: 'Development', value: '100% in-house' },
      ],
      summary: 'Proof of concept to validate whether the AI available in July 2025 could solve technical drawing exercises at high school and university level. Step-by-step 2D engine for guided solving and Three.js 3D module for solid reconstruction from orthographic views.',
      results: [
        'Successful PoC: solving high school & university-level exercises',
        'Step-by-step 2D solution engine',
        '3D reconstruction with Three.js',
        'Fully in-house development',
      ],
    },
  ],
};

export function getAllCases(lang: string = 'es'): CaseStudyData[] {
  return casesData[lang] || casesData.es;
}

export function getCasesByService(serviceId: string, lang: string = 'es'): CaseStudyData[] {
  return (casesData[lang] || casesData.es).filter(c => c.services.includes(serviceId));
}
