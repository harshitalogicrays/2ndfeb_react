import { getValue } from '@testing-library/user-event/dist/utils'
import React from 'react'
import { Button, Col, Container, Form,  Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const ReactHookFormValidations = () => {
    const {register,handleSubmit, formState: { errors } , trigger,getValues} = useForm()
    let hookFormSubmit=(data)=>{alert(JSON.stringify(data)) }
  return (
   <> <Container>
     <Form onSubmit={handleSubmit(hookFormSubmit)}>
        <Row><Col>
         <Form.Group className="mb-3">
         <Form.Label>Username</Form.Label>
         <Form.Control type="text" 
         {...register('username',{required:"Username is required"} )} 
         onBlur={()=>trigger('username')}></Form.Control>
          </Form.Group>
          {errors.username && <span className = "text-danger">{errors.username.message}</span>}
          </Col>
         <Col>
         <Form.Group className="mb-3">
         <Form.Label>Email</Form.Label>
         <Form.Control type="text" {...register('email', {required:"Email is required",
          pattern:{value:/^[\w\!\#\$\%\^\&\*\-\+\.]+\@[\w]+\.[a-zA-Z]{3}$/,message:'Invalid Email'}
         } )}
         onBlur={()=>trigger('email')}></Form.Control>
         </Form.Group>
         {errors.email && <span className = "text-danger">{errors.email.message}</span>}        
        </Col>
      </Row>                    
      <Form.Group className="mb-3">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" {...register('password',{required:"Password is required",
        minLength:{value:6,message:'min 6 char'},
        maxLength:{value:20,message:'max 20 char'}
      })} onBlur={()=>trigger('password')}></Form.Control>
        </Form.Group>
       {errors.password && <span className = "text-danger">{errors.password.message}</span>}
        
      <Form.Group className="mb-3">
      <Form.Label>Confirm Password</Form.Label>
       <Form.Control type="password" {...register('cpassword',{required:"Confirm password is required",
        validate:(cpwd)=>{ 
          let {password} =getValues()
          return password == cpwd  || "Password not match"
        }
       })} onBlur={()=>trigger('cpassword')}></Form.Control>
                    </Form.Group>
      {errors.cpassword && <span className = "text-danger">{errors.cpassword.message}</span>}
        
                    <Form.Check type="checkbox" label={`remember me`}/>

                    <Button type="submit" variant='info' className="mt-3 mb-3">Submit</Button>
                </Form>
    </Container>
   </>
  )
}

export default ReactHookFormValidations
