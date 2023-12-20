import { createBrowserRouter } from "react-router-dom";
import Privacy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
]);

export default router;
