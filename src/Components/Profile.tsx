import { cv } from "../data"

export const Profile = () => {
  const { data: { profile: { title, content } } } = cv

  return (
    <section className="max-w-4xl mx-auto">
      {/* <h2 className="font-bold text-2xl">Perfil Profesional</h2> */}
      <h2 className="font-bold text-2xl">{title}</h2>
      <p>
        {content}
      </p>
    </section>
  )
}