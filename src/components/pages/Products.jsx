import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { ProductsContainer } from "../../styles/products";
import CardProduct from "../atomics/CardProduct";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "products"), (documento) => {
      const documentsFilter = documento.docs.map((d) => {
        return { ...d.data(), id: d.id };
      });
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
