import React from "react";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../Action/UserAction";

export default function NavBar() {
  const cartState = useSelector((state) => state.CartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const dispatch = useDispatch();
  const { currentUser } = userState;
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src="images/logo.jpg"
              alt="logo"
              style={{ height: "80px", width: "300px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {currentUser ? (
                <>
                  <LinkContainer to="/">
                    <NavDropdown title={currentUser.name} id="nav-dropdown">
                      <LinkContainer to="/orders">
                        <NavDropdown.Item eventKey="4.1">
                          Order
                        </NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={() => dispatch(logoutUser())}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </LinkContainer>
                  <LinkContainer to="/cart">
                    <Nav.Link>Cart {cartState.cartItems.length}</Nav.Link>
                  </LinkContainer>
                  {currentUser.isAdmin && (
                    <LinkContainer to="/admin">
                      <Nav.Link>Admin Panel</Nav.Link>
                    </LinkContainer>
                  )}
                </>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link>Register</Nav.Link>
                  </LinkContainer>{" "}
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
