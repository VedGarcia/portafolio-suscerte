import { useEffect, useState } from "react";
import getProjects from "../../services/get_projects";
import Layout from "../../components/Layout";
import Masonry from "../../components/ui/Masonry";

// datos que vienen de la API
interface ProjectFromApi {
  id: number;
  name: string;
  html_url: string;
}

//datos que usaremos en el estado del componente
interface Project {
  id: number;
  name: string;
  html_url: string;
  image_url: string;
  height: number;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null); // Estado de error

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
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
                  .substring(0, 2)}/200/300`,
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
      } 
    };
    fetchData();
  }, []);



  if (error) {
    return (
      <Layout>
        <h1 className="text-6xl font-[Ananda] text-sky-300 ">Proyectos</h1>
        <p className="text-2xl text-red-500">Error: {error}</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-8 p-4 md:py-12 md:p-8 ">
        <h1 className="text-4xl md:text-6xl font-[Ananda] text-sky-300 ">
          Proyectos
        </h1>
      </div>
      <Masonry data={projects} />
    </Layout>
  );
};

export default Projects;
