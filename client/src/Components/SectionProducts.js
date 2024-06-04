import React from 'react'
import { Link } from "react-router-dom"


const SectionProducts = () => {
  return (
    <>
      <section className="mt-0">
        <div
          className=" h-48 lg:h-64 overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://wallpaperaccess.com/full/318963.jpg")'
          }}>
          <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div className=" px-6 lg:px-10 max-w-xl lg:max-w-2xl">
              <h2 className="text-xl lg:text-3xl text-white font-semibold  mt-4 lg:mt-4">PRODUCTS OF ELEGANCY LADY</h2>
              <p className="mt-2 lg:text-lg text-amber-300">
                A collection which is constantly renewed to satisfy you, and which is intended to be accessible to all!
                Authentic, original & Luxe!
              </p>
              <Link to="/" className="flex items-center mt-1 lg:mt-4 px-3 py-2 bg:transparent text-white text-sm uppercase font-medium rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                <span>Back To Home</span>
                <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionProducts