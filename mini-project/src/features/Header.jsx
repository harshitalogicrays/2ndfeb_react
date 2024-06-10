import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShowOnLogin, ShowOnLogout } from './hiddenlinks';
import { toast } from 'react-toastify';
import { DataContext } from './ContextData';
const Header = () => {
//useContext hook
let data =useContext(DataContext)
console.log(data)


  const navigate=useNavigate()
  let handleLogout=()=>{
    sessionStorage.removeItem("mini-2feb")
    toast.success("loggedOut Successfully")
    navigate('/')
  }

  let [username,setUsername]=useState("Guest")
  useEffect(()=>{
    if(sessionStorage.getItem("mini-2feb")!=null){
      let obj=JSON.parse(sessionStorage.getItem("mini-2feb"))
      setUsername(obj.name)
    }
  },[  sessionStorage.getItem("mini-2feb")])

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">miniproject</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "red" : "",
                  backgroundColor: isActive ? "yellow" : "",
                };
              }}>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/products' style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "",
                backgroundColor: isActive ? "yellow" : "",
              };
            }} >Products</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/cart'> <FaShoppingCart size={30} />
              <span class="badge rounded-pill text-bg-danger">0</span>
            </Nav.Link>
            <ShowOnLogout>
              <Nav.Link as={NavLink} to='/login' style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "red" : "",
                  backgroundColor: isActive ? "yellow" : "",
                };
              }}>Login</Nav.Link>
              <Nav.Link as={NavLink} to='/register' style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "red" : "",
                  backgroundColor: isActive ? "yellow" : "",
                };
              }}>Register</Nav.Link>
            </ShowOnLogout>
            <ShowOnLogin>
              <Nav.Link href="#home">Welcome {username}</Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </ShowOnLogin>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header
