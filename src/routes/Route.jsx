import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import SingUp from "../pages/SingUp/SingUp";
import Login from "../pages/Login/Login";
import Dashboard from "../layout/Dashboard";
import ApplyDonation from "../components/ApplyDonation/ApplyDonation";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import ManageUser from "../components/admin/ManageUser/ManageUser";
import ManageDonar from "../components/admin/ManageDonar/ManageDonar";

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
    },
    {
       
        path:"/dashboard",
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:"applydonation",
                element:<ApplyDonation></ApplyDonation>
                
            },

            // admin dashboard 
            {
                path:"manageuser",
                element:<ManageUser></ManageUser>
            },
            {
                path:"managedonar",
                element:<ManageDonar></ManageDonar>
            }
        ]
    }
])
export default router