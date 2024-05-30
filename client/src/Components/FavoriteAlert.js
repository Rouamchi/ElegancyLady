import React from 'react'

const FavoriteAlert = () => {
  return (
    <>
        <div className="lg:-mt-20 fixed flex w-full flex-col items-center md:items-center space-y-4 sm:items-end">
          <div className="p-4 pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-400"
                    fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-sm font-medium text-gray-900">
                    Successfully Saved!
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Item Added To your Favorites Successfully!
                  </p>
                </div>
                <div className="ml-4 flex flex-shrink-0">
                    {/* ICON X */}
                    <button type="button"
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none ">
                      <span className="sr-only">Close</span>
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                    </button>
                </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default FavoriteAlert