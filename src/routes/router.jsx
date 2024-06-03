import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Error from "../pages/error";
import Home from "../pages/home";
import Product from "../pages/product";
import About from "../pages/About";
import Conatct from "../pages/conatct";
import Login from "../pages/login";
import Register from "../pages/register";
import ProductDetails from "../pages/productDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/product',
        element:<Product/>
      },
      {
        path:'/product/:id',
        element:<ProductDetails/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Conatct/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
    ]
  },
]);

export default router;
