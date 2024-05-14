import React, { useState } from 'react'
import RegisterImg from '../../assets/images/login.jpg'
const RegisterForm = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    let handleChange=(e)=>{
        console.log(e.target.value)
        setUsername(e.target.value)
    }
    let handleSubmit=(e)=>{
        e.preventDefault()
        alert(`${username} and ${password}`)
    }
  return (
   <div className='container mt-5 col-8'>
   <h1>Form Demo</h1><hr/>
   <div className="row">
    <div className="col">
        <img src={RegisterImg} className='img-fluid'/>
    </div>
    <div className="col">
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label className="form-label">Username</label>
            <input  type="text" name="username" className="form-control" value={username} 
            onChange={handleChange}  />
        </div>

        <div className="mb-3">
            <label className="form-label">Password</label>
            <input  type="password" name="password" className="form-control" value={password} 
            onChange={(e)=>setPassword(e.target.value)}  />
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

export default RegisterForm
