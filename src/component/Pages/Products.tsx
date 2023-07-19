import React, { useState, useEffect } from "react";
import { IProductStateItem } from "./../../interfaces/IProduct";
import ProductItem from "./ProductItem";
import { Row } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "./../../store/store";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Products = () => {
  const [prodUm, setProdUm] = useState<Array<IProductStateItem>>([]);
  const products = useAppSelector((state) => state.prod.products);
  const dispatch = useAppDispatch();

  function handlerFetchProducts(products: any) {
    try {
      setProdUm(products.payload.value);
    } catch (err: any) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    handlerFetchProducts(products);
  }, [handlerFetchProducts]);

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
