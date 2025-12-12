import { createBrowserRouter } from "react-router";
import Apps from "../Pages/Apps";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
import LoadingSpinner from "../Components/LoadingSpinner";
import AppError from "../Pages/AppError";

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
        {
            path: "/app/:id",
            element: <AppDetails/>,
            errorElement: <AppError/>
        },
    ]
    
  },
 
]);


