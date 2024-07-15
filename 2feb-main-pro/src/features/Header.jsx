import React, {useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShowOnLogin, ShowOnLogout } from './hiddenlinks';
import { toast } from 'react-toastify';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FILTER_BY_SEARCH } from '../redux/filterSlice';
import { auth, db } from '../firebase/config.jsx';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { LOGIN_USER, LOGOUT_USER, selectIsLoggedIn, selectUserName, selectUserRole } from '../redux/authSlice.js';
import { doc, getDoc } from 'firebase/firestore';
import { selectCartItems } from '../redux/cartSlice.js';
import useFetchCollection from '../customhook/useFetchCollection.js';
const Header = () => {
  const navigate=useNavigate()

  const isLoggedIn=useSelector(selectIsLoggedIn)
  const role = useSelector(selectUserRole)

  let handleLogout=()=>{
    signOut(auth).then(() => {
      toast.success("loggedOut Successfully")
      navigate('/')
    }).catch((error) => {
      toast.error(error.message)
    });
   
  }


  const dispatch = useDispatch()
  useEffect(()=>{
    onAuthStateChanged(auth, async(user) => {
      if (user) {
          const uid = user.uid;
          const docRef = doc(db,"users",uid)
            const docSnap = await getDoc(docRef)
           let obj = {name:docSnap.data().username,role:docSnap.data().role,email:docSnap.data().email,id:uid} 
          dispatch(LOGIN_USER(obj))
        } else {
          dispatch(LOGOUT_USER())
      }
    });
  },[auth])
let username=useSelector(selectUserName)


const cartItems =useSelector(selectCartItems)


  //search
  let [search,setSearch]=useState('')
  const {data:Products}=useFetchCollection('products')
  let handleSearch=()=>{
    dispatch(FILTER_BY_SEARCH({Products,search}))
    navigate('/products')
  }
  // useEffect(()=>{
  //     dispatch(FILTER_BY_SEARCH({Products,search})) 
  // },[search])
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
          {isLoggedIn && role=="0" &&
          <Nav className="me-auto">
            <Button variant='danger' as={NavLink} to='/admin'>Admin Panel</Button>
          </Nav>
          }
            <Form>
            <InputGroup>
               <Form.Control type="text" placeholder="Search" value={search} 
               onChange={(e)=>setSearch(e.target.value)}/>
               <Button type="button" variant='danger' onClick={handleSearch}><FaSearch/></Button>
               </InputGroup>
          </Form>
          <Nav>
            <Nav.Link as={Link} to='/cart'> <FaShoppingCart size={30} />
              <span class="badge rounded-pill text-bg-danger">{cartItems.length}</span>
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
              {role=='1' && <Nav.Link as={NavLink} to='/myorders'>My Orders</Nav.Link>}
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
