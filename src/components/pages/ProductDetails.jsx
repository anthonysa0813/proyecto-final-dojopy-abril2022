import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TotalProductsContext } from "../../context/TotalProductsContext";
import { findProduct } from "../../helpers/FindProduct";
import { ItemContainer } from "../../styles/products";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { comments } from "../../data/database";

const ProductDetails = () => {
  const { id } = useParams();
  const [productId, setProductId] = useState({});
  const { ProductsFirebase } = useContext(TotalProductsContext);
  const { pictures } = ProductsFirebase[0]; // [{}]
  console.log(productId);

  useEffect(() => {
    setProductId(findProduct(ProductsFirebase, id));
  }, []);

  return (
    <ItemContainer className="">
      <div className="wrapper">
        <div className="ItemContent ">
          <div className="picturesGrid ">
            {pictures.map((picture) => {
              return <InnerImageZoom src={picture} zoomScale={2} />;
            })}
          </div>
          <div className="productInfo">
            <h1>{productId.title}</h1>
            <span>{productId.price}</span>
          </div>
        </div>
      </div>
    </ItemContainer>
  );
};

export default ProductDetails;
