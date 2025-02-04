// TODO crear un card para cada experiencia

import { cv } from "../data"

export const Education = () => {
  const { data: { education: { title, items } } } = cv

  return (
    <section>
      <h2 className="font-bold text-2xl">{title}</h2>
      <ul className="list-disc list-inside">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* <p className="italic">Pontificia Universidad Católica del Perú, 2015 - 2020</p>
      <p className="italic">Johannes Kepler Universität, 2019 - 2020</p> */}
      {/* <p>
        Detalle relevante (ej. promedio, proyectos destacados)
      </p> */}
    </section>
  )
}