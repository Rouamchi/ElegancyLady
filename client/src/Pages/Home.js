import React, { useState, useEffect } from "react"
import axios from "axios"
import Rating from "../Components/Rating"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import hero from '../images/hero.png'
import { Link } from "react-router-dom"
// import { Link } from "react-scroll"
// import Products from "./Products"


const Home = () => {

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
      <div>
        <>
          <section className="-mb-12" >
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              style={{
                backgroundPosition: "50%",
              }}>
              <img className="xs:h-full sm:h-full md:h-full lg:h-full  xl:h-screen w-full" src={hero} alt="" />
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.50)] bg-fixed">
                <div className="flex h-full items-center justify-left">
                  <div className="px-6 text-left text-amber-400 md:px-12">
                    <h1 className="mt-4 xl:mt-10 mb-2 xl:mb-6 text-xl font-bold tracking-tight md:text-4xl xl:text-5xl">
                      ELEGANCY LADY
                    </h1>
                    <h3 className="mt-0 mb-4 xl:mb-16 text-xl font-medium tracking-tight md:text-4xl xl:text-5xl">
                      Luxe Bags & Accessories</h3>
                    <Link
                      to="Products" spy={true} smooth={true} offset={-100} duration={500}
                      className="rounded border-2 border-neutral-50 px-[16px] xl:px-[46px] pt-[6px] pb-[5px] xl:pt-[14px] xl:pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-amber-400 hover:bg-amber-400 hover:bg-opacity-10 hover:text-amber-400 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                      data-te-ripple-init=""
                      data-te-ripple-color="light">
                      Show Products
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      </div>

      <main>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <p className="space-y-6 border-t border-amber-400 px-4 mb-6"></p>
            <h2 className="text-xl lg:text-3xl font-bold text-center tracking-tight mb-6 text-amber-500">
              PRODUCTS OF ELEGANCY LADY </h2>
            <p className="space-y-6 border-t border-amber-400 px-4 mb-20"></p>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((singleProduct) => (
                <div to={singleProduct._id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img src={singleProduct.imageSrc} alt={singleProduct.imageAlt} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
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
                        {singleProduct.price} DH</p>
                      <Link to="/ProductDetails" className="py-1 px-4 mt-2 mr-4 pb-2 bg-gray-500/80 text-white font-semibold rounded hover:bg-white hover:text-gray-600 hover:border-gray-500 transition ease-in duration-200 transform active:translate-y-0">
                        Buy</Link>
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

export default Home


// import { useDispatch, useSelector } from "react-redux"
// import { homeProducts } from "../redux/productsActions"
// import React, { useEffect } from "react"
// import Header from "../Components/Header"
// import Footer from "../Components/Footer"
// import Rating from "../Components/Rating"
// import { Link } from "react-router-dom"
// import ErrorMessage from "../Components/ErrorMessage"
// import Loader from "../Components/Loader"

// const Home = () => {

//   const dispatch = useDispatch()
//   const productHome = useSelector((state) => state.productHome)
//   const { products } = productHome
//   const { loading, error} = productHome


//   useEffect(() => {
//     dispatch(homeProducts())
//   }, [dispatch])

//   return (
//     <>
//       <Header />
//       <main>
//         <div className="bg-white">
//           <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//             <h2 className="text-2xl font-bold tracking-tight text-gray-900">
//               Customers also purchased</h2>
//             {loading ? <Loader />
//               : error ? <ErrorMessage/>
//                 : (
//                   <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//                     {products.map((singleProduct) => (
//                       <div to={singleProduct._id} className="group relative">
//                         <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//                           <img src={singleProduct.imageSrc} alt={singleProduct.imageAlt} className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
//                         </div>
//                         <div className="mt-4 flex justify-between">
//                           <div>
//                             <h3 className="text-lg text-gray-700 font-sans font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
//                               <Link to={`/ProductDetails/${singleProduct._id}`}>
//                                 <span aria-hidden="true" className="absolute inset-0" />
//                                 {singleProduct.name}
//                               </Link>
//                             </h3>
//                             <p className="mt-1 mb-1 font-sans text-sm font-semibold uppercase leading-relaxed tracking-normal text-gray-500 antialiased">{singleProduct.color}</p>
//                             <Rating value={singleProduct.rating} />
//                           </div>
//                           <div>
//                             <p className="text-2xl mb-3 font-medium text-gray-900">
//                               {singleProduct.price} DH</p>
//                             <Link to="/ProductDetails" className="py-1 px-4 mt-2 mr-4 pb-2 bg-gray-500/80 text-white font-semibold rounded hover:bg-white hover:text-gray-600 hover:border-gray-500 transition ease-in duration-200 transform active:translate-y-0">
//                               Buy</Link>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )} 
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </>
//   )
// }

// export default Home