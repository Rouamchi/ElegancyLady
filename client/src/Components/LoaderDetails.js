import React from 'react'
import Header from './Header'
import Footer from './Footer'

const LoaderDetails = () => {
  return (
    <>
      <Header />
      <div className="flex mt-20 mb-20 items-center justify-center">
        <div className="w-2/3">
          <div className="w-full overflow-hidden shadow-lg animate-pulse">
            <div className="h-48 bg-gray-300" />
            <div className="px-6 py-4">
              <div className="h-6 bg-gray-300 mb-2" />
              <div className="h-4 bg-gray-300 w-2/3" />
            </div>
            <div className="px-6 pt-4 pb-2">
              <div className="h-4 bg-gray-300 w-1/4 mb-2" />
              <div className="h-4 bg-gray-300 w-1/2" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LoaderDetails