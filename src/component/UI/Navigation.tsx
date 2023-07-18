import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "./../../assets/logo.svg";
import ButtonCheckOut from "./ButtonCheckOut";
import { useDispatch, useSelector } from "react-redux";
import { selectTotal } from "../../store/slices/productSlice";

const Navigation = () => {
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();
  const [getTotal, setGetTotal] = useState<number>(total);

  useEffect(() => {
    try {
      setGetTotal(total);
    } catch (err) {
      console.log(err);
    }
  }, [total]);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img id="logo" src={logo} alt="William Wallace Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/profile">
                <Nav.Link>Profile </Nav.Link>
              </LinkContainer>
            </Nav>
            <ButtonCheckOut getTotal={getTotal} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
