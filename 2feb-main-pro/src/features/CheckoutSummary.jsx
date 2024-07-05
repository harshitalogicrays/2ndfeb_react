import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartItems, selectTotalAmount } from '../redux/cartSlice'

const CheckoutSummary = () => {
    const cartItems=useSelector(selectCartItems)
    const total=useSelector(selectTotalAmount)
  return (
   <>
    <h1>Checkout Summary</h1>
    <hr/>
    <div className="card">
        <div className="card-header">
            <h5>Products: ({cartItems.length})</h5>
            <h5>Total: (Rs.{total})</h5>
        </div>
        <div className="card-body">
            {cartItems.map((item)=>
            <p>
                Product Name:{item.name}<br/>
                Unit Price:{item.price}<br/>
                Quantity:{item.qty} <hr/>
            </p>)}
        </div>
    </div>

   </>
  )
}

export default CheckoutSummary
