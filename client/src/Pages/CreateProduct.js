// import React, { useState } from 'react'
// import Header from "../Components/Header"
// import Footer from '../Components/Footer'
// import ToTopButton from "../Components/ToTopButton"
// import Logo from '../images/Logo.png'
// import Axios from "axios"

// const CreateProduct = () => {

//   const url = "https://elegancyladyserver.onrender.com/Products"
//   const [data, setData] = useState({
//     name: "",
//     imageSrc: "",
//     description: "",
//     countInStock: "",
//     inCart: false,
//     inFavorites: false,
//     price: "",
//     color: "",
//   });


//   function handle(e) {
//     const newdata = { ...data };
//     newdata[e.target.id] = e.target.value;
//     setData(newdata);
//   }

//   function click(e) {
//     e.preventDefault();

//     Axios.post(url, {
//       name: data.name,
//       imageSrc: data.imageSrc,
//       description: data.description,
//       inCart: data.inCart,
//       inFavorites: data.inFavorites,
//       countInStock: data.countInStock,
//       price: data.price,
//       color: data.color,
//     })
//       .then(res => {
//         console.log(res.data)
//         window.location = '/'
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }
//   return (
//     <>
//       <Header />
//       <>
//         {/* component */}
//         <div className="bg-gray-100 h-auto flex items-center justify-center">
//           <div className="mt-0 mb-0 md:mt-20 md:mb-20 max-w-md w-full bg-white p-8 rounded-lg shadow-md">
//             <img
//               className="mx-auto h-32 w-auto mb-5 -mt-2"
//               src={Logo}
//               alt="Your Company"
//             />
//             <form className='' enctype="multipart/form-data" action="/upload">
//               {/* Product Photo */}
//               <div className="mb-2">
//                 <input
//                   id="imageSrc"
//                   Value={data.imageSrc} onChange={(e) => { handle(e) }} rows={1}
//                   className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-amber-400"
//                   placeholder="Choose Image"
//                 />
//               </div>
//               {/* Product Name */}
//               <div className="mb-2">
//                 <textarea id="name"
//                   value={data.name} onChange={(e) => { handle(e) }} rows={1}
//                   className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-amber-400" placeholder="Enter product name" defaultValue={""} />
//               </div>
//               {/* Product Description */}
//               <div className="mb-2">
//                 <textarea id="description"
//                   value={data.description} onChange={(e) => { handle(e) }} rows={3}
//                   className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-amber-400" placeholder="Enter product description" defaultValue={""}
//                 />
//               </div>
//               {/* Product Price */}
//               <div className="mb-2">
//                 <textarea id="price"
//                   value={data.price} onChange={(e) => { handle(e) }} rows={1}
//                   className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-amber-400" placeholder="Enter product price" defaultValue={""}
//                 />
//               </div>
//               {/* Product Quantity */}
//               <div className="mb-2">
//                 <textarea id="countInStock"
//                   value={data.countInStock} onChange={(e) => { handle(e) }} rows={1}
//                   className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-amber-400" placeholder="Enter product quantity" defaultValue={""}
//                 />
//               </div>
//               {/* Product Color */}
//               <div className="mb-2">
//                 <textarea id="color"
//                   value={data.color} onChange={(e) => { handle(e) }} rows={1}
//                   className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-amber-400" placeholder="Enter product color" defaultValue={""}
//                 />
//               </div>
//               {/* Product Brand */}
//               {/* <div className="mb-2">
//                 <label htmlFor="text"
//                   className="block text-gray-700 text-sm font-bold mb-2">
//                   Product Brand
//                 </label>
//                 <textarea id="brand"
//                 value={data.brand} onChange={(e) => { handle(e) }} rows={1}
//                   className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-amber-400" placeholder="Enter product color" defaultValue={""}
//                 />
//               </div> */}
//               {/* Submit Button and Character Limit Section */}
//               <div className="flex items-center justify-between">
//                 <button onClick={click}
//                   type="submit"
//                   className="flex justify-center items-center bg-amber-400 hover:bg-amber-500 focus:outline-none focus:shadow-outline-amber text-white py-2 px-4 rounded-md transition duration-300 gap-2"> {" "}
//                   Post{" "}
//                   <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} viewBox="0 0 24 24" id="send" fill="#fff">
//                     <path fill="none" d="M0 0h24v24H0V0z" />
//                     <path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z" />
//                   </svg>
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </>
//       <Footer />
//       <ToTopButton />
//     </>
//   )
// }

// export default CreateProduct



import React, { useState } from 'react'
import Header from "../Components/Header"
import Footer from '../Components/Footer'
import ToTopButton from "../Components/ToTopButton"
import Logo from '../images/Logo.png'
import Axios from "axios"

const CreateProduct = () => {

  const url = "https://elegancyladyserver.onrender.com/Products"
  const [data, setData] = useState({
    // users: "",
    name: "",
    imageSrc: null,
    description: "",
    // brand: "",
    // category: "",
    countInStock: "",
    inCart: false,
    inFavorites: false,
    price: "",
    color: "",
  });


  function handle(e) {
    const newdata = { ...data };
    if (e.target.id === "imageSrc") {
      // If it's the image input, update with file object
      newdata[e.target.id] = e.target.files[0];
    } else {
      // Otherwise, handle other inputs
      newdata[e.target.id] = e.target.value;
    }
    setData(newdata);
  }

  function click(e) {
    e.preventDefault();
    const formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    Axios.post(url, formData, {
      name: data.name,
      imageSrc: data.imageSrc,
      description: data.description,
      // brand: data.brand,
      // category: data.category.name,
      inCart: data.inCart,
      inFavorites: data.inFavorites,
      countInStock: data.countInStock,
      price: data.price,
      color: data.color,
      // users: data.users.fullname,
    })
      .then(res => {
        console.log(res.data)
        window.location = '/'
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
          <div className="mt-0 mb-0 md:mt-20 md:mb-20 max-w-md w-full bg-white p-8 rounded-lg shadow-md">
            <img
              className="mx-auto h-32 w-auto mb-5 -mt-2"
              src={Logo}
              alt="Your Company"
            />
            <form className='' enctype="multipart/form-data" action="/upload">
              {/* Product Photo */}
              <div className="mb-2">
                <input
                  id="imageSrc"
                  type="file"
                  onChange={handle}
                  className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-amber-400"
                  placeholder="Choose Image"
                />
              </div>
              {/* Product Name */}
              <div className="mb-2">
                <textarea id="name"
                  value={data.name} onChange={(e) => { handle(e) }} rows={1}
                  className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-amber-400" placeholder="Enter product name" defaultValue={""} />
              </div>
              {/* Product Description */}
              <div className="mb-2">
                <textarea id="description"
                  value={data.description} onChange={(e) => { handle(e) }} rows={3}
                  className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-amber-400" placeholder="Enter product description" defaultValue={""}
                />
              </div>
              {/* Product Price */}
              <div className="mb-2">
                <textarea id="price"
                  value={data.price} onChange={(e) => { handle(e) }} rows={1}
                  className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-amber-400" placeholder="Enter product price" defaultValue={""}
                />
              </div>
              {/* Product Quantity */}
              <div className="mb-2">
                <textarea id="countInStock"
                  value={data.countInStock} onChange={(e) => { handle(e) }} rows={1}
                  className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-amber-400" placeholder="Enter product quantity" defaultValue={""}
                />
              </div>
              {/* Product Color */}
              <div className="mb-2">
                <textarea id="color"
                  value={data.color} onChange={(e) => { handle(e) }} rows={1}
                  className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-amber-400" placeholder="Enter product color" defaultValue={""}
                />
              </div>
              {/* Product Brand */}
              {/* <div className="mb-2">
                <label htmlFor="text"
                  className="block text-gray-700 text-sm font-bold mb-2">
                  Product Brand
                </label>
                <textarea id="brand"
                value={data.brand} onChange={(e) => { handle(e) }} rows={1}
                  className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-amber-400" placeholder="Enter product color" defaultValue={""}
                />
              </div> */}
              {/* Submit Button and Character Limit Section */}
              <div className="flex items-center justify-between">
                <button onClick={click}
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
      <ToTopButton />
    </>
  )
}

export default CreateProduct