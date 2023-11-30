import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("User");

  const Login = (userEmail, userPassword) => {
    setEmail(userEmail);
    setPassword(userPassword);
    localStorage.setItem("isLoggedIn", "true");
  };
  const userValue = {
    Login,
    email,
    setEmail,
    name,
    setName,
    password,
    setPassword,
  };

  return (
    <UserContext.Provider value={userValue}>{children}</UserContext.Provider>
  );
};
