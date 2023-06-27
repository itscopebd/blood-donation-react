import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import SingUp from "../pages/SingUp/SingUp";
import Login from "../pages/Login/Login";

const router= createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:"/singup",
                element:<SingUp></SingUp>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ]
    }
])
export default router