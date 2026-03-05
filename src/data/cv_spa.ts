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
            'Implementar infraestructura en la nube de AWS, en conjunto con Kubernetes, para escalar de manera temporal el procesamiento hasta cinco veces la capacidad actual de un sistema batch de procesamiento en lotes on-premise',
            'Estandarizar la generación de código del equipo bajo un enfoque AI-driven development, mediante precommit hooks, CI/CD, subagentes y skills especializados para homogenizar el código producido por distintos LLMs empleados por los desarrolladores: Cursor, Claude y Codex',
            'Implementar un chatbot conversacional de jurisprudencia basado en un RAG de grafos (GraphRAG) desarrollado con Python, capaz de responder las consultas frecuentes de los asistentes jurisdiccionales de forma más fluida y natural que un chatbot tradicional basado en árboles de decisión. Asimismo, se incorporó un mecanismo de caché para reducir en un 50 % el consumo de tokens del LLM (API de Gemini)',
            'Refactorización de arquitectura monolítica a microservicios dockerizados aplicando Arquitectura Hexagonal. Orquestación de contenedores con Docker Compose (multistage builds), configuración de entornos de desarrollo y producción, y deployment automatizado',
            'Desarrollo de aplicación de escritorio (Vite + React + TypeScript + TailwindCSS) con componentes reutilizables, validación de formularios, y persistencia de datos. Colaboración con equipo de backend para integración de APIs y testing end-to-end',
          ]
        },
        {
          company: 'Programate S.A.C',
          date: 'Octubre, 2024 - Abril, 2025',
          position: 'Fullstack Developer',
          activities: [
            'Desarrollo y resolución de incidencias en MIO, aplicación web basada en React (implementando componentes funcionales con Hooks, React Router para navegación, y gestión de estado con Context API) y Express (NodeJS) para el backend',
            'Desarrollo y mantenimiento del backend serverless de VisiTasa con Azure Functions en C# (.NET), dando soporte a múltiples clientes empresariales (Tasa y Ologgi) en un entorno de producción en la nube de Azure',
            'Reducción del tiempo de diagnóstico de incidencias en producción mediante consultas KQL en Azure Monitor y Application Insights, mejorando la visibilidad de métricas de seguridad y rendimiento del sistema',
          ]
        },
        {
          company: 'Aicon ( Wisec AI )',
          date: 'Julio, 2024 - Octubre, 2024',
          position: 'Fullstack Developer - Part time',
          activities: [
            'Mantenimiento y desarrollo de servicios backend en Python (FastAPI). Debugging y resolución de issues en producción, optimización de queries, y testing de endpoints con pytest',
            'Desarrollo y testing de APIs RESTful siguiendo principios de diseño escalable. Implementación de validación de datos, manejo de errores, y documentación automática con OpenAPI/Swagger',
            'Colaboración con equipo frontend para integración de APIs. Consumo de componentes estandarizados (tablas, gráficos) y manejo de estado en Next.js con SWR',
          ]
        },
        {
          company: 'Notifai S.A.C',
          date: 'Enero, 2023 - Noviembre, 2023',
          position: 'Backend Developer',
          activities: [
            'Desarrollo de funciones serverless en Python (AWS Lambda) para automatización de chatbots con IBM Watson y DialogFlow. Implementación de event-driven programming con AWS EventBridge para procesamiento asíncrono',
            'Diseño e implementación de arquitectura de microservicios orientada a eventos en AWS: Lambdas (Python), SQS FIFO para mensajería, EventBridge para event routing, aplicando principios de diseño escalable y desacoplamiento',
            'Configuración y despliegue automatizado de infraestructura como código (IaC) en AWS CloudFormation mediante template.yaml. Setup de entornos de staging y producción con pipeline CI/CD en GitHub Actions',
            'Modelado de schemas de base de datos en AWS DocumentDB (NoSQL) que representan y soportan procesos de negocio. Integración de múltiples fuentes de datos en un sistema unificado',
            'Testing y debugging de servicios en producción. Resolución de issues de configuración en servidores, monitoreo de performance, y optimización de recursos AWS',
          ]
        },
        {
          company: 'Core Andina Group S.A.C',
          date: 'Marzo, 2023 - Junio, 2023',
          position: 'Fullstack Developer - Freelancer',
          activities: [
            'Desarrollo de maquetado responsive HTML/CSS con Bootstrap y Tailwind CSS, asegurando accesibilidad y compatibilidad cross-browser',
            'Desarrollo de aplicación de atención de tickets en tiempo real utilizando WebSockets en NodeJS. Implementación de arquitectura event-driven para notificaciones push y sincronización de estado entre clientes',
            'Mantenimiento del frontend legacy (VanillaJS/jQuery) y posterior migración a React con TypeScript. Desarrollo de componentes reutilizables, routing SPA con React Router, y consumo de APIs REST con manejo de efectos secundarios (useEffect)',
            // [JAVA] 'Desarrollo y mantenimiento de APIs RESTful para sistema de facturación electrónica en Java (Spring Boot). Implementación de validación de datos, manejo de transacciones, autenticación y autorización, y persistencia con JPA',
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
            // [JAVA] 'Implementación de módulo de autenticación y autorización con Java (Spring Boot). Configuración de Spring Security con JWT, implementación de filtros personalizados, gestión de roles y permisos entre múltiples sistemas usando @PreAuthorize',
            // [.NET]
            'Implementación de módulo de autenticación y autorización con ASP.NET Core (C#). Configuración de JWT Bearer Authentication con middleware personalizado, gestión de roles y políticas de acceso entre múltiples sistemas usando el atributo [Authorize]',
            'Diseño de schemas y optimización de base de datos relacional (PostgreSQL). Desarrollo de queries complejas con Window Functions, Common Table Expressions (CTEs), Temporary Tables, e índices para mejorar performance',
            'Conversión de arquitectura monolítica a microservicios migrando código a IBM Cloud mediante triggers. Aplicación de principios de diseño escalable y desacoplamiento de servicios',
            'Migración de codebase de JavaScript a TypeScript, creación de documentación técnica, y capacitación de equipo en mejores prácticas de desarrollo',
          ]
        },
        {
          company: 'Kranzz Ingeniería y Construcción S.A.C',
          date: 'Diciembre, 2020 - Julio, 2021',
          position: 'Ingeniero de Diseño y Proyectos',
          activities: [
            // [JAVA] 'Desarrollo y mantenimiento de backend RESTful en Java (Spring Boot) con arquitectura en capas (Controller, Service, Repository). Creación de endpoints, validación de datos, manejo de excepciones con @ControllerAdvice, configuración de CORS y seguridad',
            // [.NET]
            'Desarrollo y mantenimiento de backend RESTful en ASP.NET Core (C#) con arquitectura en capas (Controller, Service, Repository). Creación de endpoints, validación con FluentValidation, manejo global de excepciones con middleware, configuración de CORS y seguridad',
            'Diseño de schemas de base de datos que representan procesos de negocio. Testing de APIs con Postman, debugging en entorno de desarrollo, y deployment a producción',
            'Desarrollo y mantenimiento de aplicación móvil en Flutter. Integración con backend mediante consumo de APIs REST, manejo de autenticación entre cliente móvil y servidor',
            'Elaboración de mockups en Figma y maquetación de aplicación móvil en App Inventor. Colaboración con equipo de desarrollo para definir especificaciones técnicas',
          ]
        },
      ]
    },
    header: 'header',
    profile: {
      title: 'Perfil Profesional',
      content: `Backend Developer con más de ${new Date().getFullYear() - 2021} años de experiencia especializado en Python (FastAPI, Flask) y desarrollo de aplicaciones web escalables. Expertise comprobado en diseño e implementación de APIs RESTful, arquitectura de microservicios orientada a eventos, integración de múltiples fuentes de datos (SQL/NoSQL), y servicios en la nube (AWS). Experiencia en autenticación y autorización entre sistemas, optimización de rendimiento con caché (Redis), manejo de concurrencia y programación asíncrona en Python. Sólidos conocimientos en frontend (HTML/CSS/Tailwind CSS, React/TypeScript) permitiendo colaboración efectiva con equipos Full-Stack. Experiencia en despliegue automatizado (CI/CD), testing, debugging, y gestión de entornos de staging/producción. Certificado en AWS Cloud Practitioner con inglés conversacional fluido.`
    },
  }
}