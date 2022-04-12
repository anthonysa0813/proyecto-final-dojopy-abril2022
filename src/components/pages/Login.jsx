import React, { useState } from "react";
import { LoginContainer } from "../../styles/login";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <LoginContainer className="">
      <div className="wrapper">
        <form className="">
          <h2 className="text-center">Iniciar Sesión</h2>
          <div className="field">
            <label htmlFor="">Escribe tu correo:</label>
            <input type="email" name="email" />
          </div>
          <div className="field">
            <label htmlFor="">Escribe tu contraseña:</label>
            <input type="password" />
          </div>
          <div className="field-button">
            <button className="btn btn-primary">Iniciar Sesión</button>
          </div>
        </form>
      </div>
    </LoginContainer>
  );
};

export default Login;
