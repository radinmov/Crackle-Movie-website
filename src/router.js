import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/HomePage";
// import Movies from "./Pages/Movies";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
//   {
//     path: "/item/:id",
//     element: <SingleMovie />,
//   },
//   {
//     path: "/movies",
//     element: <Movies />,
//   },
]);

export default function Router() {
  return <RouterProvider router={routes} />;
}
