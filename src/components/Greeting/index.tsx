import { ReactTyped } from "react-typed";


const Greeting = () => {
  return (
    <section className="h-[90vh] w-full flex flex-col justify-end items-start p-12">
     
      <div className="w-full relative z-10" >
        <p className="text-5xl text-amber-200 font-[Ananda]">Hola! Soy</p>
       
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
