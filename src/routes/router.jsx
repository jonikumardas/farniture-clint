import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Error from "../pages/error";
import Home from "../pages/home";
import Product from "../pages/product";
import About from "../pages/About";
import Conatct from "../pages/conatct";
import Login from "../pages/login";
import Register from "../conponents/register";
import ProductDetails from "../pages/productDetails";
// import Deshboard from "../layouts/deshboardLayout";
import DeshboardLayout from "../layouts/deshboardLayout";
import Profile from "../pages/profile";
import Deshboard from "../pages/deshboard";
import UpdateProfile from "../conponents/deshboard/update";
import Addproduct from "../conponents/deshboard/product/Addproduct";
import ManageProduct from "../pages/manageProduct";
// import UpdateProfile from "../conponents/deshboard/update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Conatct />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/deshboard/",
    element: <DeshboardLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Deshboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "update-profile/:email",
        element: <UpdateProfile />,
      },
      {
        path: "manage-product",
        element: <ManageProduct />,
      },
      {
        path: "add-product",
        element: <Addproduct/>,
      },
      {
        path: "update-product",
        element: <h1>update product</h1>,
      },
    ],
  },
  
]);

export default router;
