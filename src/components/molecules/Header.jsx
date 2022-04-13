import React, { useContext, useState } from "react";
import { HeaderContainer } from "../../styles/headerStyle";
import logo from "../../images/logo.png";
import { ProductoContext } from "../../context/ProductContext";
import { ModalContainer } from "../../styles/modal";
import LoginUser from "../atomics/LoginUser";
import { AiOutlineVerticalAlignBottom } from "react-icons/ai";

const Header = () => {
  const { productArr } = useContext(ProductoContext);
  const { totalPrice, products } = productArr;
  const [activeModal, setActiveModal] = useState(false);

  const closeSession = () => {
    sessionStorage.removeItem("estado");
  };

  return (
    <>
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
                <li onClick={() => setActiveModal(!activeModal)}>login</li>
                <li>
                  <AiOutlineVerticalAlignBottom onClick={closeSession} />
                </li>
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
      {activeModal && (
        <ModalContainer>
          <LoginUser setActiveModal={setActiveModal} />
        </ModalContainer>
      )}
    </>
  );
};

export default Header;
