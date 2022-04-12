import React, { useEffect, useState, useContext } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { ProductsContainer } from "../../styles/products";
import CardProduct from "../atomics/CardProduct";
import { TotalProductsContext } from "../../context/TotalProductsContext";
// import { TotalProductsContext } from "../../context/TotalProductsContext";

const Products = () => {
  const context = useContext(TotalProductsContext);
  console.log(context);
  const { ProductsFirebase, setProductsFirebase } = context;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "products"), (documento) => {
      const documentsFilter = documento.docs.map((d) => {
        return { ...d.data(), id: d.id };
      });
      console.log(documentsFilter);

      setProductsFirebase(documentsFilter);
      setProducts(documentsFilter);
    });
  }, []);

  return (
    <ProductsContainer>
      <div className="wrapper">
        <div className="productsContent">
          <h3>Ofertas del día</h3>

          {products.map((product) => {
            return <CardProduct product={product}>{product.title}</CardProduct>;
          })}
        </div>
      </div>
    </ProductsContainer>
  );
};

export default Products;
