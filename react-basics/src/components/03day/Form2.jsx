import React, { useState } from 'react'
import RegisterImg from '../../assets/images/login.jpg'
const Form2 = () => {
    const[user,setUser]=useState({username:'',email:'',password:'',cpassword:''})
    let handleSubmit=(e)=>{
        e.preventDefault()
        alert(JSON.stringify(user))
    }
  return (
    <div className='container mt-5 col-8'>
    <h1>Form Demo2</h1><hr/>
    <div className="row">
     <div className="col">
         <img src={RegisterImg} className='img-fluid'/>
     </div>
     <div className="col">
     <form onSubmit={handleSubmit}>
         <div className="mb-3">
             <label className="form-label">Username</label>
             <input  type="text" name="username" className="form-control" value={user.username}
             onChange={(e)=>setUser({...user, username:e.target.value})} />
         </div>
         <div className="mb-3">
             <label className="form-label">Email</label>
             <input  type="text" name="email" className="form-control"  value={user.email}
             onChange={(e)=>setUser({...user, email:e.target.value})} />
         </div>
         <div className="mb-3">
             <label className="form-label">Password</label>
             <input  type="password" name="password" className="form-control"
              value={user.password}
              onChange={(e)=>setUser({...user, password:e.target.value})}  />
         </div>
         <div className="mb-3">
             <label className="form-label">Confirm Password</label>
             <input  type="password" name="cpassword" className="form-control"
              value={user.cpassword}
              onChange={(e)=>setUser({...user, cpassword:e.target.value})}  />
         </div>
         <div className="d-grid gap-2">
             <button type="submit" className="btn btn-primary">
             Submit
             </button>
         </div>
         
     </form>
     </div>
    </div>
   
    </div>
  )
}

export default Form2
