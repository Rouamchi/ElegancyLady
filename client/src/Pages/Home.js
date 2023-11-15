// import React, { useState, useEffect } from "react"
// import Header from "../Components/Header"
// import Footer from "../Components/Footer"
// import Rating from "../Components/Rating"
// import { Link } from 'react-router-dom'
// import axios from "axios"


// const Home = () => {
//   const [products, setProducts] = useState([])
//   useEffect(() => {
//     const fetchProducts = async () => {
//       const { data } = await axios.get('http://localhost:4000/products')
//       setProducts(data)
//     }
//     fetchProducts()
//   }, [])

//   return (
//     <>
//       <Header />
//       <main>
//         <div className="bg-white">
//           <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//             <h2 className="text-2xl font-bold tracking-tight text-gray-900">
//               Customers also purchased</h2>
//             <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//               {products.map((singleProduct) => (
//                 <div to={singleProduct._id} className="group relative">
//                   <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//                     <img src={singleProduct.imageSrc} alt={singleProduct.imageAlt} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
//                   </div>
//                   <div className="mt-4 flex justify-between">
//                     <div>
//                       <h3 className="text-lg text-gray-700 font-sans font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
//                         <Link to={`/ProductDetails/${singleProduct._id}`}>
//                           <span aria-hidden="true" className="absolute inset-0" />
//                           {singleProduct.name}
//                         </Link>
//                       </h3>
//                       <p className="mt-1 mb-1 font-sans text-sm font-semibold uppercase leading-relaxed tracking-normal text-gray-500 antialiased">{singleProduct.color}</p>
//                       <Rating value={singleProduct.rating} />
//                     </div>
//                     <div>
//                       <p className="text-2xl mb-3 font-medium text-gray-900">
//                         {singleProduct.price}$</p>
//                       <Link to="/ProductDetails" className="py-1 px-4 mt-2 mr-4 pb-2 bg-gray-500/80 text-white font-semibold rounded hover:bg-white hover:text-gray-600 hover:border-gray-500 transition ease-in duration-200 transform active:translate-y-0">
//                         Buy</Link>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </>
//   )
// }

// export default Home


import { useDispatch, useSelector } from "react-redux"
import { homeProducts } from "../redux/productsActions"
import React, { useEffect } from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Rating from "../Components/Rating"
import { Link } from "react-router-dom"
import ErrorMessage from "../Components/ErrorMessage"
import Loader from "../Components/Loader"

const Home = () => {

  const dispatch = useDispatch()
  const productHome = useSelector((state) => state.productHome)
  const { products } = productHome
  const { loading, error} = productHome


  useEffect(() => {
    dispatch(homeProducts())
  }, [dispatch])

  return (
    <>
      <Header />
      <main>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Customers also purchased</h2>
            {loading ? <Loader />
              : error ? <ErrorMessage/>
                : (
                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((singleProduct) => (
                      <div to={singleProduct._id} className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                          <img src={singleProduct.imageSrc} alt={singleProduct.imageAlt} className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                        </div>
                        <div className="mt-4 flex justify-between">
                          <div>
                            <h3 className="text-lg text-gray-700 font-sans font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                              <Link to={`/ProductDetails/${singleProduct._id}`}>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {singleProduct.name}
                              </Link>
                            </h3>
                            <p className="mt-1 mb-1 font-sans text-sm font-semibold uppercase leading-relaxed tracking-normal text-gray-500 antialiased">{singleProduct.color}</p>
                            <Rating value={singleProduct.rating} />
                          </div>
                          <div>
                            <p className="text-2xl mb-3 font-medium text-gray-900">
                              {singleProduct.price}$</p>
                            <Link to="/ProductDetails" className="py-1 px-4 mt-2 mr-4 pb-2 bg-gray-500/80 text-white font-semibold rounded hover:bg-white hover:text-gray-600 hover:border-gray-500 transition ease-in duration-200 transform active:translate-y-0">
                              Buy</Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )} 
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home