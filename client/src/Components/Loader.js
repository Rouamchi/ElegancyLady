import React from 'react'
const Loader = () => {
  return (
    <>
        <div className="rounded-[12px] text-xl mb-0 md:mb-2 p-0 animate-pulse">
          <a href="/">
            <div className="w-full h-48 md:h-80 bg-gray-200 rounded md:rounded-2xl mb-3">
              {/* <div className="flex items-center justify-center w-full h-full">
                <div className="flex justify-center items-center space-x-1 text-sm text-gray-500">
                  <div className="w-2 h-2 bg-gray-400 rounded-full" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full" />
                </div>
              </div> */}
            </div>
            <div className="h-4 bg-gray-200 rounded w-2/4 mb-2 ml-1" />
            <div className="h-1 bg-gray-200 rounded w-2/4 mb-2 ml-1" />
            <div className="h-8 bg-gray-200 rounded w-4/4 ml-1 mr-1" />
          </a>
        </div>
        <div className="rounded-[12px] text-xl mb-0 md:mb-2 p-0 animate-pulse">
          <a href="/">
            <div className="w-full h-48 md:h-80 bg-gray-200 rounded md:rounded-2xl mb-3">
              <div className="flex items-center justify-center w-full h-full">
              </div>
            </div>
            <div className="h-4 bg-gray-200 rounded w-2/4 mb-2 ml-1" />
            <div className="h-1 bg-gray-200 rounded w-2/4 mb-2 ml-1" />
            <div className="h-8 bg-gray-200 rounded w-4/4 ml-1 mr-1" />
          </a>
        </div>
        <div className="rounded-[12px] text-xl mb-2 p-0 animate-pulse">
          <a href="/">
            <div className="w-full h-48 md:h-80 bg-gray-200 rounded md:rounded-2xl mb-3">
            </div>
            <div className="h-4 bg-gray-200 rounded w-2/4 mb-2 ml-1" />
            <div className="h-1 bg-gray-200 rounded w-2/4 mb-2 ml-1" />
            <div className="h-8 bg-gray-200 rounded w-4/4 ml-1 mr-1" />
          </a>
        </div>
        <div className="rounded-[12px] text-xl mb-2 p-0 animate-pulse">
          <a href="/">
            <div className="w-full h-48 md:h-80 bg-gray-200 rounded md:rounded-2xl mb-3">
            </div>
            <div className="h-4 bg-gray-200 rounded w-2/4 mb-2 ml-1" />
            <div className="h-1 bg-gray-200 rounded w-2/4 mb-2 ml-1" />
            <div className="h-8 bg-gray-200 rounded w-4/4 ml-1 mr-1" />
          </a>
        </div>

      <div className='text-center justify-center mt-6 -mb-16'>
        <div className="animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-gray-400 rounded-full" role="status" aria-label="loading">
        </div>
      </div>

    </>
  )
}

export default Loader