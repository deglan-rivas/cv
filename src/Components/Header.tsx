// TODO incluye información de contacto en 60-40 y alineado verticalmente con enlaces

export const Header = () => {
  return (
    <section className="max-w-4xl mx-auto flex justify-between items-start">
      <Title />
      <Contact />
    </section>
  )
}

const Title = () => {
  return (
    <div className="space-y-4">
      <h1 className="font-bold text-4xl"> Deglan Jesus Rivas Romero </h1>
      <h2 className="font-bold text-3xl"> FullStack Developer </h2>
      <p className="font-bold text-xl"> NodeJS | Python | React | AWS Cloud | SQL | DevOps  </p>
    </div>
  )
}

const Contact = () => {
  return (
    <ul className="flex flex-col justify-between items-end">
      <a
        href="mailto:deglan.rivas@pucp.edu.pe"
        className="text-blue-600 underline underline-offset-2"
      >
        deglan.rivas@pucp.edu.pe
      </a>
      <a
        href="tel:+51 989743073"
        className="text-blue-600 underline underline-offset-2"
      >
        +51 989743073
      </a>
      <a
        href="https://www.linkedin.com/in/deglan-jesus-64000a17a/"
        className="text-blue-600 underline underline-offset-2"
      >
        Linkedin
      </a>
      <a
        href="https://github.com/deglan-rivas"
        className="text-blue-600 underline underline-offset-2"
      >
        Github
      </a>
      <a
        href="https://hub.docker.com/u/deglanrivas"
        className="text-blue-600 underline underline-offset-2"
      >
        Dockerhub
      </a>
      <a
        href="https://deglan-rivas.github.io/"
        className="text-blue-600 underline underline-offset-2"
      >
        {/* Portafolio */}
        Portfolio
      </a>
    </ul>
  )
}