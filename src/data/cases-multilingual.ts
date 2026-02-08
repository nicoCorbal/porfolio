/**
 * Case Studies Data
 * Real and anonymized case studies showcasing OSIX Tech solutions
 */

export interface CaseStudy {
  id: string;

  // Client info (anonymized for privacy)
  client: {
    name: string;
    sector: string;
    size?: string;
    location?: string;
  };

  // Multilingual content
  title: {
    en: string;
    es: string;
  };

  problem: {
    en: string;
    es: string;
  };

  solution: {
    en: string;
    es: string;
  };

  results: {
    en: string[];
    es: string[];
  };

  // Metadata
  services: string[];
  technologies?: string[];
  duration?: string;
  year: number;
  featured: boolean;
}

export const CASES: CaseStudy[] = [
  {
    id: 'cooperativa-evaluacion',
    client: {
      name: 'Cooperativa ganadera gallega',
      sector: 'Agroalimentario',
      size: '50+ empleados',
      location: 'Galicia',
    },
    title: {
      es: 'Sistema de Evaluación de Empleados',
      en: 'Employee Evaluation System',
    },
    problem: {
      es: 'Proceso de evaluación manual, inconsistente, sin datos históricos. Cada gerente usaba criterios diferentes.',
      en: 'Manual evaluation process, inconsistent, no historical data. Each manager used different criteria.',
    },
    solution: {
      es: 'Plataforma web de evaluación con dashboards analíticos, seguimiento de competencias, histórico centralizado.',
      en: 'Web evaluation platform with analytical dashboards, competency tracking, centralized history.',
    },
    results: {
      es: [
        'Reducción de 80% en tiempo de evaluación',
        'Datos históricos centralizados accesibles',
        'Mejora en consistencia de evaluaciones entre departamentos',
        'Identificación de gaps de formación',
      ],
      en: [
        '80% reduction in evaluation time',
        'Centralized historical data accessible',
        'Improved evaluation consistency across departments',
        'Identification of training gaps',
      ],
    },
    services: ['Custom Development'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    duration: '3 meses',
    year: 2025,
    featured: false,
  },

  {
    id: 'academia-take-fidelizacion',
    client: {
      name: 'Academia de formación en Galicia',
      sector: 'Educación / Hostelería',
      location: 'Santiago de Compostela',
    },
    title: {
      es: 'App de Fidelización para Cafetería Universitaria',
      en: 'Loyalty App for University Cafe',
    },
    problem: {
      es: 'Sin forma de fidelizar clientes. Estudiantes visitaban una sola vez. Sin datos sobre preferencias o hábitos de compra.',
      en: 'No way to retain customers. Students visited once. No data on preferences or purchase habits.',
    },
    solution: {
      es: 'App móvil con programa de puntos, gamificación, notificaciones push, sistema de ofertas personalizadas.',
      en: 'Mobile app with points program, gamification, push notifications, personalized offers system.',
    },
    results: {
      es: [
        'Implementado en cafetería universitaria con 500+ usuarios activos',
        'Sistema de recompensas funcional y atractivo',
        'Dashboard de gestión para analizar datos de clientes',
        '+35% en frecuencia de visitas de usuarios activos',
      ],
      en: [
        'Deployed in university cafe with 500+ active users',
        'Functional and attractive rewards system',
        'Management dashboard for customer analytics',
        '+35% increase in visit frequency for active users',
      ],
    },
    services: ['TAKE', 'Mobile Development'],
    technologies: ['React Native', 'Firebase', 'Node.js'],
    duration: '6 semanas',
    year: 2024,
    featured: true,
  },

  {
    id: 'consultoria-nessie-oficina',
    client: {
      name: 'Consultoría gallega',
      sector: 'Consultoría',
      size: '25 empleados',
      location: 'Galicia',
    },
    title: {
      es: 'Asistente IA para Búsqueda de Precedentes',
      en: 'AI Assistant for Precedent Search',
    },
    problem: {
      es: '8 horas/semana perdidas buscando precedentes en contratos antiguos. Información dispersa en emails y archivos. Nuevos empleados tardaban semanas en ser productivos.',
      en: '8 hours/week lost searching precedents in old contracts. Information scattered in emails and files. New employees took weeks to become productive.',
    },
    solution: {
      es: 'Nessie Oficina implementado con 500+ documentos históricos. Integración con correo y sistemas de archivo. Acceso mediante interfaz en lenguaje natural.',
      en: 'Nessie Office implemented with 500+ historical documents. Integration with email and file systems. Natural language interface access.',
    },
    results: {
      es: [
        'Reducción del 75% en tiempo de búsqueda de precedentes',
        'Respuestas instantáneas a consultas complejas',
        'Conocimiento histórico accesible a todo el equipo',
        'Nuevos empleados productivos en 3 días vs 3 semanas',
      ],
      en: [
        '75% reduction in precedent search time',
        'Instant answers to complex queries',
        'Historical knowledge accessible to entire team',
        'New employees productive in 3 days vs 3 weeks',
      ],
    },
    services: ['Nessie'],
    technologies: ['Nessie Platform', 'API Integration'],
    duration: '6 semanas',
    year: 2025,
    featured: true,
  },

  {
    id: 'industria-nessie-industrial',
    client: {
      name: 'Empresa del sector alimentario industrial',
      sector: 'Industria Alimentaria',
      location: 'Galicia',
    },
    title: {
      es: 'Asistente IA para Documentación Técnica en Planta',
      en: 'AI Assistant for Plant Technical Documentation',
    },
    problem: {
      es: 'Manuales técnicos inaccesibles en planta. Operarios memorizaban procedimientos, causando errores y paradas costosas. Documentación obsoleta en servidor offline.',
      en: 'Technical manuals inaccessible on plant floor. Operators memorized procedures, causing errors and costly downtime. Obsolete documentation on offline server.',
    },
    solution: {
      es: 'Nessie Industrial en fase piloto. Documentación técnica cargada y accesible vía QR codes en máquinas. Interfaz móvil para consultas en tiempo real.',
      en: 'Nessie Industrial in pilot phase. Technical documentation loaded and accessible via QR codes on machines. Mobile interface for real-time queries.',
    },
    results: {
      es: [
        'Proyecto en fase de implementación exitosa',
        'Acceso móvil a procedimientos técnicos desde planta',
        'Reducción esperada en tiempos de parada (estimado 40%)',
        'Mejora en cumplimiento de normativa de seguridad',
      ],
      en: [
        'Project in successful implementation phase',
        'Mobile access to technical procedures from plant',
        'Expected reduction in downtime (estimated 40%)',
        'Improved safety compliance',
      ],
    },
    services: ['Nessie Industrial'],
    technologies: ['Nessie Platform', 'QR Integration', 'Mobile Access'],
    year: 2025,
    featured: true,
  },
];

/**
 * Helper functions
 */
export function getCases(): CaseStudy[] {
  return CASES;
}

export function getFeaturedCases(): CaseStudy[] {
  return CASES.filter((c) => c.featured);
}

export function getCasesByService(service: string): CaseStudy[] {
  return CASES.filter((c) => c.services.includes(service));
}

export function getCaseById(id: string): CaseStudy | undefined {
  return CASES.find((c) => c.id === id);
}
