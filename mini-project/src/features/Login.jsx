import React from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import img1 from '/src/assets/login.png'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
const Login = () => {
  const { register, handleSubmit, formState: { errors }, trigger } = useForm()
  const navigate=useNavigate()
  let FormSubmit = async(data) => {
     //submit login data to the server 
     try{
        let res =  await axios.get(`https://6662b01c62966e20ef09844c.mockapi.io/users?email=${data.email}`)
        console.log(res.data[0])
        if(res.data[0].password == data.password){
            toast.success("LoggedIn Successfully")
            //sessionStorage 
            let obj = {isLoggedIn:true,email:data.email,role:res.data[0].role,name:res.data[0].username}
            sessionStorage.setItem("mini-2feb",JSON.stringify(obj))
            if(res.data[0].role=="0"){
                navigate('/admin')
            }
            else if(res.data[0].role=="1"){
                navigate('/')
            }
        }
        else {
            toast.error("Invalid Credentials")
        }
     }
     catch(err){toast.error(err)}
   
}

  return (
      <div>
          <Container className="col-8 shadow">
              <br />
              <h1>Login Form</h1>
              <hr />
              <br />
              <Form onSubmit={handleSubmit(FormSubmit)}>
                  <Row>
                      <Col xs={6}>
                          <Image src={img1} fluid width={400} height={600} />
                      </Col>
                      <Col xs={6}><br />
                          <Form.Group >
                              <Form.Label className='mb-4'>Email :</Form.Label>
                              <Form.Control type='text' {...register('email', { required: "Email is required", pattern: { value: /^[\w\!\#\$\%\^\&\*\-\+\=\.]+\@[\w]+\.[a-zA-Z]{3}$/, message: "Invalid Email" } })} onBlur={() => trigger('email')}></Form.Control>
                          </Form.Group>
                          {errors.email && <span className='text-danger'>{errors.email.message}</span>}
                          <Form.Group>
                              <Form.Label className='mt-4'>Password :</Form.Label>
                              <Form.Control type='password'{...register('password', { required: "Password is required", minLength: { value: 6, message: 'Min 6 char allow' }, maxLength: { value: 20, message: 'Max 20 char allow' } })} onBlur={() => trigger('password')}></Form.Control>
                          </Form.Group>
                          {errors.password && <span className='text-danger'>{errors.password.message}</span>}
                          <div class="d-grid gap-2 mt-2">
                          <Button variant="secondary" type='submit'>Login</Button>
                          </div>
                          <p>Create an account?? <Link to='/register'>Register</Link></p>
                        
                      </Col>
                  </Row>
              </Form>
          </Container>
      </div>
  )
}

export default Login
