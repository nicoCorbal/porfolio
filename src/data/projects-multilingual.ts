export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  type: string;
  date: string;
  awards?: string[];
  birth: string;
  usecase: string[];
  future: string;
  features: Feature[];
  images: string[];
  video?: string;
  actionImages?: string[];
  textColor?: 'light' | 'dark';
}

export const projectsData: Record<string, Record<string, ProjectData>> = {
  es: {
    take: {
      id: 'take',
      title: 'TAKE',
      subtitle: 'Fidelización rápida con Wallet, QR y NFC para cafeterías',
      category: 'Plataforma de Fidelización',
      type: 'SaaS',
      date: 'Q2 2024',
      awards: [],
      textColor: 'dark',
      birth: 'TAKE nació como un piloto real para cafeterías locales con el objetivo de digitalizar la fidelización sin fricción. El usuario añade su pase a Apple Wallet o Google Wallet y acumula sellos o puntos con un tap o un QR. El comercio gestiona promociones y canjes desde un panel web sencillo.',
      usecase: [
        'Cafeterías y panaderías: sellos digitales por consumición y recompensas configurables.',
        'Cadenas locales: campañas por tienda, control de canjes y métricas por ubicación.',
        'Eventos pop-up: pases temporales con expiración y límites por usuario.',
        'Programas de puntos para retail ligero: descuentos y niveles de cliente sin necesidad de POS complejo.'
      ],
      future: 'Evolucionar hacia una plataforma omnicanal con reglas avanzadas de promociones, integración directa con TPVs y webhooks, y métricas en tiempo real. Roadmap: referidos, segmentación por cohortes, A/B de recompensas y API pública para integraciones.',
      features: [
        {
          title: 'Pases Apple y Google Wallet',
          description: 'Alta en un tap. Sin apps obligatorias. Actualización dinámica del saldo, sello o nivel del cliente.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10h10M7 14h6"/></svg>'
        },
        {
          title: 'Validación QR y NFC',
          description: 'Registro de sellos y canjes mediante QR o NFC con control de doble gasto y límites diarios.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M3 5h6v6H3V5zm12 0h6v6h-6V5zM3 13h6v6H3v-6zm12 0h6v6h-6v-6z"/></svg>'
        },
        {
          title: 'Motor de Recompensas Flexible',
          description: 'Sellos, puntos o niveles. Reglas por producto, franja horaria, tienda y mínimo de ticket.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m-7 9h8a2 2 0 002-2V7a2 2 0 00-2-2H9l-4 4v8a2 2 0 002 2z"/></svg>'
        },
        {
          title: 'Dashboard para Comercios',
          description: 'Panel con canjes, tasas de retorno, LTV estimado y ranking por tienda. Exportación CSV.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V6m-4 13v-7m8 7V8m4 11V4"/></svg>'
        },
        {
          title: 'Integración Backend',
          description: 'Backend en Node con Firebase o Supabase según despliegue. Webhooks para TPV y ERP.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6m0 0v6m0-6l-8 8-4-4-6 6"/></svg>'
        },
        {
          title: 'Operativa Offline-first',
          description: 'Validación resiliente en entornos con conectividad irregular y sincronización diferida.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12a9 9 0 1018 0 9 9 0 00-18 0zm7 5v-4h4"/></svg>'
        }
      ],
      images: ['/projects/take/take.png'],
      actionImages: [
        '/projects/take/front.png',
        '/projects/take/home.png',
        '/projects/take/menu.png',
        '/projects/take/game.png',
        '/projects/take/events.png',
        '/projects/take/rewards.png'
      ],
    },
    nessie: {
      id: 'nessie',
      title: 'Nessie',
      subtitle: 'Habla con tus documentos. Encuentra respuestas, no archivos.',
      category: 'Asistente IA',
      type: 'Producto',
      date: 'Q4 2025',
      awards: [],
      textColor: 'light',
      birth: 'Nessie nació con una clara vocación de producto: desde el inicio fue concebido como una solución para consultar, entender y estructurar el conocimiento interno de organizaciones intensivas en documentación.',
      usecase: [
        'Consultorías y auditorías: búsqueda rápida de cláusulas, normativas o contenido clave en miles de documentos.',
        'Industria: operarios y técnicos pueden consultar manuales y procedimientos con lenguaje natural, sin detener la producción.',
        'Grandes equipos: acceso inmediato a información técnica sin depender de expertos ni perder tiempo buscando archivos.'
      ],
      future: 'El futuro de Nessie es evolucionar como plataforma modular, optimizándose según el feedback de clientes reales, integrando nuevas funcionalidades según sus sectores, y convirtiéndose en una herramienta clave para la gestión del conocimiento empresarial.',
      features: [
        {
          title: 'Búsqueda Semántica',
          description: 'Encuentra información precisa usando lenguaje natural. Nuestro sistema entiende el contexto y la intención detrás de tus consultas.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>'
        },
        {
          title: 'Chat Inteligente',
          description: 'Conversa directamente con tu documentación. Obtén respuestas instantáneas como si hablaras con un experto.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>'
        },
        {
          title: 'Múltiples Formatos',
          description: 'Procesa PDFs, documentos Word, PowerPoints y más. Un solo sistema para toda tu documentación empresarial.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>'
        },
        {
          title: 'Control de Versiones',
          description: 'Mantén el histórico de cambios y versiones de documentos. Siempre sabrás qué información está actualizada.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>'
        },
        {
          title: 'Integración Cloud',
          description: 'Conecta con Google Drive, Dropbox y otros servicios. Sincronización automática y acceso desde cualquier lugar.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/></svg>'
        },
        {
          title: 'Adaptable a Industrias',
          description: 'Personalizable para diferentes sectores: manufactura, consultoría, medicina, legal. Se adapta a tu vocabulario específico.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>'
        }
      ],
      images: ['/projects/nessie/nessie.png'],
      video: '/projects/nessie/nessie-demo.mov'
    }
  },
  en: {
      take: {
      id: 'take',
      title: 'TAKE',
      subtitle: 'Frictionless loyalty with Wallet, QR, and NFC for coffee shops',
      category: 'Fidelity Platform',
      type: 'SaaS',
      date: 'Q3 2025',
      awards: [],
      textColor: 'dark',
      birth: 'TAKE was born as a real-world pilot for local coffee shops with the goal of digitizing customer loyalty in a frictionless way. Users add their pass to Apple Wallet or Google Wallet and collect stamps or points with a tap or a QR scan. Merchants manage promotions and redemptions from a simple web dashboard.',
      usecase: [
        'Coffee shops and bakeries: digital stamp cards per purchase, with configurable rewards.',
        'Local chains: store-specific campaigns, redemption control, and analytics per location.',
        'Pop-up events: temporary passes with expiration and per-user limits.',
        'Light retail loyalty: point-based discounts and customer tiers without complex POS systems.'
      ],
      future: 'The next step for TAKE is to evolve into an omnichannel loyalty platform with advanced promotion rules, direct POS integrations, webhooks, and real-time analytics. The roadmap includes referral systems, cohort segmentation, A/B reward testing, and a public API for third-party integrations.',
      features: [
        {
          title: 'Apple & Google Wallet Passes',
          description: 'Join in one tap. No mandatory apps. Dynamic updates for balance, stamps, or customer level.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10h10M7 14h6"/></svg>'
        },
        {
          title: 'QR and NFC Validation',
          description: 'Stamp and reward validation via QR or NFC, with double-spend protection and daily limits.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M3 5h6v6H3V5zm12 0h6v6h-6V5zM3 13h6v6H3v-6zm12 0h6v6h-6v-6z"/></svg>'
        },
        {
          title: 'Flexible Reward Engine',
          description: 'Support for stamps, points, or tiers. Rules per product, time slot, store, or order value.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m-7 9h8a2 2 0 002-2V7a2 2 0 00-2-2H9l-4 4v8a2 2 0 002 2z"/></svg>'
        },
        {
          title: 'Merchant Dashboard',
          description: 'Web panel with redemptions, return rates, estimated LTV, and per-store rankings. CSV export available.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V6m-4 13v-7m8 7V8m4 11V4"/></svg>'
        },
        {
          title: 'Backend Integration',
          description: 'Node backend using Firebase or Supabase, depending on deployment. Webhooks available for POS or ERP systems.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6m0 0v6m0-6l-8 8-4-4-6 6"/></svg>'
        },
        {
          title: 'Offline-first Operation',
          description: 'Resilient validation in low-connectivity environments, with deferred synchronization once online.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12a9 9 0 1018 0 9 9 0 00-18 0zm7 5v-4h4"/></svg>'
        }
      ],
      images: [
        '/projects/take/take.png',
      ],
      actionImages: [
        '/projects/take/front.png',
        '/projects/take/home.png',
        '/projects/take/menu.png',
        '/projects/take/game.png',
        '/projects/take/events.png',
        '/projects/take/rewards.png'
      ],
    },
    nessie: {
      id: 'nessie',
      title: 'Nessie',
      subtitle: 'Talk to your documents. Find answers, not files.',
      category: 'AI Assistant',
      type: 'Product',
      date: 'Q4 2025',
      awards: [],
      textColor: 'light',
      birth: 'Nessie was born with a clear product vocation: from the beginning it was conceived as a solution to query, understand and structure internal knowledge of documentation-intensive organizations.',
      usecase: [
        'Consulting and auditing: quick search for clauses, regulations or key content in thousands of documents.',
        'Industry: operators and technicians can consult manuals and procedures with natural language, without stopping production.',
        'Large teams: immediate access to technical information without depending on experts or wasting time searching for files.'
      ],
      future: 'The future of Nessie is to evolve as a modular platform, optimizing according to real customer feedback, integrating new functionalities according to their sectors, and becoming a key tool for enterprise knowledge management.',
      features: [
        {
          title: 'Semantic Search',
          description: 'Find accurate information using natural language. Our system understands the context and intent behind your queries.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>'
        },
        {
          title: 'Smart Chat',
          description: 'Chat directly with your documentation. Get instant answers as if you were talking to an expert.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>'
        },
        {
          title: 'Multiple Formats',
          description: 'Process PDFs, Word documents, PowerPoints and more. A single system for all your business documentation.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>'
        },
        {
          title: 'Version Control',
          description: 'Keep track of document changes and versions. You\'ll always know what information is up to date.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>'
        },
        {
          title: 'Cloud Integration',
          description: 'Connect with Google Drive, Dropbox and other services. Automatic sync and access from anywhere.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/></svg>'
        },
        {
          title: 'Industry Adaptable',
          description: 'Customizable for different sectors: manufacturing, consulting, medical, legal. Adapts to your specific vocabulary.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>'
        }
      ],
      images: ['/projects/nessie/nessie.png'],
      video: '/projects/nessie/nessie-demo.mov'
    }
  }
};

export function getProject(id: string, lang: string = 'es'): ProjectData | undefined {
  return projectsData[lang]?.[id];
}

export function getAllProjects(lang: string = 'es'): ProjectData[] {
  return Object.values(projectsData[lang] || {});
}

export function getProjectIds(): string[] {
  return Object.keys(projectsData.es);
}