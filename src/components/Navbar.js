import React from 'react';
import { Link } from 'react-router-dom';
import{ Navbar, Nav } from 'react-bootstrap';


function NavbarComp(){
  return(
    <Navbar bg='dark' expand='lg'>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav>

    <Link className="d-inline p-2 bg-dark text-white"  to="/">Home</Link>
    <Link className="d-inline p-2 bg-dark text-white"  to="/ammibo">ammibo</Link>
    <Link className="d-inline p-2 bg-dark text-white"  to="/collection">collection</Link>
    <Link className="d-inline p-2 bg-dark text-white"   to="/feedback">review</Link>


    </Nav>
    </Navbar.Collapse>
    </Navbar>
    
  )
}

export default NavbarComp;