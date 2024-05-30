import React from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import ReactWhatsapp from 'react-whatsapp'

const Footer = () => {
  return (
    <>

      <footer className="bg-black font-sans dark:bg-black left-0 right-0 bottom-0">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <h1 className="max-w-lg text-xl font-semibold tracking-tight text-white xl:text-2xl dark:text-gray-800">
              ⚜️ Contact With Us !</h1>

              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Write your message" />

                <Link to="/SignIn" className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 md:w-auto md:mx-4 focus:outline-none bg-amber-500 rounded-lg hover:bg-amber-400 focus:ring focus:ring-black focus:ring-opacity-80">
                  Send
                </Link>
              </div>
            </div>

            <div>
              <p className="font-semibold text-white dark:text-gray-800">⚜️ Pages ⚜️</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <Link to="/" className="text-amber-400 transition-colors duration-300 dark:text-amber-400 dark:hover:text-amber-400 hover:underline hover:cursor-pointer hover:text-white">
                ⚜️ Elegancy Lady </Link>
                <p className="text-amber-400 transition-colors duration-300 dark:text-amber-400 dark:hover:text-amber-400 hover:underline hover:cursor-pointer hover:text-white">
                ⚜️ Who We Are ? </p>
                <p className="text-amber-400 transition-colors duration-300 dark:text-amber-400 dark:hover:text-amber-400 hover:underline hover:cursor-pointer hover:text-white">
                ⚜️ Our Categories </p>
              </div>
            </div>

            <div>
              <p className="font-semibold text-white dark:text-gray-800">⚜️ Contact Us ⚜️</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <Link to="https://www.instagram.com/elegancy_lady_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank' rel='noreferrer'
                  className="text-amber-400 transition-colors duration-300 dark:text-amber-400 dark:hover:text-amber-400 hover:underline hover:cursor-pointer hover:text-white">
                  ⚜️ Instagram Page </Link>
                <Link to="https://www.facebook.com/profile.php?id=61559465095245&mibextid=ZbWKwL" target='_blank' rel='noreferrer'
                  className="text-amber-400 transition-colors duration-300 dark:text-amber-400 dark:hover:text-amber-400 hover:underline hover:cursor-pointer hover:text-white">
                  ⚜️ Facebook Page </Link>
                <Link to="#" target='_blank' rel='noreferrer'
                  className="text-amber-400 transition-colors duration-300 dark:text-amber-400 dark:hover:text-amber-400 hover:underline hover:cursor-pointer hover:text-white">
                  <ReactWhatsapp className='whatsapp' number="+212714540273">⚜️ WhatsApp Account </ReactWhatsapp></Link>
              </div>
            </div>
          </div>

          <hr className="my-6 border-amber-400 md:my-8 dark:border-gray-700 h-2" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-1 gap-4 hover:cursor-pointer">
              <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" width="130" height="110" alt="" />
              <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" width="130" height="110" alt="" />
            </div>

            <div className="flex gap-3 hover:cursor-pointer">
              <Link to='https://www.facebook.com/profile.php?id=61559465095245&mibextid=ZbWKwL' target='_blank'>
                <button className="bg-amber-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
                  <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
              </Link>

              <Link to='https://twitter.com/i/flow/login' target='_blank'>
                <button className="bg-amber-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </button>
              </Link>

              <Link to='https://www.instagram.com/elegancy_lady_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank'>
                <button className="bg-amber-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </button>
              </Link>

              <Link to='https://web.telegram.org/a/' target='_blank'>
                <button className="bg-amber-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M236.88 26.19a9 9 0 0 0-9.16-1.57L25.06 103.93a14.22 14.22 0 0 0 2.43 27.21L80 141.45V200a15.92 15.92 0 0 0 10 14.83 15.91 15.91 0 0 0 17.51-3.73l25.32-26.26L173 220a15.88 15.88 0 0 0 10.51 4 16.3 16.3 0 0 0 5-.79 15.85 15.85 0 0 0 10.67-11.63L239.77 35a9 9 0 0 0-2.89-8.81Zm-61.14 36-89.59 64.16-49.6-9.73ZM96 200v-47.48l24.79 21.74Zm87.53 8-82.68-72.5 119-85.29Z" />
                  </svg>
                </button>
              </Link>

              <Link to='https://mail.google.com/' target='_blank'>
                <button className="bg-amber-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
                  <FaEnvelope className="w-5 h-5" ></FaEnvelope>
                </button>
              </Link>

              <Link to='' target='_blank'>
                <button className="bg-amber-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
                  <ReactWhatsapp className="w-5 h-5" number="+212714540273"><FaWhatsapp className=" w-5 h-5"></FaWhatsapp></ReactWhatsapp>
                </button>
              </Link>

              <Link to='' target='_blank'>
                <button className="bg-amber-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z" fill="currentColor" /></g></svg>
                </button>
              </Link>
            </div>
          </div>
          <p className="font-sans p-8 text-start text-white md:text-center md:text-lg md:p-4">© 2024 Elegancy Lady At DIA STORE. All rights reserved.</p>
        </div>
      </footer>

    </>
  )
}

export default Footer