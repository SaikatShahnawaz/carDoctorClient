import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home/Home";
import Main from "../Layouts/Mains";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";
import Checkout from "../pages/Checkout/Checkout";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";





const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/checkout/:id',
          element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`) 
        },
        {
          path:'/bookings',
          element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
       
      ]
    }
  ]);

export default router;