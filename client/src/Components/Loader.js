import React from 'react'

const Loader = () => {
  return (
    <>
      <div className="card rounded-[12px] m-10 text-xl shadow-2xl p-5 animate-pulse">
        <a href="/">
          <div className="w-full h-64 bg-gray-200 rounded mb-3" />
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
          <div className="h-1 bg-gray-200 rounded w-full mb-2" />
          <div className="h-4 bg-gray-200 rounded w-1/4" />
        </a>
      </div>

      <div className="flex min-h-screen items-center justify-center">
        <div className="w-1/3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
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
    </>
  )
}

export default Loader