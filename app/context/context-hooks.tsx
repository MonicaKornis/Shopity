import React from "react";
import CartContext from "./cart-context";

const useCart = () => {
  const context = React.useContext(CartContext);
  return context;
};

export default useCart;
