import React, { useState } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useFavorites } from '../Pages/FavoritesContext';
import { useCart } from '../Pages/CartContext';
import SectionProducts from "../Components/SectionProducts";
import ToTopButton from "../Components/ToTopButton";
import CartAlert from "../Components/CartAlert";

const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavorites();
  const { addToCart } = useCart();
  const [showAlert1, setShowAlert1] = useState(false);
  const [buttonCart, setButtonCart] = useState("Add To Cart");

  const handleAddToCart = () => {
    setButtonCart("Added To Cart");
    setShowAlert1(true);
    setTimeout(() => setShowAlert1(false), 4000);
  };
  return (
    <>
      <Header />
      <main>
        <div className="bg-gray-100">
          <div className="-mb-8">
            <SectionProducts />
          </div>
          <div>
            {showAlert1 && <CartAlert />}
          </div>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 md:max-w-7xl md:px-8">
            <div className="overflow-hidden mt-0 grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10 sm:grid-cols-2 md:grid-cols-4 xl:gap-x-8">
              {favorites.length === 0 ? (
                <p className="text-center text-2xl">No Favorites Added Yet</p>
              ) : (
                favorites.map((singleProduct) => (
                  <div key={singleProduct._id} className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md md:rounded-2xl bg-gray-200 md:aspect-none h-48 md:h-80">
                      <img src={singleProduct.imageSrc} alt={singleProduct.imageAlt} className="h-full w-full object-cover object-center md:h-full md:w-full" />
                    </div>
                    <button onClick={() => removeFromFavorites(singleProduct._id)}
                      className="p-1.5 rounded-full bg-gray-100 text-gray-700 mx-28 md:mx-56 -my-24 -mb-4 hover:bg-white focus:outline-none focus:bg-white">
                      <svg className="h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                    <div className="mt-4 justify-between">
                      <div className="ml-1 md:ml-0">
                        <h3 className="-mt-4 text-base font-medium text-gray-700 dark:text-gray-200">
                          <span aria-hidden="true" />
                          {singleProduct.name}
                        </h3>
                      </div>
                      <div className="">
                        <p className="text-gray-500 -mt-1 md:mt-0 ml-1 md:ml-0 mb-2">
                          {singleProduct.price} DH
                        </p>
                        <div className="flex items-center justify-center w-full capitalize font-medium tracking-wide rounded-md bg-gray-800 text-white px-2 py-2 group-hover:bg-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                          </svg>
                          <button onClick={() => { handleAddToCart(); addToCart(singleProduct); }} className="mx-1">
                            {buttonCart}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ToTopButton />
    </>
  );
};

export default Favorites;
