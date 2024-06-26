import React, { useState } from 'react'
import RegisterImg from '/src/assets/register.png'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loader from './Loader'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase/config'
import { Timestamp, doc, setDoc } from 'firebase/firestore'

const Register = () => {
  const[user,setUser]=useState({username:'',email:'',password:'',cpassword:'',role:'1'})
  const [errors,setErrors]=useState({})
    const [isLoading,setIsLoading]=useState(false)
  const navigate=useNavigate()
  let handleSubmit=async(e)=>{
      e.preventDefault()
      let myerrors = validations()
      console.log(myerrors)
      if(Object.keys(myerrors).length==0){
              setErrors({})
              setUser({username:'',email:'',password:'',cpassword:''})
           
             setIsLoading(true)
            try{           
                createUserWithEmailAndPassword(auth, user.email, user.password)
                    .then(async(userCredential) => {
                        const user1 = userCredential.user;
                        // console.log(user)
                        const docRef = doc(db,"users",user1.uid)
                        await setDoc(docRef,{...user,createdAt:Timestamp.now().toMillis()})
                        toast.success("Registered successfully")
                        navigate('/') 
                        setIsLoading(false)   
                    })
                    .catch((error) => {
                        setIsLoading(false)  
                        toast.error(error.message)
                    });


                         
              }
              catch(err){
                toast.error(err)
                setIsLoading(false)
              }
          }
      else { 
          setErrors(myerrors)
          e.preventDefault() }
  }

  let validations=()=>{
      let formerrors={}
      let emailpattern = /^[\w\!\#\$\%\^\&\*\-\+\=\.]+\@[\w]+\.[a-zA-Z]{3}$/
      if(user.username==''){
          formerrors.unamerr="Username is required" // formerrors={unamerr:"Username is required"}
      }
      if(user.email==''){
          formerrors.emailerr="Email is required" }
      else if(!emailpattern.test(user.email)){
          formerrors.emailerr="Invalid Email"
      }
      if(user.password==''){
          formerrors.pwderr="Password is required"
      }
      if(user.cpassword =='' || user.cpassword !=user.password){
          formerrors.cpwderr="Password not match"
      }
      return formerrors
  }

return (
  <>
    {isLoading ? <Loader/> : 
        <div className='container mt-5 col-8'>
        <div className="row">
        <div className="col">
            <img src={RegisterImg} className='img-fluid'/>
        </div>
        <div className="col">
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Username</label>
                <input  type="text" name="username" 
                className={`form-control ${errors.unamerr && 'is-invalid'}`}
                value={user.username}
                onChange={(e)=>setUser({...user, username:e.target.value})} />

                {errors.unamerr && <span className='text-danger'>{errors.unamerr}</span> }  
            </div>


            <div className="mb-3">
                <label className="form-label">Email</label>
                <input  type="text" name="email"  
                className={`form-control ${errors.emailerr && 'is-invalid'}`}  
                value={user.email}
                onChange={(e)=>setUser({...user, email:e.target.value})} />
            {errors.emailerr && <span className='text-danger'>{errors.emailerr}</span> }  
            
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input  type="password" name="password" className={`form-control ${errors.pwderr && 'is-invalid'}`}  
                    value={user.password}
                    onChange={(e)=>setUser({...user, password:e.target.value})}  />
                    {errors.pwderr && <span className='text-danger'>{errors.pwderr}</span> }  
            </div>
            <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input  type="password" name="cpassword" className={`form-control ${errors.cpwderr && 'is-invalid'}`}  
                    value={user.cpassword}
                    onChange={(e)=>setUser({...user, cpassword:e.target.value})}  />
                    {errors.cpwderr && <span className='text-danger'>{errors.cpwderr}</span> }  
            </div>
            <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                Submit
                </button>
            </div>
            <p>Already an account?? <Link to="/login">Login</Link></p>
        </form>
        </div>
        </div></div>
}
  
</>
)
}

export default Register
