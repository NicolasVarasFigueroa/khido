import {
  AppWindow,
  BarChart3,
  Bot,
  Briefcase,
  CreditCard,
  Database,
  GraduationCap,
  Globe,
  HeartPulse,
  Plug,
  ShoppingCart,
  Smartphone,
  Store,
  Wallet,
  Workflow,
  Zap,
} from "lucide-react";

export const sectorsData = [
  {
    id: 1,
    slug: "restaurantes-y-delivery",
    title: "Restaurantes & Delivery",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
    hoverBorder: "group-hover:border-blue-400/50",
    glowColor: "rgba(96, 165, 250, 0.15)",
    icon: Store,
    heroTitle: "Tecnología para vender más y operar con control.",
    heroDescription: "Conectamos pedidos, pagos, POS, inventario, clientes y analítica en una operación digital fluida, preparada para uno o múltiples locales.",
    metrics: [
      { value: "360°", label: "Pedidos, operación y clientes conectados" },
      { value: "Tiempo real", label: "Ventas, stock y rentabilidad visibles" },
      { value: "Escalable", label: "De un local a múltiples sucursales" }
    ],
    painPoints: [
      {
        before: "Pedidos repartidos entre aplicaciones, mensajes y sistemas que no conversan entre sí.",
        after: "E-commerce y canales propios integrados con pagos, POS, cocina y despacho desde una sola arquitectura."
      },
      {
        before: "Inventario manual y quiebres de stock detectados cuando ya afectan la venta.",
        after: "Integración de inventario con alertas, reglas de reposición y trazabilidad de insumos en tiempo real."
      },
      {
        before: "Reportes tardíos que no muestran el margen real por producto, canal o local.",
        after: "Pipelines de datos y Power BI para analizar ventas, costos, mermas, demanda y rentabilidad."
      }
    ],
    workflow: [
      { step: 1, title: "Venta", description: "El cliente compra desde la web, app, QR o canal digital conectado." },
      { step: 2, title: "Integración", description: "Pago, pedido, POS, cocina, inventario y despacho se actualizan automáticamente." },
      { step: 3, title: "Datos", description: "Un pipeline consolida ventas, productos, clientes, costos y disponibilidad." },
      { step: 4, title: "Gestión", description: "Dashboards, alertas y automatizaciones ayudan a decidir y operar con rapidez." }
    ],
    solutions: [
      {
        icon: ShoppingCart,
        title: "E-commerce y Canales Propios",
        description: "Sitios y aplicaciones de pedidos con catálogo, pagos, promociones, despacho, fidelización y experiencia responsive a medida de tu marca.",
        tags: ["Web & Apps", "E-commerce"]
      },
      {
        icon: Plug,
        title: "Integración de POS y Operación",
        description: "Conectamos pedidos, caja, cocina, inventario, proveedores y logística mediante APIs, webhooks y flujos robustos.",
        tags: ["Integraciones", "APIs"]
      },
      {
        icon: BarChart3,
        title: "Data & Power BI",
        description: "Modelos y dashboards para controlar ventas, ticket promedio, costos, mermas, rentabilidad y desempeño por canal o sucursal.",
        tags: ["ETL", "Power BI"]
      },
      {
        icon: Bot,
        title: "Automatización e IA Aplicada",
        description: "Automatizamos confirmaciones, soporte, reservas, compras y tareas administrativas, incorporando IA cuando mejora la experiencia o la eficiencia.",
        tags: ["Automatización", "IA"]
      }
    ]
  },
  {
    id: 2,
    slug: "clinicas-y-salud",
    title: "Clínicas y Salud",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    borderColor: "border-emerald-400/20",
    hoverBorder: "group-hover:border-emerald-400/50",
    glowColor: "rgba(52, 211, 153, 0.15)",
    icon: HeartPulse,
    heroTitle: "Infraestructura digital para una atención conectada.",
    heroDescription: "Creamos portales, integraciones, flujos y analítica para mejorar la experiencia del paciente y entregar visibilidad operacional a la clínica.",
    metrics: [
      { value: "24/7", label: "Servicios digitales disponibles" },
      { value: "1 vista", label: "Información operacional centralizada" },
      { value: "Seguro", label: "Accesos, datos y procesos controlados" }
    ],
    painPoints: [
      {
        before: "Pacientes dependen del teléfono para reservar, pagar o consultar información.",
        after: "Portal web o app conectado a agenda, pagos, documentos y sistemas clínicos."
      },
      {
        before: "Datos clínicos y administrativos viven en plataformas separadas y planillas manuales.",
        after: "Integraciones y pipelines que sincronizan HIS, agenda, facturación, CRM y canales digitales."
      },
      {
        before: "La dirección recibe indicadores tardíos sobre ocupación, demanda y rentabilidad.",
        after: "Power BI con métricas operativas, comerciales y financieras actualizadas automáticamente."
      }
    ],
    workflow: [
      { step: 1, title: "Acceso", description: "El paciente agenda, paga o consulta desde un portal o aplicación segura." },
      { step: 2, title: "Sincronización", description: "La solicitud se refleja en agenda, ficha, CRM y sistemas administrativos." },
      { step: 3, title: "Operación", description: "Reglas automáticas gestionan recordatorios, documentos, listas de espera y seguimiento." },
      { step: 4, title: "Analítica", description: "La clínica monitorea demanda, ocupación, atención e ingresos en dashboards." }
    ],
    solutions: [
      {
        icon: Smartphone,
        title: "Portales y Apps de Pacientes",
        description: "Experiencias digitales para agenda, pagos, resultados, documentos, teleatención y autogestión con acceso seguro.",
        tags: ["Web & Apps", "UX/UI"]
      },
      {
        icon: Plug,
        title: "Integración Clínica y Administrativa",
        description: "Conectamos HIS, agenda, CRM, pagos, facturación y canales de atención sin reemplazar innecesariamente tus sistemas actuales.",
        tags: ["Integraciones", "HealthTech"]
      },
      {
        icon: Database,
        title: "Data Clínica & Power BI",
        description: "Pipelines y modelos para analizar ocupación, ausentismo, demanda, tiempos de atención, ingresos y desempeño por especialidad.",
        tags: ["ETL", "Power BI"]
      },
      {
        icon: Workflow,
        title: "Automatización de Atención",
        description: "Recordatorios, listas de espera, derivaciones, clasificación documental y asistentes digitales integrados a la operación.",
        tags: ["Automatización", "IA Aplicada"]
      }
    ]
  },
  {
    id: 3,
    slug: "ecommerce-y-retail",
    title: "E-commerce & Retail",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/20",
    hoverBorder: "group-hover:border-purple-400/50",
    glowColor: "rgba(192, 132, 252, 0.15)",
    icon: ShoppingCart,
    heroTitle: "Comercio digital rápido, conectado y medible.",
    heroDescription: "Construimos experiencias de compra e infraestructura de datos que conectan catálogo, inventario, pagos, logística, marketing y analítica.",
    metrics: [
      { value: "Omnicanal", label: "Web, tienda y operación conectadas" },
      { value: "Tiempo real", label: "Stock, ventas y clientes visibles" },
      { value: "Escalable", label: "Arquitectura preparada para demanda" }
    ],
    painPoints: [
      {
        before: "La tienda carga lento, limita la experiencia o no se adapta al modelo comercial.",
        after: "E-commerce headless o a medida con una experiencia rápida, flexible y optimizada para conversión."
      },
      {
        before: "Inventario, ventas, logística y marketing usan datos distintos.",
        after: "Integraciones y ETL que mantienen catálogo, stock, pedidos y clientes sincronizados."
      },
      {
        before: "Las decisiones se toman con reportes parciales de cada plataforma.",
        after: "Power BI con ventas, margen, CAC, ROAS, inventario, cohortes y rentabilidad unificados."
      }
    ],
    workflow: [
      { step: 1, title: "Experiencia", description: "El cliente navega y compra en una tienda rápida y consistente en cualquier dispositivo." },
      { step: 2, title: "Transacción", description: "Pagos, stock, promociones y despacho se coordinan con los sistemas existentes." },
      { step: 3, title: "Integración", description: "ERP, WMS, CRM, marketing y atención reciben la información correcta." },
      { step: 4, title: "Optimización", description: "Datos, dashboards y automatizaciones impulsan conversión, retención y eficiencia." }
    ],
    solutions: [
      {
        icon: Globe,
        title: "E-commerce & Experiencia Digital",
        description: "Tiendas headless o a medida, PWA, checkout, pagos, promociones, búsqueda y componentes enfocados en conversión.",
        tags: ["E-commerce", "Web Development"]
      },
      {
        icon: Plug,
        title: "Integración Omnicanal",
        description: "Conectamos ERP, inventario, logística, marketplaces, CRM y marketing para mantener una operación coherente.",
        tags: ["APIs", "Omnicanal"]
      },
      {
        icon: BarChart3,
        title: "Data Comercial & Power BI",
        description: "Modelos para analizar ventas, margen, atribución, inventario, cohortes, LTV, CAC y comportamiento de clientes.",
        tags: ["ETL", "Analytics"]
      },
      {
        icon: Zap,
        title: "Automatización & Personalización",
        description: "Flujos de marketing, recuperación, soporte, recomendaciones y segmentación activados desde datos confiables.",
        tags: ["Automatización", "IA Aplicada"]
      }
    ]
  },
  {
    id: 4,
    slug: "servicios-profesionales",
    title: "Servicios Profesionales",
    color: "text-indigo-400",
    bgColor: "bg-indigo-400/10",
    borderColor: "border-indigo-400/20",
    hoverBorder: "group-hover:border-indigo-400/50",
    glowColor: "rgba(129, 140, 248, 0.15)",
    icon: Briefcase,
    heroTitle: "Sistemas que ordenan y escalan tu servicio.",
    heroDescription: "Digitalizamos captación, venta, ejecución y gestión financiera para consultoras, agencias, estudios y empresas de servicios.",
    metrics: [
      { value: "1 sistema", label: "Clientes, proyectos y operación" },
      { value: "Trazable", label: "Cada solicitud y entrega visible" },
      { value: "Medible", label: "Margen y capacidad por proyecto" }
    ],
    painPoints: [
      {
        before: "Leads, propuestas, proyectos y entregables se administran en herramientas separadas.",
        after: "Plataforma integrada para gestionar el ciclo completo desde la oportunidad hasta la entrega."
      },
      {
        before: "El equipo pierde tiempo copiando datos y coordinando tareas manualmente.",
        after: "Integraciones y workflows que sincronizan CRM, gestión, documentos, facturación y comunicación."
      },
      {
        before: "No existe una visión confiable de capacidad, avance y rentabilidad por cliente.",
        after: "Modelo de datos y Power BI con horas, costos, ingresos, pipeline y desempeño operacional."
      }
    ],
    workflow: [
      { step: 1, title: "Captación", description: "Web, formularios y CRM registran oportunidades con contexto completo." },
      { step: 2, title: "Venta", description: "Propuestas, documentos, aprobaciones y seguimiento se gestionan en un flujo conectado." },
      { step: 3, title: "Ejecución", description: "La plataforma organiza proyectos, responsables, entregables, tiempos y comunicación." },
      { step: 4, title: "Control", description: "Dashboards muestran pipeline, capacidad, avance, facturación y rentabilidad." }
    ],
    solutions: [
      {
        icon: AppWindow,
        title: "Plataformas de Gestión a Medida",
        description: "Sistemas para oportunidades, clientes, proyectos, entregables, documentos y seguimiento construidos alrededor de tu metodología.",
        tags: ["Software a Medida", "SaaS"]
      },
      {
        icon: Plug,
        title: "Integración del Ecosistema",
        description: "Conectamos CRM, formularios, gestión de proyectos, firma, facturación, almacenamiento y comunicación.",
        tags: ["APIs", "Automatización"]
      },
      {
        icon: BarChart3,
        title: "BI Comercial y de Proyectos",
        description: "Power BI para controlar ventas, capacidad, horas, costos, facturación, margen y rentabilidad por cliente.",
        tags: ["Power BI", "Data"]
      },
      {
        icon: Bot,
        title: "IA para Conocimiento y Productividad",
        description: "Búsqueda sobre documentos, clasificación, asistentes internos y generación controlada de contenido integrada a tus flujos.",
        tags: ["RAG", "IA Aplicada"]
      }
    ]
  },
  {
    id: 5,
    slug: "educacion-y-cursos",
    title: "Educación & Cursos",
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    borderColor: "border-amber-400/20",
    hoverBorder: "group-hover:border-amber-400/50",
    glowColor: "rgba(251, 191, 36, 0.15)",
    icon: GraduationCap,
    heroTitle: "Experiencias de aprendizaje digitales y escalables.",
    heroDescription: "Construimos plataformas educativas, integraciones y analítica para gestionar alumnos, contenidos, pagos, progreso y soporte desde un solo ecosistema.",
    metrics: [
      { value: "24/7", label: "Acceso a contenidos y servicios" },
      { value: "1 plataforma", label: "Alumnos, cursos y operación" },
      { value: "Medible", label: "Progreso, retención y resultados" }
    ],
    painPoints: [
      {
        before: "La plataforma educativa limita la experiencia, la marca o el modelo de negocio.",
        after: "LMS o academia digital a medida con cursos, evaluaciones, pagos, certificados y comunidad."
      },
      {
        before: "Matrícula, pagos, asistencia y soporte se gestionan manualmente.",
        after: "Integraciones y workflows que conectan admisión, CRM, pagos, contenidos y comunicación."
      },
      {
        before: "No hay visibilidad sobre avance, abandono, desempeño o rentabilidad de los programas.",
        after: "ETL y Power BI con métricas académicas, comerciales y operativas actualizadas."
      }
    ],
    workflow: [
      { step: 1, title: "Admisión", description: "El estudiante se registra, paga y obtiene acceso desde una experiencia unificada." },
      { step: 2, title: "Aprendizaje", description: "Consume contenidos, evaluaciones, sesiones y recursos desde la plataforma." },
      { step: 3, title: "Seguimiento", description: "Automatizaciones gestionan hitos, alertas, certificados y comunicaciones." },
      { step: 4, title: "Analítica", description: "El equipo monitorea progreso, retención, satisfacción, demanda y rentabilidad." }
    ],
    solutions: [
      {
        icon: GraduationCap,
        title: "LMS y Academias a Medida",
        description: "Plataformas con contenidos, streaming, evaluaciones, pagos, certificados, perfiles y experiencias adaptadas a tu modelo.",
        tags: ["Software a Medida", "EdTech"]
      },
      {
        icon: Plug,
        title: "Integración Académica",
        description: "Conectamos CRM, admisión, pagos, videoconferencia, contenidos, correo y sistemas administrativos.",
        tags: ["Integraciones", "APIs"]
      },
      {
        icon: BarChart3,
        title: "Learning Analytics & Power BI",
        description: "Dashboards de progreso, retención, desempeño, participación, demanda, ingresos y rentabilidad por programa.",
        tags: ["ETL", "Power BI"]
      },
      {
        icon: Bot,
        title: "Asistentes de Aprendizaje",
        description: "Búsqueda inteligente, tutores sobre contenido autorizado, clasificación y soporte académico integrado a la plataforma.",
        tags: ["IA Aplicada", "RAG"]
      }
    ]
  },
  {
    id: 6,
    slug: "finanzas-y-cobranzas",
    title: "Finanzas y Cobranzas",
    color: "text-rose-400",
    bgColor: "bg-rose-400/10",
    borderColor: "border-rose-400/20",
    hoverBorder: "group-hover:border-rose-400/50",
    glowColor: "rgba(251, 113, 133, 0.15)",
    icon: Wallet,
    heroTitle: "Operación financiera conectada, trazable y visible.",
    heroDescription: "Digitalizamos procesos financieros y de cobranza con software, integraciones, ETL, Power BI y automatización sobre reglas claras de negocio.",
    metrics: [
      { value: "Trazable", label: "Cada movimiento y gestión visible" },
      { value: "Tiempo real", label: "Cartera, caja y riesgo actualizados" },
      { value: "Integrado", label: "ERP, bancos, pagos y CRM conectados" }
    ],
    painPoints: [
      {
        before: "Conciliaciones, cobranza y reportes dependen de planillas y trabajo manual.",
        after: "Plataforma y workflows que integran documentos, pagos, bancos, ERP y seguimiento."
      },
      {
        before: "Los datos financieros llegan tarde o con diferencias entre sistemas.",
        after: "ETL con validaciones y reglas para consolidar una fuente confiable de información."
      },
      {
        before: "Tesorería y dirección no tienen una vista actualizada de caja, cartera y riesgo.",
        after: "Power BI con flujo de caja, DSO, aging, recupero, riesgo y proyecciones."
      }
    ],
    workflow: [
      { step: 1, title: "Captura", description: "ERP, bancos, documentos, pagos y CRM entregan información a una capa integrada." },
      { step: 2, title: "Procesamiento", description: "Pipelines validan, normalizan y cruzan movimientos según reglas del negocio." },
      { step: 3, title: "Gestión", description: "La plataforma asigna acciones, alertas, conciliaciones y seguimiento con trazabilidad." },
      { step: 4, title: "Visibilidad", description: "Dashboards muestran cartera, caja, cumplimiento, riesgo y resultados en tiempo real." }
    ],
    solutions: [
      {
        icon: CreditCard,
        title: "Plataformas Financieras a Medida",
        description: "Sistemas para cartera, cobranza, conciliación, aprobaciones, documentos, pagos y seguimiento con roles y auditoría.",
        tags: ["Software a Medida", "FinTech"]
      },
      {
        icon: Database,
        title: "ETL y Conciliación de Datos",
        description: "Pipelines que integran ERP, bancos, pasarelas, documentos y CRM con validaciones y reglas de matching.",
        tags: ["ETL", "Data Engineering"]
      },
      {
        icon: BarChart3,
        title: "Power BI Financiero",
        description: "Dashboards para flujo de caja, aging, DSO, recupero, proyecciones, cumplimiento y riesgo por cliente.",
        tags: ["Power BI", "Finanzas"]
      },
      {
        icon: Workflow,
        title: "Automatización y Scoring",
        description: "Flujos de cobranza, alertas, asignación y priorización, con modelos de scoring cuando los datos y el caso lo justifican.",
        tags: ["Automatización", "IA Aplicada"]
      }
    ]
  }
];
