import { createBrowserRouter  , RouterProvider } from "react-router-dom";
import Homepage from "./Pages/HomePage";





const routes = createBrowserRouter(
[
    {
        path:"/",
        element:<Homepage/> ,
    } 
]);

export default function Router() {
    return <RouterProvider router={routes} />;
}