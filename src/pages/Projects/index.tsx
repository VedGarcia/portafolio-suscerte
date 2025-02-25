import { useEffect, useState } from "react";
import getProjects from "../../services/get_projects";
import Layout from "../../components/Layout";
import Masonry from "../../components/ui/Masonry";

// Interfaz para los datos que vienen de la API (asumiendo que getProjects.getAll() devuelve esto)
interface ProjectFromApi {
  id: number;
  name: string;
  html_url: string;
  // ... otras propiedades que tu API pueda tener
}

// Interfaz para los datos que usaremos en el estado del componente
interface Project {
  id: number;
  name: string;
  html_url: string;
  image_url: string; // URL de la imagen que agregaremos
  height: number; // Altura aleatoria que agregaremos
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Estado de carga
  const [error, setError] = useState<string | null>(null); // Estado de error

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Establecer el estado de carga a verdadero al inicio
      setError(null); // Resetear el estado de error
      try {
        const result = await getProjects.getAll();
        if (result && result.data) {
          const filteredProjects: Project[] = result.data.map(
            (project: ProjectFromApi) => {
              const randomHeight = Math.floor(Math.random() * 16) * 20 + 100;
              return {
                id: project.id,
                name: project.name,
                html_url: project.html_url,
                image_url: `https://picsum.photos/id/${project.id
                  .toString()
                  .substring(0, 2)}/200/300`, // Reemplaza con tu lógica de URL de imagen
                height: randomHeight,
              };
            }
          );
          setProjects(filteredProjects);
        } else {
          console.warn("Data not available or empty.");
          setError("Data not available or empty.");
        }
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError("Error fetching data.");
      } finally {
        setIsLoading(false); // Establecer el estado de carga a falso al finalizar
      }
    };
    fetchData();
  }, []);

  console.log("Projects almacenados en estado: ", projects);

  if (isLoading) {
    return (
      <Layout>
        <p className="text-2xl animate-pulse">Cargando proyectos...</p>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <p className="text-2xl text-red-500">Error: {error}</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-12 ">
        <h1 className="text-6xl font-[Ananda] text-sky-300 pt-8">Proyectos</h1>
      </div>

      <Masonry data={projects} />
    </Layout>
  );
};

export default Projects;
