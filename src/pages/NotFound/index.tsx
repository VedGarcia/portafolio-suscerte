import Layout from "../../components/Layout";

const NotFound: React.FC = () => {
  return (
    <Layout>
        <div className="grid place-content-center h-screen">

        <span className="text-8xl text-amber-200">404</span>
      <h1 className="text-4xl text-amber-200">Not Found</h1>
        </div>
    </Layout>
  );
}

export default NotFound;