import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ANavbar = () => {
  let [username,setUsername]=useState("Guest")
  useEffect(()=>{
    if(sessionStorage.getItem("mini-2feb")!=null){
      let obj=JSON.parse(sessionStorage.getItem("mini-2feb"))
      setUsername(obj.name)
    }
  },[  sessionStorage.getItem("mini-2feb")])

  const navigate=useNavigate()
  let handleLogout=()=>{
    sessionStorage.removeItem("mini-2feb")
    toast.success("loggedOut Successfully")
    navigate('/')
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
