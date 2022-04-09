import React, { useState, useContext } from "react";
import {
  formatPrice,
  formatPriceWithDiscount,
} from "../../helpers/formateoPrecio";
import { Card } from "../../styles/products";
import Stars from "simple-rating-stars";
import { ButtonFill, ButtonUnFill } from "../../styles/buttonsStyle";
import { ProductoContext } from "../../context/ProductContext";
import { Link } from "react-router-dom";

const CardProduct = ({ product }) => {
  const { productArr, setproductArr } = useContext(ProductoContext);

  const [stars, setStars] = useState(3);
  const [outOf, setOutOf] = useState(5);

  const addProduct = (producto) => {
    setproductArr([...productArr, producto]);
  };

  return (
    <Card className="debug">
      <div className="cardImage ">
        <img src={product.image} alt="" />
      </div>
      <div className="descriptions">
        <Link to={`/products/${product.id}`}>{product.title}</Link>
        <div className="pricesScore">
          <span>{formatPrice(product.price)}</span>
          <span>{formatPriceWithDiscount(product.price)}</span>
          <Stars
            stars={stars}
            outOf={outOf}
            full={"#f6fa2b"}
            empty={"#E1F1FF"}
            stroke={"#b6d7f9"}
          />
        </div>
        <p>{product.description}</p>
      </div>
      <div className="cardActions ">
        <ButtonFill onClick={() => addProduct(product)}>
          Agregar al carrito
        </ButtonFill>
        <ButtonUnFill>Comprar ahora</ButtonUnFill>
      </div>
    </Card>
  );
};

export default CardProduct;
