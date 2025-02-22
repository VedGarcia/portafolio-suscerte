interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="w-screen h-screen bg-stone-900 text-white overflow-hidden relative -z-20">
      <section className="container mx-auto">{children}</section>
    </main>
  );
};

export default Layout;
