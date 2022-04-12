import React, { useContext } from "react";
import { HeaderContainer } from "../../styles/headerStyle";
import logo from "../../images/logo.png";
import { ProductoContext } from "../../context/ProductContext";

const Header = () => {
  const { productArr } = useContext(ProductoContext);
  const { totalPrice, products } = productArr;

  return (
    <HeaderContainer className="">
      <div className="wrapper ">
        <div className="headerMenu ">
          <nav className="menu">
            <div className="logoContainer">
              <img src={logo} alt="" />
            </div>
            <ul>
              <li>Productos</li>
              <li>Blog</li>
              <li>Tienda</li>
              <li>Contacto</li>
            </ul>
            <div className="cartContainer ">
              <i className="icon-shopping-cart ">
                <span className="cartCircle">
                  <p>{products.length}</p>
                </span>
              </i>
            </div>
          </nav>
          <form className="">
            <input type="text" />
            <button>
              <i className="icon-search"></i>
            </button>
          </form>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
