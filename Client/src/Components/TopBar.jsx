import React from "react";
import { Container } from "react-bootstrap";
import { MdLocalOffer } from "react-icons/md";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <>
      {/* <Container fluid>
      <Navbar bg = 'dark' variant='dark' expand='lg'>
        
            <h6 className='text-light'>
                <MdLocalOffer className='text-warning'/> &nbsp;&nbsp;
                Free Delevery on Order Above 500/- Rupees</h6>
            <Nav className = 'ms-auto'>
                <LinkContainer to='/' >
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/about'>
                    <Nav.Link>About</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/contact'>
                    <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/policy'>
                    <Nav.Link>Terms and policy</Nav.Link>
                </LinkContainer>
            </Nav>
      </Navbar>
      </Container> */}
      <Container fluid className="bg-dark d-flex justify-content-between">
        <h6 className="text-light mt-2">
          <MdLocalOffer className="text-warning" /> &nbsp;&nbsp; Free Delevery
          on Order Above 500/- Rupees
        </h6>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/policy">
              Policy
            </Link>
          </li>
        </ul>
      </Container>
    </>
  );
}
