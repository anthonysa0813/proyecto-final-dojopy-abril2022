import React from "react";
import { HeaderContainer } from "../../styles/headerStyle";
import logo from "../../images/logo.png";

const Header = () => {
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
            <i className="icon-shopping-cart"></i>
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
