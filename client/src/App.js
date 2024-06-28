import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import AuthContext from './Pages/AuthContext'


export default function App() {


  return (
    <>
      <div>
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/home' exact element={<Home />} />
          <Route path='/Products' exact element={<Products />} />
          <Route path='/CreateProduct' exact element={<CreateProduct />} />
          <Route path='/AboutUs' exact element={<AboutUs />} />
          <Route path='/SignIn' exact element={<SignIn />} />
          <Route path='/SignOut' exact element={<SignOut />} />
          <Route path='/Registration' exact element={<Registration />} />
          <Route path='/ProductDetails/:id' exact element={<ProductDetails />} />
          <Route path='/Cart' exact element={<Cart />} />
          <Route path='elegancyladydiastore.onrender.com/Cart' exact element={<Cart />} />
          <Route path='/CheckOut' exact element={<CheckOut />} />
          <Route path='/Favorites/:id?' exact element={<Favorites/>} />
          <Route path='/CreateProduct' exact element={<Create />} />
          <Route path='/AuthContext' exact element={<AuthContext />} />
        </Routes>
      </div>
    </>

  )
}
