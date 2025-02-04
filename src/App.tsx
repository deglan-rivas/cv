import { Achievements } from "./Components/Achievements"
import { Certifications } from "./Components/Certifications"
import { Education } from "./Components/Education"
import { Experience } from "./Components/Experience"
import { Header } from "./Components/Header"
import { Profile } from "./Components/Profile"
// import { cv } from "./data"

function App() {
  // console.log(cv)
  // TODO no sé por qué no funca el tsconfig del baseUrl y paths para usar rutas absolutas xd

  return (
    <>
      <div className="max-w-4xl mx-auto space-y-4">
        <Header />
        <Profile />
        <Experience />
        <Education />
        <Achievements />
        <Certifications />
      </div>
    </>
  )
}

export default App

// GUIAS
// https://caress.dev/DanielEnriquezCV.pdf -> https://caress.dev/
// https://deglan-rivas.github.io/ -> mi cv23 y 24
// https://cvapp.es/?ga_utm_source=google&utm_medium=ppc&utm_campaign=2075201230&utm_adgroup=SA.MISC-ES-AI-General&utm_custom=cvapp.es|SA.MISC|PS|NB&utm_content=674709807531&utm_term=curriculum%20ia&matchtype=b&device=c&location=9186179&gad_source=1&gclid=EAIaIQobChMIsImz7tbqhgMVV1ZIAB0XGQddEAAYAiAAEgKCrvD_BwE -> cvapp.es joyita para calcar
// https://www.redaccioncv.com/blog/cv-modelo-harvard -> modelo harvard explicado simple sencillo

// no usar 2 columnas ni colores ni formas como en mi diseño 2023, pues se loquen las ATS, si sabes que lo va a leer una persona todo OK, pero por lo general solo tenemos un cv o máximo dos si soy front y back o qa manual o automático o las variantes de data scientist, engineer, bi y ml xd
// evitar foto porque en usa e england rechazan cvs con foto para evitar discriminación
// omitir país pues se sobreentiende que es perú y sino debe ser remota la chamba xd
