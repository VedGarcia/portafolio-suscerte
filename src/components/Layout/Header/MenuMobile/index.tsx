interface RouteItem {
  to: string;
  label: string;
}

interface MenuMobileProps extends React.PropsWithChildren {
  routes: RouteItem[];
  isOpen: boolean;
  onToggleMenu: () => void;
}

const MenuMobile: React.FC<MenuMobileProps> = ({ routes, isOpen, onToggleMenu }) => {
  if (!isOpen) {
    return null; 
  }

  return (
    <section className="w-full h-screen bg-amber-900/40 absolute top-0 left-0 z-40 flex-row-reverse" onClick={onToggleMenu}>
      <div className="w-3/5 h-full bg-stone-800 absolute top-0 right-0 py-12 z-50" >
        <button className="absolute top-2 right-2 p-2 text-amber-200" onClick={onToggleMenu}>
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        {routes.map((route, index) => (
          <a key={index} href={route.to} className="block p-4 text-sky-300">
            {route.label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default MenuMobile;
