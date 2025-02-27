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
    <header className="w-full h-12 flex flex-row-reverse font-[VictorMono-Light] fixed top-0 left-0 z-20  md:justify-between md:w-full">
      {isOpen ? (
        <MenuMobile
          routes={dataRoutes}
          isOpen={isOpen}
          onToggleMenu={toggleMenu}
        />
      ) : (
        <button className="p-2 md:hidden text-amber-200" onClick={toggleMenu}>
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