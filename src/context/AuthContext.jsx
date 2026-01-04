/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";
// create context
const AuthContext = createContext();
// create provider
export const AuthProvider = ({ children }) => {
  // when site loaded,no user is logged in so initial state should be null
  const [user, setUser] = useState(null); //   { name: "مهدی" }
  // create login function
  const login = (userData) => {
    //in real app, you would fetch data from server
    setUser(userData);
  };
  // create logout function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={ { user, login, logout } }>
      {children}
    </AuthContext.Provider>
  );
};
// create custom hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("استفاده از useAuth فقط در داخل AuthProvider مجاز است");
  }
  return context;
};
