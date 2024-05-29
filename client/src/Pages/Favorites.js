import React, { useState, useEffect } from 'react'
import Header from "../Components/Header"
import Footer from '../Components/Footer'
import ToTopButton from "../Components/ToTopButton"
import { Link } from "react-router-dom"
import Logo1 from "../images/Logo1.png"


const Favorites = () => {
  const [products, setProducts] = useState([])
  const removeFromCart = (productId) => {
    const updatedProducts = products.filter(product => product._id !== productId);
    setProducts(updatedProducts);
  };

  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
      })

      .catch((err) => {
        console.log(err)
      })

  }, [])
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
              className=" mx-auto h-28 w-auto mt-4 -mb-12 lg:-mb-20"
              src={Logo1}
              alt="Your Company"
            />
          </section>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="overflow-hidden mt-0 grid grid-cols-2 gap-x-4 gap-y-8 lg:gap-x-6 lg:gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.filter((singleProduct) => {
                return (singleProduct.inFavorites === true)
              }).map((singleProduct) => (
                <div to={singleProduct._id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:rounded-2xl bg-gray-200 lg:aspect-none h-48 lg:h-80">
                    <img src={singleProduct.imageSrc} alt={singleProduct.imageAlt} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                  </div>
                  <button key={singleProduct._id} onClick={() => removeFromCart(singleProduct._id)}
                    className="p-1.5 rounded-full bg-gray-100 text-gray-700 mx-28 lg:mx-56 -my-24 -mb-4 hover:bg-white focus:outline-none focus:bg-white">
                    <svg class="h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                  </button>
                  <div className="mt-4 justify-between">
                    <div className="ml-1 lg:ml-0">
                      <h3 className="-mt-4 text-base font-medium text-gray-700 dark:text-gray-200">
                        <span aria-hidden="true" />
                        {singleProduct.name}
                      </h3>
                    </div>
                    <div className="">
                      <p className="text-gray-500 -mt-1 lg:mt-0 ml-1 lg:ml-0 mb-2">
                        {singleProduct.price} DH</p>
                      <div className="flex items-center justify-center w-full capitalize font-medium tracking-wide rounded-md bg-gray-800 text-white px-2 py-2 group-hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <button className="mx-1">
                          Add To Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ToTopButton />
    </>
  )
}

export default Favorites