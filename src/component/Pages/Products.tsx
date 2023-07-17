import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IProductStateItem } from "./../../interfaces/IProduct";
import {
  fetchProduct,
  selectAllProducts,
} from "./../../store/slices/productSlice";
import mockedData from "./../../mock-data/products.json";
import ProductItem from "./ProductItem";
import { Row } from "react-bootstrap";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Products = () => {
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  const [prodUm, setProdUm] = useState<Array<IProductStateItem>>([]);

  useEffect(() => {
    dispatch(fetchProduct({ payload: mockedData }));
  }, [mockedData]);

  function fetchDataObj(products: any) {
    try {
      setProdUm(products.payload.value);
    } catch (err: any) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    fetchDataObj(products);
  }, [fetchDataObj]);

  return (
    <Row>
      <h1>Products</h1>
      {prodUm.map((item: IProductStateItem) => (
        <ProductItem {...item} key={item.id} />
      ))}
    </Row>
  );
};

export default Products;
