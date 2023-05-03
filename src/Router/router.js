import {createBrowserRouter} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Component/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ChefDetails from "../Component/ChefDetails/ChefDetails";

const router =createBrowserRouter([
    {
       path:'/', 
       element:<Main></Main>,
       
       children:([
        {
            path:'/',
            element:<Home></Home>,
            
            
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
            path:'/chef/:id',
            element:<ChefDetails></ChefDetails>,
            loader:({params})=>fetch(`http://localhost:4000/chef/${params.id}`)
        }
       
       ])
    },
   
   
])

export default router;