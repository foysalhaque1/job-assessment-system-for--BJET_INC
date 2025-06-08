import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Mainlayout from "../Pages/Mainlayout/Mainlayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/register",
                element: <Register></Register>
            },
        ]
    }
])