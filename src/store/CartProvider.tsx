import React from "react";
import CartContext, { IContext } from "./cartContext";

const CartProvider = (props: any) => {
  const addItemCartHandler = (item: any) => {};
  const removeItemCartHandler = (id: number) => {};
  const cartContext: IContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
