export interface ServiceData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  image?: string;
  highlights: string[];
}

export const servicesData: Record<string, Record<string, ServiceData>> = {
  es: {
    'desarrollo-a-medida': {
      id: 'desarrollo-a-medida',
      title: 'Desarrollo a Medida',
      tagline: 'Software personalizado con IA para tu negocio',
      description: 'Diseñamos y desarrollamos software personalizado con inteligencia artificial para resolver problemas concretos de tu negocio. Desde aplicaciones móviles y plataformas web hasta agentes inteligentes u otras automatizaciones. No vendemos soluciones genéricas: analizamos tu operativa y construimos exactamente lo que necesitas.',
      icon: 'Code',
      highlights: [
        'Aplicaciones móviles, web y de escritorio',
        'Agentes inteligentes y automatizaciones con IA',
        'Análisis previo de tu operativa y necesidades',
        'Sin soluciones genéricas: software 100% a medida'
      ]
    },
    kted: {
      id: 'kted',
      title: 'Kit Espacio de Datos',
      tagline: 'Hasta 30.000€ para integrar tu empresa en Espacios de Datos',
      description: 'Te ayudamos a incorporar tu empresa a los espacios de datos sectoriales europeos (agroalimentario, industria, salud, comercio) y a acceder a las ayudas públicas del programa KTED, con hasta 30.000€ de financiación. Nos encargamos de todo lo técnico: preparación de datos, desarrollo del conector, documentación y registro en el espacio de datos.',
      icon: 'Database',
      highlights: [
        'Subvención 100% a fondo perdido — solo pagas el IVA',
        'Espacios de datos sectoriales europeos',
        'Gestión integral: solicitud, ejecución y justificación',
        'Plazo abierto hasta 31 marzo 2026'
      ]
    },
    'consultoria-transformacion': {
      id: 'consultoria-transformacion',
      title: 'Consultoría de Transformación Digital',
      tagline: 'Te decimos qué se puede mejorar con tecnología y qué no',
      description: 'Visitamos tu empresa, entendemos cómo trabajáis de verdad y os decimos con honestidad qué se puede mejorar con tecnología y qué no. En menos de una semana recibes un informe con oportunidades concretas, estimación de ahorro y un plan de acción priorizado. Si no necesitas nada, te lo decimos. Sin compromiso, sin humo.',
      icon: 'RefreshCw',
      highlights: [
        'Visita presencial y análisis de tu operativa real',
        'Informe con oportunidades concretas en menos de una semana',
        'Estimación de ahorro y plan de acción priorizado',
        'Honestidad total: si no necesitas nada, te lo decimos'
      ]
    },
    'consultoria-innovacion': {
      id: 'consultoria-innovacion',
      title: 'Consultoría de Innovación',
      tagline: 'Identificamos ayudas públicas y preparamos tu proyecto',
      description: 'Identificamos las ayudas públicas que encajan con tu empresa y nos encargamos de diseñar el proyecto para que cumpla todos los requisitos de la convocatoria. Preparamos la memoria técnica, el presupuesto y toda la documentación necesaria para maximizar tus posibilidades de aprobación. IGAPE, IA360, Ticket Innova, Kit Digital, espacios de datos... conocemos las convocatorias porque trabajamos con ellas a diario.',
      icon: 'Lightbulb',
      highlights: [
        'Identificación de ayudas públicas compatibles con tu empresa',
        'Diseño de proyecto adaptado a cada convocatoria',
        'Memoria técnica, presupuesto y documentación completa',
        'IGAPE, IA360, Ticket Innova, Kit Digital y más'
      ]
    }
  },
  en: {
    'desarrollo-a-medida': {
      id: 'desarrollo-a-medida',
      title: 'Custom Development',
      tagline: 'AI-powered custom software for your business',
      description: 'We design and develop custom software with artificial intelligence to solve specific problems in your business. From mobile apps and web platforms to intelligent agents and other automations. We don\'t sell generic solutions: we analyze your operations and build exactly what you need.',
      icon: 'Code',
      highlights: [
        'Mobile, web, and desktop applications',
        'Intelligent agents and AI automations',
        'Prior analysis of your operations and needs',
        'No generic solutions: 100% custom software'
      ]
    },
    kted: {
      id: 'kted',
      title: 'Data Spaces Kit',
      tagline: 'Up to €30,000 to integrate your company into Data Spaces',
      description: 'We help you incorporate your company into European sectoral data spaces (agrifood, industry, health, commerce) and access public funding through the KTED program, with up to €30,000 in financing. We handle all the technical work: data preparation, connector development, documentation, and registration in the data space.',
      icon: 'Database',
      highlights: [
        '100% grant funding — you only pay VAT',
        'European sectoral data spaces',
        'Full management: application, execution, and justification',
        'Open until March 31, 2026'
      ]
    },
    'consultoria-transformacion': {
      id: 'consultoria-transformacion',
      title: 'Digital Transformation Consulting',
      tagline: 'We tell you what can be improved with technology and what cannot',
      description: 'We visit your company, understand how you actually work, and honestly tell you what can be improved with technology and what cannot. In less than a week you receive a report with concrete opportunities, savings estimates, and a prioritized action plan. If you don\'t need anything, we\'ll tell you. No strings attached.',
      icon: 'RefreshCw',
      highlights: [
        'On-site visit and analysis of your real operations',
        'Report with concrete opportunities in less than a week',
        'Savings estimate and prioritized action plan',
        'Total honesty: if you don\'t need anything, we\'ll tell you'
      ]
    },
    'consultoria-innovacion': {
      id: 'consultoria-innovacion',
      title: 'Innovation Consulting',
      tagline: 'We identify public grants and prepare your project',
      description: 'We identify the public grants that fit your company and design the project to meet all the requirements of the call. We prepare the technical report, budget, and all necessary documentation to maximize your chances of approval. IGAPE, IA360, Ticket Innova, Kit Digital, data spaces... we know the calls because we work with them daily.',
      icon: 'Lightbulb',
      highlights: [
        'Identification of public grants compatible with your company',
        'Project design adapted to each call',
        'Technical report, budget, and complete documentation',
        'IGAPE, IA360, Ticket Innova, Kit Digital and more'
      ]
    }
  }
};

export function getService(id: string, lang: string = 'es'): ServiceData | undefined {
  return servicesData[lang]?.[id];
}

export function getAllServices(lang: string = 'es'): ServiceData[] {
  return Object.values(servicesData[lang] || {});
}

export function getServiceIds(): string[] {
  return Object.keys(servicesData.es);
}
