import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BsCart3, BsHeart, BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import CategoryGrid from './CategoryGrid';
import ImageSlider from './ImageSlider';

function NavBar() {
  return (
    <>
    <Navbar expand="lg" className="shadow-sm">
      <Container fluid>
        {/* Left side menu toggle and links */}
        <div className="d-flex align-items-center">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          {/* Desktop Navigation Links */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/sale">Sale</Nav.Link>
              <Nav.Link as={Link} to="/coordinates">Co-ords</Nav.Link>
              <Nav.Link as={Link} to="/women">Women</Nav.Link>
              <Nav.Link as={Link} to="/men">Men</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>

        {/* Center Brand Name */}
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="mx-auto position-absolute start-50 translate-middle-x fw-bold"
        >
          SUFFAYAN
        </Navbar.Brand>

        {/* Right side icons - Always on right */}
        <div className="d-flex align-items-center ms-auto">
          <Nav className="flex-row">
            <Nav.Link href="#"><BsHeart size={20} /></Nav.Link>
            <Nav.Link href="#"><BsCart3 size={20} /></Nav.Link>
            <Nav.Link href="#"><BsPerson size={20} /></Nav.Link>
          </Nav>
          
        </div>
      </Container>
    </Navbar>
    <ImageSlider />
    <CategoryGrid />
    </>
  );
}

export default NavBar;