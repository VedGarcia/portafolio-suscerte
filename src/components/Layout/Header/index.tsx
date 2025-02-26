import { useState } from "react";
import { Link } from "react-router-dom";
import MenuMobile from "./MenuMobile";

const dataRoutes = [
  { to: "/", label: "VEd" },
  { to: "/about", label: "Sobre mí" },
  { to: "/projects", label: "Proyectos" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full h-14 flex justify-between font-[VictorMono-Light] absolute top-0 left-0 z-20">
      {isOpen ? (
        <MenuMobile
          routes={dataRoutes}
          isOpen={isOpen}
          onToggleMenu={toggleMenu} // Corregido el nombre de la prop
        />
      ) : (
        <button className="p-4 md:hidden" onClick={toggleMenu}>
          {/* Usamos toggleMenu aqui tambien para que el boton cierre el menu */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>
      )}
      <nav className="hidden md:flex w-full h-full items-baseline container mx-auto">
        <ol className="w-full h-full flex justify-evenly items-baseline p-4">
          {dataRoutes.map((e) => (
            <li
              key={e.to}
              className={`text-lg text-amber-200 hover:text-sky-300`}
            >
              <Link to={e.to}>{e.label}</Link>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
};

export default Header;