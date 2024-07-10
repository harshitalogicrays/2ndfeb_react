import React from 'react'
import CheckoutSummary from './CheckoutSummary'
import { Link } from 'react-router-dom'
import { saveorder, sendmail } from './hiddenlinks'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUserEmail, selectUserId, selectUserName } from "../redux/authSlice";
import { EMPTY_CART, selectCartItems, selectTotalAmount } from "../redux/cartSlice";
const Checkout = () => {
  const userEmail=useSelector(selectUserEmail)
  const userId=useSelector(selectUserId)
  const cartItems=useSelector(selectCartItems)
  const totalAmount=useSelector(selectTotalAmount)
  const shippingAddress = JSON.parse(sessionStorage.getItem("shippingAddress"))
  const navigate=useNavigate()
  const dispatch=useDispatch()
const userName=useSelector(selectUserName)
  let placeCODOrder=()=>{
    let payment_mode="cod"
    let status="Placed"
    saveorder(userEmail,userId,cartItems,totalAmount,shippingAddress,payment_mode)
    sendmail({userEmail,status,payment_mode,totalAmount,userName})
    dispatch(EMPTY_CART())
    navigate('/')
  }

  return (
    <div className='container mt-5 shadow p-3'>
    <div className="row">
      <div className="col">
        <h1>Checkout Details</h1><hr/>
            <button type="button" class="btn btn-primary mb-3"  onClick={placeCODOrder}>
                Cash On Delivery
            </button><br/>
            <Link type="button" to='/checkout-payment' class="btn btn-warning mb-3" >
                Pay Online
            </Link><br/>
      </div>
      <div className="col">
        <CheckoutSummary/>
      </div>
    </div>
  </div>
  )
}

export default Checkout
