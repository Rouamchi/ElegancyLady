import React from "react";
import { useLocalStorage } from "react-use-storage";
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
  const [islogin, setIslogin] = useLocalStorage("islogin", false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIslogin(false);
    console.log(islogin)
    localStorage.removeItem('token');
    navigate('/SignIn');
  };

  return (
    <button onClick={handleLogout} className="your-logout-button-class">
      LOGOUT
    </button>
  );
};

export default SignOut;
