import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ToTopButton from "../Components/ToTopButton";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100">
        <div className="container px-6 py-10 mx-auto md:py-16">
          <div className="flex flex-col space-y-6 md:flex-row md:items-center md:space-x-6">
            <div className="w-full md:w-1/2">
              <div className="max-w-lg">
                <h1 className="text-2xl font-medium tracking-wide text-amber-400 md:text-4xl">
                  Find your premium new car exported from Germany
                </h1>
                <p className="mt-2 text-gray-600">
                  We work with the best remunated car dealers in Germany to find
                  your new car.
                </p>
                <div className="grid gap-6 mt-8 sm:grid-cols-2">
                  <div className="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Premium selection</span>
                  </div>
                  <div className="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Insurance</span>
                  </div>
                  <div className="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>All legal documents</span>
                  </div>
                  <div className="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>From German car dealers</span>
                  </div>
                  <div className="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Payment Security</span>
                  </div>
                  <div className="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Fast shipping (+ Express)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1493238792000-8113da705763?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="car"
                className="w-full h-full max-w-2xl rounded"
              />
            </div>
          </div>
        </div>
        <div className="container px-6 py-10 mx-auto md:py-16">
          <div className="flex flex-col space-y-6 md:flex-row md:items-center md:space-x-6">
            <div className="flex items-center justify-center w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="car"
                className="w-full h-full max-w-2xl rounded"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="max-w-md mx-auto">
                <h1 className="text-2xl font-medium tracking-wide text-amber-400 md:text-4xl">
                  Why us?
                </h1>
                <p className="mt-5 leading-7 text-gray-600">
                  With us you will quickly get the car you want. With our partner
                  network of all known premium car manufacturers, it is possible for
                  us to respond to your special requests. <br />
                  Our logistics partners enable a fast delivery. We also offer the
                  option that the car is delivered to you by air.
                </p>
                <div className="grid gap-6 mt-8 sm:grid-cols-2">
                  <div className="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Fast Shipping</span>
                  </div>
                  <div className="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Secure process</span>
                  </div>
                  <div className="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Exclusive selection</span>
                  </div>
                  <div className="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Premium service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-medium tracking-wide text-center text-amber-400 md:text-4xl">
          Contact with us
        </h1>
        <div className=''>
          <iframe title='map' className='w-full h-96 mt-10 mb-4'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26594.860689190984!2d-7.6566622005143214!3d33.57006373675486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2e9854fbd49%3A0xcb8dc82bd8575005!2sMa%C3%A2rif%2C%20Casablanca!5e0!3m2!1sen!2sma!4v1717561196560!5m2!1sen!2sma"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
      <Footer />
      <ToTopButton />
    </>
  )
}

export default AboutUs