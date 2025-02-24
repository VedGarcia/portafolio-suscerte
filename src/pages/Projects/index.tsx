import { useEffect, useState } from "react";
import getProjects from "../../services/get_projects";
import Layout from "../../components/Layout";
import Masonry from "../../components/ui/Masonry";

interface Project {
  id: number;
  name: string;
  html_url: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    getProjects.getAll().then((response) => {
      setProjects(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <Layout>
      <h1 className="text-6xl font-[Ananda] text-sky-300 pt-8">Proyectos</h1>
      <section className="container mx-auto grid grid-cols-5 gap-4 p-8">
        {projects.map((project) => (
          <div key={project.id}>
            <a href={project.html_url} target="_blank">
              {project.name}
            </a>
          </div>
        ))}
      </section>

      <Masonry data={data} />
    </Layout>
  );
};

export default Projects;

const data = [
  { id: 1, image: "https://picsum.photos/id/10/200/300", height: 400 },
  { id: 2, image: "https://picsum.photos/id/14/200/300", height: 360 },
  { id: 3, image: "https://picsum.photos/id/15/200/300", height: 450 },
  { id: 4, image: "https://picsum.photos/id/16/200/300", height: 350 },
  { id: 5, image: "https://picsum.photos/id/17/200/300", height: 370 },
  { id: 6, image: "https://picsum.photos/id/19/200/300", height: 350 },
  { id: 7, image: "https://picsum.photos/id/37/200/300", height: 350 },
  { id: 8, image: "https://picsum.photos/id/39/200/300", height: 500 },
  { id: 9, image: "https://picsum.photos/id/85/200/300", height: 400 },
  { id: 10, image: "https://picsum.photos/id/103/200/300", height: 400 },
];
