import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../navbar/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/logo2.png";
import { useAuth0 } from "@auth0/auth0-react";



function NavScrollExample() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar expand="lg" className="nav-bg">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="/" className="nav-brand">
          <img
            src={logo}
            alt="Logo"
            className="d-inline-block align-top me-2 logo"
          />
          <Navbar.Text className="nav-text d-none d-lg-inline">
            Maharajer Darbare
          </Navbar.Text>
        </Navbar.Brand>

        {/* Search Button and Hamburger Menu for mobile */}

        <div className="nav-mid d-lg-none d-flex align-items-center justify-content-center">
          <Form className="search-form d-flex me-2">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button className="search-button" variant="outline-success">
              Search
            </Button>
          </Form>
         
          <div className="hamburger-menu" onClick={toggleMenu}>
            <GiHamburgerMenu />
          </div>
        </div>

        {/* Navbar menu */}
        <Navbar.Collapse
          id="navbarScroll"
          className={`navbar-menu ${isMenuOpen ? "active" : ""}`}
        >
          <Nav
            className="hamburger-menu-items "
            style={{ maxHeight: "300px" }}
            navbarScroll
          >
            <Nav.Link href={"/"}>Home</Nav.Link>
            <Nav.Link href={"/allBlogs"}>All Blogs</Nav.Link>
            <Nav.Link href={"/MRDBSpots"}>MRDB Sports</Nav.Link>
            <Nav.Link href={"/Login"}>Create Blogs</Nav.Link>
            {/* <Nav.Link onClick={() => loginWithRedirect()} to={"/adminlogin"}> Admin Login </Nav.Link>  */}
          </Nav>

          {/* Search Button for desktop */}
          <Form className="d-flex d-none d-lg-flex me-2">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button className="search-button" variant="outline-success">
              Search
            </Button>
          </Form>

          
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
}

export default NavScrollExample;


{/* Admin Login Button for desktop */}

        
          {/* {isAuthenticated ? (
            <button
              className="logout-button"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          ) : (
            <Link to="/adminlogin" className="d-none d-lg-block">
              
              <button
                className="login-button"
                onClick={() => loginWithRedirect()}
              >
                Admin Login
              </button>
              
            </Link>
          )} */}
