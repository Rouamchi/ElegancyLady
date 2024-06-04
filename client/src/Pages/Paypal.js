import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from 'react-router-dom'
import ToTopButton from "../Components/ToTopButton";


const Paypal = () => {
  return (
    <>
      <Header />
      <>
        {/* component */}
        <div className="min-h-screen flex justify-center items-center bg-white mt-10">
          <div className="p-10 border-[1px] -mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-3">
            <div className="py-8">
              <img alt=''
                width={30}
                className="-mt-10"
                src="https://www.paypalobjects.com/images/shared/momgram@2x.png"
              />
            </div>
            <input
              className="p-3 border-[1px] border-slate-500 rounded-sm w-80"
              placeholder="E-Mail or Phone number"
            />
            <div className="flex flex-col space-y-1">
              <input
                className="p-3 border-[1px] border-slate-500 rounded-sm w-80"
                placeholder="Password"
              />
              <p className="font-bold text-[#0070ba]">Forgot password?</p>
            </div>
            <div className="flex flex-col space-y-5 w-full">
              <Link to='/Checkout' className="w-full text-center bg-[#0070ba] rounded-3xl p-3 text-white font-bold transition duration-200 hover:bg-[#003087]">
                Log in
              </Link>
              <div className="flex items-center justify-center border-t-[1px] border-t-slate-300 w-full relative">
                <div className="-mt-1 font-bod bg-white px-5 absolute">Or</div>
              </div>
              <Link to="/SignIn" className="w-full text-center border-blue-900 hover:border-[#003087] hover:border-[2px] border-[1px] rounded-3xl p-3 text-[#0070ba] font-bold transition duration-200">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </>
      <Footer />
      <ToTopButton />

    </>
  )
}

export default Paypal