import React, { FC, useState } from "react";

import { AuthContext } from "./authContext";

interface IAuthStateProps {
  children: React.ReactNode;
}

export const AuthState: FC<IAuthStateProps> = ({ children }) => {
  const tokenFromStorage = localStorage.getItem("token");
  const [token, setToken] = useState(tokenFromStorage);

  const onAddToken = (token: string) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        onAddToken
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
