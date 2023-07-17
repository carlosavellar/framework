import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IProductStateItem } from "./../../../interfaces/IProduct";
import {
  fetchProduct,
  selectAllProducts,
} from "../../../store/slices/productSlice";
import mockedData from "./../../../mock-data/products.json";
import { Container, Row, Col } from "react-bootstrap";
import ProductItem from "./ProductItem/ProductItem";
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const images = require.context("../../../assets/);

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Products = () => {
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  const [prodUm, setProdUm] = useState<Array<IProductStateItem>>([]);

  useEffect(() => {
    dispatch(fetchProduct({ payload: mockedData }));
  }, [mockedData]);

  function isPromise(products: any) {
    return (
      Promise.resolve(products) === products &&
      typeof products.then === "function"
    );
  }

  useEffect(() => {
    try {
      console.log(products.payload ? "🥣" : "nada");
      setProdUm(products.payload.value);
    } catch (err: any) {
      console.log(err.message);
    }
  }, [products, isPromise]);
  // console.log(prodUm.values, "values");
  return (
    <>
      <h1>Products</h1>

      {prodUm.map((item: IProductStateItem) => {
        return (
          <Container fluid key={item.id}>
            <Row>
              <Col>
                <ProductItem {...item} />
              </Col>
            </Row>
          </Container>
        );
      })}
    </>
  );
};

export default Products;
