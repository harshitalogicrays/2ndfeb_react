import React from 'react'
import ANavbar from './ANavbar'
import { Col, Row } from 'react-bootstrap'
import ASidebar from './ASidebar'

const AdminLayout = ({children}) => {
  return (
    <>
        <ANavbar/>
        <Row>
            <Col xs={3}><ASidebar/></Col>
            <Col>{children}</Col>
        </Row>
    </>
  )
}

export default AdminLayout
