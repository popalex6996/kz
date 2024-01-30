import { createBrowserRouter } from "react-router-dom";
import Privacy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";
import Platform from "../pages/Platform";
import Home from "../pages/Home";
import Payment from "../pages/Payment";
import Exchange from "../pages/Exchange";
import Cart from "../pages/Cart";
import Contacts from "../pages/Contacts";
import Layout from "../layouts";
import Category from "../pages/Category";
import Product from "../pages/Product";
import Account from "../pages/Account";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <p>Path not resolved</p>,
      },
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
        path: "platform",
        element: <Platform />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "category/:categoryId",
        element: <Category />,
      },
      {
        path: "category/:categoryId/sub-category/:subCategoryId",
        element: <Category />,
      },
      {
        path: "category/:categoryId/sub-category/:subCategoryId/product/:productId",
        element: <Product />,
      },
    ],
  },
]);

export default router;
