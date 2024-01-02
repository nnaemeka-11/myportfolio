import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    index: true,
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "portfolio",
    element: <Portfolio />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
//   {
//     path: "*",
//     element: <NotFound />,
//   },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;