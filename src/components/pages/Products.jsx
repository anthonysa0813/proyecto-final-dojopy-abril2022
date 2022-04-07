import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const Products = () => {
  const [productsArr, setProductsArr] = useState([]);

  useEffect(() => {
    onSnapshot(
      collection(db, "products"),
      (documento) => {
        const productsFiltrado = documento.docs.map((d) => {
          return { ...d.data(), id: d.id };
        });
        setProductsArr(productsFiltrado);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return <div>Products</div>;
};

export default Products;
