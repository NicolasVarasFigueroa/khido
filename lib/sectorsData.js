import { 
  Store, HeartPulse, ShoppingCart, Briefcase, GraduationCap, Wallet, 
  Globe, BarChart, Bot, Zap, Database, Smartphone, Users, TrendingUp, ShieldCheck
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
    heroTitle: "Escala tu operación gastronómica sin aumentar el caos.",
    heroDescription: "Transformamos la toma de pedidos, la gestión de clientes y el control de tu local en un sistema fluido, inteligente y 100% predecible. Más ventas, menos dolores de cabeza.",
    metrics: [
      { value: "0%", label: "Comisiones de apps de delivery a terceros" },
      { value: "+35%", label: "Aumento en tickets de venta promedio" },
      { value: "24/7", label: "Atención al cliente sin fatiga humana" }
    ],
    painPoints: [
      {
        before: "Márgenes asfixiados por las comisiones del 30% de UberEats o Rappi.",
        after: "Plataforma nativa propia donde retienes el 100% de la ganancia y los datos de tu cliente."
      },
      {
        before: "Cocineros adivinando qué preparar o quiebres de stock en horas punta.",
        after: "Dashboards predictivos que conectan ventas en vivo con alertas automáticas a proveedores."
      },
      {
        before: "Pérdida de clientes que escriben al WhatsApp un sábado a las 9 PM y nadie contesta.",
        after: "Agente IA tomando pedidos complejos, sugiriendo bebidas y cerrando ventas al instante."
      }
    ],
    workflow: [
      { step: 1, title: "Captación", description: "El cliente inicia chat en WhatsApp o entra a tu web ultra-rápida." },
      { step: 2, title: "Procesamiento", description: "La IA o la web toma el pedido, realiza up-selling y procesa el pago (Stripe/Transbank)." },
      { step: 3, title: "Sincronización", description: "La comanda se inyecta directamente al POS (Toteat/Fudo) y a la impresora de cocina." },
      { step: 4, title: "Data & BI", description: "La venta se refleja en tu Power BI para que analices tu rentabilidad en tiempo real." }
    ],
    solutions: [
      {
        icon: Globe,
        title: "E-Commerce y Pedidos Propios",
        description: "Plataformas nativas en Next.js integradas a Stripe/Transbank. Haz un bypass a las comisiones de apps de delivery, con sincronización de comandas directo a tu POS en tiempo real.",
        tags: ["Desarrollo Web", "Integraciones API"]
      },
      {
        icon: BarChart,
        title: "Dashboards de Rentabilidad",
        description: "Paneles en Power BI conectando ventas diarias, costos de insumos y mermas. Analiza heatmaps de horas punta y el margen de beneficio exacto por plato vendido.",
        tags: ["Power BI", "Data Analytics"]
      },
      {
        icon: Bot,
        title: "Agentes IA para Atención",
        description: "Bots impulsados por GPT-4o en la API oficial de WhatsApp. Capaces de leer tu menú en PDF, sugerir maridajes, tomar pedidos complejos y enviarlos al ERP de forma autónoma.",
        tags: ["IA Generativa", "Meta Graph API"]
      },
      {
        icon: Zap,
        title: "Automatización de Inventario",
        description: "Workflows en n8n/Make que monitorean el stock de ingredientes en tu sistema. Genera automáticamente alertas o correos de órdenes de compra a proveedores cuando hay stock crítico.",
        tags: ["RPA", "n8n / Make"]
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
    heroTitle: "Infraestructura digital para una atención médica de excelencia.",
    heroDescription: "Eliminamos las salas de espera telefónicas y los vacíos en tu agenda. Digitaliza tu clínica para ofrecer una experiencia premium a tus pacientes mientras optimizas tu capacidad.",
    metrics: [
      { value: "-40%", label: "Reducción en ausentismo (No-shows)" },
      { value: "0 hrs", label: "Tiempos de espera telefónica para agendar" },
      { value: "+25%", label: "Aumento en ocupación de boxes médicos" }
    ],
    painPoints: [
      {
        before: "Pacientes frustrados porque la recepcionista no da abasto con los llamados telefónicos.",
        after: "Portal web B2C y Agente de WhatsApp que agenda horas médicas sin fricción 24/7."
      },
      {
        before: "Boxes vacíos porque pacientes cancelan a última hora o simplemente no asisten.",
        after: "Listas de espera inteligentes que rellenan cupos en minutos con pacientes interesados."
      },
      {
        before: "Desconocimiento gerencial sobre qué especialidades o médicos son los más rentables.",
        after: "Dashboards en Looker Studio que cruzan datos del HIS (Health Information System) en vivo."
      }
    ],
    workflow: [
      { step: 1, title: "Ingreso", description: "El paciente pide hora por WhatsApp. El bot lee en vivo la disponibilidad de Medilink/Rayen." },
      { step: 2, title: "Confirmación", description: "Se agenda la hora, se envía link de pre-pago y 24h antes se envía recordatorio automático." },
      { step: 3, title: "Contingencia", description: "Si el paciente cancela vía WhatsApp, el webhook libera la hora y avisa a la lista de espera." },
      { step: 4, title: "Atención", description: "El médico recibe al paciente a tiempo, y el dashboard gerencial registra la atención exitosa." }
    ],
    solutions: [
      {
        icon: Smartphone,
        title: "Portales de Pacientes B2C",
        description: "Desarrollo web React/Node.js integrado vía API con tu ficha clínica electrónica (Medilink, Rayen). Los pacientes descargan exámenes y pagan online sin saturar la recepción.",
        tags: ["Web Apps", "Integración HIS"]
      },
      {
        icon: Bot,
        title: "Automatización de Agenda con IA",
        description: "Agente virtual en WhatsApp capaz de leer disponibilidad en tiempo real, reservar, cancelar y reprogramar horas médicas, impactando directamente en la base de datos de tu clínica.",
        tags: ["IA Conversacional", "Automatización"]
      },
      {
        icon: Users,
        title: "Manejo Predictivo de Lista de Espera",
        description: "Sistemas algorítmicos que detectan cancelaciones de última hora y contactan automáticamente (vía webhook) a pacientes en lista de espera para rellenar vacíos operativos.",
        tags: ["Machine Learning", "Operaciones"]
      },
      {
        icon: BarChart,
        title: "Analítica Clínica y Comercial",
        description: "Dashboards gerenciales en Looker Studio. Mide en tiempo real la ocupación de boxes, ingresos segmentados por Isapre/Fonasa y el ratio de ausentismo (No-Show).",
        tags: ["BI", "Looker Studio"]
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
    heroTitle: "Tiendas que no duermen y sistemas que venden por ti.",
    heroDescription: "Multiplica tus conversiones y retención de clientes con una infraestructura de e-commerce robusta, potenciada por datos y automatizaciones de venta hiper-segmentadas.",
    metrics: [
      { value: "x3", label: "Velocidad de carga usando Headless JS" },
      { value: "+20%", label: "Recuperación de carritos abandonados" },
      { value: "99.9%", label: "Precisión en predicción de rotura de stock" }
    ],
    painPoints: [
      {
        before: "Tiendas lentas en Shopify/WooCommerce que pierden clientes antes de hacer checkout.",
        after: "Arquitectura Headless (Next.js) que carga en milisegundos y dispara tu SEO y conversiones."
      },
      {
        before: "Dinero quemado en carritos abandonados que nunca se logran recuperar solo con emails.",
        after: "Flujos de WhatsApp impulsados por IA que envían ofertas dinámicas y recuperan la venta."
      },
      {
        before: "Gastar presupuesto de Meta Ads en productos que están a punto de agotarse sin saberlo.",
        after: "Pipelines de datos que cruzan Ads vs Inventario, frenando pautas de SKUs sin stock."
      }
    ],
    workflow: [
      { step: 1, title: "Tráfico", description: "El cliente llega desde Ads a una tienda ultra rápida y agrega productos al carrito." },
      { step: 2, title: "Abandono", description: "Si abandona, a los 15 minutos un workflow en Klaviyo/Make lanza un mensaje de WhatsApp." },
      { step: 3, title: "Conversión", description: "El agente resuelve dudas de envío por WhatsApp y el cliente cierra la compra con 1 click." },
      { step: 4, title: "Análisis", description: "El BI calcula el ROAS y actualiza la predicción de abastecimiento logístico en BigQuery." }
    ],
    solutions: [
      {
        icon: Globe,
        title: "Arquitectura Headless E-commerce",
        description: "Desarrollo de tiendas de ultra-rendimiento usando Shopify Plus o VTEX como backend y Next.js como frontend. Carga en milisegundos y optimización de Core Web Vitals.",
        tags: ["Headless E-commerce", "Next.js"]
      },
      {
        icon: TrendingUp,
        title: "Recuperación de Carritos Omnicanal",
        description: "Flujos en Klaviyo o Make que detectan carritos abandonados e inician conversaciones automáticas por WhatsApp a los 15 minutos, ofreciendo descuentos dinámicos para cerrar la venta.",
        tags: ["Marketing Automation", "WhatsApp API"]
      },
      {
        icon: Database,
        title: "Modelos de Predicción de Demanda",
        description: "Pipelines de datos (Python/BigQuery) que analizan tendencias, estacionalidad y campañas de Meta Ads para predecir qué SKU debes reabastecer antes de un quiebre de stock.",
        tags: ["Machine Learning", "Data Pipelines"]
      },
      {
        icon: BarChart,
        title: "BI de Retención y Adquisición",
        description: "Paneles financieros que cruzan costos publicitarios vs ventas reales. Calcula el LTV (Life Time Value) por cohorte, el CAC y la rentabilidad neta por pedido.",
        tags: ["Business Intelligence", "Growth"]
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
    heroTitle: "Sistematiza tu consultora, agencia o estudio.",
    heroDescription: "Deja de ser un esclavo de la operación. Implementamos sistemas que capturan prospectos, hacen seguimiento automático y ordenan el delivery de tu servicio.",
    metrics: [
      { value: "100%", label: "Leads calificados antes de agendar" },
      { value: "+50 hrs", label: "Ahorradas en tareas de copy/paste a CRM" },
      { value: "Tiempo Real", label: "Medición de rentabilidad por horas invertidas" }
    ],
    painPoints: [
      {
        before: "Llenas tu calendario de reuniones con curiosos que no tienen presupuesto para tu servicio.",
        after: "Filtro automatizado con IA que solo agenda a prospectos B2B que cumplen con tu ICP."
      },
      {
        before: "El equipo de ventas pierde horas llenando datos en Salesforce/HubSpot manualmente.",
        after: "Webhooks que extraen datos de formularios y enriquecen el perfil en el CRM al instante."
      },
      {
        before: "No sabes realmente si un cliente te hace ganar dinero o si le dedicas demasiadas horas.",
        after: "Dashboards de rentabilidad que cruzan horas trackeadas vs ingreso recurrente (MRR)."
      }
    ],
    workflow: [
      { step: 1, title: "Atracción", description: "Lead B2B visita tu web corporativa premium y llena un formulario estratégico." },
      { step: 2, title: "Calificación", description: "Un Agente de IA lo contacta, valida su facturación anual y necesidades por WhatsApp." },
      { step: 3, title: "Cierre", description: "Solo si es apto, se genera un deal en HubSpot y recibe link de Calendly para videollamada." },
      { step: 4, title: "Delivery", description: "Tras la venta, un chatbot interno (RAG) ayuda a tu equipo a operar rápido los entregables." }
    ],
    solutions: [
      {
        icon: Globe,
        title: "Plataformas de Captación B2B",
        description: "Webs corporativas hiper-optimizadas con formularios inteligentes integrados a HubSpot o Salesforce vía API, enriqueciendo el perfil del lead automáticamente.",
        tags: ["Desarrollo Web", "CRM Integration"]
      },
      {
        icon: Zap,
        title: "Calificación de Leads Autónoma",
        description: "Agente IA en WhatsApp o web chat que entrevista al prospecto, valida su presupuesto y necesidad, y le envía un link de Calendly solo si cumple con los criterios de cliente ideal.",
        tags: ["Automatización B2B", "IA"]
      },
      {
        icon: Bot,
        title: "Asistentes Corporativos RAG",
        description: "Sistemas RAG (Retrieval-Augmented Generation) conectados al Notion o Drive de la empresa. Tu equipo tiene un copiloto de IA que responde dudas de procesos internos al instante.",
        tags: ["IA Generativa", "Knowledge Base"]
      },
      {
        icon: BarChart,
        title: "Control Financiero por Proyecto",
        description: "Dashboards que cruzan horas trackeadas en Clockify/Toggl vs ingresos facturados. Conoce en tiempo real el margen de beneficio neto de cada cliente y servicio.",
        tags: ["Business Intelligence", "Finanzas"]
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
    heroTitle: "Experiencias de aprendizaje automatizadas y escalables.",
    heroDescription: "Automatiza la matrícula, mejora la retención de alumnos y ofrece soporte académico 24/7 sin multiplicar los costos de tu equipo docente.",
    metrics: [
      { value: "-60%", label: "Menos carga de tickets de soporte repetitivos" },
      { value: "x5", label: "Velocidad de on-boarding de nuevos alumnos" },
      { value: "+30%", label: "Aumento en la tasa de alumnos que finalizan" }
    ],
    painPoints: [
      {
        before: "Profesores agobiados respondiendo la misma duda básica por email a 200 alumnos.",
        after: "Tutores IA entrenados con tus apuntes que resuelven dudas operativas 24/7."
      },
      {
        before: "Alumnos abandonando el curso a mitad de camino sin que nadie se de cuenta a tiempo.",
        after: "Modelos predictivos que envían alertas tempranas si un alumno deja de ver las clases."
      },
      {
        before: "Uso de plataformas LMS anticuadas, lentas y que cobran porcentajes usureros.",
        after: "Infraestructura Cloud propia (Web App), con video encriptado y control total del contenido."
      }
    ],
    workflow: [
      { step: 1, title: "Matrícula", description: "El alumno paga online y el sistema (LMS) le otorga accesos y credenciales de inmediato." },
      { step: 2, title: "Aprendizaje", description: "Consume contenido en video. Si tiene dudas, consulta al Tutor IA embebido en la plataforma." },
      { step: 3, title: "Retención", description: "Si no se conecta en 7 días, un webhook en n8n dispara un SMS motivacional." },
      { step: 4, title: "Certificación", description: "Al aprobar, se emite automáticamente un PDF con QR verificable y se reporta en el BI." }
    ],
    solutions: [
      {
        icon: Globe,
        title: "Desarrollo de Sistemas LMS",
        description: "Academias online personalizadas en infraestructura Cloud (AWS/Vercel). Incluyen streaming encriptado, evaluación interactiva y generación de certificados PDF automatizados.",
        tags: ["EdTech Web", "Cloud Architecture"]
      },
      {
        icon: ShieldCheck,
        title: "Algoritmos de Prevención de Fuga",
        description: "Sistemas predictivos que analizan tasas de conexión y entrega de tareas, activando webhooks hacia n8n para enviar correos de reactivación antes de que el alumno deserte.",
        tags: ["Machine Learning", "Retención"]
      },
      {
        icon: Bot,
        title: "Tutores IA Especializados",
        description: "Bots entrenados estrictamente con tus PDF y temarios. Los alumnos pueden preguntar dudas complejas a las 3 AM y recibir respuestas precisas sin riesgo de alucinaciones.",
        tags: ["IA", "Soporte Académico"]
      },
      {
        icon: BarChart,
        title: "Analítica de Rendimiento Estudiantil",
        description: "Paneles gerenciales que rastrean el progreso de cohortes, detectan las preguntas de examen con mayor tasa de error y proyectan la retención del semestre.",
        tags: ["Business Intelligence", "Data Analytics"]
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
    heroTitle: "Flujo de caja inteligente y recuperación acelerada.",
    heroDescription: "Moderniza tus procesos de recaudación, automatiza las alertas de pago y toma decisiones financieras con tableros de riesgo en tiempo real.",
    metrics: [
      { value: "+45%", label: "Aumento en la tasa de recuperación de deuda" },
      { value: "-90%", label: "Reducción de trabajo manual en conciliación" },
      { value: "0 Errores", label: "Precisión garantizada por procesos RPA" }
    ],
    painPoints: [
      {
        before: "Analistas perdiendo días enteros haciendo el cruce manual de cartolas bancarias vs facturas.",
        after: "Bots (RPA) que descargan bancos, hacen el matching y cierran la conciliación solos."
      },
      {
        before: "Ejecutivos de cobranza humanos que sufren desgaste, estrés y cobran con mala actitud.",
        after: "Agentes Cognitivos en WhatsApp que cobran a gran escala con amabilidad y negocian cuotas."
      },
      {
        before: "Los clientes no pagan porque el proceso para revisar su deuda o factura es engorroso.",
        after: "Portales de Recaudación Seguros donde pagan con un click usando integraciones bancarias."
      }
    ],
    workflow: [
      { step: 1, title: "Morosidad", description: "El ERP (SAP/Defontana) detecta una factura vencida. El sistema lanza un Agente IA por WhatsApp." },
      { step: 2, title: "Negociación", description: "El Agente ofrece pago total o en cuotas. El cliente acepta y recibe link de pago seguro." },
      { step: 3, title: "Pago & RPA", description: "El cliente paga. En la noche, un RPA revisa el banco y concilia el pago en el ERP." },
      { step: 4, title: "Visibilidad", description: "El Gerente de Finanzas revisa su Power BI viendo cómo disminuye el indicador DSO." }
    ],
    solutions: [
      {
        icon: Globe,
        title: "Portales de Recaudación Seguros",
        description: "Webs transaccionales B2B donde el cliente ingresa con su RUT, consulta su estado de cuenta sincronizado vía API con tu ERP (SAP, Defontana) y paga en 1 click.",
        tags: ["Fintech Web", "Integración ERP"]
      },
      {
        icon: Bot,
        title: "Agentes de Negociación Cognitiva",
        description: "IA conversacional por WhatsApp que no solo cobra, sino que negocia planes de cuotas en base a reglas de negocio predefinidas, elevando las tasas de recuperación.",
        tags: ["IA Conversacional", "Cobranza"]
      },
      {
        icon: Zap,
        title: "RPA para Conciliación Bancaria",
        description: "Robots de software que extraen automáticamente cartolas de distintos portales bancarios y hacen el cruce (matching) con las facturas emitidas, ahorrando cientos de horas contables.",
        tags: ["RPA", "Automatización Financiera"]
      },
      {
        icon: BarChart,
        title: "Dashboards de Riesgo y Cartera",
        description: "Data visualization en Power BI para proyectar el flujo de caja libre, analizar los Días Promedio de Cobro (DSO) y clasificar el riesgo de morosidad por cliente.",
        tags: ["Business Intelligence", "Finanzas"]
      }
    ]
  }
];
