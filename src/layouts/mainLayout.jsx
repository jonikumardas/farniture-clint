import { Outlet } from "react-router-dom";
import Footer from "../pages/footer";
import Navber from "../pages/navber";
import Home from "../pages/home";

const MainLayout = () => {
  return (
    <>
      <Navber />
      <Home/>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
