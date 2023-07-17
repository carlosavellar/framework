import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MdLocalGroceryStore } from "react-icons/md";

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Varanda</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/profile">
                <Nav.Link>Profile</Nav.Link>
              </LinkContainer>
            </Nav>
            <Button size="lg" variant="info">
              <MdLocalGroceryStore /> Check out
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
