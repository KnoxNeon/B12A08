import { createBrowserRouter } from "react-router";
import Apps from "../Pages/Apps";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import Home from "../Components/Home";
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
            element: <div><Hero /> <Banner/> <Home/></div> 
        },
        {
            path: "/installation",
            element: <div><Installation/></div> 
        },
    ]
    
  },
 
]);


