import React from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import Image1 from '../../assets/images/about-image.png'
const ReactBootstrapDemo = () => {
  return (
   <Container className="p-3">
        <Row>
            <Col className='bg-primary' xs={4}>
                <Image src={Image1} fluid  />
            </Col>
            <Col className='bg-danger' xs={8}>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text"></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text"></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>                    
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password"></Form.Control>
                    </Form.Group>
                    <Form.Check type="checkbox" label={`remember me`}/>

                    <Button type="submit" variant='info' className="mt-3 mb-3">Submit</Button>
                </Form>
            </Col>
        </Row>
   </Container>
  )
}

export default ReactBootstrapDemo
