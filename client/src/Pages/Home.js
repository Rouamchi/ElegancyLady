import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from '../Components/Loader';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import ToTopButton from "../Components/ToTopButton";
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('https://elegancyladyserver.onrender.com/products');
        setProducts(data);
        setLoading(false);
        window.scrollTo(0, 0);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <section className="">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <div className="bgImage hide-when-mobile"></div>
          <div className="bgImageMobile show-when-mobile"></div>
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.50)] bg-fixed">
            <div className="flex h-full items-center justify-left">
              <div className="px-6 text-left text-amber-400 md:px-12">
                <h1 className="mt-1 xl:mt-6 -mb-1 xl:mb-4 text-2xl font-bold tracking-tight md:text-3xl xl:text-4xl">
                  ELEGANCY LADY ⚜️
                </h1>
                <h3 className="mt-0 -mb-1 xl:mb-10 text-base font-medium tracking-tight md:text-3xl xl:text-4xl">
                  Luxe Bags & Accessories
                </h3>
                <p className="text-md md:text-2xl text-white font-normal md:font-semibold mt-4 md:-mt-4 mb-4 md:mb-10">
                  ELEGANCY LADY offer you a collection of clothing and accessories <br /> By the latest trends and 100% authentic.
                </p>
                <Link
                  to="Products" spy={true} smooth={true} offset={-100} duration={500}
                  className="rounded border-2 border-neutral-50 px-[16px] xl:px-[46px] pt-[4px] pb-[6px] xl:pt-[10px] xl:pb-[10px] text-xs md:text-sm font-normal md:font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-amber-400 hover:bg-amber-400 hover:bg-opacity-10 hover:text-amber-400 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                  data-te-ripple-init=""
                  data-te-ripple-color="light">
                  Show Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-2 border-amber-400" />
      <section className="mt-0">
        <div
          className="h-48 md:h-64 overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://wallpaperaccess.com/full/318963.jpg")'
          }}>
          <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div className="px-6 md:px-10 max-w-xl md:max-w-2xl">
              <h2 className="text-xl md:text-3xl text-white font-semibold mt-4 md:mt-0">PRODUCTS OF ELEGANCY LADY</h2>
              <p className="mt-2 md:text-lg text-amber-300">
                A collection which is constantly renewed to satisfy you, and which is intended to be accessible to all! Authentic, original & Luxe!
              </p>
              <Link to="Products" className="flex items-center mt-1 md:mt-4 px-3 py-2 bg:transparent text-white text-sm uppercase font-medium rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                <span>Show More</span>
                <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 md:max-w-7xl md:px-8">
            <div className="-mt-12 md:-mt-16">
              <h3 className="text-gray-600 text-2xl font-medium">Discover Our Latest Arrivals</h3>
              <div className="overflow-hidden grid gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-6">
                {loading ? (
                  <Loader />
                ) : (
                  products.map((singleProduct) => (
                    <div key={singleProduct._id} singleProduct={singleProduct} className="group relative">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md md:rounded-2xl bg-gray-200 md:aspect-none h-48 md:h-80">
                        <Link to={`/ProductDetails/${singleProduct._id}`}>
                          <img
                            src={singleProduct.imageSrc}
                            alt={singleProduct.imageAlt}
                            className="h-full w-full object-cover object-center md:h-full md:w-full" />
                        </Link>
                      </div>
                      <button className="p-2 rounded-full bg-white text-white mx-32 md:mx-56 -my-24 -mb-4 hover:bg-white focus:outline-none focus:bg-white active:bg-white">
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
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-full capitalize font-medium tracking-wide rounded-md bg-gray-800 text-white px-2 py-2 group-hover:bg-gray-700">
                        <Link to={`/ProductDetails/${singleProduct._id}`} className="mx-1">
                          Show Details</Link>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ToTopButton />
    </>
  );
};

export default Home;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Loader from '../Components/Loader';
// import Header from "../Components/Header";
// import Footer from "../Components/Footer";
// import { Link } from "react-router-dom";
// import ToTopButton from "../Components/ToTopButton";
// import './Home.css';

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const { data } = await axios.get('https://elegancyladyserver.onrender.com/products');
//         setProducts(data);
//         setLoading(false);
//         window.scrollTo(0, 0);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <>
//       <Header />
//       <section className="">
//         <div className="relative overflow-hidden bg-cover bg-no-repeat">
//           <div className="bgImage hide-when-mobile"></div>
//           <div className="bgImageMobile show-when-mobile"></div>
//           <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.50)] bg-fixed">
//             <div className="flex h-full items-center justify-left">
//               <div className="px-6 text-left text-amber-400 md:px-12">
//                 <h1 className="mt-1 xl:mt-6 -mb-1 xl:mb-4 text-2xl font-bold tracking-tight md:text-3xl xl:text-4xl">
//                   ELEGANCY LADY ⚜️
//                 </h1>
//                 <h3 className="mt-0 -mb-1 xl:mb-10 text-base font-medium tracking-tight md:text-3xl xl:text-4xl">
//                   Luxe Bags & Accessories
//                 </h3>
//                 <p className="text-md md:text-2xl text-white font-normal md:font-semibold mt-4 md:-mt-4 mb-4 md:mb-10">
//                   ELEGANCY LADY offer you a collection of clothing and accessories <br /> By the latest trends and 100% authentic.
//                 </p>
//                 <Link
//                   to="Products" spy={true} smooth={true} offset={-100} duration={500}
//                   className="rounded border-2 border-neutral-50 px-[16px] xl:px-[46px] pt-[4px] pb-[6px] xl:pt-[10px] xl:pb-[10px] text-xs md:text-sm font-normal md:font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-amber-400 hover:bg-amber-400 hover:bg-opacity-10 hover:text-amber-400 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
//                   data-te-ripple-init=""
//                   data-te-ripple-color="light">
//                   Show Products
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <hr className="border-2 border-amber-400" />
//       <section className="mt-0">
//         <div
//           className="h-48 md:h-64 overflow-hidden bg-cover bg-center"
//           style={{
//             backgroundImage:
//               'url("https://wallpaperaccess.com/full/318963.jpg")'
//           }}>
//           <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
//             <div className="px-6 md:px-10 max-w-xl md:max-w-2xl">
//               <h2 className="text-xl md:text-3xl text-white font-semibold mt-4 md:mt-0">PRODUCTS OF ELEGANCY LADY</h2>
//               <p className="mt-2 md:text-lg text-amber-300">
//                 A collection which is constantly renewed to satisfy you, and which is intended to be accessible to all! Authentic, original & Luxe!
//               </p>
//               <Link to="Products" className="flex items-center mt-1 md:mt-4 px-3 py-2 bg:transparent text-white text-sm uppercase font-medium rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
//                 <span>Show More</span>
//                 <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
//                   <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                 </svg>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       <main>
//         <div className="bg-white">
//           <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 md:max-w-7xl md:px-8">
//             <div className="-mt-12 md:-mt-16">
//               <h3 className="text-gray-600 text-2xl font-medium">Discover Our Latest Arrivals</h3>
//               <div className="overflow-hidden grid gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-6">
//                 {loading ? (
//                   <div className="col-span-full">
//                     <Loader />
//                   </div>
//                 ) : (
//                   products.map((singleProduct) => (
//                     <div key={singleProduct._id} singleProduct={singleProduct} className="group relative">
//                       <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md md:rounded-2xl bg-gray-200 md:aspect-none h-48 md:h-80">
//                         <Link to={`/ProductDetails/${singleProduct._id}`}>
//                           <img
//                             // src={`https://https://elegancyladyserver.onrender.com/uploads/image555.jpg}`}
//                             src={singleProduct.imageSrc}
//                             alt={singleProduct.imageAlt}
//                             className="h-full w-full object-cover object-center md:h-full md:w-full" />
//                         </Link>
//                       </div>
//                       <button className="p-2 rounded-full bg-white text-white mx-32 md:mx-56 -my-24 -mb-4 hover:bg-white focus:outline-none focus:bg-white active:bg-white">
//                         <svg className="h-5 w-5 md:h-6 md:w-6" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
//                         </svg>
//                       </button>
//                       <div className="mt-4 justify-between">
//                         <div className="ml-1 md:ml-0">
//                           <h3 className="-mt-4 text-base font-medium text-gray-600">
//                             <span aria-hidden="true" />
//                             {singleProduct.name}
//                           </h3>
//                         </div>
//                         <div className="">
//                           <p className="text-gray-500 -mt-1 md:mt-0 ml-1 md:ml-0 mb-2">
//                             {singleProduct.price} DH</p>
//                         </div>
//                       </div>
//                       <div className="flex items-center justify-center w-full capitalize font-medium tracking-wide rounded-md bg-gray-800 text-white px-2 py-2 group-hover:bg-gray-700">
//                         {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
//                           <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
//                         </svg> */}
//                         <Link to={`/ProductDetails/${singleProduct._id}`} className="mx-1">
//                           Show Details</Link>
//                       </div>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//       <Footer />
//       <ToTopButton />
//     </>
//   );
// };

// export default Home;
