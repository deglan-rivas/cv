import { cv } from "../data"

export const Certifications = () => {
  const { data: { certifications: { title, items } } } = cv

  return (
    <section>
      <h2 className="font-bold text-2xl">{title}</h2>
      <ul className="list-disc list-inside">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {/* <li>AWS Cloud Practitioner - 2023</li> */}
        {/* <li>AWS Cloud Architect - 2024</li>
        <li>AWS Cloud Developer - 2024</li> */}
        {/* <li>TOEFL - 2024</li> */}
      </ul>
    </section>
  )
}