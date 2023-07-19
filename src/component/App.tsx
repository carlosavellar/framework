import React, { Fragment } from "react";
import "./App.css";
import { useAppSelector } from "./../store/store";
import ProductForm from "./ProductForm";

const RootComponent = () => {
  const products = useAppSelector((state) => state.product);
  return (
    <Fragment>
      {products.products.map((item, index) => {
        return <div key={index}>{item.description}</div>;
      })}
      <div className="App">12</div>
      <ProductForm />
    </Fragment>
  );
};

export default RootComponent;
