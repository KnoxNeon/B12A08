import { createBrowserRouter } from "react-router";
import Apps from "../Pages/Apps";
import MainLayout from "../Layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
        {
            path: "/apps",
            element: <Apps />,
        },

    ]
  },
 
]);


