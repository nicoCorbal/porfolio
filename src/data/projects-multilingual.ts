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
}

export const projectsData: Record<string, Record<string, ProjectData>> = {
  es: {
    nessie: {
      id: 'nessie',
      title: 'Nessie Assistant',
      subtitle: 'Habla con tus documentos. Encuentra respuestas, no archivos.',
      category: 'Asistente IA',
      type: 'Producto',
      date: 'Q4 2025',
      awards: [],
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
      images: ['/projects/nessie.jpg'],
    },
    echoia: {
      id: 'echoia',
      title: 'Echoia Notetaker',
      subtitle: 'Convierte conversaciones en conocimiento',
      category: 'Herramienta IA',
      type: 'Producto',
      date: 'Q2 2025',
      birth: 'Echoia nació como una herramienta interna para transcribir y organizar automáticamente nuestras reuniones de equipo, facilitando el seguimiento de tareas, decisiones y conocimiento generado en el día a día.',
      usecase: [
        'Reuniones de equipo: transcripción automática, resumen y extracción de tareas sin esfuerzo manual.',
        'Entornos educativos: estudiantes graban clases y reciben transcripciones organizadas por asignatura.',
        'Captura de voz para otros sistemas: integración con herramientas como Nessie para archivar conocimiento hablado.'
      ],
      future: 'El siguiente paso para Echoia es convertirse en un producto de mercado completo: optimizado, más inteligente, y conectado a herramientas como Nessie para crear un ecosistema integrado de captura y organización del conocimiento hablado.',
      features: [
        {
          title: 'Transcripción en Tiempo Real',
          description: 'Transcribe audio con alta precisión y sin latencia. Echoia convierte conversaciones en texto al momento, lo que permite seguir reuniones, clases o entrevistas sin perder detalle.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>'
        },
        {
          title: 'Resúmenes Automáticos',
          description: 'Extrae automáticamente los puntos clave de una conversación, ideal para evitar releer textos largos. Los resúmenes siguen una estructura clara: decisiones, acuerdos, temas tratados y próximos pasos.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>'
        },
        {
          title: 'Extracción de Tareas',
          description: 'Identifica automáticamente frases que indican tareas, asignaciones o decisiones. Perfecto para equipos que usan metodologías ágiles o necesitan trazabilidad de las responsabilidades.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>'
        },
        {
          title: 'Etiquetado Inteligente',
          description: 'Organiza automáticamente tus notas por tema, persona o tipo de conversación. Echoia permite navegar entre reuniones pasadas con filtros inteligentes sin tener que etiquetar manualmente.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/></svg>'
        }
      ],
      images: ['/projects/echoia.jpg'],
    },
    kharon: {
      id: 'kharon',
      title: 'Kharon Proxy',
      subtitle: 'Tu guardián entre los mundos digitales',
      category: 'Herramienta Ciberseguridad',
      type: 'Herramienta Interna',
      date: 'Q3 2025',
      birth: 'Kharon nació como una herramienta interna para gestionar el acceso, la autenticación y el tráfico entre los distintos backends de nuestros proyectos, especialmente en entornos con múltiples capas y clientes diferenciados.',
      usecase: [
        'API Gateway seguro: controla el acceso a APIs internas según roles y tipo de token.',
        'Firewall lógico entre microservicios: inspección de tráfico y trazabilidad en arquitecturas distribuidas.',
        'Entornos multi-cliente: enruta peticiones de forma dinámica entre distintos backends según el token recibido.'
      ],
      future: 'Nuestro objetivo con Kharon es seguir perfeccionándolo para ofrecer un gateway de alto rendimiento, flexible y seguro, que responda a las exigencias reales de nuestros clientes en cuanto a trazabilidad, protección y control de flujos API.',
      features: [
        {
          title: 'Autenticación Segura',
          description: 'Gestiona acceso a tus sistemas con tokens JWT y API keys de forma granular. Kharon permite definir qué tipo de usuarios puede acceder a qué recursos, y controla permisos de forma dinámica, incluso en entornos con múltiples capas de autenticación.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>'
        },
        {
          title: 'Inspección de Tráfico',
          description: 'Examina cada petición entrante para asegurar que cumple con las políticas definidas. Ideal para prevenir ataques, detectar anomalías o implementar reglas personalizadas de validación a nivel de payload o cabeceras.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
        },
        {
          title: 'Routing Inteligente',
          description: 'Enruta cada solicitud al backend correspondiente según su token, cliente, o contexto. Esto permite ofrecer un servicio multicliente desde una misma infraestructura sin comprometer seguridad ni rendimiento.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>'
        },
        {
          title: 'Dashboard de Métricas',
          description: 'Visualiza en tiempo real cómo se está utilizando el proxy: número de peticiones, errores, uso por backend, o tipos de token. Un panel útil tanto para desarrolladores como para responsables de ciberseguridad.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>'
        }
      ],
      images: ['/projects/kharon.jpg'],
    },
  },
  en: {
    nessie: {
      id: 'nessie',
      title: 'Nessie Assistant',
      subtitle: 'Talk to your documents. Find answers, not files.',
      category: 'AI Assistant',
      type: 'Product',
      date: 'Q4 2025',
      awards: [],
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
      images: ['/projects/nessie.jpg'],
    },
    echoia: {
      id: 'echoia',
      title: 'Echoia Notetaker',
      subtitle: 'Turn conversations into knowledge',
      category: 'AI Tool',
      type: 'Product',
      date: 'Q2 2025',
      birth: 'Echoia was born as an internal tool to automatically transcribe and organize our team meetings, facilitating the tracking of tasks, decisions and knowledge generated on a daily basis.',
      usecase: [
        'Team meetings: automatic transcription, summary and task extraction without manual effort.',
        'Educational environments: students record classes and receive transcripts organized by subject.',
        'Voice capture for other systems: integration with tools like Nessie to archive spoken knowledge.'
      ],
      future: 'The next step for Echoia is to become a complete market product: optimized, smarter, and connected to tools like Nessie to create an integrated ecosystem for capturing and organizing spoken knowledge.',
      features: [
        {
          title: 'Real-Time Transcription',
          description: 'Transcribe audio with high accuracy and no latency. Echoia converts conversations to text on the fly, allowing you to follow meetings, classes or interviews without missing a detail.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>'
        },
        {
          title: 'Automatic Summaries',
          description: 'Automatically extracts key points from a conversation, ideal for avoiding rereading long texts. Summaries follow a clear structure: decisions, agreements, topics covered and next steps.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>'
        },
        {
          title: 'Task Extraction',
          description: 'Automatically identifies phrases that indicate tasks, assignments or decisions. Perfect for teams using agile methodologies or needing traceability of responsibilities.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>'
        },
        {
          title: 'Smart Tagging',
          description: 'Automatically organizes your notes by topic, person or conversation type. Echoia allows you to navigate between past meetings with smart filters without having to manually tag.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/></svg>'
        }
      ],
      images: ['/projects/echoia.jpg'],
    },
    kharon: {
      id: 'kharon',
      title: 'Kharon Proxy',
      subtitle: 'Your guardian between digital worlds',
      category: 'Cybersecurity Tool',
      type: 'Internal Tool',
      date: 'Q3 2025',
      birth: 'Kharon was born as an internal tool to manage access, authentication and traffic between the different backends of our projects, especially in environments with multiple layers and differentiated clients.',
      usecase: [
        'Secure API Gateway: controls access to internal APIs according to roles and token type.',
        'Logical firewall between microservices: traffic inspection and traceability in distributed architectures.',
        'Multi-client environments: dynamically routes requests between different backends based on the received token.'
      ],
      future: 'Our goal with Kharon is to continue perfecting it to offer a high-performance, flexible and secure gateway that responds to the real demands of our clients in terms of traceability, protection and API flow control.',
      features: [
        {
          title: 'Secure Authentication',
          description: 'Manage access to your systems with JWT tokens and API keys in a granular way. Kharon allows you to define what type of users can access what resources, and controls permissions dynamically, even in environments with multiple authentication layers.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>'
        },
        {
          title: 'Traffic Inspection',
          description: 'Examines each incoming request to ensure it complies with defined policies. Ideal for preventing attacks, detecting anomalies or implementing custom validation rules at payload or header level.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
        },
        {
          title: 'Smart Routing',
          description: 'Routes each request to the corresponding backend based on its token, client, or context. This allows offering a multi-client service from the same infrastructure without compromising security or performance.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>'
        },
        {
          title: 'Metrics Dashboard',
          description: 'View in real time how the proxy is being used: number of requests, errors, usage by backend, or token types. A useful panel for both developers and cybersecurity managers.',
          icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>'
        }
      ],
      images: ['/projects/kharon.jpg'],
    },
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