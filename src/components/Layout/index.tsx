import Header from "./Header";
import Threads from "../ui/Threads";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="w-full min-h-screen bg-stone-900 text-white pt-12 relative">
      <div className="absolute w-full h-screen top-0 left-0 overflow-hidden">
             <div className="absolute top-0 -left-20 w-[150vw] h-full z-0 rotate-20">
               {/* Esta animacion se desborda! por ello se coloco doble contenedor para poder estilar de forma correcta */}
               <Threads
                 amplitude={2}
                 distance={0.5}
                 enableMouseInteraction={false}
               />
             </div>
           </div>
      <Header />
      <section className="container mx-auto">{children}</section>
    </main>
  );
};

export default Layout;
