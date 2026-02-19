export interface ServiceData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  image?: string;
  highlights: string[];
  problemTitle: string;
  problem: string;
  solutionTitle: string;
  solution: string;
  highlightsTitle: string;
  stats: { value: string; label: string }[];
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
      ],
      problemTitle: 'Procesos manuales y herramientas que no encajan',
      problem: 'Tu negocio pierde tiempo y dinero con procesos manuales, herramientas genéricas que no encajan y oportunidades que la tecnología podría capturar.',
      solutionTitle: 'Software que encaja como un guante',
      solution: 'Analizamos tu operativa real, identificamos qué se puede automatizar con IA y construimos software 100% a medida que resuelve exactamente tu problema.',
      highlightsTitle: 'De la idea al producto',
      stats: [
        { value: '2 sem', label: 'demo funcional' },
        { value: '100%', label: 'a medida' },
        { value: '24/7', label: 'soporte' },
        { value: '2x', label: 'más rápidos que la media' },
      ],
    },
    'consultoria-transformacion': {
      id: 'consultoria-transformacion',
      title: 'Consultoría de Transformación Digital',
      tagline: 'Te decimos qué se puede mejorar con tecnología',
      description: 'Visitamos tu empresa, entendemos cómo trabajáis de verdad y os decimos con honestidad qué se puede mejorar con tecnología. En menos de una semana recibes un informe con oportunidades concretas, estimación de ahorro y un plan de acción priorizado. Si no necesitas nada, te lo decimos. Sin compromiso, sin humo.',
      icon: 'RefreshCw',
      highlights: [
        'Visita presencial y análisis de tu operativa real',
        'Informe con oportunidades concretas en menos de una semana',
        'Estimación de ahorro y plan de acción priorizado',
        'Honestidad total: si no necesitas nada, te lo decimos'
      ],
      problemTitle: 'No sabes por dónde empezar',
      problem: 'Sabes que tu empresa podría funcionar mejor con tecnología, pero no sabes por dónde empezar ni en quién confiar.',
      solutionTitle: 'Un plan claro en menos de una semana',
      solution: 'Visitamos tu empresa, entendemos cómo trabajáis de verdad y en menos de una semana te entregamos un plan de acción concreto con estimación de ahorro.',
      highlightsTitle: 'Análisis sin compromiso',
      stats: [
        { value: '<24h', label: 'informe entregado' },
        { value: '0€', label: 'compromiso de continuidad' },
        { value: '<7d', label: 'plan de acción listo' },
        { value: '+15', label: 'procesos optimizados' },
      ],
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
      ],
      problemTitle: 'Convocatorias complejas, poco tiempo',
      problem: 'Hay ayudas públicas que encajan con tu empresa, pero las convocatorias son complejas y preparar el proyecto requiere tiempo que no tienes.',
      solutionTitle: 'Nosotros preparamos todo',
      solution: 'Identificamos las ayudas que encajan contigo y nos encargamos de diseñar el proyecto, preparar la memoria técnica y toda la documentación para maximizar la aprobación.',
      highlightsTitle: 'Servicio llave en mano',
      stats: [
        { value: '0€', label: 'si no se aprueba' },
        { value: '<7d', label: 'propuesta lista' },
        { value: '100%', label: 'documentación incluida' },
        { value: '24/7', label: 'radar de ayudas' },
      ],
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
      ],
      problemTitle: 'Manual processes and tools that don\'t fit',
      problem: 'Your business loses time and money on manual processes, generic tools that don\'t fit, and opportunities that technology could capture.',
      solutionTitle: 'Software that fits like a glove',
      solution: 'We analyze your real operations, identify what can be automated with AI, and build 100% custom software that solves exactly your problem.',
      highlightsTitle: 'From idea to product',
      stats: [
        { value: '2 wks', label: 'working demo' },
        { value: '100%', label: 'custom-built' },
        { value: '24/7', label: 'support' },
        { value: '2x', label: 'faster than average' },
      ],
    },
    'consultoria-transformacion': {
      id: 'consultoria-transformacion',
      title: 'Digital Transformation Consulting',
      tagline: 'We tell you what can be improved with technology',
      description: 'We visit your company, understand how you actually work, and honestly tell you what can be improved with technology. In less than a week you receive a report with concrete opportunities, savings estimates, and a prioritized action plan. If you don\'t need anything, we\'ll tell you. No strings attached.',
      icon: 'RefreshCw',
      highlights: [
        'On-site visit and analysis of your real operations',
        'Report with concrete opportunities in less than a week',
        'Savings estimate and prioritized action plan',
        'Total honesty: if you don\'t need anything, we\'ll tell you'
      ],
      problemTitle: 'You don\'t know where to start',
      problem: 'You know your company could work better with technology, but you don\'t know where to start or who to trust.',
      solutionTitle: 'A clear plan in less than a week',
      solution: 'We visit your company, understand how you actually work, and in less than a week deliver a concrete action plan with savings estimates.',
      highlightsTitle: 'No-strings analysis',
      stats: [
        { value: '<24h', label: 'report delivered' },
        { value: '€0', label: 'continuity commitment' },
        { value: '<7d', label: 'action plan ready' },
        { value: '+15', label: 'processes optimized' },
      ],
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
      ],
      problemTitle: 'Complex calls, no time',
      problem: 'There are public grants that fit your company, but the calls are complex and preparing the project takes time you don\'t have.',
      solutionTitle: 'We handle everything',
      solution: 'We identify the grants that fit you and handle everything: project design, technical report, and all documentation to maximize approval.',
      highlightsTitle: 'Turnkey service',
      stats: [
        { value: '€0', label: 'if not approved' },
        { value: '<7d', label: 'proposal ready' },
        { value: '100%', label: 'docs included' },
        { value: '24/7', label: 'grants radar' },
      ],
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
