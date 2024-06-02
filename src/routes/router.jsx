import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Error from "../pages/error";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    errorElement:<Error/>
  },
]);

export default router;
