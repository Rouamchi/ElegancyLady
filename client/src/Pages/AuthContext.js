import React, { createContext} from "react";
import { useLocalStorage } from "react-use-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useLocalStorage("islogin", false);
  const [username, setUsername] = useLocalStorage("username", "");

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin, username, setUsername }}>
      {children}
    </AuthContext.Provider>
  );
};
