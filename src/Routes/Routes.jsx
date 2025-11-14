import { createBrowserRouter } from "react-router";
import Apps from "../Pages/Apps";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";

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
            element: <div><Hero /> <Banner/></div> 
        },
    ]
    
  },
 
]);


