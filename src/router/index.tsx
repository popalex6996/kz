import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import Layout from '../layouts';
import Account from '../pages/Account';
import Cart from '../pages/Cart';
import Category from '../pages/Category';
import Contacts from '../pages/Contacts';
import Exchange from '../pages/Exchange';
import Home from '../pages/Home';
import Payment from '../pages/Payment';
import Platform from '../pages/Platform';
import Privacy from '../pages/PrivacyPolicy';
import Product from '../pages/Product';
import Terms from '../pages/Terms';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '*',
        element: <p>Path not resolved</p>,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'payment',
        element: <Payment />,
      },
      {
        path: 'exchange',
        element: <Exchange />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: 'privacy',
        element: <Privacy />,
      },
      {
        path: 'terms',
        element: <Terms />,
      },
      {
        path: 'platform',
        element: <Platform />,
      },
      {
        path: 'account/:tab',
        element: <Account />,
      },
      {
        path: 'category/:categoryId',
        element: <Category />,
      },
      {
        path: 'category/:categoryId/sub-category/:subCategoryId',
        element: <Category />,
      },
      {
        path: 'category/:categoryId/sub-category/:subCategoryId/product/:productId',
        element: <Product />,
      },
    ],
  },
]);

export default router;
