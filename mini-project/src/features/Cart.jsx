import React from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'

const Cart = () => {
  return (
    <div className='container'>
        <h1>Cart Page</h1><hr/>
        <Table className='table table-bordered table-striped table-hover'>
            <thead>
                <tr>
                    <th>Sr. No</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </Table>
        <Row>
            <Col xs={8}>
            <Button variant='danger' className='btn-lg'>Empty Cart</Button>
            </Col>
            <Col xs={4}>
                <h1>Total: <span className='float-end'>$</span></h1><hr/>
                <div class="d-grid gap-2">
                <Button variant='info'  >checkout</Button>
                </div>
                
            </Col>

        </Row>
    </div>
  )
}

export default Cart
