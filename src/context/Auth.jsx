import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userStatus, setUserStatus] = useState(false);

  return (
    <AuthContext.Provider value={{ userStatus, setUserStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
