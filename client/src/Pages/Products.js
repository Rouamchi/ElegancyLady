import React, { useState, useEffect } from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { Link } from "react-router-dom"
import SectionProducts from "../Components/SectionProducts"
import axios from "axios"
import ToTopButton from "../Components/ToTopButton"


const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('https://elegancyladyserver.onrender.com/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <>
      <Header />
      <main>
        <div className="bg-gray-100">
          <SectionProducts />
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 md:max-w-7xl md:px-8">
            <div className="overflow-hidden -mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10 sm:grid-cols-2 md:grid-cols-4 xl:gap-x-8">
              {products.map((singleProduct) => (
                <div to={singleProduct._id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md md:rounded-2xl bg-gray-200 md:aspect-none h-48 md:h-80">
                    <Link to={`/ProductDetails/${singleProduct._id}`}>
                      <img src={singleProduct.imageSrc} alt={singleProduct.imageAlt}
                        className="h-full w-full object-cover object-center md:h-full md:w-full" />
                    </Link>
                  </div>
                  <button className="p-2 rounded-full bg-gray-100 text-gray-100 mx-32 md:mx-56 -my-24 -mb-4 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 active:bg-gray-100">
                    <svg className="h-5 w-5 md:h-6 md:w-6" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                    </svg>
                  </button>
                  <div className="mt-4 justify-between">
                    <div className="ml-1 md:ml-0">
                      <h3 className="-mt-4 text-base font-medium text-gray-600">
                        <span aria-hidden="true" />
                        {singleProduct.name}
                      </h3>
                    </div>
                    <div className="">
                      <p className="text-gray-500 -mt-1 md:mt-0 ml-1 md:ml-0 mb-2">
                        {singleProduct.price} DH</p>
                      <div className="flex items-center justify-center w-full capitalize font-medium tracking-wide rounded-md bg-gray-800 text-white px-2 py-2 group-hover:bg-gray-700">
                        <Link to={`/ProductDetails/${singleProduct._id}`} className="mx-1">
                          Show Details</Link>
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

export default Products