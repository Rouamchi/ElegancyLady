import React, { useState } from "react"
import Axios from "axios"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { Link } from 'react-router-dom'
import Logo from '../images/Logo.png'
import ToTopButton from "../Components/ToTopButton"


const Registration = () => {

  const [showPassword, setShowPassword] = useState(false);
  const url = "http://localhost:4000/users"
  const [data, setData] = useState({
    username: "",
    password: "",
    // fullname: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });


  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  function click(e) {
    e.preventDefault();
    Axios.post(url, {
      username: data.username,
      password: data.password,
      email: data.email,
      address: data.address,
      city: data.city,
      postalCode: data.postalCode,
      country: data.country,
    })
      .then(res => {
        console.log(res.data)
        // setMessage(res.data.msg)
        //if(data.ok){
        window.location = '/SignIn'
        //}
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Header />
      <form className='grid justify-items-stretch justify-center mx-6 my-12 lg:mx-8 '>
        <div className="space-y-12">
          {/* -------------------------------- */}
          <img
            className="mx-auto  h-56 w-96"
            src={Logo}
            alt="Your Company"
          />
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
            <div className="sm:col-span-4">
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={data.username} onChange={(e) => { handle(e) }}
                    autoComplete="username"
                    className="pl-4 block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Enter Your Username" />
                </div>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
              </div>

              <div className="sm:col-span-4">
                <div className="relative -mt-8">
                  <input
                    value={data.password}
                    onChange={(e) => { handle(e) }}
                    type={showPassword ? "text" : "password"} 
                    name="password"
                    id="password"
                    placeholder="Password"
                    autoComplete="new-password" 
                    className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <button type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none">
                    {showPassword ? (
                      <svg x-show="!show" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    ) : (
                      <svg x-show="show" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="sm:col-span-4">
                <div className="mt-2">
                  <input
                    value={data.email} onChange={(e) => { handle(e) }}
                    id="email"
                    name="email"
                    type="email"
                    placeholder='Email address'
                    autoComplete="email"
                    className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <div className="mt-2">
                  <input
                    value={data.address} onChange={(e) => { handle(e) }}
                    type="text"
                    name="address"
                    id="address"
                    placeholder='Address'
                    autoComplete="address"
                    className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <div className="mt-2">
                  <input
                    value={data.country} onChange={(e) => { handle(e) }}
                    id="country"
                    name="country"
                    placeholder='Country'
                    autoComplete="country-name"
                    className="text-gray-700 pl-4 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  />

                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2">
                  <input
                    value={data.city} onChange={(e) => { handle(e) }}
                    type="text"
                    name="city"
                    id="city"
                    placeholder='City'
                    autoComplete="address-level2"
                    className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2">
                  <input
                    value={data.postalCode} onChange={(e) => { handle(e) }}
                    type="text"
                    name="postalCode"
                    id="postalCode"
                    placeholder='Postal code'
                    autoComplete="postal-code"
                    className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------------------ */}
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link to="/" type="button" className="text-sm font-semibold leading-6 text-gray-900 hover:text-amber-400">
            Cancel
          </Link>
          <button
            onClick={click}
            type="submit"
            className="rounded-md bg-amber-400 px-3 py-2 text-sm font-semibold text-white shadow-sm
             hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-black">
            Save{" "}
          </button>
        </div>
      </form>
      <Footer />
      <ToTopButton />
    </>
  )
}

export default Registration