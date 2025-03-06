import { ReactTyped } from "react-typed";


const Greeting = () => {
  return (
    <section className="h-[90vh] w-full flex flex-col justify-center md:justify-end items-start p-8 md:p-12 relative">
     
      <div className="w-full relative z-10" >
        <p className="text-xl md:text-5xl text-amber-200 font-[Ananda]">Hola! Soy</p>
       
        <ReactTyped
          strings={["VEd", "Víctor García", "VEd", "Víctor García", "VEd"]}
          typeSpeed={100}
          backSpeed={50}
          className="text-3xl md:text-9xl text-sky-300 font-[VictorMono-Bold] relative z-10"
        />

        <p className="text-xl md:text-6xl text-amber-200 font-[VictorMono-Light]">
          Desarrollador <span className="text-white font-[Ananda]">Web</span>
        </p>
      </div>
    </section>
  );
};

export default Greeting;
