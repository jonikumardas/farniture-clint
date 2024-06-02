import { Outlet } from "react-router-dom";
import Footer from "../pages/footer";
import Navber from "../pages/navber";

const MainLayout = () => {
  return (
    <>
      <Navber />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
