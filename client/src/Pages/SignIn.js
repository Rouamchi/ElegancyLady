import React, { useState, useContext } from "react";
import Axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ToTopButton from "../Components/ToTopButton";
import Logo from '../images/Logo.png';
import { useLocalStorage } from "react-use-storage";
import { AuthContext } from "../Pages/AuthContext";


const SignIn = () => {
  const [islogin, setIslogin] = useLocalStorage("islogin", false);
  const { setUsername } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const url = "https://elegancyladyserver.onrender.com/users/login";
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  const click = (e) => {
    e.preventDefault();
    Axios.post(url, {
      username: data.username,
      password: data.password,
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.data.success) {
          console.log(res.data);
          console.log(islogin);
          setIslogin(true)
          setUsername(data.username);
          navigate('/');
        } else {
          setError("Invalid username or password");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.status === 401) {
          setError("Invalid username or password");
        } else {
          setError("An error occurred. Please try again.");
        }
      });
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Header />
      <form className='grid justify-items-stretch justify-center mx-6 my-8 md:mx-8 '>
        <div className="space-y-8">
          <img
            className="mx-auto h-40 w-auto"
            src={Logo}
            alt="Your Company"
          />
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">
            Sign in to your account
          </h2>
          <div className="border-gray-900/10 pb-1">
            {error && <div className="text-red-500">{error}</div>}
            <div className="sm:col-span-4 mb-12">
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={data.username}
                    onChange={(e) => { handle(e) }}
                    autoComplete="username"
                    className="pl-4 block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Enter Your Username" />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <div className="relative -mt-8">
                <div className="flex items-end justify-end mb-1">
                  <div className="text-sm">
                    <Link to="/" className="font-semibold text-amber-400 hover:text-amber-500">
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <input
                  value={data.password}
                  onChange={(e) => { handle(e) }}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
                <button type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 mt-6 flex items-center focus:outline-none">
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            onClick={click}
            type="submit"
            className="flex w-full justify-center rounded-md bg-amber-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
            Sign In{" "}
          </button>
        </div>
      </form>
      <p className="mt-10 mb-10 text-center text-sm text-gray-500">
        Not a member?{' '}
        <Link to="/Registration" className="font-semibold leading-6 text-amber-500 hover:text-amber-400">
          Subscribe Now
        </Link>
      </p>
      <Footer />
      <ToTopButton />
    </>
  );
};

export default SignIn;
