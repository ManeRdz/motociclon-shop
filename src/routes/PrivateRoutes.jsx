import React, { useContext } from "react";
import Contexto from "../contexto/Contexto";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { logeado } = useContext(Contexto);
  return logeado ? children : <Navigate to="login" />;
};

export default PrivateRoutes;
