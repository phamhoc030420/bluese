import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import Philosophy from "../pages/philosophy/Philosophy";
import Service from "../pages/service/Service";
import News from "../pages/news/News";
import Contact from "../pages/contact/Contact";
import NewDetail from "../pages/news/newDetail/NewDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/philosophy",
    element: <Philosophy />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/news/:name",
    element: <NewDetail />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
