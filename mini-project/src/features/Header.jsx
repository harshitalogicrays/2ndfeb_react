import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">miniproject</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'  
            style={({ isActive}) => {
                    return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "red" : "",
                    backgroundColor: isActive? "yellow" : "",
                    };
                }}>Home</Nav.Link>
            <Nav.Link  as={NavLink} to='/products' style={({ isActive}) => {
                    return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "red" : "",
                    backgroundColor: isActive? "yellow" : "",
                    };
                }} >Products</Nav.Link>  
          </Nav>
          <Nav>
            <Nav.Link href="#home"> <FaShoppingCart size={30}/>
            <span class="badge rounded-pill text-bg-danger">0</span>
             </Nav.Link>
            <Nav.Link as={NavLink} to='/login' style={({ isActive}) => {
                    return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "red" : "",
                    backgroundColor: isActive? "yellow" : "",
                    };
                }}>Login</Nav.Link>
            <Nav.Link as={NavLink} to='/register' style={({ isActive}) => {
                    return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "red" : "",
                    backgroundColor: isActive? "yellow" : "",
                    };
                }}>Register</Nav.Link>
            <Nav.Link href="#home">Welcome user</Nav.Link>
            <Nav.Link href="#link">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
  )
}

export default Header
