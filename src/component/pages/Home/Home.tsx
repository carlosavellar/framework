import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Products from "./../../Products/Products";

const Home = () => (
  <>
    <Container>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <Products />
        </Col>
      </Row>
    </Container>
  </>
);

export default Home;
