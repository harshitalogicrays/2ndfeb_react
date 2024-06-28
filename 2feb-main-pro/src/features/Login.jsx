import React, { useState } from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import img1 from '/src/assets/login.png'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loader from './Loader'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, db } from '../firebase/config'
import { Timestamp, doc, getDoc, setDoc } from 'firebase/firestore'
import { FaGoogle } from 'react-icons/fa'
const Login = () => {
  const { register, handleSubmit, formState: { errors }, trigger } = useForm()
  const [isLoading,setIsLoading]=useState(false)
  const navigate=useNavigate()
  let FormSubmit = async(data) => {
     //submit login data to the server 
    setIsLoading(true)
     try{
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then(async(userCredential) => {
          const user = userCredential.user;
            const docRef = doc(db,"users",user.uid)
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()){
                // console.log(docSnap.data())
                if(docSnap.data().role=="0"){
                    toast.success("LoggedIn successfully")
                    navigate('/admin')
                }
                else if(docSnap.data().role=="1"){
                    toast.success("LoggedIn successfully")
                    navigate('/')
                }
            }
           
        })
        .catch((error) => {
              toast.error(error.message)
        });
            setIsLoading(false)
     }
     catch(err){toast.error(err);setIsLoading(false)}
   
}
const provider = new GoogleAuthProvider();
let loginwithgoogle=()=>{
        signInWithPopup(auth, provider)
    .then(async(result) => {
        const user = result.user;
        const docRef = doc(db,"users",user.uid)
        await setDoc(docRef,{username:user.displayName,
            email:user.email, role:'1',
            createdAt:Timestamp.now().toMillis()})
        toast.success("LoggedIn successfully")
        navigate('/')
        }).catch((error) => {
        toast.error(error.message)
        });
    }

  return (
      <>
             {isLoading ? <Loader/> :
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
                          <hr/>
                          <div class="d-grid gap-2 mt-2">
                          <Button variant="light" className='border' type='button' 
                          onClick={loginwithgoogle}><FaGoogle/> Continue with Google</Button>
                          </div>
                          <p>Create an account?? <Link to='/register'>Register</Link></p>
                        
                      </Col>
                  </Row>
              </Form>
          </Container>
}
      </>

  )
}

export default Login
