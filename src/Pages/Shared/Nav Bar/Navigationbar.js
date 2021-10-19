import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClinicMedical, faHandHoldingMedical,faUsers, faNewspaper,faAddressCard,faSignInAlt,faUser,faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Navigationbar = () => {
  const homeIcon= <FontAwesomeIcon icon={faClinicMedical} />
  const care = <FontAwesomeIcon icon={faHandHoldingMedical} />
  const us = <FontAwesomeIcon icon={faUsers} />
  const news = <FontAwesomeIcon icon={faNewspaper} />
  const about = <FontAwesomeIcon icon={faAddressCard} />
  const signin = <FontAwesomeIcon icon={faSignInAlt} />
  const signout = <FontAwesomeIcon icon={faSignOutAlt} />
  const loginas = <FontAwesomeIcon icon={faUser} />
 
  const { user, logOut } = useAuth();
  console.log(user);
    return (
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
  <Container >
  <Navbar.Brand as={Link} to="/home"><span className="text-warning">{homeIcon}</span> Aged HealthCare</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={HashLink} to ="/home#services"><span  className="text-warning">{care}</span> Care and Services</Nav.Link>
      <Nav.Link as={Link} to="/whyus"><span className="text-warning">{us}</span> Why Us</Nav.Link>
      <Nav.Link as={Link} to="/news"> <span className="text-warning">{news}</span> News</Nav.Link>
      <Nav.Link as={Link} to="/aboutus"><span className="text-warning">{about}</span> About Us</Nav.Link>
      
    </Nav>
    <Nav>
    {user?.email?
       <Button onClick={logOut} variant="info m-1 mt-1"><span className="text-warning">{signout}</span>Logout</Button> :
      <Nav.Link as={Link} to="/login" className="mx-3"><span className="text-warning">{signin}</span> Login</Nav.Link>}
      <Navbar.Text className="text-white d-flex mx-2 ">
        <div><span className="text-warning">{loginas}</span> Login as : {user?.displayName}</div>
        <div><img className="w-25" src={user?.photoURL} alt="" /></div>
      </Navbar.Text>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
        
    );
};

export default Navigationbar;