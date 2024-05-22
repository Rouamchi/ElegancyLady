import React from 'react'
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { Link } from 'react-router-dom'
import Logo from '../images/Logo.png'
import ToTopButton from "../Components/ToTopButton"


const Registration = () => {

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
                    autoComplete="username"
                    className="pl-4 block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Enter Your Username" />
                </div>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <div className="mt-2">
                  <input type="text" name="first-name" placeholder="First name" id="first-name" autoComplete="given-name"
                    className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder="Last name"
                    autoComplete="family-name"
                    className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <div className="mt-2">
                  <input
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
                    type="text"
                    name="street-address"
                    id="street-address"
                    placeholder='Address'
                    autoComplete="street-address"
                    className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    placeholder='Country'
                    autoComplete="country-name"
                    className="text-gray-700 pl-4 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Morocco</option>
                    <option>United States</option>
                    <option>Europe</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2">
                  <input
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
                    type="text"
                    name="postal-code"
                    id="postal-code"
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
            type="submit"
            className="rounded-md bg-amber-400 px-3 py-2 text-sm font-semibold text-white shadow-sm
             hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-black">
            <Link to="/SignIn">Save</Link>
          </button>
        </div>
      </form>
      <Footer />
      <ToTopButton />
    </>
  )
}

export default Registration