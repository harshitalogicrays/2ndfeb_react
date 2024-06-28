import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../firebase/config';
import { useSelector } from 'react-redux';
import { selectUserName } from '../../redux/authSlice';

const ANavbar = () => {
  const navigate=useNavigate()
 const username = useSelector(selectUserName)
  let handleLogout=()=>{
    signOut(auth).then(() => {
      toast.success("loggedOut Successfully")
      navigate('/')
    }).catch((error) => {
      toast.error(error.message)
    });
  }
  return (
   <>
  <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">mini project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Welcome {username}</Nav.Link>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
       </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
   </>
  )
}

export default ANavbar
