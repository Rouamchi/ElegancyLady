import React, { useState } from "react"
// import Axios from "axios"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { Link } from 'react-router-dom'
import Logo from '../images/Logo.png'
import ToTopButton from "../Components/ToTopButton"
// import { useLocalStorage } from "react-use-storage";


const SignIn = () => {
  
  const [showPassword, setShowPassword] = useState(false);

  // const [islogin, setIslogin] = useLocalStorage("islogin", false);
  // const [userId, setUserId] = useLocalStorage("userId", '');
  // const url = "http://localhost:4000/users"
  // const [data, setData] = useState({
  //   username: "",
  //   password: "",
  // });

  // function handle(e) {
  //   const newdata = { ...data }
  //   newdata[e.target.id] = e.target.value
  //   setData(newdata)
  //   console.log(newdata)
  // }

  // function click(e) {
  //   e.preventDefault();
  //   Axios.post(url, {
  //     username: data.username,
  //     password: data.password,
  //   })
  //     .then(res => {
  //       console.log(res.data)
  //       setIslogin(true)
  //       setUserId(res.data._id)
  //       window.location = '/'
  //       console.log(res.data._id)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  //   }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Header />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-full w-full"
            src={Logo}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                // value={data.username} onChange={(e) => { handle(e) }}
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  required
                  className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <Link to="/" className="font-semibold text-amber-400 hover:text-amber-500">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className=" relative mt-2">
                <input
                // value={data.password} onChange={(e) => { handle(e) }}
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <button type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none">
                  {showPassword ? (
                    <svg x-show="!show" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-500">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg x-show="show" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-500">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div>
              <Link
                type="submit"
                // onClick={(e) => click(e)}
                className="flex w-full justify-center rounded-md bg-amber-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Sign in
              </Link>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link to="/Registration" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Subscribe Now
            </Link>
          </p>
        </div>
      </div>
      <Footer />
      <ToTopButton />
    </>
  )
}

export default SignIn