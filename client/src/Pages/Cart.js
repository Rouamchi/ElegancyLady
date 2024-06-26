import React, { useState, useEffect, createRef } from 'react';
import Header from "../Components/Header";
import Footer from '../Components/Footer';
import { Link } from "react-router-dom";
import ToTopButton from '../Components/ToTopButton';
import { createFileName, useScreenshot } from 'use-react-screenshot';
import SectionProducts from "../Components/SectionProducts";
import { useCart } from '../Pages/CartContext';
import { useFavorites } from '../Pages/FavoritesContext';
import FavoriteAlert from "../Components/FavoriteAlert";



const Cart = () => {
  const [showAlert2, setShowAlert2] = useState(false);
  const [buttonText, setButtonText] = useState("Add To Favorites");
  const changeText = (text) => setButtonText(text);
  const { cart, removeFromCart, updateCartQuantity } = useCart();
  const { addToFavorites } = useFavorites();
  const [image, takeScreenshot] = useScreenshot({
    type: 'image/png',
    quality: 1.0
  });
  console.log(image)

  const download = (image, { name = 'ScreenshotElegancyLady', extension = 'png' } = {}) => {
    const a = document.createElement('a');
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const ref = createRef(null);
  const DownloadScreenShot = () => {
    takeScreenshot(ref.current).then(download);
  };

  const handleAddToFavorites = () => {
      setButtonText("Saved!");
      setShowAlert2(true);
      setTimeout(() => setShowAlert2(false), 4000);
  };


  useEffect(() => {
    fetch('https://elegancyladyserver.onrender.com/products')
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
        window.scrollTo(0, 0);
      });
  }, []);

  const handleQuantityChange = (productId, newQuantity) => {
    updateCartQuantity(productId, newQuantity);
  };

  // Calculate the global total
  const globalTotal = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);

  return (
    <>
      <div>
        <Header />
        <main>
          <div className="bg-gray-100">
            <div className="mb-8">
              <SectionProducts />
            </div>
            <div>
              {showAlert2 && <FavoriteAlert />}
            </div>
            <div ref={ref} className="overflow-hidden w-full min-h-screen bg-gray-100 flex flex-col">
              <div className="block">
                <div>
                  <ul>
                    {cart.length === 0 ? (
                      <p className="text-center text-2xl">Your Cart is Empty</p>
                    ) : (
                      cart.map((singleProduct) => (
                        <div key={singleProduct._id} className="md:h-60 bg-gray-100 pt-4 md:pt-1 w-full">
                          <div className="md:flex justify-between md:mx-20 w-auto px-6 md:space-x-32 xl:px-0">
                            <div className="rounded-lg md:w-3/4">
                              <div className="justify-between mb-6 rounded-lg bg-white p-3 shadow-md sm:flex sm:justify-start">
                                <img
                                  alt={singleProduct.imageAlt}
                                  src={singleProduct.imageSrc}
                                  className="w-full rounded-lg sm:w-40"
                                />
                                <div className="ml-4 sm:flex sm:w-full sm:justify-between">
                                  <div className="mt-5 sm:mt-0">
                                    <h2 className="text-lg mt-5 font-bold text-gray-900 md:pl-4">
                                      {singleProduct.name}
                                    </h2>
                                    <p className="text-base font-medium leading-3 text-gray-600  pt-2 md:pl-4">
                                      {singleProduct.name}, 100% authentique
                                    </p>
                                    <p className="w-96 text-base font-medium mt-5 leading-3 text-gray-600 md:pl-4">
                                      Quantity: {singleProduct.countInStock > 0 ? (<>{singleProduct.countInStock}</>) : "0"}
                                    </p>
                                    <p className="text-base font-medium mt-2 leading-3 text-gray-700 py-3 md:pl-4">
                                      Price: {singleProduct.price} DH
                                    </p>
                                    <div className="flex items-center justify-between pt-3 pb-4 md:pt-5 md:pb-0">
                                      <div className="flex items-center md:pl-4">
                                        <button onClick={() => {handleAddToFavorites(); changeText("Saved"); addToFavorites(singleProduct); }}
                                          className="flex text-md font-bold leading-3 text-amber-400 hover:text-amber-500 cursor-pointer md:-mt-1">
                                          {buttonText}
                                          {/* <svg className="ml-1 h-5 w-5" fill="orange" height="24" viewBox="10 2 28 58" width="24">
                                            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                                          </svg> */}
                                        </button>
                                        <button key={singleProduct._id} onClick={() => removeFromCart(singleProduct._id)}
                                          type="submit" className="text-sm leading-3 text-md font-bold text-red-600 hover:text-red-500 pl-5 cursor-pointer">
                                          Delete
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="trash mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                    <div className="flex items-center space-x-4">
                                      <button key={singleProduct._id} onClick={() => removeFromCart(singleProduct._id)}>
                                        <svg className="h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Sub total */}
                            <div className="mb-10 mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:-mt-1 md:w-1/3">
                              <div className='block md:flex'>
                                <div className="mb-2 md:mr-16 flex justify-between">
                                  <p className="text-gray-700 font-medium">Price :</p>
                                  <p className="text-gray-700">{singleProduct.price}DH</p>
                                </div>
                                <div className="flex justify-between">
                                  <p className="text-gray-700 font-medium">Shipping :</p>
                                  <p className="text-gray-700">Free</p>
                                </div>
                              </div>
                              <div className='block md:flex'>
                                <div className="mt-2 md:mr-14 flex justify-between">
                                  <p className="text-gray-700 font-medium">Status :</p>
                                  <p className="text-gray-700">{singleProduct.countInStock > 0 ? "In Stock" : "Out Of Stock"}</p>
                                </div>
                                <div className="mt-2 flex justify-between">
                                  <p className="text-gray-700 font-medium">Quantity :</p>
                                  {singleProduct.countInStock > 0 ? (
                                    <select
                                      key={singleProduct._id}
                                      className="bg-white text-gray-700"
                                      value={singleProduct.quantity}
                                      onChange={(e) => handleQuantityChange(singleProduct._id, Number(e.target.value))}
                                    >
                                      {[...Array(singleProduct.countInStock).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                          {x + 1}
                                        </option>
                                      ))}
                                    </select>
                                  ) : "0"}
                                </div>
                              </div>
                              <hr className="my-4" />
                              <div className="flex justify-between text-gray-700">
                                <p className="text-lg font-bold">Total</p>
                                <div className="">
                                  <p key={singleProduct._id} className="mb-1 text-lg font-bold">{singleProduct.price * singleProduct.quantity} DH</p>
                                </div>
                              </div>
                              <Link to="/CheckOut">
                                <button onClick={DownloadScreenShot} disabled={singleProduct.countInStock === 0}
                                  className="mt-3 w-full rounded-md bg-amber-400 py-1.5 font-medium text-blue-50 hover:bg-black">
                                  Check Out
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </ul>
                </div>
              </div>
              {/* Display Total for all products in the cart */}
              <div className="flex justify-center md:justify-end md:mr-20">
                <button className="md:mt-6 mb-4 rounded-md bg-white py-2 px-24 font-medium text-gray-700 shadow-md">
                  Global Total: {globalTotal} DH
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
        <ToTopButton className="fixed" />
      </div>
    </>
  );
}

export default Cart;
