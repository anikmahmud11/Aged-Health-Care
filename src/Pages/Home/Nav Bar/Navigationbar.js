import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigationbar = () => {
    return (
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Aged HealthCare</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#">Aged Care and Services</Nav.Link>
      <Nav.Link href="#">WHY US</Nav.Link>
      <Nav.Link href="#">News</Nav.Link>
      <Nav.Link href="#">About Us</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Login</Nav.Link>
      <Nav className="text-white m-2">
        User name : 
      </Nav>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navigationbar;