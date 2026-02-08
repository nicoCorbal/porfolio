/**
 * Service Landing Pages Content Structure
 * Defines content for all 5 service landing pages with multilingual support
 */

export type ServiceKey = 'nessie-oficina' | 'nessie-industrial' | 'desarrollo-medida' | 'fidelizacion' | 'renovacion-webs';

export interface ServiceContent {
  id: ServiceKey;
  slug: string;

  seo: {
    titleEs: string;
    titleEn: string;
    descriptionEs: string;
    descriptionEn: string;
    keywordsEs: string;
    keywordsEn: string;
  };

  hero: {
    headlineKeyEs: string;
    headlineKeyEn: string;
    subheadlineKeyEs: string;
    subheadlineKeyEn: string;
    trustMetrics: string[];
  };

  painPoints: Array<{
    iconName: string;
    titleKeyEs: string;
    titleKeyEn: string;
    descKeyEs: string;
    descKeyEn: string;
  }>;

  solution: {
    titleKeyEs: string;
    titleKeyEn: string;
    stepsKeysEs: string[];
    stepsKeysEn: string[];
    benefitsKeysEs: string[];
    benefitsKeysEn: string[];
  };

  caseStudy: {
    clientEs: string;
    clientEn: string;
    sectorEs: string;
    sectorEn: string;
    problemKeyEs: string;
    problemKeyEn: string;
    solutionKeyEs: string;
    solutionKeyEn: string;
    resultsKeysEs: string[];
    resultsKeysEn: string[];
  };

  contact: {
    serviceName: string;
  };
}

export const SERVICES: Record<ServiceKey, ServiceContent> = {
  'nessie-oficina': {
    id: 'nessie-oficina',
    slug: 'nessie-oficina',

    seo: {
      titleEs: 'Nessie Oficina - Asistente IA para documentos | OSIX Tech',
      titleEn: 'Nessie Oficina - AI Assistant for documents | OSIX Tech',
      descriptionEs: 'Tu asistente IA que organiza y responde sobre todos tus documentos. Reduce 90% el tiempo de búsqueda.',
      descriptionEn: 'Your AI assistant that organizes and answers questions about all your documents. Reduce search time by 90%.',
      keywordsEs: 'IA empresarial, documentos, asistente inteligente, Galicia, Santiago de Compostela',
      keywordsEn: 'enterprise AI, documents, intelligent assistant, Galicia, Spain',
    },

    hero: {
      headlineKeyEs: 'services.nessie-oficina.hero.headline',
      headlineKeyEn: 'services.nessie-oficina.hero.headline_en',
      subheadlineKeyEs: 'services.nessie-oficina.hero.subheadline',
      subheadlineKeyEn: 'services.nessie-oficina.hero.subheadline_en',
      trustMetrics: ['+50 proyectos', 'Empresa gallega', 'Respuesta 24h'],
    },

    painPoints: [
      {
        iconName: 'search',
        titleKeyEs: 'services.nessie-oficina.pain.point1.title',
        titleKeyEn: 'services.nessie-oficina.pain.point1.title_en',
        descKeyEs: 'services.nessie-oficina.pain.point1.desc',
        descKeyEn: 'services.nessie-oficina.pain.point1.desc_en',
      },
      {
        iconName: 'clock',
        titleKeyEs: 'services.nessie-oficina.pain.point2.title',
        titleKeyEn: 'services.nessie-oficina.pain.point2.title_en',
        descKeyEs: 'services.nessie-oficina.pain.point2.desc',
        descKeyEn: 'services.nessie-oficina.pain.point2.desc_en',
      },
      {
        iconName: 'warning',
        titleKeyEs: 'services.nessie-oficina.pain.point3.title',
        titleKeyEn: 'services.nessie-oficina.pain.point3.title_en',
        descKeyEs: 'services.nessie-oficina.pain.point3.desc',
        descKeyEn: 'services.nessie-oficina.pain.point3.desc_en',
      },
      {
        iconName: 'users',
        titleKeyEs: 'services.nessie-oficina.pain.point4.title',
        titleKeyEn: 'services.nessie-oficina.pain.point4.title_en',
        descKeyEs: 'services.nessie-oficina.pain.point4.desc',
        descKeyEn: 'services.nessie-oficina.pain.point4.desc_en',
      },
    ],

    solution: {
      titleKeyEs: 'services.nessie-oficina.solution.title',
      titleKeyEn: 'services.nessie-oficina.solution.title_en',
      stepsKeysEs: [
        'services.nessie-oficina.solution.step1',
        'services.nessie-oficina.solution.step2',
        'services.nessie-oficina.solution.step3',
      ],
      stepsKeysEn: [
        'services.nessie-oficina.solution.step1_en',
        'services.nessie-oficina.solution.step2_en',
        'services.nessie-oficina.solution.step3_en',
      ],
      benefitsKeysEs: [
        'services.nessie-oficina.solution.benefit1',
        'services.nessie-oficina.solution.benefit2',
        'services.nessie-oficina.solution.benefit3',
      ],
      benefitsKeysEn: [
        'services.nessie-oficina.solution.benefit1_en',
        'services.nessie-oficina.solution.benefit2_en',
        'services.nessie-oficina.solution.benefit3_en',
      ],
    },

    caseStudy: {
      clientEs: 'Consultoría gallega',
      clientEn: 'Galician consultancy',
      sectorEs: 'Consultoría',
      sectorEn: 'Consulting',
      problemKeyEs: 'services.nessie-oficina.case.problem',
      problemKeyEn: 'services.nessie-oficina.case.problem_en',
      solutionKeyEs: 'services.nessie-oficina.case.solution',
      solutionKeyEn: 'services.nessie-oficina.case.solution_en',
      resultsKeysEs: [
        'services.nessie-oficina.case.result1',
        'services.nessie-oficina.case.result2',
        'services.nessie-oficina.case.result3',
      ],
      resultsKeysEn: [
        'services.nessie-oficina.case.result1_en',
        'services.nessie-oficina.case.result2_en',
        'services.nessie-oficina.case.result3_en',
      ],
    },

    contact: {
      serviceName: 'nessie-oficina',
    },
  },

  'nessie-industrial': {
    id: 'nessie-industrial',
    slug: 'nessie-industrial',

    seo: {
      titleEs: 'Nessie Industrial - IA para plantas y fábricas | OSIX Tech',
      titleEn: 'Nessie Industrial - AI for plants and factories | OSIX Tech',
      descriptionEs: 'Acceso instantáneo a manuales técnicos en la planta. Reduce paradas costosas y mejora la seguridad.',
      descriptionEn: 'Instant access to technical manuals on the floor. Reduce costly downtime and improve safety.',
      keywordsEs: 'industria, IA industrial, procedimientos técnicos, fábricas, seguridad industrial, Galicia',
      keywordsEn: 'industrial AI, technical procedures, manufacturing, industrial safety, Spain',
    },

    hero: {
      headlineKeyEs: 'services.nessie-industrial.hero.headline',
      headlineKeyEn: 'services.nessie-industrial.hero.headline_en',
      subheadlineKeyEs: 'services.nessie-industrial.hero.subheadline',
      subheadlineKeyEn: 'services.nessie-industrial.hero.subheadline_en',
      trustMetrics: ['+50 proyectos', 'Empresa gallega', 'Respuesta 24h'],
    },

    painPoints: [
      {
        iconName: 'document',
        titleKeyEs: 'services.nessie-industrial.pain.point1.title',
        titleKeyEn: 'services.nessie-industrial.pain.point1.title_en',
        descKeyEs: 'services.nessie-industrial.pain.point1.desc',
        descKeyEn: 'services.nessie-industrial.pain.point1.desc_en',
      },
      {
        iconName: 'warning',
        titleKeyEs: 'services.nessie-industrial.pain.point2.title',
        titleKeyEn: 'services.nessie-industrial.pain.point2.title_en',
        descKeyEs: 'services.nessie-industrial.pain.point2.desc',
        descKeyEn: 'services.nessie-industrial.pain.point2.desc_en',
      },
      {
        iconName: 'clock',
        titleKeyEs: 'services.nessie-industrial.pain.point3.title',
        titleKeyEn: 'services.nessie-industrial.pain.point3.title_en',
        descKeyEs: 'services.nessie-industrial.pain.point3.desc',
        descKeyEn: 'services.nessie-industrial.pain.point3.desc_en',
      },
    ],

    solution: {
      titleKeyEs: 'services.nessie-industrial.solution.title',
      titleKeyEn: 'services.nessie-industrial.solution.title_en',
      stepsKeysEs: [
        'services.nessie-industrial.solution.step1',
        'services.nessie-industrial.solution.step2',
        'services.nessie-industrial.solution.step3',
      ],
      stepsKeysEn: [
        'services.nessie-industrial.solution.step1_en',
        'services.nessie-industrial.solution.step2_en',
        'services.nessie-industrial.solution.step3_en',
      ],
      benefitsKeysEs: [
        'services.nessie-industrial.solution.benefit1',
        'services.nessie-industrial.solution.benefit2',
        'services.nessie-industrial.solution.benefit3',
      ],
      benefitsKeysEn: [
        'services.nessie-industrial.solution.benefit1_en',
        'services.nessie-industrial.solution.benefit2_en',
        'services.nessie-industrial.solution.benefit3_en',
      ],
    },

    caseStudy: {
      clientEs: 'Empresa del sector alimentario',
      clientEn: 'Food industry company',
      sectorEs: 'Industria Alimentaria',
      sectorEn: 'Food Manufacturing',
      problemKeyEs: 'services.nessie-industrial.case.problem',
      problemKeyEn: 'services.nessie-industrial.case.problem_en',
      solutionKeyEs: 'services.nessie-industrial.case.solution',
      solutionKeyEn: 'services.nessie-industrial.case.solution_en',
      resultsKeysEs: [
        'services.nessie-industrial.case.result1',
        'services.nessie-industrial.case.result2',
        'services.nessie-industrial.case.result3',
      ],
      resultsKeysEn: [
        'services.nessie-industrial.case.result1_en',
        'services.nessie-industrial.case.result2_en',
        'services.nessie-industrial.case.result3_en',
      ],
    },

    contact: {
      serviceName: 'nessie-industrial',
    },
  },

  'desarrollo-medida': {
    id: 'desarrollo-medida',
    slug: 'desarrollo-medida',

    seo: {
      titleEs: 'Desarrollo a Medida - Software personalizado | OSIX Tech',
      titleEn: 'Custom Development - Personalized software | OSIX Tech',
      descriptionEs: 'Software 100% personalizado para tu proceso. Reemplaza hojas de cálculo frágiles por sistemas robustos.',
      descriptionEn: '100% customized software for your process. Replace fragile spreadsheets with robust systems.',
      keywordsEs: 'software a medida, desarrollo personalizado, proceso empresarial, Galicia, Santiago',
      keywordsEn: 'custom software, bespoke development, business process, Spain',
    },

    hero: {
      headlineKeyEs: 'services.desarrollo-medida.hero.headline',
      headlineKeyEn: 'services.desarrollo-medida.hero.headline_en',
      subheadlineKeyEs: 'services.desarrollo-medida.hero.subheadline',
      subheadlineKeyEn: 'services.desarrollo-medida.hero.subheadline_en',
      trustMetrics: ['+50 proyectos', 'Empresa gallega', 'Respuesta 24h'],
    },

    painPoints: [
      {
        iconName: 'warning',
        titleKeyEs: 'services.desarrollo-medida.pain.point1.title',
        titleKeyEn: 'services.desarrollo-medida.pain.point1.title_en',
        descKeyEs: 'services.desarrollo-medida.pain.point1.desc',
        descKeyEn: 'services.desarrollo-medida.pain.point1.desc_en',
      },
      {
        iconName: 'chart',
        titleKeyEs: 'services.desarrollo-medida.pain.point2.title',
        titleKeyEn: 'services.desarrollo-medida.pain.point2.title_en',
        descKeyEs: 'services.desarrollo-medida.pain.point2.desc',
        descKeyEn: 'services.desarrollo-medida.pain.point2.desc_en',
      },
      {
        iconName: 'clock',
        titleKeyEs: 'services.desarrollo-medida.pain.point3.title',
        titleKeyEn: 'services.desarrollo-medida.pain.point3.title_en',
        descKeyEs: 'services.desarrollo-medida.pain.point3.desc',
        descKeyEn: 'services.desarrollo-medida.pain.point3.desc_en',
      },
    ],

    solution: {
      titleKeyEs: 'services.desarrollo-medida.solution.title',
      titleKeyEn: 'services.desarrollo-medida.solution.title_en',
      stepsKeysEs: [
        'services.desarrollo-medida.solution.step1',
        'services.desarrollo-medida.solution.step2',
        'services.desarrollo-medida.solution.step3',
        'services.desarrollo-medida.solution.step4',
      ],
      stepsKeysEn: [
        'services.desarrollo-medida.solution.step1_en',
        'services.desarrollo-medida.solution.step2_en',
        'services.desarrollo-medida.solution.step3_en',
        'services.desarrollo-medida.solution.step4_en',
      ],
      benefitsKeysEs: [
        'services.desarrollo-medida.solution.benefit1',
        'services.desarrollo-medida.solution.benefit2',
        'services.desarrollo-medida.solution.benefit3',
        'services.desarrollo-medida.solution.benefit4',
      ],
      benefitsKeysEn: [
        'services.desarrollo-medida.solution.benefit1_en',
        'services.desarrollo-medida.solution.benefit2_en',
        'services.desarrollo-medida.solution.benefit3_en',
        'services.desarrollo-medida.solution.benefit4_en',
      ],
    },

    caseStudy: {
      clientEs: 'Cooperativa ganadera gallega',
      clientEn: 'Galician livestock cooperative',
      sectorEs: 'Agroalimentario',
      sectorEn: 'Agribusiness',
      problemKeyEs: 'services.desarrollo-medida.case.problem',
      problemKeyEn: 'services.desarrollo-medida.case.problem_en',
      solutionKeyEs: 'services.desarrollo-medida.case.solution',
      solutionKeyEn: 'services.desarrollo-medida.case.solution_en',
      resultsKeysEs: [
        'services.desarrollo-medida.case.result1',
        'services.desarrollo-medida.case.result2',
        'services.desarrollo-medida.case.result3',
      ],
      resultsKeysEn: [
        'services.desarrollo-medida.case.result1_en',
        'services.desarrollo-medida.case.result2_en',
        'services.desarrollo-medida.case.result3_en',
      ],
    },

    contact: {
      serviceName: 'desarrollo-medida',
    },
  },

  'fidelizacion': {
    id: 'fidelizacion',
    slug: 'fidelizacion',

    seo: {
      titleEs: 'Fidelización con App Móvil - Sistema TAKE | OSIX Tech',
      titleEn: 'Loyalty App - TAKE System | OSIX Tech',
      descriptionEs: 'Tu propia app de fidelización para hostelería. Compite con las cadenas, construye comunidad.',
      descriptionEn: 'Your own loyalty app for hospitality. Compete with chains, build community.',
      keywordsEs: 'app fidelización, hostelería, café, bar, programa lealtad, Galicia',
      keywordsEn: 'loyalty app, hospitality, cafe, bar, rewards program, Spain',
    },

    hero: {
      headlineKeyEs: 'services.fidelizacion.hero.headline',
      headlineKeyEn: 'services.fidelizacion.hero.headline_en',
      subheadlineKeyEs: 'services.fidelizacion.hero.subheadline',
      subheadlineKeyEn: 'services.fidelizacion.hero.subheadline_en',
      trustMetrics: ['+50 proyectos', 'Empresa gallega', 'Respuesta 24h'],
    },

    painPoints: [
      {
        iconName: 'users',
        titleKeyEs: 'services.fidelizacion.pain.point1.title',
        titleKeyEn: 'services.fidelizacion.pain.point1.title_en',
        descKeyEs: 'services.fidelizacion.pain.point1.desc',
        descKeyEn: 'services.fidelizacion.pain.point1.desc_en',
      },
      {
        iconName: 'chart',
        titleKeyEs: 'services.fidelizacion.pain.point2.title',
        titleKeyEn: 'services.fidelizacion.pain.point2.title_en',
        descKeyEs: 'services.fidelizacion.pain.point2.desc',
        descKeyEn: 'services.fidelizacion.pain.point2.desc_en',
      },
      {
        iconName: 'warning',
        titleKeyEs: 'services.fidelizacion.pain.point3.title',
        titleKeyEn: 'services.fidelizacion.pain.point3.title_en',
        descKeyEs: 'services.fidelizacion.pain.point3.desc',
        descKeyEn: 'services.fidelizacion.pain.point3.desc_en',
      },
    ],

    solution: {
      titleKeyEs: 'services.fidelizacion.solution.title',
      titleKeyEn: 'services.fidelizacion.solution.title_en',
      stepsKeysEs: [
        'services.fidelizacion.solution.step1',
        'services.fidelizacion.solution.step2',
        'services.fidelizacion.solution.step3',
      ],
      stepsKeysEn: [
        'services.fidelizacion.solution.step1_en',
        'services.fidelizacion.solution.step2_en',
        'services.fidelizacion.solution.step3_en',
      ],
      benefitsKeysEs: [
        'services.fidelizacion.solution.benefit1',
        'services.fidelizacion.solution.benefit2',
        'services.fidelizacion.solution.benefit3',
        'services.fidelizacion.solution.benefit4',
      ],
      benefitsKeysEn: [
        'services.fidelizacion.solution.benefit1_en',
        'services.fidelizacion.solution.benefit2_en',
        'services.fidelizacion.solution.benefit3_en',
        'services.fidelizacion.solution.benefit4_en',
      ],
    },

    caseStudy: {
      clientEs: 'Cafetería universitaria en Galicia',
      clientEn: 'University cafe in Galicia',
      sectorEs: 'Hostelería',
      sectorEn: 'Hospitality',
      problemKeyEs: 'services.fidelizacion.case.problem',
      problemKeyEn: 'services.fidelizacion.case.problem_en',
      solutionKeyEs: 'services.fidelizacion.case.solution',
      solutionKeyEn: 'services.fidelizacion.case.solution_en',
      resultsKeysEs: [
        'services.fidelizacion.case.result1',
        'services.fidelizacion.case.result2',
        'services.fidelizacion.case.result3',
      ],
      resultsKeysEn: [
        'services.fidelizacion.case.result1_en',
        'services.fidelizacion.case.result2_en',
        'services.fidelizacion.case.result3_en',
      ],
    },

    contact: {
      serviceName: 'fidelizacion',
    },
  },

  'renovacion-webs': {
    id: 'renovacion-webs',
    slug: 'renovacion-webs',

    seo: {
      titleEs: 'Renovación de Webs - Sitios modernos y rápidos | OSIX Tech',
      titleEn: 'Web Renewal - Modern and fast sites | OSIX Tech',
      descriptionEs: 'Web moderna, móvil-first, SEO optimizado. Haz que tus clientes te encuentren.',
      descriptionEn: 'Modern, mobile-first, SEO optimized websites. Get your customers to find you.',
      keywordsEs: 'diseño web, web moderna, SEO, sitio responsive, Galicia, Santiago',
      keywordsEn: 'web design, modern website, SEO, responsive site, Spain',
    },

    hero: {
      headlineKeyEs: 'services.renovacion-webs.hero.headline',
      headlineKeyEn: 'services.renovacion-webs.hero.headline_en',
      subheadlineKeyEs: 'services.renovacion-webs.hero.subheadline',
      subheadlineKeyEn: 'services.renovacion-webs.hero.subheadline_en',
      trustMetrics: ['+50 proyectos', 'Empresa gallega', 'Respuesta 24h'],
    },

    painPoints: [
      {
        iconName: 'warning',
        titleKeyEs: 'services.renovacion-webs.pain.point1.title',
        titleKeyEn: 'services.renovacion-webs.pain.point1.title_en',
        descKeyEs: 'services.renovacion-webs.pain.point1.desc',
        descKeyEn: 'services.renovacion-webs.pain.point1.desc_en',
      },
      {
        iconName: 'search',
        titleKeyEs: 'services.renovacion-webs.pain.point2.title',
        titleKeyEn: 'services.renovacion-webs.pain.point2.title_en',
        descKeyEs: 'services.renovacion-webs.pain.point2.desc',
        descKeyEn: 'services.renovacion-webs.pain.point2.desc_en',
      },
      {
        iconName: 'chart',
        titleKeyEs: 'services.renovacion-webs.pain.point3.title',
        titleKeyEn: 'services.renovacion-webs.pain.point3.title_en',
        descKeyEs: 'services.renovacion-webs.pain.point3.desc',
        descKeyEn: 'services.renovacion-webs.pain.point3.desc_en',
      },
    ],

    solution: {
      titleKeyEs: 'services.renovacion-webs.solution.title',
      titleKeyEn: 'services.renovacion-webs.solution.title_en',
      stepsKeysEs: [
        'services.renovacion-webs.solution.step1',
        'services.renovacion-webs.solution.step2',
        'services.renovacion-webs.solution.step3',
      ],
      stepsKeysEn: [
        'services.renovacion-webs.solution.step1_en',
        'services.renovacion-webs.solution.step2_en',
        'services.renovacion-webs.solution.step3_en',
      ],
      benefitsKeysEs: [
        'services.renovacion-webs.solution.benefit1',
        'services.renovacion-webs.solution.benefit2',
        'services.renovacion-webs.solution.benefit3',
      ],
      benefitsKeysEn: [
        'services.renovacion-webs.solution.benefit1_en',
        'services.renovacion-webs.solution.benefit2_en',
        'services.renovacion-webs.solution.benefit3_en',
      ],
    },

    caseStudy: {
      clientEs: 'Pequeña empresa local',
      clientEn: 'Local small business',
      sectorEs: 'Comercio/Servicios',
      sectorEn: 'Commerce/Services',
      problemKeyEs: 'services.renovacion-webs.case.problem',
      problemKeyEn: 'services.renovacion-webs.case.problem_en',
      solutionKeyEs: 'services.renovacion-webs.case.solution',
      solutionKeyEn: 'services.renovacion-webs.case.solution_en',
      resultsKeysEs: [
        'services.renovacion-webs.case.result1',
        'services.renovacion-webs.case.result2',
        'services.renovacion-webs.case.result3',
      ],
      resultsKeysEn: [
        'services.renovacion-webs.case.result1_en',
        'services.renovacion-webs.case.result2_en',
        'services.renovacion-webs.case.result3_en',
      ],
    },

    contact: {
      serviceName: 'renovacion-webs',
    },
  },
};

/**
 * Helper functions
 */
export function getService(id: ServiceKey): ServiceContent | undefined {
  return SERVICES[id];
}

export function getAllServices(): ServiceContent[] {
  return Object.values(SERVICES);
}

export function getServiceIds(): ServiceKey[] {
  return Object.keys(SERVICES) as ServiceKey[];
}
