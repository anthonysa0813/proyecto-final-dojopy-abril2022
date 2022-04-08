import React, { createContext, useState } from "react";

export const ProductoContext = createContext();

const ProductProvider = ({ children }) => {
  const [productArr, setproductArr] = useState({
    products: [],
    totalPrice: 0,
  });
  return (
    <ProductoContext.Provider value={{ productArr, setproductArr }}>
      {children}
    </ProductoContext.Provider>
  );
};

export default ProductProvider;
