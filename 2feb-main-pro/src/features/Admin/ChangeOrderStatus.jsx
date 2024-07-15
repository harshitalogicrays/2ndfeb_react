import { doc, setDoc, Timestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { db } from '../../firebase/config'
import { useNavigate } from 'react-router-dom'
import { sendmail } from '../hiddenlinks'

const ChangeOrderStatus = ({s,order,id}) => {
    let [status,setStatus]=useState(s)
    const navigate=useNavigate()
    let updateStatus=async(e)=>{
        e.preventDefault()
        try{
            const docRef = doc(db,"orders",id)
            await setDoc(docRef,{...order,orderStatus:status,createdAt:order.createdAt,
                editedAt:Timestamp.now().toMillis()}) 
                let obj={userEmail:order.userEmail,status,payment_mode:order.payment_mode,
                    totalAmount:order.totalAmount,userName:order.userEmail}
                sendmail({...obj})
                toast.success("order Status updated")
                navigate('/admin/view/orders')
        }
        catch(error){toast.error(error.message)}
    }
  return (
    <>
   <hr/>
   <form onSubmit={updateStatus}>
   <div class="mb-3">
    <label for="" class="form-label">Update Order Status</label>
    <select class="form-select" name="status"  
    value={status} onChange={(e)=>setStatus(e.target.value)} >
        <option>Pending</option>
        <option>Placed</option>
        <option>Shipped</option>
        <option>Processing</option>
        <option>Out for Delivery</option>
        <option>Delivered</option>
    </select>
   </div>
   <button
    type="submit"
    class="btn btn-primary"
   >
    Submit
   </button>
   
   </form>

   </>
  )
}

export default ChangeOrderStatus
