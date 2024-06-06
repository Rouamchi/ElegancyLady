import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'
import Home from './Pages/Home';
import Products from './Pages/Products';
import SignIn from './Pages/SignIn';
import SignOut from './Pages/SignOut';
import Registration from './Pages/Registration';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import CheckOut from './Pages/CheckOut';
import Favorites from './Pages/Favorites';
import Create from './Pages/CreateProduct';
import CreateProduct from './Pages/CreateProduct'
import AboutUs from './Pages/AboutUs'
import { AuthContext, AuthProvider } from "./Pages/AuthContext";


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
    path: "/SignOut",
    element: <SignOut />,
  },
  {
    path: "/Registration",
    element: <Registration />,
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
    element: <Cart />,
  },
  {
    path: "/Favorites/:id?",
    element: <Favorites />,
  },
  {
    path: "/CreateProduct",
    element: <Create />,
  },
  {
    path: "/AboutUs",
    element: <AboutUs />,
  },
  {
    path: "/AuthContext",
    element: <AuthContext />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </AuthProvider>
);
