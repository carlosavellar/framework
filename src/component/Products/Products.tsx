import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { IProductState, IProductStateItem } from "../../interfaces/IProduct";
import {
  fetchProduct,
  selectAllProducts,
} from "../../store/slices/productSlice";
import mockdata from "./../../mock-data/products.json";

const Products = () => {
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct({ payload: mockdata }));
  }, [mockdata]);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <>
      <h1>Products</h1>
      {products.payload.value.map((item: IProductStateItem) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </>
  );
};

export default Products;
