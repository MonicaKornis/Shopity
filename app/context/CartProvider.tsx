"use client";

import {  useState, useMemo } from "react";
import CartContext from "./cart-context";
import { ProductItem, Cart } from "./../types";

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, updateCart] = useState({});

  const addToCart = (item: ProductItem) => {
    updateCart((prevCart: Cart) => {
      let newState = structuredClone(prevCart);
      if (prevCart[item.product_id]) {
        let cartCount = prevCart[item.product_id][1] + 1;
        let newData = [...prevCart[item.product_id]];
        newData[1] = cartCount;
        newState[item.product_id] = newData;
      } else {
        let newData = [item, 1];
        newState[item.product_id] = newData;
      }
      return newState;
    });
  };

  const addAmmountToCart = (item: ProductItem, ammount: number) => {
    updateCart((prevCart: Cart) => {
      let newState = structuredClone(prevCart);
      if (prevCart[item.product_id]) {
        let newData = [...prevCart[item.product_id]];
        newData[1] = ammount;
        newState[item.product_id] = newData;
      } else {
        let newData = [item, 1];
        newState[item.product_id] = newData;
      }
      return newState;
    });
  };

  const removeOneFromCart = (itemId: number) => {
    updateCart((prevCart: Cart) => {
      let newState = structuredClone(prevCart);
      if (prevCart[itemId]) {
        let cartCount = prevCart[itemId][1] - 1;
        if (cartCount < 1) {
          delete newState[itemId];
          return newState;
        } else {
          let newData = [...prevCart[itemId]];
          newData[1] = cartCount;
          newState[itemId] = newData;
        }
      }
      return newState;
    });
  };

  const removeAllFromCart = (itemId: number) => {
    updateCart((prevCart: Cart) => {
      let newState: Cart = structuredClone(prevCart);
      delete newState[itemId];
      return newState;
    });
  };

  const clearCart = () => {
    updateCart(() => {
      return {};
    });
  };

  let contextValue = useMemo(
    () => ({
      cart,
      addToCart,
      removeAllFromCart,
      removeOneFromCart,
      addAmmountToCart,
      clearCart,
    }),
    [cart]
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
