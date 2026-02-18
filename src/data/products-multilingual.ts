export interface Step {
  title: string;
  description: string;
}

export interface Audience {
  title: string;
  description: string;
  icon: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
  media?: string;
}

export interface ProductData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  features: Feature[];
  steps: Step[];
  audience: Audience[];
  cases?: string[];
  images: string[];
  textColor?: 'light' | 'dark';
  type?: 'standalone' | 'project';
  landingUrl?: string;
}

export const productsData: Record<string, Record<string, ProductData>> = {
  es: {
    apec: {
      id: 'apec',
      title: 'APEC',
      tagline: 'Agent-Powered Enterprise Communications',
      description: 'Automatiza tu prospección comercial sin perder el toque humano. APEC investiga empresas, extrae datos financieros, evalúa el encaje con tu oferta mediante IA y genera emails de contacto hiperpersonalizados. Su dashboard centraliza envíos, seguimiento de aperturas y clics, y programación de follow-ups. Escala tu captación B2B de horas de trabajo manual a minutos de supervisión.',
      icon: 'Mail',
      features: [
        {
          title: 'Investigación Automática',
          description: 'APEC investiga empresas objetivo automáticamente, extrayendo datos financieros, información de contacto y contexto de negocio relevante.',
          icon: 'Search'
        },
        {
          title: 'Evaluación con IA',
          description: 'Evalúa el encaje entre tu oferta y cada empresa prospectada, priorizando las oportunidades con mayor probabilidad de conversión.',
          icon: 'Brain'
        },
        {
          title: 'Emails Hiperpersonalizados',
          description: 'Genera emails de contacto únicos para cada empresa, adaptados a su sector, tamaño y necesidades específicas.',
          icon: 'PenTool'
        },
        {
          title: 'Dashboard Centralizado',
          description: 'Monitoriza envíos, aperturas, clics y respuestas desde un único panel. Programa follow-ups automáticos.',
          icon: 'BarChart3'
        },
        {
          title: 'Seguimiento Inteligente',
          description: 'Tracking de aperturas y clics en tiempo real. Identifica los leads más interesados y prioriza el seguimiento.',
          icon: 'Eye'
        },
        {
          title: 'Escalabilidad B2B',
          description: 'Pasa de horas de trabajo manual a minutos de supervisión. Escala tu captación sin perder calidad en la comunicación.',
          icon: 'TrendingUp'
        }
      ],
      steps: [
        { title: 'Investiga', description: 'APEC busca y recopila datos financieros y de contacto de empresas objetivo.' },
        { title: 'Evalúa', description: 'La IA analiza el encaje entre tu oferta y cada empresa prospectada.' },
        { title: 'Genera', description: 'Crea emails hiperpersonalizados adaptados al sector y necesidades de cada lead.' },
        { title: 'Envía y rastrea', description: 'Envía, monitoriza aperturas y clics, y programa follow-ups automáticos.' }
      ],
      audience: [
        { title: 'Equipos comerciales B2B', description: 'Que necesitan escalar la prospección sin perder personalización.', icon: 'Briefcase' },
        { title: 'Startups en crecimiento', description: 'Que buscan generar pipeline de ventas sin un equipo grande.', icon: 'Rocket' },
        { title: 'Agencias y consultoras', description: 'Que gestionan prospección para múltiples clientes.', icon: 'Building2' }
      ],
      images: ['/products/apec.jpg'],
      textColor: 'light'
    },
    nessie: {
      id: 'nessie',
      title: 'Nessie',
      tagline: 'Habla con tus documentos. Encuentra respuestas, no archivos.',
      description: 'Conecta toda la documentación de tu empresa y pregúntale lo que quieras en lenguaje natural. Nessie procesa automáticamente PDFs, Word, hojas de cálculo y más desde Google Drive, los convierte en conocimiento buscable con IA y te responde en tiempo real con referencias a los documentos originales. Disponible en versión Oficina para consultoras y despachos, e Industrial para plantas de producción con consulta por voz y acceso desde tablet.',
      icon: 'MessageCircle',
      features: [
        {
          title: 'Búsqueda Semántica',
          description: 'Encuentra información precisa usando lenguaje natural. Nuestro sistema entiende el contexto y la intención detrás de tus consultas.',
          icon: 'Search'
        },
        {
          title: 'Chat Inteligente',
          description: 'Conversa directamente con tu documentación. Obtén respuestas instantáneas como si hablaras con un experto.',
          icon: 'MessageCircle'
        },
        {
          title: 'Múltiples Formatos',
          description: 'Procesa PDFs, documentos Word, PowerPoints y más. Un solo sistema para toda tu documentación empresarial.',
          icon: 'Files'
        },
        {
          title: 'Control de Versiones',
          description: 'Mantén el histórico de cambios y versiones de documentos. Siempre sabrás qué información está actualizada.',
          icon: 'GitBranch'
        },
        {
          title: 'Integración Cloud',
          description: 'Conecta con Google Drive, Dropbox y otros servicios. Sincronización automática y acceso desde cualquier lugar.',
          icon: 'Cloud'
        },
        {
          title: 'Adaptable a Industrias',
          description: 'Personalizable para diferentes sectores: manufactura, consultoría, medicina, legal. Se adapta a tu vocabulario específico.',
          icon: 'Settings'
        }
      ],
      steps: [
        { title: 'Conecta', description: 'Vincula tu Google Drive u otras fuentes de documentación empresarial.' },
        { title: 'Procesa', description: 'Nessie indexa PDFs, Word, Excel y más, convirtiéndolos en conocimiento buscable.' },
        { title: 'Pregunta', description: 'Haz consultas en lenguaje natural como si hablaras con un experto.' },
        { title: 'Obtén respuestas', description: 'Recibe respuestas precisas con referencias a los documentos originales.' }
      ],
      audience: [
        { title: 'Consultoras y despachos', description: 'Con grandes volúmenes de documentación técnica y legal.', icon: 'Building2' },
        { title: 'Plantas industriales', description: 'Que necesitan acceso rápido a manuales y normativas desde planta.', icon: 'Factory' },
        { title: 'Departamentos legales', description: 'Que buscan respuestas rápidas en contratos y regulaciones.', icon: 'Scale' }
      ],
      cases: ['consultoria'],
      images: ['/products/nessie.jpg'],
      textColor: 'light',
      type: 'standalone',
      landingUrl: 'https://www.nessie.osix.tech/'
    },
    moura: {
      id: 'moura',
      title: 'Moura',
      tagline: 'Encuentra las subvenciones que encajan con tu empresa',
      description: 'Encuentra las subvenciones que encajan con tu empresa sin buscar. Moura cruza automáticamente las convocatorias públicas con tu perfil empresarial — sector, ubicación, tamaño — y analiza las bases con IA para extraer requisitos, plazos y presupuestos. Cuando hay un match, genera la memoria técnica, el plan de trabajo y el presupuesto detallado con un solo clic.',
      icon: 'FileSearch',
      features: [
        {
          title: 'Matching Automático',
          description: 'Cruza convocatorias públicas con tu perfil empresarial: sector, ubicación, tamaño. Sin búsquedas manuales.',
          icon: 'Target'
        },
        {
          title: 'Análisis con IA',
          description: 'Analiza las bases de cada convocatoria para extraer requisitos, plazos, presupuestos y criterios de evaluación.',
          icon: 'Brain'
        },
        {
          title: 'Generación de Memorias',
          description: 'Genera la memoria técnica, plan de trabajo y presupuesto detallado con un solo clic.',
          icon: 'FileText'
        },
        {
          title: 'Alertas en Tiempo Real',
          description: 'Recibe notificaciones cuando se publica una convocatoria que encaja con tu empresa. No pierdas ninguna oportunidad.',
          icon: 'Bell'
        }
      ],
      steps: [
        { title: 'Perfila', description: 'Define tu sector, ubicación y tamaño para crear tu perfil empresarial.' },
        { title: 'Cruza', description: 'Moura compara automáticamente convocatorias públicas con tu perfil.' },
        { title: 'Analiza', description: 'La IA extrae requisitos, plazos y presupuestos de cada convocatoria.' },
        { title: 'Genera', description: 'Crea memoria técnica, plan de trabajo y presupuesto con un clic.' }
      ],
      audience: [
        { title: 'PYMEs', description: 'Que quieren acceder a subvenciones sin dedicar recursos internos.', icon: 'Store' },
        { title: 'Consultoras de subvenciones', description: 'Que gestionan convocatorias para múltiples clientes.', icon: 'HandCoins' },
        { title: 'Departamentos de I+D', description: 'Que buscan financiación pública para proyectos de innovación.', icon: 'FlaskConical' }
      ],
      images: ['/products/moura.jpg'],
      textColor: 'light'
    },
    acta: {
      id: 'acta',
      title: 'ACTA',
      tagline: 'Automated Capture, Transcription & Analysis',
      description: 'Graba tus reuniones, formaciones o entrevistas y obtén transcripciones profesionales con identificación automática de quién habla en cada momento. ACTA combina transcripción de alta precisión con diarización inteligente y agentes de resumen que extraen las decisiones clave, tareas pendientes y puntos de acción de cada conversación.',
      icon: 'Mic',
      features: [
        {
          title: 'Transcripción de Alta Precisión',
          description: 'Transcripción automática con reconocimiento avanzado de voz. Soporte para múltiples idiomas y acentos.',
          icon: 'FileText'
        },
        {
          title: 'Diarización Inteligente',
          description: 'Identificación automática de quién habla en cada momento. Distingue hasta 10 participantes simultáneos.',
          icon: 'Users'
        },
        {
          title: 'Resumen con IA',
          description: 'Agentes de resumen que extraen decisiones clave, tareas pendientes y puntos de acción automáticamente.',
          icon: 'ListChecks'
        },
        {
          title: 'Exportación Flexible',
          description: 'Exporta transcripciones y resúmenes en múltiples formatos. Integración con herramientas de gestión de proyectos.',
          icon: 'Download'
        }
      ],
      steps: [
        { title: 'Graba', description: 'Captura el audio de reuniones, formaciones o entrevistas.' },
        { title: 'Transcribe', description: 'Transcripción automática de alta precisión con soporte multiidioma.' },
        { title: 'Identifica', description: 'Diarización inteligente: quién dice qué en cada momento.' },
        { title: 'Resume', description: 'Agentes IA extraen decisiones, tareas y puntos de acción.' }
      ],
      audience: [
        { title: 'Equipos de gestión', description: 'Que necesitan documentar reuniones y hacer seguimiento de acuerdos.', icon: 'Users' },
        { title: 'Formadores y coaches', description: 'Que quieren transcripciones profesionales de sus sesiones.', icon: 'GraduationCap' },
        { title: 'Departamentos legales', description: 'Que requieren actas precisas de reuniones y entrevistas.', icon: 'Scale' }
      ],
      images: ['/products/acta.jpg'],
      textColor: 'light'
    },
    iris: {
      id: 'iris',
      title: 'IRIS',
      tagline: 'Intelligent Response & Inbox System',
      description: 'Un sistema de IA que monitoriza tus bandejas de entrada, clasifica automáticamente cada email por tipo (presupuestos, pedidos, facturas, consultas), lo cruza contra tus bases de datos internas y genera propuestas de respuesta listas para tu revisión. Se integra con tu ERP y CRM. Transforma horas de gestión de correo en minutos de supervisión.',
      icon: 'Inbox',
      features: [
        {
          title: 'Clasificación Automática',
          description: 'Clasifica cada email por tipo: presupuestos, pedidos, facturas, consultas. Sin reglas manuales, aprende de tu operativa.',
          icon: 'FolderOpen'
        },
        {
          title: 'Cruce con Base de Datos',
          description: 'Cruza cada petición contra tus bases de datos internas de productos, precios y clientes. Contexto completo en cada respuesta.',
          icon: 'Database'
        },
        {
          title: 'Propuestas de Respuesta',
          description: 'Genera respuestas listas para tu revisión. Solo necesitas aprobar y enviar. Ahorra horas de redacción.',
          icon: 'PenTool'
        },
        {
          title: 'Integración ERP/CRM',
          description: 'Se integra con tu ERP y CRM existentes. Sin cambiar tu infraestructura, mejora tu operativa.',
          icon: 'Link'
        },
        {
          title: 'Monitorización Multicanal',
          description: 'Monitoriza múltiples bandejas de entrada simultáneamente. Centraliza la gestión de comunicaciones entrantes.',
          icon: 'Monitor'
        },
        {
          title: 'Aprendizaje Continuo',
          description: 'Mejora con cada interacción. Se adapta a tu tono, políticas de precios y forma de trabajar.',
          icon: 'Sparkles'
        }
      ],
      steps: [
        { title: 'Monitoriza', description: 'IRIS vigila tus bandejas de entrada en tiempo real.' },
        { title: 'Clasifica', description: 'Cada email se categoriza automáticamente: presupuestos, pedidos, facturas.' },
        { title: 'Cruza', description: 'Contrasta cada petición contra tus bases de datos de productos y clientes.' },
        { title: 'Responde', description: 'Genera propuestas de respuesta listas para tu revisión y envío.' }
      ],
      audience: [
        { title: 'Empresas con alto volumen de email', description: 'Que dedican horas diarias a gestionar bandejas de entrada.', icon: 'Mails' },
        { title: 'Equipos comerciales', description: 'Que reciben presupuestos, pedidos y consultas constantemente.', icon: 'Briefcase' },
        { title: 'Empresas con ERP/CRM', description: 'Que quieren integrar la gestión de email con sus sistemas.', icon: 'Server' }
      ],
      cases: ['iciga'],
      images: ['/products/iris.jpg'],
      textColor: 'light'
    },
    bond: {
      id: 'bond',
      title: 'BOND',
      tagline: 'Business-Owned Network for Digital Loyalty',
      description: 'Una app de fidelización bajo tu propia marca con tarjeta de puntos digital integrada en Google y Apple Wallet. Tus clientes acumulan puntos automáticamente, reciben ofertas personalizadas y tú accedes a un dashboard con analíticas de consumo en tiempo real. Sin tarjetas de papel, sin comisiones de plataformas externas, sin dependencia de terceros.',
      icon: 'Heart',
      features: [
        {
          title: 'Tarjeta Digital Wallet',
          description: 'Tarjeta de puntos integrada en Google y Apple Wallet. Tus clientes siempre la llevan encima, sin apps adicionales.',
          icon: 'Wallet'
        },
        {
          title: 'Puntos Automáticos',
          description: 'Los clientes acumulan puntos automáticamente con cada compra. Sin intervención manual del personal.',
          icon: 'Gift'
        },
        {
          title: 'Ofertas Personalizadas',
          description: 'Envía ofertas personalizadas según el comportamiento de consumo. Comunicación directa sin intermediarios.',
          icon: 'Tag'
        },
        {
          title: 'Dashboard de Analíticas',
          description: 'Analíticas de consumo en tiempo real. Entiende los patrones de tus clientes y optimiza tu estrategia.',
          icon: 'BarChart3'
        },
        {
          title: 'Marca Propia',
          description: 'La app va bajo tu marca. Sin logos de terceros, sin comisiones de plataformas externas.',
          icon: 'Palette'
        },
        {
          title: 'Gamificación',
          description: 'Juegos, retos y recompensas que mantienen a tus clientes enganchados y volviendo a tu negocio.',
          icon: 'Trophy'
        }
      ],
      steps: [
        { title: 'Configura', description: 'Personaliza la app con tu marca, colores y programa de puntos.' },
        { title: 'Acumula', description: 'Tus clientes suman puntos automáticamente con cada compra.' },
        { title: 'Engancha', description: 'Envía ofertas personalizadas, retos y recompensas.' },
        { title: 'Analiza', description: 'Consulta analíticas de consumo en tiempo real desde tu dashboard.' }
      ],
      audience: [
        { title: 'Comercios y hostelería', description: 'Que quieren fidelizar clientes con su propia marca.', icon: 'UtensilsCrossed' },
        { title: 'Franquicias', description: 'Que necesitan un programa de fidelización unificado.', icon: 'GitFork' },
        { title: 'Negocios locales', description: 'Que buscan competir con grandes marcas sin depender de terceros.', icon: 'Store' }
      ],
      cases: ['take'],
      images: ['/products/bond.jpg'],
      textColor: 'light'
    }
  },
  en: {
    apec: {
      id: 'apec',
      title: 'APEC',
      tagline: 'Agent-Powered Enterprise Communications',
      description: 'Automate your sales prospecting without losing the human touch. APEC researches companies, extracts financial data, evaluates fit with your offering using AI, and generates hyper-personalized outreach emails. Its dashboard centralizes sends, tracks opens and clicks, and schedules follow-ups. Scale your B2B acquisition from hours of manual work to minutes of oversight.',
      icon: 'Mail',
      features: [
        {
          title: 'Automatic Research',
          description: 'APEC automatically researches target companies, extracting financial data, contact information, and relevant business context.',
          icon: 'Search'
        },
        {
          title: 'AI Evaluation',
          description: 'Evaluates the fit between your offering and each prospected company, prioritizing opportunities with the highest conversion probability.',
          icon: 'Brain'
        },
        {
          title: 'Hyper-Personalized Emails',
          description: 'Generates unique outreach emails for each company, adapted to their industry, size, and specific needs.',
          icon: 'PenTool'
        },
        {
          title: 'Centralized Dashboard',
          description: 'Monitor sends, opens, clicks, and replies from a single panel. Schedule automatic follow-ups.',
          icon: 'BarChart3'
        },
        {
          title: 'Smart Tracking',
          description: 'Real-time open and click tracking. Identify the most interested leads and prioritize follow-up.',
          icon: 'Eye'
        },
        {
          title: 'B2B Scalability',
          description: 'Go from hours of manual work to minutes of oversight. Scale your acquisition without losing communication quality.',
          icon: 'TrendingUp'
        }
      ],
      steps: [
        { title: 'Research', description: 'APEC finds and collects financial and contact data from target companies.' },
        { title: 'Evaluate', description: 'AI analyzes the fit between your offering and each prospected company.' },
        { title: 'Generate', description: 'Creates hyper-personalized emails adapted to each lead\'s sector and needs.' },
        { title: 'Send & Track', description: 'Send, monitor opens and clicks, and schedule automatic follow-ups.' }
      ],
      audience: [
        { title: 'B2B Sales Teams', description: 'That need to scale prospecting without losing personalization.', icon: 'Briefcase' },
        { title: 'Growing Startups', description: 'Looking to build a sales pipeline without a large team.', icon: 'Rocket' },
        { title: 'Agencies & Consultancies', description: 'Managing prospecting for multiple clients.', icon: 'Building2' }
      ],
      images: ['/products/apec.jpg'],
      textColor: 'light'
    },
    nessie: {
      id: 'nessie',
      title: 'Nessie',
      tagline: 'Talk to your documents. Find answers, not files.',
      description: 'Connect all your company documentation and ask it anything in natural language. Nessie automatically processes PDFs, Word, spreadsheets and more from Google Drive, converts them into AI-searchable knowledge, and responds in real time with references to the original documents. Available in Office version for consultancies and firms, and Industrial for production plants with voice queries and tablet access.',
      icon: 'MessageCircle',
      features: [
        {
          title: 'Semantic Search',
          description: 'Find accurate information using natural language. Our system understands the context and intent behind your queries.',
          icon: 'Search'
        },
        {
          title: 'Smart Chat',
          description: 'Chat directly with your documentation. Get instant answers as if you were talking to an expert.',
          icon: 'MessageCircle'
        },
        {
          title: 'Multiple Formats',
          description: 'Process PDFs, Word documents, PowerPoints and more. A single system for all your business documentation.',
          icon: 'Files'
        },
        {
          title: 'Version Control',
          description: 'Keep track of document changes and versions. You\'ll always know what information is up to date.',
          icon: 'GitBranch'
        },
        {
          title: 'Cloud Integration',
          description: 'Connect with Google Drive, Dropbox and other services. Automatic sync and access from anywhere.',
          icon: 'Cloud'
        },
        {
          title: 'Industry Adaptable',
          description: 'Customizable for different sectors: manufacturing, consulting, medical, legal. Adapts to your specific vocabulary.',
          icon: 'Settings'
        }
      ],
      steps: [
        { title: 'Connect', description: 'Link your Google Drive or other enterprise documentation sources.' },
        { title: 'Process', description: 'Nessie indexes PDFs, Word, Excel and more into searchable knowledge.' },
        { title: 'Ask', description: 'Query in natural language as if you were talking to an expert.' },
        { title: 'Get Answers', description: 'Receive precise answers with references to the original documents.' }
      ],
      audience: [
        { title: 'Consultancies & Law Firms', description: 'With large volumes of technical and legal documentation.', icon: 'Building2' },
        { title: 'Industrial Plants', description: 'Needing quick access to manuals and regulations from the floor.', icon: 'Factory' },
        { title: 'Legal Departments', description: 'Looking for fast answers in contracts and regulations.', icon: 'Scale' }
      ],
      cases: ['consultoria'],
      images: ['/products/nessie.jpg'],
      textColor: 'light',
      type: 'standalone',
      landingUrl: 'https://www.nessie.osix.tech/'
    },
    moura: {
      id: 'moura',
      title: 'Moura',
      tagline: 'Find the grants that fit your company',
      description: 'Find the grants that fit your company without searching. Moura automatically cross-references public calls with your company profile — sector, location, size — and analyzes the terms with AI to extract requirements, deadlines, and budgets. When there\'s a match, it generates the technical report, work plan, and detailed budget with a single click.',
      icon: 'FileSearch',
      features: [
        {
          title: 'Automatic Matching',
          description: 'Cross-references public calls with your company profile: sector, location, size. No manual searching.',
          icon: 'Target'
        },
        {
          title: 'AI Analysis',
          description: 'Analyzes the terms of each call to extract requirements, deadlines, budgets, and evaluation criteria.',
          icon: 'Brain'
        },
        {
          title: 'Report Generation',
          description: 'Generates the technical report, work plan, and detailed budget with a single click.',
          icon: 'FileText'
        },
        {
          title: 'Real-Time Alerts',
          description: 'Receive notifications when a call that fits your company is published. Never miss an opportunity.',
          icon: 'Bell'
        }
      ],
      steps: [
        { title: 'Profile', description: 'Define your sector, location and size to create your company profile.' },
        { title: 'Match', description: 'Moura automatically cross-references public calls with your profile.' },
        { title: 'Analyze', description: 'AI extracts requirements, deadlines and budgets from each call.' },
        { title: 'Generate', description: 'Create technical report, work plan and budget in one click.' }
      ],
      audience: [
        { title: 'SMEs', description: 'That want to access grants without dedicating internal resources.', icon: 'Store' },
        { title: 'Grant Consultancies', description: 'Managing calls for multiple clients.', icon: 'HandCoins' },
        { title: 'R&D Departments', description: 'Seeking public funding for innovation projects.', icon: 'FlaskConical' }
      ],
      images: ['/products/moura.jpg'],
      textColor: 'light'
    },
    acta: {
      id: 'acta',
      title: 'ACTA',
      tagline: 'Automated Capture, Transcription & Analysis',
      description: 'Record your meetings, trainings, or interviews and get professional transcriptions with automatic speaker identification. ACTA combines high-precision transcription with intelligent diarization and summary agents that extract key decisions, pending tasks, and action items from every conversation.',
      icon: 'Mic',
      features: [
        {
          title: 'High-Precision Transcription',
          description: 'Automatic transcription with advanced voice recognition. Support for multiple languages and accents.',
          icon: 'FileText'
        },
        {
          title: 'Intelligent Diarization',
          description: 'Automatic identification of who speaks at each moment. Distinguishes up to 10 simultaneous participants.',
          icon: 'Users'
        },
        {
          title: 'AI Summary',
          description: 'Summary agents that automatically extract key decisions, pending tasks, and action items.',
          icon: 'ListChecks'
        },
        {
          title: 'Flexible Export',
          description: 'Export transcriptions and summaries in multiple formats. Integration with project management tools.',
          icon: 'Download'
        }
      ],
      steps: [
        { title: 'Record', description: 'Capture audio from meetings, trainings or interviews.' },
        { title: 'Transcribe', description: 'High-precision automatic transcription with multilingual support.' },
        { title: 'Identify', description: 'Intelligent diarization: who says what at each moment.' },
        { title: 'Summarize', description: 'AI agents extract decisions, tasks and action items.' }
      ],
      audience: [
        { title: 'Management Teams', description: 'That need to document meetings and track agreements.', icon: 'Users' },
        { title: 'Trainers & Coaches', description: 'Wanting professional transcriptions of their sessions.', icon: 'GraduationCap' },
        { title: 'Legal Departments', description: 'Requiring precise minutes from meetings and interviews.', icon: 'Scale' }
      ],
      images: ['/products/acta.jpg'],
      textColor: 'light'
    },
    iris: {
      id: 'iris',
      title: 'IRIS',
      tagline: 'Intelligent Response & Inbox System',
      description: 'An AI system that monitors your inboxes, automatically classifies each email by type (quotes, orders, invoices, inquiries), cross-references it against your internal databases, and generates response proposals ready for your review. Integrates with your ERP and CRM. Transform hours of email management into minutes of oversight.',
      icon: 'Inbox',
      features: [
        {
          title: 'Automatic Classification',
          description: 'Classifies each email by type: quotes, orders, invoices, inquiries. No manual rules, learns from your operations.',
          icon: 'FolderOpen'
        },
        {
          title: 'Database Cross-Reference',
          description: 'Cross-references each request against your internal product, price, and client databases. Full context in every response.',
          icon: 'Database'
        },
        {
          title: 'Response Proposals',
          description: 'Generates responses ready for your review. Just approve and send. Save hours of drafting.',
          icon: 'PenTool'
        },
        {
          title: 'ERP/CRM Integration',
          description: 'Integrates with your existing ERP and CRM. Improve your operations without changing your infrastructure.',
          icon: 'Link'
        },
        {
          title: 'Multi-Channel Monitoring',
          description: 'Monitor multiple inboxes simultaneously. Centralize incoming communications management.',
          icon: 'Monitor'
        },
        {
          title: 'Continuous Learning',
          description: 'Improves with every interaction. Adapts to your tone, pricing policies, and way of working.',
          icon: 'Sparkles'
        }
      ],
      steps: [
        { title: 'Monitor', description: 'IRIS watches your inboxes in real time.' },
        { title: 'Classify', description: 'Each email is automatically categorized: quotes, orders, invoices.' },
        { title: 'Cross-reference', description: 'Checks each request against your product and client databases.' },
        { title: 'Respond', description: 'Generates response proposals ready for your review and sending.' }
      ],
      audience: [
        { title: 'High-Volume Email Companies', description: 'Spending hours daily managing inboxes.', icon: 'Mails' },
        { title: 'Sales Teams', description: 'Constantly receiving quotes, orders and inquiries.', icon: 'Briefcase' },
        { title: 'Companies with ERP/CRM', description: 'Looking to integrate email management with their systems.', icon: 'Server' }
      ],
      cases: ['iciga'],
      images: ['/products/iris.jpg'],
      textColor: 'light'
    },
    bond: {
      id: 'bond',
      title: 'BOND',
      tagline: 'Business-Owned Network for Digital Loyalty',
      description: 'A loyalty app under your own brand with a digital points card integrated into Google and Apple Wallet. Your customers automatically accumulate points, receive personalized offers, and you get a dashboard with real-time consumption analytics. No paper cards, no external platform fees, no third-party dependency.',
      icon: 'Heart',
      features: [
        {
          title: 'Digital Wallet Card',
          description: 'Points card integrated into Google and Apple Wallet. Your customers always carry it, no additional apps needed.',
          icon: 'Wallet'
        },
        {
          title: 'Automatic Points',
          description: 'Customers automatically accumulate points with every purchase. No manual intervention from staff.',
          icon: 'Gift'
        },
        {
          title: 'Personalized Offers',
          description: 'Send personalized offers based on consumption behavior. Direct communication without intermediaries.',
          icon: 'Tag'
        },
        {
          title: 'Analytics Dashboard',
          description: 'Real-time consumption analytics. Understand your customers\' patterns and optimize your strategy.',
          icon: 'BarChart3'
        },
        {
          title: 'Your Own Brand',
          description: 'The app runs under your brand. No third-party logos, no external platform fees.',
          icon: 'Palette'
        },
        {
          title: 'Gamification',
          description: 'Games, challenges, and rewards that keep your customers engaged and coming back to your business.',
          icon: 'Trophy'
        }
      ],
      steps: [
        { title: 'Set up', description: 'Customize the app with your brand, colors and points program.' },
        { title: 'Collect', description: 'Your customers earn points automatically with every purchase.' },
        { title: 'Engage', description: 'Send personalized offers, challenges and rewards.' },
        { title: 'Analyze', description: 'View real-time consumption analytics from your dashboard.' }
      ],
      audience: [
        { title: 'Retail & Hospitality', description: 'Looking to build customer loyalty under their own brand.', icon: 'UtensilsCrossed' },
        { title: 'Franchises', description: 'Needing a unified loyalty program across locations.', icon: 'GitFork' },
        { title: 'Local Businesses', description: 'Wanting to compete with big brands without third-party dependency.', icon: 'Store' }
      ],
      cases: ['take'],
      images: ['/products/bond.jpg'],
      textColor: 'light'
    }
  }
};

export function getProduct(id: string, lang: string = 'es'): ProductData | undefined {
  return productsData[lang]?.[id];
}

export function getAllProducts(lang: string = 'es'): ProductData[] {
  return Object.values(productsData[lang] || {});
}

export function getProductIds(): string[] {
  return Object.keys(productsData.es);
}
