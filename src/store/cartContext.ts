import React from "react";

export interface IContext {
  items: [];
  totalAmount: 0;
  addItem: (payload: any) => void;
  removeItem: (payload: any) => void;
}

const CarContext = React.createContext<IContext>({
  items: [],
  totalAmount: 0,
  addItem: (item: any) => {},
  removeItem: (id) => {},
});

export default CarContext;
