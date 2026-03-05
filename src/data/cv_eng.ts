export const cv_eng = {
  metadata: {
    language: 'eng'
  },
  data: {
    achievements: {
      title: 'Academic Achievements',
      items: [
        'Scholarship student selected for the Exchange Program at Johannes Kepler University, 2019',
        'Recipient of the Marsh Rehder Scholarship, 2018',
        'Recipient of the Solidarity Academic Encouragement Scholarship (BEAS), 2016',
        'Bronze medalist at the 50th International Chemistry Olympiad, 2014'
      ]
    },
    certifications: {
      title: 'Certifications',
      items: [
        'AWS Cloud Practitioner - 2023'
      ]
    },
    education: {
      title: 'Academic Education',
      items: [
        'Pontificia Universidad Católica del Perú, 2015 - 2020',
        'Johannes Kepler Universität, 2019 - 2020'
      ]
    },
    experience: {
      title: 'Professional Experience',
      jobs: [
        {
          company: 'Jurado Nacional de Elecciones (Perú)',
          date: 'May, 2025 - Present',
          position: 'AI Developer',
          activities: [
            'Implement AWS cloud infrastructure, in conjunction with Kubernetes, to temporarily scale processing up to five times the current capacity of an on-premise batch processing system',
            'Standardize the team\'s code generation under an AI-driven development approach, using precommit hooks, CI/CD, subagents and specialized skills to homogenize code produced by different LLMs used by developers: Cursor, Claude and Codex',
            'Implement a conversational jurisprudence chatbot based on a Graph RAG (GraphRAG) developed with Python, capable of answering frequent queries from jurisdictional assistants more fluidly and naturally than a traditional decision-tree-based chatbot. Additionally, a cache mechanism was incorporated to reduce LLM token consumption (Gemini API) by 50%',
            'Refactoring monolithic architecture to Dockerized microservices applying Hexagonal Architecture. Container orchestration with Docker Compose (multistage builds), configuration of development and production environments, and automated deployment',
            'Development of desktop application (Vite + React + TypeScript + TailwindCSS) with reusable components, form validation, and data persistence. Collaboration with backend team for API integration and end-to-end testing',
          ]
        },
        {
          company: 'Programate S.A.C',
          date: 'October, 2024 - April, 2025',
          position: 'Fullstack Developer',
          activities: [
            'Development and issue resolution in MIO, a web application based on React (implementing functional components with Hooks, React Router for navigation, and state management with Context API) and Express (NodeJS) for the backend',
            'Development and maintenance of the VisiTasa serverless backend with Azure Functions in C# (.NET), supporting multiple enterprise clients (Tasa and Ologgi) in a cloud production environment on Azure',
            'Reduced production incident diagnosis time through KQL queries in Azure Monitor and Application Insights, improving visibility of security metrics and system performance',
          ]
        },
        {
          company: 'Aicon ( Wisec AI )',
          date: 'July, 2024 - October, 2024',
          position: 'Fullstack Developer - Part time',
          activities: [
            'Maintenance and development of backend services in Python (FastAPI). Debugging and resolution of production issues, query optimization, and endpoint testing with pytest',
            'Development and testing of RESTful APIs following scalable design principles. Implementation of data validation, error handling, and automatic documentation with OpenAPI/Swagger',
            'Collaboration with frontend team for API integration. Consumption of standardized components (tables, graphs) and state management in Next.js with SWR',
          ]
        },
        {
          company: 'Notifai S.A.C',
          date: 'January, 2023 - November, 2023',
          position: 'Backend Developer',
          activities: [
            'Development of serverless functions in Python (AWS Lambda) for chatbot automation with IBM Watson and DialogFlow. Implementation of event-driven programming with AWS EventBridge for asynchronous processing',
            'Design and implementation of event-driven microservices architecture on AWS: Lambdas (Python), SQS FIFO for messaging, EventBridge for event routing, applying scalable design principles and decoupling',
            'Configuration and automated deployment of Infrastructure as Code (IaC) on AWS CloudFormation using template.yaml. Setup of staging and production environments with CI/CD pipeline in GitHub Actions',
            'Database schema modeling in AWS DocumentDB (NoSQL) representing and supporting business processes. Integration of multiple data sources into a unified system',
            'Testing and debugging services in production. Resolution of server configuration issues, performance monitoring, and AWS resource optimization',
          ]
        },
        {
          company: 'Core Andina Group S.A.C',
          date: 'March, 2023 - June, 2023',
          position: 'Fullstack Developer - Freelancer',
          activities: [
            'Development of responsive HTML/CSS layouts with Bootstrap and Tailwind CSS, ensuring accessibility and cross-browser compatibility',
            'Development of real-time ticket management application using WebSockets in NodeJS. Implementation of event-driven architecture for push notifications and state synchronization across clients',
            'Maintenance of legacy frontend (VanillaJS/jQuery) and subsequent migration to React with TypeScript. Development of reusable components, SPA routing with React Router, and REST API consumption with side effects management (useEffect)',
            // [JAVA] 'Development and maintenance of RESTful APIs for electronic invoicing system in Java (Spring Boot). Implementation of data validation, transaction management, authentication and authorization, and persistence with JPA',
            // [.NET]
            'Development and maintenance of RESTful APIs for electronic invoicing system in ASP.NET Core (C#). Implementation of validation with FluentValidation, transaction management with Entity Framework Core, JWT authentication and role-based authorization with ASP.NET Identity',
          ]
        },
        {
          company: 'MDP Consulting',
          date: 'April, 2022 - September, 2022',
          position: 'Backend Developer',
          activities: [
            'Development and maintenance of NodeJS backend for DAVI chatbot (UPN). Unit testing and API debugging, performance optimization, and deployment to staging/production environments',
            // [JAVA] 'Implementation of authentication and authorization module with Java (Spring Boot). Configuration of Spring Security with JWT, implementation of custom filters, role and permission management across multiple systems using @PreAuthorize',
            // [.NET]
            'Implementation of authentication and authorization module with ASP.NET Core (C#). Configuration of JWT Bearer Authentication with custom middleware, role and policy-based access management across multiple systems using the [Authorize] attribute',
            'Schema design and relational database optimization (PostgreSQL). Development of complex queries with Window Functions, Common Table Expressions (CTEs), Temporary Tables, and indexes for performance improvement',
            'Conversion from monolithic architecture to microservices migrating code to IBM Cloud using triggers. Application of scalable design principles and service decoupling',
            'Migration of codebase from JavaScript to TypeScript, creation of technical documentation, and team training on development best practices',
          ]
        },
        {
          company: 'Kranzz Ingeniería y Construcción S.A.C',
          date: 'December, 2020 - July, 2021',
          position: 'Design and Project Engineer',
          activities: [
            // [JAVA] 'Development and maintenance of RESTful backend in Java (Spring Boot) with layered architecture (Controller, Service, Repository). Creation of endpoints, data validation, exception handling with @ControllerAdvice, CORS and security configuration',
            // [.NET]
            'Development and maintenance of RESTful backend in ASP.NET Core (C#) with layered architecture (Controller, Service, Repository). Creation of endpoints, validation with FluentValidation, global exception handling with middleware, CORS and security configuration',
            'Database schema design representing business processes. API testing with Postman, debugging in development environment, and deployment to production',
            'Development and maintenance of mobile application in Flutter. Backend integration through REST API consumption, authentication handling between mobile client and server',
            'Creation of mockups in Figma and mobile application layout in App Inventor. Collaboration with development team to define technical specifications',
          ]
        }
      ]
    },

    header: 'header',
    profile: {
      title: 'Professional Profile',
      content: `Backend Developer with over ${new Date().getFullYear() - 2021} years of experience specialized in Python (FastAPI, Flask) and scalable web application development. Proven expertise in RESTful API design and implementation, event-driven microservices architecture, integration of multiple data sources (SQL/NoSQL), and cloud services (AWS). Experience in authentication and authorization across systems, performance optimization with caching (Redis), concurrency handling and asynchronous programming in Python. Strong frontend knowledge (HTML/CSS/Tailwind CSS, React/TypeScript) enabling effective collaboration with Full-Stack teams. Experience in automated deployment (CI/CD), testing, debugging, and staging/production environment management. AWS Cloud Practitioner certified with fluent conversational English.`
    },
  }
}