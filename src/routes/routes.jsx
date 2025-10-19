import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Homepage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import Profile from "../pages/Career";
import Login from "../pages/Login";
import CategoryNews from "../pages/CategoryNews";
import Register from "../pages/Register";
import AuthLayout from "../layout/AuthLayout";


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
                path: "/category/:id",
                element: <CategoryNews/>,
                loader: () => fetch('../news.json')
            }
            
        ],
    },
    {
        path: '/auth',
        element: <AuthLayout/>,
        children: [
            {
                path:"/auth/login",
                element: <Login/>
            },
            {
                path:"/auth/register",
                element:<Register/>
            }

        ]
    }
])

export default router