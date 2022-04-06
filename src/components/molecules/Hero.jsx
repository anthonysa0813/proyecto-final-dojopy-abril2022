import React from "react";
import { HeroComponent } from "../../styles/HeroStyle";
import reloj from "../../images/reloj.png";
import audifonos from "../../images/audifonos.png";

const Hero = () => {
  return (
    <HeroComponent>
      <div className="wrapper">
        <div className="headerContainer">
          <div className="firstProduct ">
            <div className="infoProduct">
              <h2>50% de descuento en Apple Watch</h2>
              <a href="">Comprar ahora</a>
            </div>
            <div className="imageProduct">
              <img src={reloj} alt="" />
            </div>
          </div>
          <div className="secondProduct ">
            <div className="infoProduct">
              <h2>50% de descuento en Apple Watch</h2>
              <a href="">Comprar ahora</a>
            </div>
            <div className="imageProduct">
              <img src={audifonos} alt="" />
            </div>
          </div>
        </div>
      </div>
    </HeroComponent>
  );
};

export default Hero;
