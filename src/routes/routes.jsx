import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Homepage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import Profile from "../pages/Career";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import CategoryNews from "../pages/CategoryNews";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout/>,
        children: [
            {
                index: true,
                element:<Homepage/>
            },
            {
                path: '/about_us',
                element:<AboutUs/>
            },
            {
                path:"/career",
                element:<Profile/>
            },
            {
                path:"/signup",
                element:<Signup/>
            },
            {
                path:"/signin",
                element: <Login/>
            },
            {
                path: "/category/:id",
                element: <CategoryNews/>
            }
            
        ]
    }
])

export default router