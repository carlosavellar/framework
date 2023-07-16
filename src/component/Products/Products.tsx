import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IProductStateItem } from "./../../interfaces/IProduct";
import {
  fetchProduct,
  selectAllProducts,
} from "../../store/slices/productSlice";
import mockedData from "./../../mock-data/products.json";

const Products = () => {
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  const [prodUm, setProdUm] = useState<Array<IProductStateItem>>([]);

  useEffect(() => {
    dispatch(fetchProduct(products));
  }, [mockedData]);

  useEffect(() => {
    setTimeout(() => {
      console.log(products["payload"]);
      setProdUm(products);
    }, 3000);
  }, [products]);

  return (
    <>
      <h1>Products</h1>
      {products.map((item: IProductStateItem, index: number) => {
        return <div key={index}>{item.name}</div>;
      })}
    </>
  );
};

export default Products;
