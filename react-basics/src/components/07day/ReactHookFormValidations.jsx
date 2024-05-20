import React from 'react'
import { Button, Col, Container, Form,  Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const ReactHookFormValidations = () => {
    const {register,handleSubmit, formState: { errors }} = useForm()
    let hookFormSubmit=(data)=>{alert(JSON.stringify(data)) }
  return (
   <> <Container>
     <Form onSubmit={handleSubmit(hookFormSubmit)}>
        <Row><Col>
         <Form.Group className="mb-3">
         <Form.Label>Username</Form.Label>
         <Form.Control type="text" 
         {...register('username',{required:"Username is required"} )}></Form.Control>
          </Form.Group>
          {errors.username && <span className = "text-danger">{errors.username.message}</span>}
          </Col>
         <Col>
         <Form.Group className="mb-3">
         <Form.Label>Email</Form.Label>
         <Form.Control type="text" {...register('email', {required:"Email is required"} )}></Form.Control>
         </Form.Group>
         {errors.email && <span className = "text-danger">{errors.email.message}</span>}
         
        </Col>
                    </Row>                    
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" {...register('password')}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" {...register('cpassword')}></Form.Control>
                    </Form.Group>
                    <Form.Check type="checkbox" label={`remember me`}/>

                    <Button type="submit" variant='info' className="mt-3 mb-3">Submit</Button>
                </Form>
    </Container>
   </>
  )
}

export default ReactHookFormValidations
