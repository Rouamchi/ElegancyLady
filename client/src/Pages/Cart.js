import React, { useState, useEffect } from 'react';
import Header from "../Components/Header";
import Footer from '../Components/Footer';
import { Link } from "react-router-dom";
import Logo1 from "../images/Logo1.png";
// import { useParams } from 'react-router-dom';
import ToTopButton from '../Components/ToTopButton';

const Cart = () => {
  // const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [buttonText, setButtonText] = useState("Add To Favorites");
  const [cart, setCart] = useState([])

  const changeText = (text) => setButtonText(text);

  const removeFromCart = (productId) => {
    const updatedProducts = products.filter(product => product._id !== productId);
    setProducts(updatedProducts);
  };

  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.map(product => ({
          ...product,
          quantity: 1
        })));
        setCart(data.filter(product => product.inCart));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateQuantity = (productId, newQuantity) => {
    const updatedProducts = products.map(product => {
      if (product._id === productId) {
        return {
          ...product,
          quantity: newQuantity
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  };
  return (
    <>
      <Header />
      <main>
        <div className="bg-gray-100">
          <section className="mt-0">
            <div
              className=" h-48 lg:h-64 overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://wallpaperaccess.com/full/318963.jpg")'
              }}>
              <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div className=" px-6 lg:px-10 max-w-xl lg:max-w-2xl">
                  <h2 className="text-xl lg:text-3xl text-white font-semibold  mt-4 lg:mt-0">PRODUCTS OF ELEGANCY LADY</h2>
                  <p className="mt-2 lg:text-lg text-gray-300">
                    A collection which is constantly renewed to satisfy you, and which is intended to be accessible to all!
                    Authentic, original & Luxe!
                  </p>
                  <Link to="/" className="flex items-center mt-1 lg:mt-4 px-3 py-2 bg:transparent text-white text-sm uppercase font-medium rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                    <span>Back To Home</span>
                    <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <img
              className=" mx-auto h-28 w-auto mt-4 mb-1 lg:mb-1"
              src={Logo1}
              alt="Your Company"
            />
          </section>
          <div onclick="checkoutHandler(false)"
            className="ml-8 lg:ml-24 lg:mb-2 mt-3 w-3/12 lg:w-1/12 rounded bg-black py-1 font-medium text-blue-50 hover:bg-amber-400">
            <Link to="/" className="flex ml-4 lg:ml-6 items-center mb-1 text-gray-100 hover:text-gray-100 dark:text-white cursor-pointer">
              Go Back
            </Link>
          </div>
          <div className="w-full min-h-screen bg-gray-100 flex flex-col">
            <div className="block" >
              <div>
                <ul>
                {/* {products.filter((singleProduct) => {
                    return (singleProduct.inCart === true)
                  }).map((singleProduct) => ( */}
                  {cart.map((singleProduct) => (
                    <>
                      <div className="lg:h-60 bg-gray-100 pt-4 lg:pt-1 w-full">
                        <div className="lg:flex justify-between lg:mx-20 w-auto px-6 md:flex lg:space-x-32 xl:px-0">
                          <div className="rounded-lg md:w-3/4">
                            <div className="justify-between mb-6 rounded-lg bg-white p-3 shadow-md sm:flex sm:justify-start">
                              <img
                                key={singleProduct._id}
                                alt={singleProduct.imageAlt}
                                src={singleProduct.imageSrc}
                                className="w-full rounded-lg sm:w-40"
                              />
                              <div className="ml-4 sm:flex sm:w-full sm:justify-between">
                                <div className="mt-5 sm:mt-0">
                                  <h2 className="text-lg font-bold text-gray-900 lg:pl-4">
                                    {singleProduct.name}
                                  </h2>
                                  <p className="text-sm leading-3 text-gray-600 dark:text-white pt-2 lg:pl-4">
                                    {singleProduct.name}, 100% authentique
                                  </p>
                                  <p className="text-sm leading-3 text-gray-600 dark:text-white py-4 lg:pl-4">
                                    Color: {singleProduct.color}
                                  </p>
                                  <p className="w-96 text-sm leading-3 text-gray-600 dark:text-white lg:pl-4">
                                    Quantity: {singleProduct.countInStock > 0 ? (<>{singleProduct.countInStock}</>) : "0"}
                                  </p>
                                  <p className="text-base font-medium leading-3 text-gray-700 dark:text-white py-4 lg:pl-4">
                                    Price: {singleProduct.price} DH
                                  </p>
                                  <div className="flex items-center justify-between pt-3 pb-4 lg:pt-5 lg:pb-0">
                                    <div className="flex itemms-center lg:pl-4">
                                      <button onClick={() => changeText("Saved")} className="flex text-md font-bold leading-3 text-amber-400 hover:text-amber-500 dark:text-white cursor-pointer lg:-mt-1">
                                        {buttonText} {singleProduct.inFavorites === true}
                                        <svg className="ml-1 h-5 w-5" fill="orange" height="24" viewBox="10 2 28 58" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.                                    5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                                        </svg>
                                      </button>
                                      <button key={singleProduct._id} onClick={() => removeFromCart(singleProduct._id)}
                                        type="submit" className="text-sm leading-3 text-md font-bold text-red-600 hover:text-red-500 pl-5 cursor-pointer lg:-mt-2">
                                        Delete
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="trash mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                  <div className="flex items-center space-x-4">
                                    <button key={singleProduct._id} onClick={() => removeFromCart(singleProduct._id)}>
                                      <svg class="h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Sub total */}
                          <div className="mb-10 mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:-mt-1 md:w-1/3">
                            <div className='block lg:flex'>
                              <div className="mb-2 lg:mr-20 flex justify-between">
                                <p className="text-gray-700 font-medium">Price :</p>
                                <p className="text-gray-700">{singleProduct.price}DH</p>
                              </div>
                              <div className="flex justify-between">
                                <p className="text-gray-700 font-medium">Shipping :</p>
                                <p className="text-gray-700">Free</p>
                              </div>
                            </div>
                            <div className='block lg:flex'>
                              <div className="mt-2 lg:mr-16 flex justify-between">
                                <p className="text-gray-700 font-medium">Status :</p>
                                <p className="text-gray-700">{singleProduct.countInStock > 0 ? "In Stock" : "Out Of Stock"}</p>
                              </div>
                              <div className="mt-2 flex justify-between">
                                <p className="text-gray-700 font-medium">Quantity :</p>
                                {singleProduct.countInStock > 0 ? (
                                  <select className="bg-white text-gray-700" as="select" value={singleProduct.quantity}
                                    // onChange={(e) => setQuantity(e.target.value)}
                                    onChange={(e) => updateQuantity(singleProduct._id, parseInt(e.target.value))}>
                                    {[...Array(singleProduct.countInStock).keys()].map((x) => (
                                      <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                      </option>
                                    ))}
                                  </select>) : "0"}
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
                              <button disabled={singleProduct.countInStock === 0}
                                className="mt-3 w-full rounded-md bg-amber-400 py-1.5 font-medium text-blue-50 hover:bg-black">
                                Check Out
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ToTopButton />
    </>
  );
}

export default Cart;