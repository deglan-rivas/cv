export const cv_spa = {
  metadata: {
    language: 'spa'
  },
  data: {
    achievements: {
      title: 'Logros Académicos',
      items: [
        'Estudiante becario seleccionado para el Programa de Intercambio en Johannes Kepler Universität, 2019',
        'Acreedor de Beca Marsh Rehder, 2018',
        'Acreedor de Beca de Estímulo Académico Solidario (BEAS), 2016',
        'Medalla de bronce en 50th International Chemistry Olympiad, 2014'
      ]
    },
    certifications: {
      title: 'Certificaciones',
      items: [
        'AWS Cloud Practitioner - 2023'
      ]
    },
    education: {
      title: 'Formación Académica',
      items: [
        'Pontificia Universidad Católica del Perú, 2015 - 2020',
        'Johannes Kepler Universität, 2019 - 2020'
      ]
    },
    experience: {
      title: 'Experiencia Profesional',
      jobs: [
        {
          company: 'Jurado Nacional de Elecciones',
          date: 'Mayo, 2025 - Actualidad',
          position: 'AI Developer',
          activities: [
            'Implementar infraestructura en la nube de AWS en conjunto con Kubernetes para escalar de manera temporal el procesamiento hasta cinco veces la capacidad actual de un sistema batch de procesamiento en lotes on-premise',
            'Estandarizar la generación de código del equipo bajo un enfoque AI-driven development, mediante precommit hooks, CI/CD, subagentes y skills especializados para homogenizar el código producido por distintos LLMs empleados por los desarrolladores: Cursor, Claude y Codex',
            'Implementar un chatbot conversacional de jurisprudencia basado en un RAG de grafos (GraphRAG) desarrollado con Python, capaz de responder las consultas frecuentes de los asistentes jurisdiccionales de forma más fluida y natural que un chatbot tradicional basado en árboles de decisión. Asimismo, se incorporó un mecanismo de caché para reducir en un 50 % el consumo de tokens del LLM (API de Gemini)',
            'Automatizar la entrega con pipelines CI/CD en YAML: 2 repositorios de pipelines (frontend, backend) y 3 de manifiestos Kubernetes (dev, qa, prod). Reducir tiempos cacheando dependencias y reutilizando capas de Docker con imágenes previas y multistage builds, integrar cobertura de pruebas con SonarQube y configurar runners Linux y Windows (este último para compilar la app de escritorio Recuento de Votos, creada en Tauri y React). Migración progresiva a despliegue continuo con GitOps usando ArgoCD',
            'Desarrollar código siguiendo la metodología Spec-Driven Development (SDD) y aplicando TDD para garantizar la calidad del código con pruebas de integración mediante Testcontainers y pruebas end-to-end con Playwright. Documentar y archivar el release de cada feature con el framework Gentle-AI, el cual sigue los lineamientos de OpenSpec',
            'Diseñar una infraestructura de pruebas como código (IaC) para probar cambios sin afectar ambientes compartidos: DNS y autoridad certificadora propios, repositorio de artefactos (Nexus), GitLab con su runner y clústeres Kubernetes recreables a demanda',
          ]
        },
        {
          company: 'Programate S.A.C',
          date: 'Octubre, 2024 - Abril, 2025',
          position: 'AI Fullstack Developer',
          activities: [
            'Desarrollo y resolución de incidencias en MIO, aplicación web basada en React (implementando componentes funcionales con Hooks, React Router para navegación, y gestión de estado con Context API) y Express (NodeJS) para el backend',
            'Desarrollo y mantenimiento del backend serverless de VisiTasa con Azure Functions en C# (.NET), dando soporte a múltiples clientes empresariales (Tasa y Ologgi) en un entorno de producción en la nube de Azure',
            'Desarrollo de control de acceso con visión por computadora en garitas mediante detección de rostros y landmarks faciales, dando bienvenida personalizada a cada ingreso',
            // 'Reducción del tiempo de diagnóstico de incidencias en producción mediante consultas KQL en Azure Monitor y Application Insights, mejorando la visibilidad de métricas de seguridad y rendimiento del sistema',
          ]
        },
        {
          company: 'Aicon ( Wisec AI )',
          date: 'Julio, 2024 - Octubre, 2024',
          position: 'AI Fullstack Developer - Part time',
          activities: [
            'Desarrollo de pipeline RAG para chatbot de cementera, integrando ingesta de documentos de OneDrive y SharePoint con indexación y búsqueda web mediante Bing Search API',
            'Mantenimiento y desarrollo de servicios backend en Python (FastAPI). Debugging y resolución de issues en producción, optimización de queries, y testing de endpoints con pytest',
            // 'Desarrollo y testing de APIs RESTful siguiendo principios de diseño escalable. Implementación de validación de datos, manejo de errores, y documentación automática con OpenAPI/Swagger',
            'Colaboración con equipo frontend para integración de APIs. Consumo de componentes estandarizados (tablas, gráficos) y manejo de estado en Next.js con SWR',
          ]
        },
        {
          company: 'Notifai S.A.C',
          date: 'Enero, 2023 - Noviembre, 2023',
          position: 'AI Backend Developer',
          activities: [
            'Desarrollo de funciones serverless en Python (AWS Lambda) para automatización de chatbots con IBM Watson y DialogFlow. Implementación de event-driven programming con AWS EventBridge para procesamiento asíncrono',
            'Limpieza y etiquetado de datos para NLU, y desarrollo de detector de intents por fuzzy matching como capa complementaria a IBM Watson y DialogFlow',
            'Diseño e implementación de arquitectura de microservicios orientada a eventos en AWS: Lambdas (Python), SQS FIFO para mensajería, EventBridge para event routing, aplicando principios de diseño escalable y desacoplamiento',
            'Configuración y despliegue automatizado de infraestructura como código (IaC) en AWS CloudFormation mediante template.yaml. Setup de entornos de staging y producción con pipeline CI/CD en GitHub Actions',
            'Modelado de schemas de base de datos en AWS DocumentDB (NoSQL) que representan y soportan procesos de negocio. Integración de múltiples fuentes de datos en un sistema unificado',
            // 'Testing y debugging de servicios en producción. Resolución de issues de configuración en servidores, monitoreo de performance, y optimización de recursos AWS',
          ]
        },
        {
          company: 'Core Andina Group S.A.C',
          date: 'Marzo, 2023 - Junio, 2023',
          position: 'Fullstack Developer - Freelancer',
          activities: [
            'Desarrollo de aplicación de atención de tickets en tiempo real utilizando WebSockets en NodeJS. Implementación de arquitectura event-driven para notificaciones push y sincronización de estado entre clientes',
            'Mantenimiento del frontend legacy (VanillaJS/jQuery) y posterior migración a React con TypeScript. Desarrollo de componentes reutilizables, routing SPA con React Router, y consumo de APIs REST con manejo de efectos secundarios (useEffect)',
            // [JAVA] 
            // 'Desarrollo y mantenimiento de APIs RESTful para sistema de facturación electrónica en Java (Spring Boot). Implementación de validación de datos, manejo de transacciones, autenticación y autorización, y persistencia con JPA',
            // [.NET]
            'Desarrollo y mantenimiento de APIs RESTful para sistema de facturación electrónica en ASP.NET Core (C#). Implementación de validación con FluentValidation, gestión de transacciones con Entity Framework Core, autenticación JWT y autorización por roles con ASP.NET Identity',
          ]
        },
        {
          company: 'MDP Consulting',
          date: 'Abril, 2022 - Septiembre, 2022',
          position: 'Backend Developer',
          activities: [
            'Desarrollo y mantenimiento de backend en NodeJS para chatbot DAVI (UPN). Testing unitario y debugging de APIs, optimización de performance, y deployment a entornos de staging/producción',
            // [JAVA] 
            // 'Implementación de módulo de autenticación y autorización con Java (Spring Boot). Configuración de Spring Security con JWT, implementación de filtros personalizados, gestión de roles y permisos entre múltiples sistemas usando @PreAuthorize',
            // [.NET]
            'Implementación de módulo de autenticación y autorización con ASP.NET Core (C#). Configuración de JWT Bearer Authentication con middleware personalizado, gestión de roles y políticas de acceso entre múltiples sistemas usando el atributo [Authorize]',
            'Diseño de schemas y optimización de base de datos relacional (PostgreSQL). Desarrollo de queries complejas con Window Functions, Common Table Expressions (CTEs), Temporary Tables, e índices para mejorar performance',
            'Migración de codebase de JavaScript a TypeScript, creación de documentación técnica, y capacitación de equipo en mejores prácticas de desarrollo',
          ]
        },
        {
          company: 'Kranzz Ingeniería y Construcción S.A.C',
          date: 'Diciembre, 2020 - Julio, 2021',
          position: 'Ingeniero de Diseño y Proyectos',
          activities: [
            // [JAVA] 
            // 'Desarrollo y mantenimiento de backend RESTful en Java (Spring Boot) con arquitectura en capas (Controller, Service, Repository). Creación de endpoints, validación de datos, manejo de excepciones con @ControllerAdvice, configuración de CORS y seguridad',
            // [.NET]
            'Desarrollo y mantenimiento de backend RESTful en ASP.NET Core (C#) con arquitectura en capas (Controller, Service, Repository). Creación de endpoints, validación con FluentValidation, manejo global de excepciones con middleware, configuración de CORS y seguridad',
            'Desarrollo y mantenimiento de aplicación móvil en Flutter. Integración con backend mediante consumo de APIs REST, manejo de autenticación entre cliente móvil y servidor',
            'Elaboración de mockups en Figma y maquetación de aplicación móvil en App Inventor. Colaboración con equipo de desarrollo para definir especificaciones técnicas',
          ]
        },
      ]
    },
    header: 'header',
    profile: {
      title: 'Perfil Profesional',
      content: `AI Developer con más de ${new Date().getFullYear() - 2021} años de experiencia en desarrollo backend, especializado en integrar y consumir servicios de IA: LLMs (Gemini), RAG y GraphRAG, y chatbots conversacionales (IBM Watson, DialogFlow). Sólida base en Python (FastAPI, Flask), APIs RESTful, arquitectura de microservicios orientada a eventos, integración de fuentes de datos (SQL/NoSQL) y servicios en la nube (AWS, Azure, Kubernetes). Experiencia en despliegue automatizado (CI/CD), testing, debugging y desarrollo asistido por IA (Spec-Driven Development, TDD). Conocimientos de frontend (React/TypeScript) para colaborar con equipos Full-Stack. Certificado en AWS Cloud Practitioner con inglés conversacional fluido.`
    },
  }
}