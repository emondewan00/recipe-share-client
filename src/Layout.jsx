import { Outlet } from "react-router-dom";
import NavBar from "./components/shared/NavBar";
import Footer from "./components/shared/Footer";

const Layout = () => {
  return (
    <main>
      <NavBar />
      <div className="container mx-auto ">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
