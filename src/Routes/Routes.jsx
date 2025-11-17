import { createBrowserRouter } from "react-router";
import Apps from "../Pages/Apps";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Installation from "../Pages/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            path: "/apps",
            element: <Apps />,
        },
        {
            path: "/",
            element: <Home/> 
        },
        {
            path: "/installation",
            element: <Installation/>
        },
    ]
    
  },
 
]);


