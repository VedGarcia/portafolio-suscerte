import { BrowserRouter as Router, Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="w-full h-14 flex justify-between font-[VictorMono-Light] absolute top-0 left-0 z-20">
      <nav className="w-full h-full flex items-baseline container mx-auto">
        <ol className="w-full h-full flex justify-evenly items-baseline p-4">
          {dataRoutes.map((e) => (
              <li key={e.to} className={`text-lg text-amber-200 hover:text-sky-300`}>
                <Link to={e.to}>{e.label}</Link>
              </li>
          ))}
        </ol>
      </nav>
    </header>
  );
};

export default Header;

const dataRoutes = [
  { to: "/", label: "VEd" },
  { to: "/about", label: "Sobre mí" },
  { to: "/projects", label: "Proyectos" },
];
