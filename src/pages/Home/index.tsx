import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../../components/Layout";
import Greeting from "../../components/Greeting";

const Home: React.FC = () => {
  return (
    <Layout>
      <Greeting />
      <section className="w-full h-screen relative mt-28">
      <motion.div
      initial={{ x: -100 , width: 0 }}
      whileInView={{ x : 0, width: "100%" }}
      transition={{ duration: 2 }}
      className="w-screen h-32  absolute top-0 left-0 backdrop-invert" />
        
        <h3 className="text-8xl my-16 p-2 text-sky-300 font-[Ananda] text-wrap ">
          Victor Ed. Garcia R.
        </h3>
    
        <motion.p 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-sm md:text-base lg:text-lg font-[VictorMono-Light] p-4 text-amber-200">
          Programador con experiencia en tecnologías front-end y habilidades de
          liderazgo en proyectos tecnológicos. Destacado por la coordinación y
          supervisión en la implementación de soluciones en la plataforma
          "Edúcate en Venezuela". Dedicado al desarrollo de aplicaciones y
          creación de recursos educativos en diversas tecnologías. Habilidades
          en programación con tecnologías como JavaScript, React, Next.js y
          TailwindCSS. Reconocido por mi adaptabilidad, liderazgo y enfoque en
          resultados.{" "}
          <Link
            to="/about"
            className="text-amber-100 hover:text-sky-300 cursor-pointer block w-full"
          >
            Saber más...
          </Link>
        </motion.p>
      </section>
    </Layout>
  );
};

export default Home;
