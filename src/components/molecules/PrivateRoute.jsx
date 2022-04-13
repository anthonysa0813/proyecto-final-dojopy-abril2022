import React, { useContext } from "react";
import { AuthContext } from "../../context/Auth";
import { useNavigate, Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { userStatus } = useContext(AuthContext);
  console.log(userStatus);
  const navigate = useNavigate();
  console.log(Boolean("hajdhadj"));

  if (Boolean(sessionStorage.getItem("estado"))) {
    return children;
  } else {
    return <Navigate replace to="/" />;
  }
};

export default PrivateRoute;
