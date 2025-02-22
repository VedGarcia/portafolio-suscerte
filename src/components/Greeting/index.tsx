import { ReactTyped } from "react-typed";
import Threads from "./Threads";

const Greeting = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-end items-start p-12">
      <div className="absolute top-0 -left-20 w-[150vw] h-full -z-10 rotate-20">
        <Threads amplitude={2} distance={0.5} enableMouseInteraction={false} />
      </div>
      <p className="text-5xl text-amber-200 font-[Ananda]">Hola! Soy</p>
      {/* <ReactTyped
        strings={[ "Aunque me conocen por Eduardo...",
          "dejemoslo en..."]}
        typeSpeed={40}
        backSpeed={10}
        className="text-2xl text-amber-200 font-[VictorMono-Light]"
      /> */}
      <ReactTyped
        strings={["Víctor García", "VEd"]}
        typeSpeed={100}
        backSpeed={50}
        className="text-9xl text-sky-300 font-[VictorMono-Bold]"
      />

      <p className="text-6xl text-amber-200 font-[VictorMono-Light]">
        Desarrollador <span className="text-white font-[Ananda]">Web</span>
      </p>
    </section>
  );
};

export default Greeting;
