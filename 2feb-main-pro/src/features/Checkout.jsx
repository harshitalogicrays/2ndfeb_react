import React from 'react'
import CheckoutSummary from './CheckoutSummary'
import { Link } from 'react-router-dom'

const Checkout = () => {
  return (
    <div className='container mt-5 shadow p-3'>
    <div className="row">
      <div className="col">
        <h1>Checkout Details</h1><hr/>
            <button type="button" class="btn btn-primary mb-3" >
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
