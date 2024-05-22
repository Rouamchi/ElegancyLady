
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import SignIn from './Pages/SignIn';
import Registration from './Pages/Registration';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import CheckOut from './Pages/CheckOut';
import Favorites from './Pages/Favorites';
import Create from './Pages/CreateProduct';
import CreateProduct from './Pages/CreateProduct'


export default function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/home' exact element={<Home />} />
          <Route path='/Products' exact element={<Products />} />
          <Route path='/CreateProduct' exact element={<CreateProduct />} />
          <Route path='/SignIn' exact element={<SignIn />} />
          <Route path='/Registration' exact element={<Registration />} />
          <Route path='/ProductDetails/:id' exact element={<ProductDetails />} />
          <Route path='/Cart' exact element={<Cart />} />
          <Route path='/CheckOut' exact element={<CheckOut />} />
          <Route path='/Favorites/:id?' exact element={<Favorites/>} />
          <Route path='/CreateProduct' exact element={<Create />} />

        </Routes>
      </div>
    </>

  )
}
