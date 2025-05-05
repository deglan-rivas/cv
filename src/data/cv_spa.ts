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
      title: 'Certificationes',
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
          company: 'Programate S.A.C',
          date: 'Octubre, 2024 - Abril, 2025',
          position: 'Fullstack Developer',
          activities: [
            'Desarrollo y resolución de incidencias en MIO, aplicación web basada en React',
            'Desarrollo y mantenimiento del backend de VisiTasa utilizando azure functions en C# para clientes Tasa y Ologgi',
            'Diagnóstico y solución de problemas de código e infraestructura de aplicaciones VisiTasa - Seguridad mediante métricas del dashboard y consultas en KQL - Microsoft Azure',
          ]
        },
        {
          company: 'Aicon ( Wisec AI )',
          date: 'Julio, 2024 - Octubre, 2024',
          position: 'Fullstack Developer - Part time',
          activities: [
            'Consumo de APIs externas desde el frontend utilizando Next.js y SWR',
            'Consumo de componentes estandarizados como tablas y gráficos utilizando ShadcnUI',
            'Mantenimiento de servicios del backend utilizando Python ( FastAPI )',
          ]
        },
        {
          company: 'Notifai S.A.C',
          date: 'Enero, 2023 - Noviembre, 2023',
          position: 'Backend Developer',
          activities: [
            'Implementación de funcionalidades para IBM Watson y DialogFlow para automatizar chatbots en Python / NodeJS',
            'Despliegue automatizado de entornos de dev y prod mediante un pipeline en Github Actions',
            'Despligue de arquitectura en AWS Cloudformation mediante template.yaml',
            'Desarrollo de arquitectura orientada a eventos y microservicios en AWS usando Lambdas, SQS FIFO, Eventbridge para el cliente UPN',
            'Modelado de datos en AWS documentDB - base de datos no relacional'
          ]
        },
        {
          company: 'Core Andina Group S.A.C',
          date: 'Marzo, 2023 - Junio, 2023',
          position: 'Fullstack Developer - Freelancer',
          activities: [
            'Desarrollo del maquetado HTML / CSS en Bootstrap',
            'Mantenimiento del frontend en VanillaJS / JQuery. Póstuma migración a React / React Router',
            'Desarrollo de aplicación de atención de tickets en tiempo real utilizando Websockets en NodeJS',
            'Mantemiento de una aplicación que emite facturas en Java ( Spring Boot )',
          ]
        },
        {
          company: 'MDP Consulting',
          date: 'Abril, 2022 - Septiembre, 2022',
          position: 'Backend Developer',
          activities: [
            'Mantenimiento y desarrollo de nuevas funcionalidades para el backend en NodeJS del chatbot DAVI - UPN',
            'Desarrollo y optimización de la DDBB relacional ( PosgreSQL ) mediante Window Functions, Common Table Expressions y Temporary Tables',
            'Conversión de monolítica a microservicios migrando código a la nube de IBM mediante triggers',
            'Migración del codigo de Javascript a Typescript, documentación del código y capacitación de colegas'
          ]
        },
        {
          company: 'Kranzz Ingeniería y Construcción S.A.C',
          date: 'Diciembre, 2020 - Julio, 2021',
          position: 'Ingeniero de Diseño y Proyectos',
          activities: [
            'Elaboración de Mockups para aplicación móvil en Figma',
            'Maquetación de la aplicación móvil en App Inventor',
            'Desarrollo y mantenimiento de una aplicación móvil en Flutter',
            'Desarrollo y mantenimiento del backend en Java ( Spring Boot )',
          ]
        },
      ]
    },
    header: 'header',
    profile: {
      title: 'Perfil Profesional',
      content: `Profesional Backend Developer con más de ${new Date().getFullYear() - 2021} años de experiencia desarrollando software para el sector de empresas Outsourcing. Posee habilidades comprobadas en el diseño e implementación de APIs, diseño de bases de datos SQL/ NoSQL, consumo de servicios AWS, y arquitectura orientada a eventos y microservicios. Busca nuevas oportunidades como Desarrollador Semi-Senior o Tech Lead, donde pueda aplicar su experiencia y liderazgo técnico para impulsar proyectos innovadores y eficientes. Además, cuenta con inglés conversacional y certificaciones de AWS.`
    },
  }
}