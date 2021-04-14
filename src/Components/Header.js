import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "./Pictures/kikambalogo_sized.png";

function Header() {
  return (
    <Navbar collapseOnSelect className="fixed-top " expand="sm" variant="dark">
      <Navbar.Brand href="#home" className="flex">
        <img src={logo} width="70" height="50" alt="React Bootstrap logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav ">
        <Container>
          <Nav className="ml-auto">
            <Nav.Link className="mr-auto active " href="#about">
              About us
            </Nav.Link>
            <Nav.Link className="mr-auto active" href="#donate">
              Donate
            </Nav.Link>
            <Nav.Link className="mr-auto active" href="#mail">
              Contact Us
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
