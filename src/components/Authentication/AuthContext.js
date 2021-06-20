import React, { useEffect, useState } from "react";
import { useCallback } from "react";

const AuthContext = React.createContext({
  token: "",
  readyToLogin: false,
  isLoggedIn: false,
  dispatchLogin: () => {},
  login: token => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [logStatus, setLogStatus] = useState(!!token);

  useEffect(() => {
    setAuth(false);
  }, [auth]);

  const loginHandler = token => {
    setToken(token);
    setLogStatus(prevState => !prevState);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    setLogStatus(prevState => !prevState);
    localStorage.removeItem("token");
  };

  const getLogin = useCallback(() => {
    setAuth(true);
  }, []);

  const contextValue = {
    token: token,
    readyToLogin: auth,
    isLoggedIn: logStatus,
    dispatchLogin: getLogin,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
