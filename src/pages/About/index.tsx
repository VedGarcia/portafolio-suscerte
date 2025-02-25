import { useState } from "react";
import Layout from "../../components/Layout";
import data from "./data.json"; // Importamos el archivo JSON

interface Responsabilidad {
  cargo: string;
  responsabilidades: string[];
}

interface Experiencia {
  tipo: string;
  experiencias: Responsabilidad[];
}

interface Parte {
  titulo: string;
  contenido: string | Responsabilidad[] | Experiencia[];
}

interface Data {
  [key: string]: Parte;
}

function isExperienciaArray(content: any[]): content is Experiencia[] {
  return content.length > 0 && "tipo" in content[0];
}

function isResponsabilidadArray(content: any[]): content is Responsabilidad[] {
  return content.length > 0 && "cargo" in content[0];
}

const About: React.FC = () => {
  const [selectedPart, setSelectedPart] = useState<string>("parte1");
  const info: Data = data;

  return (
    <Layout>
      <section className="w-full h-[90vh] grid grid-cols-5 grid-rows-5 gap-2 overflow-hidden">
        <div className="col-span-5 pt-8">
          <h1 className="text-6xl font-[Ananda] text-sky-300">Sobre mí</h1>
        </div>
        <nav className="row-span-4 col-start-5 row-start-2 z-20">
          {Object.keys(info).map((key) => (
            <button
              key={key}
              className={`py-2 px-4 cursor-pointer text-start ${
                selectedPart === key
                  ? " text-sky-300 font-[VictorMono-Bold] underline underline-offset-2"
                  : " text-amber-200 font-[VictorMono-Light]"
              }`}
              onClick={() => {
                setSelectedPart(key);
              }}
            >
              {info[key].titulo}
            </button>
          ))}
        </nav>
        <div className="p-4 col-span-4 row-span-4 row-start-2 overflow-auto font-[VictorMono-light] text-amber-300 bg-stone-900/80 relative rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-sky-300 sticky top-0 bg-blend-color-dodge bg-stone-900">
            {info[selectedPart].titulo}
          </h3>
          {renderContent(info[selectedPart].contenido)}
        </div>
      </section>
    </Layout>
  );
};

export default About;

// Función para renderizar el contenido de la parte seleccionada
const renderContent = (content: Parte["contenido"]) => {
  if (typeof content === "string") {
    // Si el contenido es una cadena de texto
    return <p className="px-6">{content}</p>;
  } else if (Array.isArray(content)) {
    if (isExperienciaArray(content)) {
      // Es un arreglo de Experiencia[]
      return content.map((item, index) => (
        <div key={index} className="mb-6">
          <h4 className="text-lg font-bold mb-2 px-4">{item.tipo}</h4>
          {item.experiencias.map((exp, idx) => (
            <div key={idx} className="mb-4">
              <h5 className="text-md font-semibold px-6">{exp.cargo}</h5>
              <ul className="list-disc list-inside text-sky-200 ">
                {exp.responsabilidades.map((resp, i) => (
                  <li className="px-8" key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ));
    } else if (isResponsabilidadArray(content)) {
      // Es un arreglo de Responsabilidad[]
      return content.map((item, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-md font-semibold px-4">{item.cargo}</h3>
          <ul className="list-disc list-inside text-sky-200">
            {item.responsabilidades.map((resp, idx) => (
              <li className='px-8' key={idx}>{resp}</li>
            ))}
          </ul>
        </div>
      ));
    } else {
      // Arreglo vacío o con estructura desconocida
      return <p>No hay información disponible.</p>;
    }
  } else {
    // Si content es null o undefined
    return null;
  }
};
