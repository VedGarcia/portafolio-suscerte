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
    return null; // No renderizar si isOpen es false
  }

  return (
    <section className="w-full h-screen bg-stone-900 absolute top-0 left-0 z-40">
      <div>
        <button className="absolute top-4 right-4 p-4" onClick={onToggleMenu}>
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
          <a key={index} href={route.to} className="block p-4 text-white">
            {route.label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default MenuMobile;
