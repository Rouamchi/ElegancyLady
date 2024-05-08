import React, { useEffect, useState } from "react";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import Rating from '../Components/Rating'
// import { useCart } from "react-use-cart"


const ProductDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([])
  const [quantity, setQuantity] = useState(1)
  // const [inCart, setInCard] = useState()
  // const { addItem } = useCart()

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
        <div className="w-full min-h-screen bg-gray-100 flex flex-col justify-center">
          <div className="block lg:flex" >
            <div className="relative m-3 h-4/5 flex flex-wrap mx-auto justify-center">
              <div className="relative block lg:flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-9 lg:m-0 w-4/5 lg:w-2/5 shrink-0 overflow-hidden rounded-xl lg:rounded-r-none bg-white bg-clip-border text-gray-700">
                  <img key={singleProduct._id}
                    alt={singleProduct.imageAlt}
                    src={singleProduct.imageSrc}
                    className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h6 className="mb-4 -mt-6 lg:mt-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-amber-400 antialiased">
                    About This Item
                  </h6>
                  {/* Name */}
                  <Link to='#' className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {singleProduct.name}
                  </Link>
                  <p className="mb-4 mt-4 block font-sans text-base font-semibold leading-relaxed text-gray-700 antialiased">
                    {singleProduct.description}
                  </p>

                  <div className="relative block lg:flex w-full">
                    {/* Price */}
                    <div className="mt-4 w-32 h-8 block font-sans font-semibold leading-snug tracking-normal antialiased text-gray-800 mb-2">
                      Price: {singleProduct.price}DH
                    </div>
                    <div className="flex">
                      {/* In Stock */}
                      <button className='flex lg:ml-6 select-none items-center gap-2 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none' type="button">
                        {singleProduct.countInStock > 0
                          ? <>
                            <div className=" mt-0 rounded-sm py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-green-600">
                              InStock</div>
                          </>
                          : <div className="ml-0 mt-0 lg:mt-1 mb-0 rounded-sm py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-red-600">
                            Out Of Stock</div>
                        }
                      </button>
                      {/* Color */}
                      <Link to='#' className="-mt-10 lg:mt-4 ml-20 lg:ml-6 w-32 h-8 block text-xs font-sans font-normal leading-snug tracking-normal antialiased text-gray-600 mb-2">
                        Color: {singleProduct.color}
                      </Link>
                    </div>
                  </div>

                  {/* Rating */}
                  {/* <div className="w-36 mt-4 justify-center transition-colors duration-150 text-lg md:text-xl">
                    <Rating value={singleProduct.rating} />
                  </div> */}

                  {/* Add to cart */}
                  <Link className="inline-block" to="/Favorites">
                    <div className="mt-5 lg:ml-8 flex justify-center gap-x-3">
                      <button
                        className="flex py-1 px-4 ml-4 bg-amber-400 text-white font-semibold border border-transparent rounded hover:bg-white hover:text-amber-400 hover:border-amber-400 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
                        type='button'>
                        {singleProduct.inFavorites === true ? "Saved": "Add To Favorites"}
                        {/* <svg className="ml-2 h-5 w-5" fill="white" height="24" viewBox="10 -10 28 58" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                        </svg> */}
                      </button>
                      <Link to="/" className="ml-3 lg py-1 px-4 bg-transparent text-amber-500 font-semibold border border-amber-500 rounded hover:bg-amber-400 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
                        Go Back</Link>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* SAMMARY */}
            <div className="lg:mr-20 lg:mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/5">
              <p className="lg:text-2xl text-xl font-black leading-9 text-gray-700 dark:text-white mb-4">
                Payments
              </p>
              <hr className="my-4" />
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Price :</p>
                <p className="text-gray-700">{singleProduct.price}DH</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping :</p>
                <p className="text-gray-700">Free</p>
              </div>
              <div className="mt-2 flex justify-between">
                <p className="text-gray-700">Status :</p>
                <p className="text-gray-700">{singleProduct.countInStock > 0 ? "In Stock" : "Out Of Stock"}</p>
              </div>
              <div className="mt-2 flex justify-between">
                <p className="text-gray-700">Quantity :</p>
                <p className="text-gray-700">
                  {singleProduct.countInStock > 0 ? (
                    <select className="bg-white" as="select" value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}>
                      {[...Array(singleProduct.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>) : "0"}
                </p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between text-gray-700">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">{singleProduct.price * quantity} DH</p>
                </div>
              </div>
              <Link to={`/ShoppingCart/${id}?quantity=${quantity}`}>
                <button disabled={singleProduct.countInStock === 0}
                  className="flex justify-center mt-3 w-full rounded-md bg-amber-400 py-1.5 font-medium text-blue-50 hover:bg-black">
                  Add To Cart
                  <svg className="ml-2 h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
}
export default ProductDetails






// import { useDispatch, useSelector } from "react-redux"
// import { detailsProducts } from "../redux/productsActions"
// import React, { useEffect } from "react"
// import Header from "../Components/Header"
// import Footer from "../Components/Footer"
// import { useParams } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import Rating from '../Components/Rating'
// import ErrorMessage from "../Components/ErrorMessage"
// import Loader from "../Components/Loader"

// const ProductDetails = () => {
//   const { id } = useParams();
//   const singleProduct = products.find(obj => obj._id === id)

//   const dispatch = useDispatch()
//   const productDetails = useSelector((state) => state.productDetails)
//   const { loading, error, product } = productDetails

//   useEffect(() => {
//     dispatch(detailsProducts())
//   }, [dispatch])
//   if (singleProduct != null)

//     return (
//       <>
//         <Header />
//         <div className="w-full min-h-screen bg-gray-200 flex flex-col justify-center">
//           <div className="block lg:flex" >
//             <div className="relative m-3 h-4/5 flex flex-wrap mx-auto justify-center">
//               <div className="relative block lg:flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
//                 <div className="relative m-9 lg:m-0 w-4/5 lg:w-2/5 shrink-0 overflow-hidden rounded-xl lg:rounded-r-none bg-white bg-clip-border text-gray-700">
//                   <img key={singleProduct._id}
//                     alt={singleProduct.imageAlt}
//                     src={singleProduct.imageSrc}
//                     className="h-full w-full object-cover" />
//                 </div>
//                 <div className="p-6">
//                   <h6 className="mb-4 mt-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
//                     startups {singleProduct.color}
//                   </h6>
//                   {/* Name */}
//                   <Link to='#' className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
//                     {singleProduct.name}
//                   </Link>
//                   <p className="mb-4 mt-4 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
//                     {singleProduct.description}
//                   </p>

//                   <div className="relative block lg:flex w-full">
//                     {/* Price */}
//                     <div className="mt-2 w-32 h-8 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-800 antialiased">
//                       Price: {singleProduct.price}DH
//                     </div>

//                     {/* In Stock */}
//                     <button className='flex lg:ml-20 select-none items-center gap-2 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none' type="button">
//                       {singleProduct.countInStock > 0
//                         ? <>
//                           <div className=" mt-1 rounded-sm py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-green-600">
//                             InStock</div>
//                         </>
//                         : <div className=" mb-1 rounded-sm py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-red-600">
//                           Out Of Stock</div>
//                       }
//                     </button>
//                   </div>

//                   {/* Rating */}
//                   <div className="w-36 justify-center transition-colors duration-150 text-lg md:text-xl">
//                     <Rating value={singleProduct.rating} />
//                   </div>

//                   {/* Add to cart */}
//                   <Link className="inline-block" to="/Favorites">
//                     <div className="mt-4 lg:ml-8 block lg:flex justify-center gap-x-3">
//                       <button className="py-2 px-4 ml-4 bg-gray-600 text-white font-semibold border border-transparent rounded hover:bg-white hover:text-gray-600 hover:border-gray-600 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
//                         type='button'>
//                         Add To Favorites</button>
//                       <Link to="/" className="ml-3 lg py-2 px-4 bg-transparent text-gray-600 font-semibold border border-gray-600 rounded hover:bg-gray-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
//                         Go Back</Link>
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             {/* SAMMARY */}
//             <div className=" lg:mr-20 lg:mt-8 lg:w-80 md:w-8/12 w-full bg-gray-100 dark:bg-gray-900 h-96">
//               <div className="flex flex-col lg:h-96 h-auto lg:px-8 md:px-7 px-4 lg:py-8 md:py-10 py-6 justify-between overflow-y-auto">
//                 <div>
//                   <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">
//                     Payments
//                   </p>
//                   <div className="flex items-center justify-between pt-8">
//                     <p className="text-base leading-none text-gray-800 dark:text-white"> Price :</p>
//                     <p className="text-base leading-none text-gray-800 dark:text-white"> {singleProduct.price}DH </p>
//                   </div>
//                   <div className="flex items-center justify-between pt-5">
//                     <p className="text-base leading-none text-gray-800 dark:text-white"> Status :</p>
//                     <p className="text-base leading-none text-gray-800 dark:text-white">
//                       {singleProduct.countInStock > 0 ? "In Stock" : "Out Of Stock"}</p>
//                   </div>
//                   <div className="flex items-center justify-between pt-5">
//                     <p className="text-base leading-none text-gray-800 dark:text-white"> Quantity : </p>
//                     <p className="text-base leading-none text-gray-800 dark:text-white">
//                       {singleProduct.countInStock > 0 ? (
//                         <select className="bg-gray-100" as="select" value={quantity}
//                           onChange={(e) => setQuantity(e.target.value)}>
//                           {[...Array(singleProduct.countInStock).keys()].map((x) => (
//                             <option key={x + 1} value={x + 1}>
//                               {x + 1}
//                             </option>
//                           ))}
//                         </select>) : "0"} </p>
//                   </div>
//                 </div>
//                 <div>
//                   <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
//                     <p className="text-2xl leading-normal text-gray-800 dark:text-white"> Total :</p>
//                     <p className="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white"> 240DH </p>
//                   </div>
//                   <Link to="/ShoppingCart">
//                     <button onclick="checkoutHandler1(true)"
//                       disabled={singleProduct.countInStock === 0}
//                       className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700">
//                       Checkout </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </>
//     )
// }
// export default ProductDetails 
