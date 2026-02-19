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
  testimonial: { quote: string; author: string; role: string };
}

export const servicesData: Record<string, Record<string, ServiceData>> = {
  es: {
    'desarrollo-a-medida': {
      id: 'desarrollo-a-medida',
      title: 'Desarrollo a Medida',
      tagline: 'Tú sabes lo que necesitas. Nosotros lo construimos.',
      description: 'Llegas con una idea clara de lo que necesita tu negocio y nosotros lo hacemos realidad. Aplicaciones móviles, plataformas web, agentes inteligentes, automatizaciones con IA... lo que sea. Tú pones el qué, nosotros ponemos el cómo.',
      icon: 'Code',
      highlights: [
        'Aplicaciones móviles, web y de escritorio',
        'Agentes inteligentes y automatizaciones con IA',
        'Tú defines el qué, nosotros el cómo',
        'Sin soluciones genéricas: software 100% a medida'
      ],
      problemTitle: 'Sabes lo que necesitas, pero no tienes quién lo construya',
      problem: 'Tienes claro qué necesita tu negocio — una app, una automatización, una plataforma — pero no tienes el equipo técnico para hacerlo realidad.',
      solutionTitle: 'Tu idea, hecha software',
      solution: 'Nos cuentas lo que necesitas y lo construimos. Sin rodeos, sin consultorías interminables. Software 100% a medida, listo para funcionar.',
      highlightsTitle: 'De la idea al producto',
      stats: [
        { value: '2 sem', label: 'demo funcional lista' },
        { value: '100%', label: 'software a medida' },
        { value: '24/7', label: 'soporte continuo' },
        { value: '2x', label: 'más rápidos que la media' },
      ],
      testimonial: {
        quote: 'En 3 semanas teníamos la app funcionando. Nos ahorraron meses de desarrollo interno.',
        author: 'Director de Operaciones',
        role: 'Empresa logística',
      },
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
      solutionTitle: 'Te guiamos paso a paso',
      solution: 'Visitamos tu empresa, entendemos cómo trabajáis de verdad y en menos de una semana te entregamos un plan de acción concreto con estimación de ahorro.',
      highlightsTitle: 'Análisis sin compromiso',
      stats: [
        { value: '< 24h', label: 'informe entregado' },
        { value: '0€', label: 'compromiso de continuidad' },
        { value: '< 7d', label: 'plan de acción listo' },
        { value: '+15', label: 'procesos optimizados' },
      ],
      testimonial: {
        quote: 'Nos encontraron un ahorro de 40h/mes que no sabíamos que existía.',
        author: 'CEO',
        role: 'Distribuidora industrial',
      },
    },
    'consultoria-innovacion': {
      id: 'consultoria-innovacion',
      title: 'Innovación Subvencionada',
      tagline: 'Identificamos ayudas públicas y preparamos tu proyecto',
      description: 'Identificamos las ayudas públicas que encajan con tu empresa y nos encargamos de diseñar el proyecto para que cumpla todos los requisitos de la convocatoria. Preparamos la memoria técnica, el presupuesto y toda la documentación necesaria para maximizar tus posibilidades de aprobación. IGAPE, IA360, Ticket Innova, Kit Digital, espacios de datos... conocemos las convocatorias porque trabajamos con ellas a diario.',
      icon: 'Lightbulb',
      highlights: [
        'Identificación de ayudas públicas compatibles con tu empresa',
        'Diseño de proyecto adaptado a cada convocatoria',
        'Diseño del proyecto y memoria técnica incluidos',
        'IGAPE, IA360, Ticket Innova, Kit Digital y más'
      ],
      problemTitle: 'Hay ayudas, pero no sabes cuáles encajan',
      problem: 'Existen convocatorias públicas que podrían financiar tu próximo proyecto, pero encontrar las que encajan con tu empresa y diseñar un proyecto que cumpla los requisitos es un trabajo en sí mismo.',
      solutionTitle: 'Encontramos la ayuda y diseñamos el proyecto',
      solution: 'Analizamos tu empresa, identificamos las convocatorias que encajan y diseñamos el proyecto y la memoria técnica para maximizar la aprobación y el valor aportado.',
      highlightsTitle: 'Innova sin arriesgar tu caja',
      stats: [
        { value: '0€', label: 'si no se aprueba' },
        { value: '< 7d', label: 'propuesta lista para envío' },
        { value: '60%', label: 'subvencionado de media' },
        { value: '0€', label: 'consulta inicial' },
      ],
      testimonial: {
        quote: 'Nos consiguieron 120.000€ en subvenciones que ni sabíamos que existían.',
        author: 'Gerente',
        role: 'Pyme alimentaria',
      },
    }
  },
  en: {
    'desarrollo-a-medida': {
      id: 'desarrollo-a-medida',
      title: 'Custom Development',
      tagline: 'You know what you need. We build it.',
      description: 'You come with a clear idea of what your business needs and we make it happen. Mobile apps, web platforms, intelligent agents, AI automations... whatever it takes. You define the what, we handle the how.',
      icon: 'Code',
      highlights: [
        'Mobile, web, and desktop applications',
        'Intelligent agents and AI automations',
        'You define the what, we handle the how',
        'No generic solutions: 100% custom software'
      ],
      problemTitle: 'You know what you need, but have no one to build it',
      problem: 'You know exactly what your business needs — an app, an automation, a platform — but you don\'t have the technical team to make it happen.',
      solutionTitle: 'Your idea, built into software',
      solution: 'Tell us what you need and we build it. No detours, no endless consulting. 100% custom software, ready to run.',
      highlightsTitle: 'From idea to product',
      stats: [
        { value: '2 wks', label: 'working demo ready' },
        { value: '100%', label: 'custom-built software' },
        { value: '24/7', label: 'ongoing support' },
        { value: '2x', label: 'faster than average' },
      ],
      testimonial: {
        quote: 'We had the app running in 3 weeks. They saved us months of in-house development.',
        author: 'COO',
        role: 'Logistics company',
      },
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
      solutionTitle: 'We guide you step by step',
      solution: 'We visit your company, understand how you actually work, and in less than a week deliver a concrete action plan with savings estimates.',
      highlightsTitle: 'No-strings analysis',
      stats: [
        { value: '< 24h', label: 'report delivered' },
        { value: '€0', label: 'continuity commitment' },
        { value: '< 7d', label: 'action plan ready' },
        { value: '+15', label: 'processes optimized' },
      ],
      testimonial: {
        quote: 'They found us 40h/month in savings we didn\'t know existed.',
        author: 'CEO',
        role: 'Industrial distributor',
      },
    },
    'consultoria-innovacion': {
      id: 'consultoria-innovacion',
      title: 'Subsidized Innovation',
      tagline: 'We identify public grants and prepare your project',
      description: 'We identify the public grants that fit your company and design the project to meet all the requirements of the call. We prepare the technical report, budget, and all necessary documentation to maximize your chances of approval. IGAPE, IA360, Ticket Innova, Kit Digital, data spaces... we know the calls because we work with them daily.',
      icon: 'Lightbulb',
      highlights: [
        'Identification of public grants compatible with your company',
        'Project design adapted to each call',
        'Project design and technical report included',
        'IGAPE, IA360, Ticket Innova, Kit Digital and more'
      ],
      problemTitle: 'There are grants, but which ones fit you?',
      problem: 'There are public calls that could fund your next project, but finding the right ones and designing a project that meets the requirements is a job in itself.',
      solutionTitle: 'We find the grant and design the project',
      solution: 'We analyze your company, identify the calls that fit, and design the project and technical report to maximize approval and added value.',
      highlightsTitle: 'Innovate without risking your cash',
      stats: [
        { value: '€0', label: 'if not approved' },
        { value: '< 7d', label: 'proposal ready to submit' },
        { value: '60%', label: 'average grant coverage' },
        { value: '€0', label: 'initial consultation' },
      ],
      testimonial: {
        quote: 'They got us €120,000 in grants we didn\'t even know existed.',
        author: 'Manager',
        role: 'Food industry SME',
      },
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
