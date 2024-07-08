import React, { useEffect, useState } from 'react'
import CheckoutSummary from './CheckoutSummary'
import { useNavigate } from 'react-router-dom'

const CheckoutDetails = () => {
  let [shippingAddress,setShippingAddress]=useState({name:'',email:'',mobile:'',city:'',address:'',pincode:''})
  const navigate=useNavigate()
  let handleSubmit=(e)=>{
    e.preventDefault()
    // alert(JSON.stringify(shippingAddress))
    sessionStorage.setItem("shippingAddress",JSON.stringify(shippingAddress))
    navigate('/checkout')
  }

  useEffect(()=>{
    if(sessionStorage.getItem("shippingAddress")){
      setShippingAddress(JSON.parse(sessionStorage.getItem("shippingAddress")))
    }
    else {
      setShippingAddress({name:'',email:'',mobile:'',city:'',address:'',pincode:''})
    }
  },[])
  return (
    <div className='container mt-5 shadow p-3'>
      <div className="row">
        <div className="col">
          <h1>Checkout Details</h1><hr/>
          <form onSubmit={handleSubmit}>
            <div className="row">
                <div class="mb-3 col">
                  <label for="" class="form-label">Name</label>
                  <input type="text" name="name"  class="form-control" value={shippingAddress.name} onChange={(e)=>setShippingAddress({...shippingAddress,name:e.target.value})}/>
                </div>
                <div class="mb-3 col">
                  <label for="" class="form-label">Email</label>
                  <input type="text" name="email"  class="form-control" value={shippingAddress.email} onChange={(e)=>setShippingAddress({...shippingAddress,email:e.target.value})} />
                </div>
            </div>
            <div className="row">
               <div class="mb-3 col">
                  <label for="" class="form-label">Mobile</label>
                  <input type="number" name="mobile"  class="form-control" value={shippingAddress.mobile} onChange={(e)=>setShippingAddress({...shippingAddress,mobile:e.target.value})}/>
                </div>
                <div class="mb-3 col">
                  <label for="" class="form-label">City</label>
                  <input type="text" name="city"  class="form-control" value={shippingAddress.city} onChange={(e)=>setShippingAddress({...shippingAddress,city:e.target.value})} />
                </div>             
            </div>
            <div class="mb-3">
                  <label for="" class="form-label">Address</label>
                  <textarea name="address"  class="form-control" value={shippingAddress.address} onChange={(e)=>setShippingAddress({...shippingAddress,address:e.target.value})}/>
            </div>
            <div class="mb-3 col">
                  <label for="" class="form-label">Pincode</label>
                  <input type="number" name="pincode"  class="form-control" value={shippingAddress.pincode} onChange={(e)=>setShippingAddress({...shippingAddress,pincode:e.target.value})}/>
            </div> 
            <button type="submit"  class="btn btn-primary">
              Proceed to Checkout
            </button>
            
          </form>
        </div>
        <div className="col">
          <CheckoutSummary/>
        </div>
      </div>
    </div>
  )
}

export default CheckoutDetails
