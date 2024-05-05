import React, { useState, useEffect } from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Rating from "../Components/Rating"
import { Link } from "react-router-dom"
import axios from "axios"
import Logo from "../images/Logo.png"


const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('http://localhost:4000/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <>
      <Header />                              
      <main>
        <div className="bg-black">
        <img 
            className=" mx-auto h-48 w-96 mt-0 -mb-12"
            src={Logo}
            alt="Your Company"
          /> 
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <p className="space-y-6 border-t border-amber-300 px-4 mb-6"></p>
            <h2 className=" text-xl lg:text-3xl font-bold text-center tracking-tight mb-8 text-amber-400">
            ⚜️ PRODUCTS OF ELEGANCY LADY ⚜️</h2>
              <p className="space-y-6 border-t border-amber-300 px-4 mb-20"></p>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((singleProduct) => (
                <div to={singleProduct._id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img src={singleProduct.imageSrc} alt={singleProduct.imageAlt} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-lg text-gray-300 font-sans font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        <Link to={`/ProductDetails/${singleProduct._id}`}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {singleProduct.name}
                        </Link>
                      </h3>
                      <svg color="#fafafa" fill="#fafafa" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                      </svg>
                      <p className="mt-1 mb-1 font-sans text-sm font-semibold uppercase leading-relaxed tracking-normal text-gray-500 antialiased">{singleProduct.color}</p>
                      <Rating value={singleProduct.rating} />
                    </div>
                    <div>
                      <p className="text-2xl mb-3 font-medium text-gray-200">
                        {singleProduct.price} DH</p>
                      <Link to="/ProductDetails" className="py-1 px-4 mt-2 mr-4 pb-2 bg-gray-500/80 text-white font-semibold rounded hover:bg-white hover:text-gray-600 hover:border-gray-500 transition ease-in duration-200 transform active:translate-y-0">
                        Buy Now</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Products