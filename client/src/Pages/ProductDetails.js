import React, { useEffect, useState } from "react";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ToTopButton from "../Components/ToTopButton";


const ProductDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([])
  const singleProduct = products.find(obj => obj._id === id)
  const [quantity] = useState(1)
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const [buttonText, setButtonText] = useState("Add To Favorites");
  const changeText = (text) => setButtonText(text);
  const [buttonCart, setButtonCart] = useState("Add To Cart");
  const changeCart = (text) => setButtonCart(text);

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


  const addToCart = () => {
    if (!cart.some(item => item._id === singleProduct._id)) {
      setCart([...cart, singleProduct.inCart === true]);
      alert('Product added to cart!');
    } else {
      alert('Product is already in cart!');
    }
  };

  const addToFavorites = () => {
    if (!favorites.some(item => item._id === singleProduct._id)) {
      setFavorites([...favorites, singleProduct.inFavorites === true]);
      alert('Added to Favorites!');
    } else {
      alert('Already in Favorites!');
    }
  }

  if (singleProduct != null)
    return (
      <>
        <Header />
        {/* <CartAlert/>
        <FavoriteAlert/> */}
        <div className="w-full min-h-screen bg-gray-100 flex flex-col justify-center">
          <div className="block lg:flex" >
            <div className="relative m-3 h-4/5 flex flex-wrap mx-auto justify-center">
              <div className="relative block lg:flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-9 lg:m-0 w-4/5 lg:w-2/5 shrink-0 overflow-hidden rounded-xl lg:rounded-r-none bg-white bg-clip-border text-gray-700">
                  <img key={singleProduct._id}
                    alt={singleProduct.imageAlt}
                    src={`http://localhost:4000/uploads/181e5fe5a7974c9732bba98220e326a2`}
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
                  {/* Add to cart */}
                  <div className="inline-block">
                    <div className="mt-5 lg:ml-8 flex justify-center gap-x-3">
                      <button
                        onClick={() => { addToFavorites(); changeText("Saved !"); }}
                        className="flex py-1 px-4 ml-4 bg-amber-400 text-white font-semibold border border-transparent rounded hover:bg-white hover:text-amber-400 hover:border-amber-400 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
                        type='button'>{buttonText} {singleProduct.inFavorites === true}
                      </button>
                      <Link to="/" className="ml-3 lg py-1 px-4 bg-transparent text-amber-500 font-semibold border border-amber-500 rounded hover:bg-amber-400 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
                        Go Back</Link>
                    </div>
                  </div>
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
                    <p>{singleProduct.countInStock}</p>) : "0"}
                </p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between text-gray-700">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">{singleProduct.price * quantity} DH</p>
                </div>
              </div>
              <Link
              // to={`/ShoppingCart/${id}?quantity=${quantity}`}
              >
                <button onClick={() => { addToCart(); changeCart("Added To Cart"); }}
                  disabled={singleProduct.countInStock === 0}
                  className="flex justify-center mt-3 w-full rounded-md bg-amber-400 py-1.5 font-medium text-blue-50 hover:bg-black">
                  {buttonCart}
                  <svg className="ml-2 h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
        <ToTopButton />
      </>
    )
}
export default ProductDetails
