import React, { useEffect } from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART, CALCULATE_TOTAL, DECREASE, EMPTY_CART, REMOVE_FROM_CART, SAVE_URL, selectCartItems, selectTotalAmount } from '../redux/cartSlice'
import { selectIsLoggedIn } from '../redux/authSlice'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const cart = useSelector(selectCartItems)
    const total=useSelector(selectTotalAmount)
    const dispatch=useDispatch()
    useEffect(()=>{dispatch(CALCULATE_TOTAL())  },[cart])

    const isLoggedIn=useSelector(selectIsLoggedIn)
    const url=window.location.href
    const navigate=useNavigate()
    let handleCheckout=()=>{
        if(isLoggedIn && cart.length !=0){
            navigate('/checkout-details')
        }
        else if(isLoggedIn && cart.length ==0){
            navigate('/cart')
        }
        else{
            dispatch(SAVE_URL(url))
            navigate('/login')
         
        }
    }
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
                        <td><button type="button" onClick={()=>dispatch(DECREASE(c))}>-</button>
                            <input type="text" value={c.qty} style={{width:'40px',textAlign:'center'}}/>
                            <button type="button" onClick={()=>dispatch(ADD_TO_CART(c))}>+</button>
                            </td>
                        <td>{c.qty*c.price}</td>
                        <td><button  type="button"  class="btn btn-danger me-2"  
                        onClick={()=>dispatch(REMOVE_FROM_CART(c.id))} >
                            <FaTrash/> </button>

                        </td>   </tr>    )} </tbody> 
       </Table>
        <Row><Col xs={8}>
            <Button variant='danger' className='btn-lg' onClick={()=>dispatch(EMPTY_CART())}>Empty Cart</Button> </Col>
            <Col xs={4}>
                <h1>Total: <span className='float-end'>${total}</span></h1><hr/>
                <div class="d-grid gap-2">
                <Button variant='info' onClick={handleCheckout}  >checkout</Button>
                </div>
                
            </Col>

        </Row>
    </div>
  )
}

export default Cart
