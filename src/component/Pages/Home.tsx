import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Products from "./Products";
import Login from "./Login";

const HomeContentHandler = () => (
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

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handlerUserLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {isLoggedIn ? (
        <HomeContentHandler />
      ) : (
        <Login onSetIsLoggedIn={handlerUserLogin} />
      )}
    </>
  );
};

export default Home;
