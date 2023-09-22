import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // children: [
    //   {
    //     index: true,
    //     element: <Home />,
    //   },
    //   {
    //     path: "volunteer-form",
    //     element: <VolunteerForm />,
    //   },
    //   {
    //     path: "volunteers",
    //     element: <Volunteers />,
    //   },
    //   {
    //     path: "whysme",
    //     element: <WhySME />,
    //   },
    // ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;