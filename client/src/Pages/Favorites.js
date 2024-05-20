import React, { useState, useEffect } from 'react'
import Header from "../Components/Header"
import Footer from '../Components/Footer'
import ToTop from "../Components/ToTop"
import { Link } from "react-router-dom"
// import axios from "axios"
import Logo1 from "../images/Logo1.png"


const Favorites = () => {
  const [products, setProducts] = useState([])

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
            <div className="mt-0 grid grid-cols-2 gap-x-4 gap-y-8 lg:gap-x-6 lg:gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.filter((singleProduct)=>{
                return (singleProduct.inFavorites === true)
              }).map((singleProduct) => (
                <div to={singleProduct._id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:rounded-2xl bg-gray-200 lg:aspect-none h-48 lg:h-80">
                    <img src={singleProduct.imageSrc} alt={singleProduct.imageAlt} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                  </div>
                  <button className="p-2 rounded-full bg-gray-100 text-white mx-28 lg:mx-56 -my-24 -mb-4 hover:bg-white focus:outline-none focus:bg-white">
                      <svg className="h-5 w-5 lg:h-6 lg:w-6" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                      </svg>
                    </button>
                  <div className="mt-4 justify-between">
                    <div className="ml-1 lg:ml-0">
                      <h3 className="-mt-4 text-base font-medium text-gray-700 dark:text-gray-200">
                        <Link to={`/ProductDetails/${singleProduct._id}`}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {singleProduct.name}
                        </Link>
                      </h3>
                      {/* <p className="text-gray-700 uppercase">
                        {singleProduct.color}</p> */}
                      {/* <Rating value={singleProduct.rating} /> */}
                    </div>
                    <div className="">
                      <p className="text-gray-500 -mt-1 lg:mt-0 ml-1 lg:ml-0 mb-2">
                        {singleProduct.price} DH</p>
                      <div className="flex items-center justify-center w-full capitalize font-medium tracking-wide rounded-md bg-gray-800 text-white px-2 py-2 group-hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <Link to="/ProductDetails" className="mx-1">
                          Add To Cart</Link>
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
      <ToTop />
    </>
  )
}

export default Favorites