import React, { createContext, useState } from "react";

export const TotalProductsContext = createContext();

const TotalProductsProvider = ({ children }) => {
  const [ProductsFirebase, setProductsFirebase] = useState([]);

  return (
    <TotalProductsContext.Provider
      value={{ ProductsFirebase, setProductsFirebase }}
    >
      {children}
    </TotalProductsContext.Provider>
  );
};

export default TotalProductsProvider;
