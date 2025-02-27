import Header from "./Header";
import Threads from "../ui/Threads";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="w-full min-h-screen bg-stone-900 overflow-hidden">
     <Header />
      <div className="absolute w-full md:w-full h-1/2 md:h-full bottom-0 md:top-0 left-0 overflow-hidden z-0 ">
        <div className="absolute top-0 md:-left-20 w-full md:w-[150vw] h-full z-0  md:rotate-20">
          <Threads
            amplitude={2}
            distance={0.5}
            enableMouseInteraction={false}
          />
        </div>
      </div>
      <section className="container mx-auto">{children}</section>
    </main>
  );
};

export default Layout;

{
  /* 
   <main className="w-full min-h-screen bg-stone-900 text-white pt-12">
      <Header />
      <div className="absolute w-full md:w-screen h-1/3 md:h-screen bottom-0 md:top-0 left-0 overflow-hidden rotate- md:rotate-0 ">
        <div className="absolute top-0 md:-left-20 w-full md:w-[150vw] h-full z-0  md:rotate-20">
          // Esta animacion se desborda! por ello se coloco doble contenedor para poder estilar de forma correcta 
          <Threads
            amplitude={2}
            distance={0.5}
            enableMouseInteraction={false}
          />
        </div>
      </div>
      <section className="container mx-auto">{children}</section>
    </main>
  
  
  */
}
