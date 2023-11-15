import React, { useEffect, useState } from "react";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


const ShoppingCart = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([])
  const [quantity, setQuantity] = useState(1)

  const singleProduct = products.find(obj => obj._id === id)

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

  if (singleProduct != null)
    return (
      <>
        <Header />
        <div className="w-full min-h-screen bg-gray-200 flex flex-col">
          <div className="block lg:flex" >
            <div id="scroll"
              className="m-14 lg:w-1/2 md:w-8/12 lg:px-20 lg:py-5 md:px-6 px-4 md:py-7 py-4 bg-gray-100 dark:bg-gray-800 overflow-y-hidden overflow-x-hidden lg:h-auto h-auto">
              <div onclick="checkoutHandler(false)"
                className="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-left"
                  width={16} height={16}
                  viewBox="0 0 24 24" strokeWidth="1.5"
                  stroke="currentColor" fill="none"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
                <Link to={`/ProductDetails/${singleProduct._id}`} className="text-sm pl-2 leading-none dark:hover:text-gray-200">
                  Back
                </Link>
              </div>
              <p className="lg:text-2xl text-xl font-black leading-10 text-gray-800 dark:text-white pt-3">
                Items
              </p>
              <div className="md:flex items-strech py-0 border-t border-gray-50">
                <div className="md:w-4/12 2xl:w-1/4 w-full">
                  <img className="object-center object-cover md:block hidden"
                    key={singleProduct._id}
                    alt={singleProduct.imageAlt}
                    src={singleProduct.imageSrc} />
                </div>
                <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                  <p className="text-bold leading-3 text-gray-800 dark:text-white md:pt-0 pb-3">
                    Item
                  </p>
                  <div className="flex items-center justify-between w-full pb-4">
                    <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                      {singleProduct.name}
                    </p>
                  </div>
                  <p className="text-sm leading-3 text-gray-600 dark:text-white pt-2">
                    Height: 10 inches
                  </p>
                  <p className="text-sm leading-3 text-gray-600 dark:text-white py-4">
                    Color: {singleProduct.color}
                  </p>
                  <p className="w-96 text-sm leading-3 text-gray-600 dark:text-white">
                    Composition: 100% calf leather
                  </p>
                  <div className="flex items-center justify-between pt-5">
                    <div className="flex itemms-center">
                      <Link to="/Favorites" className="text-sm leading-3  text-gray-900 dark:text-white cursor-pointer">
                        Add to favorites
                      </Link>
                      <p className="text-sm leading-3  text-red-500 pl-5 cursor-pointer">
                        Remove
                      </p>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                      {singleProduct.price} $
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SAMMARY */}
            <div className="lg:ml-28 lg:mt-8 lg:w-80 md:w-8/12 w-full bg-gray-100 dark:bg-gray-900 h-96">
              <div className="flex flex-col lg:h-96 h-80 lg:px-8 md:px-6 px-4 lg:py-8 md:py-7 py-6 justify-between overflow-y-auto">
                <div>
                  <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">
                    Payments
                  </p>
                  <div className="flex items-center justify-between pt-8">
                    <p className="text-base leading-none text-gray-800 dark:text-white"> Price :</p>
                    <p className="text-base leading-none text-gray-800 dark:text-white"> {singleProduct.price}$ </p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800 dark:text-white"> Status :</p>
                    <p className="text-base leading-none text-gray-800 dark:text-white">
                      {singleProduct.countInStock > 0 ? "In Stock" : "Out Of Stock"}</p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800 dark:text-white"> Quantity : </p>
                    <p className="text-base leading-none text-gray-800 dark:text-white">
                      {singleProduct.countInStock > 0 ? (
                        <select className="bg-gray-100" as="select" value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}>
                          {[...Array(singleProduct.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>) : "0"} </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center pb-2 lg:pb-6 justify-between lg:pt-5 pt-5">
                    <p className="text-2xl leading-normal text-gray-800 dark:text-white"> Total :</p>
                    <p className="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white"> 240$ </p>
                  </div>
                  <Link to={`/ShoppingCart/${id}?quantity=${quantity}`}>
                    <button disabled={singleProduct.countInStock === 0}
                      className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700">
                      Checkout </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
}
export default ShoppingCart
