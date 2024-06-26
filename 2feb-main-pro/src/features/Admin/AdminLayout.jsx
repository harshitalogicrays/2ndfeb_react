import React from 'react'
import ANavbar from './ANavbar'
import { Col, Row } from 'react-bootstrap'
import ASidebar from './ASidebar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminLayout = () => {
  return (
    <>
       <ToastContainer
      position="bottom-left"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
      theme="colored"/>
        <ANavbar/>
        <Row>
            <Col xs={3}><ASidebar/></Col>
            <Col><Outlet/></Col>
        </Row>
    </>
  )
}

export default AdminLayout
