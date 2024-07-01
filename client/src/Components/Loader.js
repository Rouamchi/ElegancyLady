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
    </>
  )
}

export default Loader