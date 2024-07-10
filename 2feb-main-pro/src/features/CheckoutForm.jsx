import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import CheckoutSummary from "./CheckoutSummary";
import { toast } from "react-toastify";
import { db } from "../firebase/config";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUserEmail, selectUserId, selectUserName } from "../redux/authSlice";
import { EMPTY_CART, selectCartItems, selectTotalAmount } from "../redux/cartSlice";
import {saveorder, sendmail} from './hiddenlinks'
export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const dispatch=useDispatch()
  useEffect(() => {
    if (!stripe) { return;  }
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret" );
    if (!clientSecret) { return;  }
  }, [stripe]);

  
  const userEmail=useSelector(selectUserEmail)
  const userId=useSelector(selectUserId)
  const cartItems=useSelector(selectCartItems)
  const totalAmount=useSelector(selectTotalAmount)
  const shippingAddress = JSON.parse(sessionStorage.getItem("shippingAddress"))

  const userName=useSelector(selectUserName)
  const handleSubmit = async (e) => {
    let payment_mode="online"
    let status = "Placed"
    e.preventDefault();
    if (!stripe || !elements) {return;  }
    setIsLoading(true);
    try{
      let result = await stripe.confirmPayment({
        elements, confirmParams: {
          return_url: "http://localhost:3000",
        },   redirect:"if_required" });
      
      if(result.error){toast.error(result.error);return}
      if(result.paymentIntent){
        if(result.paymentIntent.status=='succeeded'){
          toast.success("payment done")
          saveorder(userEmail,userId,cartItems,totalAmount,shippingAddress,payment_mode)
          sendmail({userEmail,status,payment_mode,totalAmount,userName})
          dispatch(EMPTY_CART())
          navigate('/')
        }
      }

    }
    catch(error){
      toast.error(error)
    }
   

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs"
  }




  return (
    <div className="container mt-5 shadow p-3">
      <div className="row">
        <div className="col"><CheckoutSummary/></div>
        <div className="col">
          <h1>Stripe Payment </h1><hr/>
        <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <div class="d-grid gap-2 mt-2">
      <button disabled={isLoading || !stripe || !elements} id="submit" className="btn btn-primary">
        <span id="button-text">
          {isLoading ? <div class="d-flex justify-content-center">
                <div class="spinner-border text-warning" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div> : "(Pay now)"}
        </span>
      </button>
      </div>
      
   
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
      </form>
        </div>
      </div>
    </div>
  
  );
}