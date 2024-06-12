import React, { useContext, useEffect } from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'
import { DataContext } from './ContextData'
import { FaTrash } from 'react-icons/fa'

const Cart = () => {
    let data=useContext(DataContext)
    let {cart,increase,decrease,remove_from_cart,empty_cart,calculate_total,total,remove_from_cart_by_index} =data
    useEffect(()=>{calculate_total()},[cart])
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
                {cart.length==0 && <tr><td colspan={7}>No Item in Cart</td></tr>}
                {cart.map((c,i)=>
                    <tr key={c.id}>
                        <td>{i+1}</td><td>{c.name}</td>
                        <td><img src={c.image} height={50} width={50}/></td> <td>{c.price}</td>
                        <td><button type="button" onClick={()=>decrease(c)}>-</button>
                            <input type="text" value={c.qty} style={{width:'40px',textAlign:'center'}}/>
                            <button type="button" onClick={()=>increase(c)}>+</button>
                            </td>
                        <td>{c.qty*c.price}</td>
                        <td><button  type="button"  class="btn btn-danger me-2" onClick={()=>remove_from_cart(c.id)}  >
                            <FaTrash/> by id </button>
                            <button  type="button"  class="btn btn-danger" onClick={()=>remove_from_cart_by_index(i)}>
                            <FaTrash/> by index  </button>
                        </td>   </tr>    )} </tbody>  </Table>
        <Row><Col xs={8}>
            <Button variant='danger' className='btn-lg' onClick={()=>empty_cart()}>Empty Cart</Button> </Col>
            <Col xs={4}>
                <h1>Total: <span className='float-end'>${total}</span></h1><hr/>
                <div class="d-grid gap-2">
                <Button variant='info'  >checkout</Button>
                </div>
                
            </Col>

        </Row>
    </div>
  )
}

export default Cart
