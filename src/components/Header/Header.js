import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  // console.log(user)
  const Logout = () => {
    signOut(auth);
    navigate("/login");
  };
  return (
    <div>
      {/* <h2>thius is hearder</h2>  */}

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              as={Link}
              to="/"
              className="logo"
              src="https://www.pngkey.com/png/full/209-2095049_logo-publix-pharmacy-logo.png"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing" className="text-light">
                Blogs
              </Nav.Link>
            </Nav>

            {/* <Nav.Link as={Link} to="/about" className="text-light">
                About
              </Nav.Link> */}
            <Nav>
              <Nav.Link as={Link} to="/add-iteam" className="text-light">
                Add Iteam
              </Nav.Link>
              <Nav.Link href="#deets" className="text-light">
                Manage Iteam
              </Nav.Link>

              <div className="me-2 d-flex align-items-center">
                <span className="text-light">{user ? user?.email : ""}</span>
              </div>

              {user ? (
                <button className="btn btn-info" onClick={Logout}>
                  Sign out
                </button>
              ) : (
                <Nav.Link as={Link} to="/registration" className="text-light">
                  Registration
                </Nav.Link>
                
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
