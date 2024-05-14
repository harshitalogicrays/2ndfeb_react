import React, { useState } from 'react'
import RegisterImg from '../../assets/images/login.jpg'
const Form1 = () => {
    const[user,setUser]=useState({username:'',email:'',password:'',cpassword:''})
    let handleChange=(e)=>{
        setUser({...user, [e.target.name]:e.target.value }) 
        //user={username:'ram'} //user = {password:'123456'}
    }
    let handleSubmit=(e)=>{
        e.preventDefault()
        alert(JSON.stringify(user))
    }
  return (
    <div className='container mt-5 col-8'>
    <h1>Form Demo1</h1><hr/>
    <div className="row">
     <div className="col">
         <img src={RegisterImg} className='img-fluid'/>
     </div>
     <div className="col">
     <form onSubmit={handleSubmit}>
         <div className="mb-3">
             <label className="form-label">Username</label>
             <input  type="text" name="username" className="form-control" value={user.username} 
             onChange={handleChange}/>
         </div>
         <div className="mb-3">
             <label className="form-label">Email</label>
             <input  type="text" name="email" className="form-control" value={user.email}  onChange={handleChange}/>
         </div>
         <div className="mb-3">
             <label className="form-label">Password</label>
             <input  type="password" name="password" className="form-control" value={user.password}  onChange={handleChange}/>
         </div>
         <div className="mb-3">
             <label className="form-label">Confirm Password</label>
             <input  type="password" name="cpassword" className="form-control" value={user.cpassword}  onChange={handleChange} />
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

export default Form1
