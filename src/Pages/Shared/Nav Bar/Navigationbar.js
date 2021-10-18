import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Navigationbar = () => {
  const { user, logOut } = useAuth();
    return (
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
  <Container >
  <Navbar.Brand as={Link} to="/home">Aged HealthCare</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={HashLink} to ="/home#services">Aged Care and Services</Nav.Link>
      <Nav.Link as={Link} to="/whyus">Why Us</Nav.Link>
      <Nav.Link as={Link} to="/news">News</Nav.Link>
      <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
      
    </Nav>
    <Nav>
    {user?.email?
       <Button onClick={logOut} variant="light">Logout</Button> :
      <Nav.Link as={Link} to="/login">Login</Nav.Link>}
      <Navbar.Text className="text-white ">
        Login as : {user?.displayName}
      </Navbar.Text>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default Navigationbar;