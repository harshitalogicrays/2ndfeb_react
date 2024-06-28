import React from 'react'

import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const ASidebar = () => {

const links = [
  {link:NavLink , to:'/admin' , name:'Dashboard' },
  {link:NavLink , to:'/admin/add' , name:'Add Product' },
  {link:NavLink , to:'/admin/view' , name:'View Product' },
]
  return (
   <Nav  className="flex-column ">
      {links.map((item,i)=><Nav.Link key={i} as={item.link} to={item.to}
      style={({ isActive }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isActive ? "red" : "",
          backgroundColor: isActive ? "yellow" : "",
        };
      }}
      >{item.name}</Nav.Link>)}
    </Nav>
  )
}

export default ASidebar
