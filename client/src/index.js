import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'
import Home from './Pages/Home';
import Products from './Pages/Products';
import SignIn from './Pages/SignIn';
import Registration from './Pages/Registration';
import NextRegistration from './Pages/NextRegistration'
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import CheckOut from './Pages/CheckOut';
import Favorites from './Pages/Favorites';
import Categories from './Pages/Categories';
import CreateProduct from './Pages/CreateProduct'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Sorry, Page not found</h1>
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/Products",
    element: <Products />,
  },
  {
    path: "/CreateProduct",
    element: <CreateProduct />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/Registration",
    element: <Registration />,
  },
  {
    path: "/NextRegistration",
    element: <NextRegistration />,
  },
  {
    path: "/ProductDetails/:id",
    element: <ProductDetails />,
  },
  {
    path: "/CheckOut",
    element: <CheckOut />,
  },
  {
    path: "/Cart",
    element: <Cart/>,
  },
  {
    path: "/Favorites/:id?",
    element: <Favorites />,
  },
  {
    path: "/Categories",
    element: <Categories />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <RouterProvider router={router} />
  </Provider>
);
