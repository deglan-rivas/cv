import { cv } from "../data"

export const Achievements = () => {
  const { data: { achievements: { title, items } } } = cv

  return (
    <section>
      <h2 className="font-bold text-2xl">{title}</h2>
      <ul className="list-disc list-inside">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* <ul className="list-disc list-inside">
        <li>Estudiante becario seleccionado para el Programa de Intercambio en Johannes Kepler Universität, 2019</li>
        <li>Finalista en Feria de Proyectos de Ingeniería Mecatrónica, 2019 - I</li>
        <li>Acreedor de Beca Marsh Rehder, 2018</li>
        <li>Acreedor de Beca de Estímulo Académico Solidario (BEAS), 2016</li>
        <li>Medalla de bronce en 50th International Chemistry Olympiad, 2014</li>
      </ul> */}
    </section>
  )
}