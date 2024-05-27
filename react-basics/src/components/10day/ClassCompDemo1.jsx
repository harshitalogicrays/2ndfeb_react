import React, { Component } from 'react'
import RegisterImg from '../../assets/images/login.jpg'
export default class ClassCompDemo1 extends Component {
    constructor(props) {
      super(props)   
      this.state = {email:'ram@gmail.com',salary:80000,
       user : {username:'',email:'',password:'',cpassword:''}}
    }
    changeEmail=()=>{
        // this.setState({}) - used to change state and render in browser  - in class component
        this.setState({email:"Harshita@test.com"})
    }

    handleChange=(e)=>{
        this.setState({
            user :{...this.state.user, [e.target.name]:e.target.value }
        })
    }
    submitForm=(e)=>{
        e.preventDefault()
        alert(JSON.stringify(this.state.user))
    }
  render() {
    console.log("render called")
    return (
      <>
        <h1>{this.state.email}</h1>
        <h2>{this.state.salary}</h2>
        <button
            type="button"
            class="btn btn-primary" onClick={this.changeEmail}>
            Change Email</button>
            <div className='container mt-5 col-8'>
   <h1>Form Demo</h1><hr/>
   <div className="row">
    <div className="col">
        <img src={RegisterImg} className='img-fluid'/>
    </div>
    <div className="col">
    <form onSubmit={this.submitForm}>
         <div className="mb-3">
             <label className="form-label">Username</label>
             <input  type="text" name="username" className="form-control" 
             value={this.state.user.username} onChange={this.handleChange}/>
         </div>
         <div className="mb-3">
             <label className="form-label">Email</label>
             <input  type="text" name="email" className="form-control" value={this.state.user.email} onChange={this.handleChange}/>
         </div>
         <div className="mb-3">
             <label className="form-label">Password</label>
             <input  type="password" name="password" className="form-control" value={this.state.user.password} onChange={this.handleChange}/>
         </div>
         <div className="mb-3">
             <label className="form-label">Confirm Password</label>
             <input  type="password" name="cpassword" className="form-control" value={this.state.user.cpassword} onChange={this.handleChange}/>
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
      </>
    )
  }
}
