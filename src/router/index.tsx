import { createBrowserRouter } from "react-router-dom";
import Privacy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";
import Profile from "../pages/Profile";
import Platform from "../pages/Platform";
import Store from "../pages/Store";
import Home from "../pages/Home";
import Payment from "../pages/Payment";
import Exchange from "../pages/Exchange";
import Cart from "../pages/Cart";
import Contacts from "../pages/Contacts";
import Layout from "../layouts";
import Category from "../pages/Category";
import Product from "../pages/Product";
import SubCategory from "../pages/SubCategory";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "exchange",
        element: <Exchange />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "platform",
        element: <Platform />,
      },
      {
        path: "store",
        element: <Store />,
      },
      {
        path: "category/:category",
        element: <Category />,
      },
      {
        path: "/category/:category/sub-category/:subCategory",
        element: <SubCategory />,
      },
      {
        path: "/category/:category/sub-category/:subCategory/product/:productId",
        element: <Product />,
      },
    ],
  },
]);

export default router;
