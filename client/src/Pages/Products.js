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
              PRODUCTS OF ELEGANCY LADY </h2>
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