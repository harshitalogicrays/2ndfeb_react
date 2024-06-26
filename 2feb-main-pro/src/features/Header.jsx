import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShowOnLogin, ShowOnLogout } from './hiddenlinks';
import { toast } from 'react-toastify';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { FILTER_BY_SEARCH } from '../redux/filterSlice';
import Products from './Products.js'
const Header = () => {

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


  //search
  const dispatch=useDispatch() 
  let [search,setSearch]=useState('')
  let handleSearch=()=>{
    dispatch(FILTER_BY_SEARCH({Products,search}))
  }

  // useEffect(()=>{
  //     dispatch(FILTER_BY_SEARCH({Products,search}))
  // },[search])

  // let [Products,setProducts]=useState([])
  // let getData=async()=>{
  //   try{ let res = await axiosfetchdata()
  //     setProducts(res.data) }
  //   catch(err){toast.error(err)}  }
  // useEffect(()=>{  getData() },[])

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
            <Form>
            <InputGroup>
               <Form.Control type="text" placeholder="Search" value={search} 
               onChange={(e)=>setSearch(e.target.value)}/>
               <Button type="button" variant='danger' onClick={handleSearch}><FaSearch/></Button>
               </InputGroup>
          </Form>
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
