import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IProductState, IProductStateItem } from "../../interfaces/IProduct";
const Products = () => {
  const products = useSelector((state: IProductState) => state);
  console.log(products.value);
  return (
    <>
      <h1>Products</h1>
      {products.value.map((item: IProductStateItem) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </>
  );
};

export default Products;
