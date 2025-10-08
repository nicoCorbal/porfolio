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
      title: 'TAKE App',
      subtitle: 'La experiencia digital de tu cafetería favorita',
      category: 'Aplicación Móvil',
      type: 'Proyecto Comercial',
      date: 'Q1 2024',
      awards: [],
      textColor: 'dark',
      birth: 'TAKE es un proyecto desarrollado para la cafetería TAKE, concebido como una plataforma integral que conecta a la marca con su comunidad. Combina una aplicación móvil para los clientes y un panel web para la gestión del negocio, creando una experiencia moderna, interactiva y gamificada.',
      usecase: [
        'Clientes: consultar la carta, ganar recompensas, participar en juegos y recibir notificaciones de eventos.',
        'Administradores: gestionar menú, eventos y recompensas desde un dashboard centralizado.',
        'Negocios locales: fidelizar a sus clientes mediante experiencias digitales atractivas y sin fricción.'
      ],
      future: 'TAKE evolucionará hacia una plataforma completa de fidelización y comunicación para negocios locales, con estadísticas avanzadas, integraciones con TPV y módulos de marketing automatizado.',
      features: [
        {
          title: 'Carta Digital',
          description: 'Consulta todos los productos, precios y categorías de la cafetería desde una interfaz clara y visual.',
          icon: 'Menu'
        },
        {
          title: 'Juego Integrado con Leaderboard',
          description: 'Un minijuego exclusivo con clasificación online donde los fans de la cafetería pueden competir y ganar premios.',
          icon: 'Trophy'
        },
        {
          title: 'Eventos y Notificaciones',
          description: 'Sección dedicada a los eventos de la cafetería, con recordatorios automáticos para no perderte nada.',
          icon: 'Calendar'
        },
        {
          title: 'Pass Wallet con QR',
          description: 'Un pase digital en Apple o Google Wallet con un QR para acumular sellos y obtener recompensas al comprar.',
          icon: 'Wallet'
        },
        {
          title: 'Seguimiento de Recompensas',
          description: 'Visualiza tu progreso y desbloquea beneficios por tus compras en la cafetería TAKE.',
          icon: 'Gift'
        },
        {
          title: 'Dashboard para Administradores',
          description: 'Panel web donde el equipo de la cafetería puede editar el menú, crear eventos, gestionar recompensas y consultar estadísticas en tiempo real.',
          icon: 'BarChart3'
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
      images: ['/projects/nessie/nessie.png'],
      video: '/projects/nessie/nessie-demo.mov'
    }
  },
  en: {
      take: {
        id: 'take',
        title: 'TAKE App',
        subtitle: 'The digital experience of your favorite coffee shop',
        category: 'Mobile Application',
        type: 'Commercial Project',
        date: 'Q1 2024',
        awards: [],
        textColor: 'dark',
        birth: 'TAKE is a project built for the TAKE coffee shop, designed as a complete digital ecosystem that connects the brand with its community. It combines a mobile app for customers with a web dashboard for administrators, delivering a modern, interactive, and gamified experience.',
        usecase: [
          'Customers: browse the full menu, earn rewards, play games, and get notified about upcoming events.',
          'Admins: edit menus, create events, manage rewards, and view analytics in one place.',
          'Local businesses: engage and retain customers through digital, frictionless experiences.'
        ],
        future: 'TAKE aims to grow into a full loyalty and communication platform for local businesses, featuring advanced analytics, POS integrations, and automated marketing tools.',
        features: [
          {
            title: 'Digital Menu',
            description: 'Explore all products, categories, and prices through a clean and visually appealing interface.',
            icon: 'Menu'
          },
          {
            title: 'Integrated Game with Leaderboard',
            description: 'An exclusive mini-game with an online leaderboard where café fans can compete and win prizes.',
            icon: 'Trophy'
          },
          {
            title: 'Events & Notifications',
            description: 'A dedicated section for the coffee shop\'s events, complete with push notifications to never miss one.',
            icon: 'Calendar'
          },
          {
            title: 'Wallet Pass with QR',
            description: 'A special Apple or Google Wallet pass with a QR code for collecting stamps and redeeming rewards at the café.',
            icon: 'Wallet'
          },
          {
            title: 'Rewards Tracking',
            description: 'Track your progress and unlock exclusive rewards as you purchase at TAKE.',
            icon: 'Gift'
          },
          {
            title: 'Admin Dashboard',
            description: 'A web dashboard for the coffee shop team to edit menus, add events, manage rewards, and monitor analytics in real time.',
            icon: 'BarChart3'
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
