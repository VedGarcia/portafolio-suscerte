import { useState } from "react";
import Layout from "../../components/Layout";
import data from "./data.json"; // Archivo JSON importado

interface ResponsabilidadDetallada {
  titulo: string;
  descripcion: string[];
}

interface ExperienciaLaboral {
  cargo: string;
  responsabilidades: (ResponsabilidadDetallada | string)[];
}

interface Experiencia {
  tipo: string;
  experiencias: ExperienciaLaboral[];
}

interface Parte {
  titulo: string;
  contenido: string | string[] | ExperienciaLaboral[] | Experiencia[];
}

interface Data {
  [key: string]: Parte;
}

const About: React.FC = () => {
  const [selectedPart, setSelectedPart] = useState<string>("parte1");
  const info: Data = data;

  // Validación simple
  const isValidContent = (content: Parte["contenido"]) => {
    return (
      typeof content === "string" ||
      (Array.isArray(content) &&
        (content.every(item => typeof item === "string") ||
          content.every(item => typeof item === "object" && "cargo" in item) ||
          content.every(item => typeof item === "object" && "tipo" in item)))
    );
  };

  return (
    <Layout>
      <section className="w-full h-full flex flex-col lg:h-[90vh] lg:grid lg:grid-cols-5 lg:grid-rows-5 lg:gap-2 lg:overflow-hidden">
        {/* Título */}
        <div className="w-full lg:col-span-5 pt-8 md:pt-14 p-4">
          <h1 className="text-4xl md:text-6xl font-[Ananda] text-sky-300">
            Sobre mí
          </h1>
        </div>

        {/* Navegación */}
        <nav className="flex space-x-4 overflow-x-auto whitespace-nowrap w-full lg:row-span-4 lg:col-start-5 lg:row-start-2 z-10 lg:space-x-0 lg:flex-col lg:overflow-hidden lg:whitespace-break-spaces">
          {Object.keys(info).map((key) => (
            <button
              key={key}
              className={`py-2 px-4 cursor-pointer text-start ${
                selectedPart === key
                  ? "text-sky-300 font-[VictorMono-Bold] underline underline-offset-2"
                  : "text-amber-200 font-[VictorMono-Light]"
              }`}
              onClick={() => setSelectedPart(key)}
            >
              {info[key].titulo}
            </button>
          ))}
        </nav>

        {/* Contenido */}
        <div className="px-4 md:col-span-4 row-span-4 row-start-2 overflow-auto font-[VictorMono-light] text-amber-300 bg-stone-900/80 relative rounded-lg">
          <h3 className="text-xl md:text-2xl font-bold py-4 text-sky-300 sticky top-0 bg-blend-color-dodge bg-stone-900">
            {info[selectedPart].titulo}
          </h3>
          {isValidContent(info[selectedPart].contenido) ? (
            renderContent(info[selectedPart].contenido)
          ) : (
            <p className="text-red-500">Contenido no válido o vacío.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default About;

// Función para renderizar contenido
const renderContent = (content: Parte["contenido"]) => {
  if (typeof content === "string") {
    return <p className="px-6 text-xs md:text-base">{content}</p>;
  } else if (Array.isArray(content)) {
    if (content.every((item) => typeof item === "string")) {
      // Si es un arreglo de strings
      return (
        <ul className="list-inside text-sky-200">
          {content.map((item, index) => (
            <li className="px-8 text-xs md:text-base mb-2" key={index}>
              {item}
            </li>
          ))}
        </ul>
      );
    } else if (content.every((item) => typeof item === "object" && "cargo" in item)) {
      // Si es un arreglo de ExperienciaLaboral
      return (content as ExperienciaLaboral[]).map((item, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-sm md:text-base font-semibold px-4 pb-4 text-sky-400">
            {item.cargo}
          </h3>
          {item.responsabilidades.map((resp, respIndex) =>
            typeof resp === "string" ? (
              <ul className="list-disc list-inside text-sky-200" key={respIndex}>
                <li className="px-8 text-xs md:text-base">{resp}</li>
              </ul>
            ) : (
              <div key={respIndex} className="mb-2">
                <h4 className="text-xs md:text-sm font-semibold px-6 pb-2 text-sky-300">
                  {resp.titulo}
                </h4>
                <ul className="list-disc list-inside text-sky-200">
                  {resp.descripcion.map((desc, descIndex) => (
                    <li className="px-8 text-xs md:text-base" key={descIndex}>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      ));
    } else if (content.every((item) => typeof item === "object" && "tipo" in item)) {
      // Si es un arreglo de Experiencia
      return (content as Experiencia[]).map((item, index) => (
        <div key={index} className="mb-6">
          <h4 className="text-base md:text-lg font-bold mb-2 px-4 text-amber-200">
            {item.tipo}
          </h4>
          {item.experiencias.map((exp, idx) => (
            <div key={idx} className="mb-4">
              <h5 className="text-sm md:text-base font-semibold px-6 pb-4 text-amber-400">
                {exp.cargo}
              </h5>
              {exp.responsabilidades.map((resp, respIndex) =>
                typeof resp === "string" ? (
                  <ul
                    className="list-disc list-inside text-sky-200"
                    key={respIndex}
                  >
                    <li className="px-8 text-xs md:text-base">{resp}</li>
                  </ul>
                ) : (
                  <div key={respIndex} className="mb-2">
                    <h4 className="text-xs md:text-sm font-semibold px-6 pb-2 text-sky-300">
                      {resp.titulo}
                    </h4>
                    <ul className="list-disc list-inside text-sky-200">
                      {resp.descripcion.map((desc, descIndex) => (
                        <li
                          className="px-8 text-xs md:text-base"
                          key={descIndex}
                        >
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      ));
    }
  }
  return <p>No hay información disponible.</p>;
};
