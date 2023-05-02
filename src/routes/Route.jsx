import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

import Catagory from "../pages/Home/Catagory/Catagory";
import NewaLayout from "../layout/NewaLayout";
import News from "../pages/News/News";


import LogInLayOut from "../layout/LogInLayOut";
import LogIn from "../pages/LogIn/Login/LogIn";
import Register from "../pages/LogIn/Register/Register";
import PrivateRoutes from "./PrivateRoutes";



const router = createBrowserRouter([
    {
        path: '/',
        element: <LogInLayOut></LogInLayOut>,
        children: [
            {
                path: '/',
                element: <Navigate to="/catagory/0"></Navigate>
            },
            {
                path: "login",
                element: <LogIn></LogIn>
            },
            {
                path: "register",
                element: <Register></Register>
            },
        ]
    },
    {
        path: "catagory",
        element: <Main></Main>,

        children: [
            // {
            //     path: "/",
            //     element: <Catagory></Catagory>,
            //     loader: () => fetch(`http://localhost:5000/news`)

            // },
            {
                path: ':id',
                element: <Catagory></Catagory>,
                loader: ({ params }) => fetch(`http://localhost:5000/catagories/${params.id}`)
            },



        ],
    },
    {
        path: 'news',
        element: <NewaLayout></NewaLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoutes><News></News></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
        ]
    }
]);

export default router;