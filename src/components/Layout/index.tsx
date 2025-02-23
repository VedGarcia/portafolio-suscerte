interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="w-full min-h-screen bg-stone-900 text-white"> 
      <section className="container mx-auto">{children}</section>
    </main>
  );
};

export default Layout;
