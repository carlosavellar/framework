import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useAppSelector } from "./../../store/store";
import logo from "./../../assets/logo.svg";
import ButtonCheckOut from "./ButtonCheckOut";
// import { useAppSelector } from "../../store/store";

const Navigation = () => {
  const logged = useAppSelector((state: any) => state.isLoggedIn);
  useEffect(() => {
    console.log(logged);
  }, []);
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
            <ButtonCheckOut />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
