import { createBrowserRouter } from "react-router-dom";
import Privacy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";
import Profile from "../pages/Profile";
import Platform from "../pages/Platform";
import Store from "../pages/Store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Platform />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/platform",
    element: <Platform />,
  },
  {
    path: "/store",
    element: <Store />,
  },
]);

export default router;
