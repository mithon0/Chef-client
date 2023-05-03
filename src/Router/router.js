import {Navigate, createBrowserRouter} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Component/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ChefDetails from "../Component/ChefDetails/ChefDetails";
import PrivateRoute from "../PriveteRouter/PrivateRoute";
import Error from "../Pages/Error/Error";
import Blog from "../Blog/Blog";

const router =createBrowserRouter([
    {
       path:'/', 
       element:<Main></Main>,
       errorElement:<Error></Error>,
       
       children:([
        {
            path:'/',
            element:<Home></Home>
            
            
        },
        {
            path:'/login',
            element:<Login></Login>,
            
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'chef/:id',
            element:<PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
            loader:({params})=>fetch(`https://chef-server-site-mithon0.vercel.app/chef/${params.id}`)
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        }
       
       ])
    },
   
   
])

export default router;