interface Experience {
  // id: number
  company: string
  position: string
  date: string
  // bullets: string[]
  activities: string[]
}
// const experiences: Experience[] = [
//   {
//     id: 4,
//     company: 'Notifai S.A.C',
//     position: 'Backend Developer',
//     date: 'Enero, 2023 - Actualidad',
//     bullets: [
//       'Implementación de funcionalidades para IBM Watson y DialogFlow para automatizar chatbots en Python / NodeJS',
//       'Despliegue automatizado de entornos de dev y prod mediante un pipeline en Github actions ( main.yml )',
//       'Despligue de arquitectura en AWS Cloudformation mediante template.yaml',
//       'Desarrollo de arquitectura orientada a eventos y microservicios en AWS usando Lambdas, SQS FIFO, Eventbridge para el cliente UPN',
//       'Modelado de datos en AWS documentDB - base de datos no relacional'
//     ]
//   },
//   {
//     id: 3,
//     company: 'Core Andina Group S.A.C',
//     position: 'Fullstack Developer - Freelancing',
//     date: 'Marzo, 2023 - Junio, 2023',
//     bullets: [
//       'Desarrollo del maquetado HTML / CSS en Bootstrap',
//       'Desarrollo de la interactividad del frontend utilizando VanillaJS / React',
//       'Desarrollo de una aplicación de atención de tickets en tiempo real utilizando Websockets en NodeJS'
//     ]
//   },
//   {
//     id: 2,
//     company: 'MDP Consulting',
//     position: 'Backend Developer',
//     date: 'Abril, 2022 - Octubre, 2022',
//     bullets: [
//       'Mantenimiento y desarrollo de nuevas funcionalidades para el backend en NodeJS del chatbot DAVI - UPN',
//       'Desarrollo y optimización de la DDBB relacional ( PosgreSQL ) mediante Window Functions, Common Table Expressions y Temporary Tables',
//       'Conversión de monolítica a microservicios migrando código a la nube de IBM mediante triggers',
//       'Migración del codigo de Javascript a Typescript, documentación del código y capacitación de colegas'
//     ]
//   },
//   {
//     id: 1,
//     company: 'Kranzz Ingeniería y Construcción S.A.C',
//     position: 'Ingeniero de Diseño y Proyectos',
//     date: 'Noviembre, 2020 - Diciembre, 2021',
//     bullets: [
//       'Desarrollo y mantenimiento de una aplicación móvil en Flutter',
//       'Elaboración de Mockups para aplicación móvil en Figma'
//     ]
//   }
// ]

import { cv } from "../data"

export const Experience = () => {
  const { data: { experience: { title, jobs } } } = cv
  return (
    <section className="space-y-2">
      <h2 className="font-bold text-2xl">{title}</h2>
      {
        jobs.map((experience, index) => (
          <Card key={index} experience={experience} />
        ))
      }
    </section>
  )
}

const Card = ({ experience }: { experience: Experience }) => {
  return (
    <div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg">{experience.company}</h3>
          <p className="italic">{experience.position}</p>
        </div>

        <p className="italic">{experience.date}</p>
      </div>
      <ul className="list-disc list-inside">
        {
          experience.activities.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))
        }
      </ul>
    </div>
  )
}