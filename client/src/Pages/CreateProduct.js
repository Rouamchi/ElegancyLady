import React, { useState } from 'react'
import Header from "../Components/Header"
import Footer from '../Components/Footer'
import ToTop from "../Components/ToTop"
import Logo from '../images/Logo.png'
import Axios from "axios"

const CreateProduct = () => {

  const url = "http://localhost:4000/products"
  const [data, setData] = useState({
    users: "",
    name: "",
    imageSrc: "",
    imageAlt: "",
    description: "",
    brand: "",
    category: "",
    countInStock: "",
    inCart: "",
    inFavorites: "",
    price: "", 
    color: "",
    rating: ""
  });


  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)

  }

  function click(e) {
    e.preventDefault();
      Axios.post(url, {
      name: data.name,
      imageSrc: data.imageSrc,
      imageAlt: data.imageAlt,
      description: data.description,
      brand: data.brand,
      category: data.category.name,
      countInStock: data.countInStock,
      inCart: data.inCart,
      inFavorites: data.inFavorites,
      price: data.price,
      color: data.color,
      rating: data.rating,
      users: data.users.fullname,
    })
      .then(res => {
        console.log(res.data)
        // window.location = '/'
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <>
      <Header />
      <>
        {/* component */}
        <div className="bg-gray-100 h-auto flex items-center justify-center">
          <div className="mt-20 mb-20 max-w-md w-full bg-white p-8 rounded-lg shadow-md">
            <img
              className="mx-auto h-44 w-96 mb-5 -mt-2"
              src={Logo}
              alt="Your Company"
            />
            <form className=''>
              {/* Product Photo */}
              <div className="mb-4">
                <label htmlFor="fileAttachment"
                  className="block text-gray-700 text-sm font-bold mb-2">
                  Product Photo:
                </label>
                <div className="relative border-2 rounded-md px-4 py-3 bg-white flex items-center justify-between hover:border-amber-400 transition duration-150 ease-in-out">
                  <input id="imageSrc" type="file" name="file" label="Image" value={data.imageSrc} onChange={(e) => { handle(e) }} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span className="ml-2 text-sm text-gray-500">Choose a Photo</span>
                  </div>
                </div>
              </div>
              {/* Product Name */}
              <div className="mb-4">
                <label htmlFor="text"
                  className="block text-gray-700 text-sm font-bold mb-2">
                  Product Name
                </label>
                <textarea id="imageAlt" name="imageAlt" label="Name" value={data.imageAlt} onChange={(e) => { handle(e) }} rows={1}
                  className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-amber-400" placeholder="Enter product name" defaultValue={""} />
              </div>
              {/* Product Description */}
              <div className="mb-6">
                <label htmlFor="text"
                  className="block text-gray-700 text-sm font-bold mb-2">
                  Description
                </label>
                <textarea id="description" name="description" label="Description" value={data.description} onChange={(e) => { handle(e) }} rows={4}
                  className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-amber-400" placeholder="What's on your mind?" defaultValue={""}
                />
              </div>
              {/* Product Price */}
              <div className="mb-4">
                <label htmlFor="number"
                  className="block text-gray-700 text-sm font-bold mb-2">
                  Product Price
                </label>
                <textarea id="price" name="price" label="Price" value={data.price} onChange={(e) => { handle(e) }} rows={1}
                  className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-amber-400" placeholder="Enter product price" defaultValue={""}
                />
              </div>
              {/* Product Quantity */}
              <div className="mb-4">
                <label htmlFor="number"
                  className="block text-gray-700 text-sm font-bold mb-2">
                  Product Quantity
                </label>
                <textarea id="countInStock" name="countInStock" label="Quantity" value={data.countInStock} onChange={(e) => { handle(e) }} rows={1}
                  className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-amber-400" placeholder="Enter product quantity" defaultValue={""}
                />
              </div>
              {/* Product Color */}
              <div className="mb-4">
                <label htmlFor="text"
                  className="block text-gray-700 text-sm font-bold mb-2">
                  Product Color
                </label>
                <textarea id="color" name="color" label="Color" value={data.color} onChange={(e) => { handle(e) }} rows={1}
                  className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-amber-400" placeholder="Enter product color" defaultValue={""}
                />
              </div>
              {/* Product Brand */}
              <div className="mb-4">
                <label htmlFor="text"
                  className="block text-gray-700 text-sm font-bold mb-2">
                  Product Brand
                </label>
                <textarea id="brand" name="brand" label="Brand" value={data.brand} onChange={(e) => { handle(e) }} rows={1}
                  className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-amber-400" placeholder="Enter product color" defaultValue={""}
                />
              </div>
              {/* Submit Button and Character Limit Section */}
              <div className="flex items-center justify-between">
                <button onClick={(e) => click(e)}
                  type="submit"
                  className="flex justify-center items-center bg-amber-400 hover:bg-amber-500 focus:outline-none focus:shadow-outline-amber text-white py-2 px-4 rounded-md transition duration-300 gap-2"> {" "}
                  Post{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} viewBox="0 0 24 24" id="send" fill="#fff">
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
      <Footer />
      <ToTop />
    </>
  )
}

export default CreateProduct