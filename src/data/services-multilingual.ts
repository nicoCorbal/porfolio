export interface ServiceData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  image?: string;
  highlights: string[];
  problem: string;
  solution: string;
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
      problem: 'Tu negocio pierde tiempo y dinero con procesos manuales, herramientas genéricas que no encajan y oportunidades que la tecnología podría capturar.',
      solution: 'Analizamos tu operativa real, identificamos qué se puede automatizar con IA y construimos software 100% a medida que resuelve exactamente tu problema.',
      stats: [
        { value: '+50', label: 'proyectos entregados' },
        { value: '100%', label: 'software a medida' },
        { value: '<4 sem', label: 'primer entregable' },
        { value: '98%', label: 'satisfacción cliente' },
      ],
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
      ],
      problem: 'Sabes que tu empresa podría funcionar mejor con tecnología, pero no sabes por dónde empezar ni en quién confiar.',
      solution: 'Visitamos tu empresa, entendemos cómo trabajáis de verdad y en menos de una semana te entregamos un plan de acción concreto con estimación de ahorro.',
      stats: [
        { value: '<1 sem', label: 'informe entregado' },
        { value: '0€', label: 'si no necesitas nada' },
        { value: '+30', label: 'empresas analizadas' },
        { value: '100%', label: 'honestidad garantizada' },
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
      problem: 'Hay ayudas públicas que encajan con tu empresa, pero las convocatorias son complejas y preparar el proyecto requiere tiempo que no tienes.',
      solution: 'Identificamos las ayudas que encajan contigo y nos encargamos de diseñar el proyecto, preparar la memoria técnica y toda la documentación para maximizar la aprobación.',
      stats: [
        { value: '+2M€', label: 'en ayudas gestionadas' },
        { value: '85%', label: 'tasa de aprobación' },
        { value: '+20', label: 'convocatorias dominadas' },
        { value: '0€', label: 'si no se aprueba' },
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
      problem: 'Your business loses time and money on manual processes, generic tools that don\'t fit, and opportunities that technology could capture.',
      solution: 'We analyze your real operations, identify what can be automated with AI, and build 100% custom software that solves exactly your problem.',
      stats: [
        { value: '+50', label: 'projects delivered' },
        { value: '100%', label: 'custom software' },
        { value: '<4 wks', label: 'first deliverable' },
        { value: '98%', label: 'client satisfaction' },
      ],
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
      ],
      problem: 'You know your company could work better with technology, but you don\'t know where to start or who to trust.',
      solution: 'We visit your company, understand how you actually work, and in less than a week deliver a concrete action plan with savings estimates.',
      stats: [
        { value: '<1 wk', label: 'report delivered' },
        { value: '€0', label: 'if you don\'t need anything' },
        { value: '+30', label: 'companies analyzed' },
        { value: '100%', label: 'honesty guaranteed' },
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
      problem: 'There are public grants that fit your company, but the calls are complex and preparing the project takes time you don\'t have.',
      solution: 'We identify the grants that fit you and handle everything: project design, technical report, and all documentation to maximize approval.',
      stats: [
        { value: '+€2M', label: 'in grants managed' },
        { value: '85%', label: 'approval rate' },
        { value: '+20', label: 'calls mastered' },
        { value: '€0', label: 'if not approved' },
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
