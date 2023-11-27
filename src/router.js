import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/HomePage";
// import Movies from "./Pages/Movies";
import SingleMovie from "./Pages/SingleMovies";
import NotFound from "./Pages/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/item/:id",
    element: <SingleMovie />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  // {
  //   path: "/movies",
  //   element: <Movies />,
  // },
]);

export default function Router() {
  return <RouterProvider router={routes} />;
}
