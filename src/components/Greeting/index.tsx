import { ReactTyped } from "react-typed";
import Threads from "./Threads";


const Greeting = () => {
  return (
    <section className="h-[90vh] w-full flex flex-col justify-end items-start p-12">
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
      <div className="w-full relative z-10" >
        <p className="text-5xl text-amber-200 font-[Ananda]">Hola! Soy</p>
        {/* <ReactTyped
        strings={[ "Aunque me conocen por Eduardo...",
        "dejemoslo en..."]}
        typeSpeed={40}
        backSpeed={10}
        className="text-2xl text-amber-200 font-[VictorMono-Light]"
        /> */}
        <ReactTyped
          strings={["VEd", "Víctor García", "VEd", "Víctor García", "VEd"]}
          typeSpeed={100}
          backSpeed={50}
          className="text-9xl text-sky-300 font-[VictorMono-Bold] relative z-10"
        />

        <p className="text-6xl text-amber-200 font-[VictorMono-Light]">
          Desarrollador <span className="text-white font-[Ananda]">Web</span>
        </p>
      </div>
    </section>
  );
};

export default Greeting;
