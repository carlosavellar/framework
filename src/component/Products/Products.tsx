import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { IProductState, IProductStateItem } from "../../interfaces/IProduct";
import {
  fetchProduct,
  selectAllProducts,
} from "../../store/slices/productSlice";
import mockdata from "./../../mock-data/products.json";

export const Products = () => {
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  const [prodUm, setProdUm] = useState<Array<IProductStateItem>>([]);

  useEffect(() => {
    dispatch(fetchProduct({ payload: mockdata }));
  }, [mockdata]);

  useEffect(() => {
    setTimeout(() => {
      console.log(products["payload"]);
      setProdUm(products);
    }, 3000);
  }, [products]);

  return (
    <>
      <h1>Products</h1>
    </>
  );
};
