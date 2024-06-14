import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddProduct = () => {
    const [user,setUser]=useState({category:'',name:'',brand:'',stock:'',price:'',image:'',desc:''})
       let categories = ["Grocery","Electronics",'accessoires','medical','cloths']
    const redirect=useNavigate()
    let handleImage=(e)=>{
        console.log(e.target.files)
        let file = e.target.files[0]
        let reader = new FileReader
        reader.readAsDataURL(file)
        reader.onload=()=>{
            setUser({...user,image:reader.result})
        }
    }

    let handleSubmit=async(event)=>{
        event.preventDefault(); 
        try{
            await fetch("https://6662b01c62966e20ef09844c.mockapi.io/products",{
                method:"POST",
                headers:{'content-type':'application/json'},
                body:JSON.stringify(user)
            })
            toast.success("product added")
            redirect('/admin/view')
        }
        catch(err){toast.error(err)}
    }

  return (
   <>
    <Container className='shadow mt-2 p-2'>
             <h1>Add Product</h1> <hr/>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-2'>
                    <Form.Label >Category</Form.Label>
                    <Form.Select name="category" onChange={(e)=>setUser({...user,category:e.target.value})} value={user.category}>
                        <option value='' selected disabled>choose category</option>
                        {categories.map((c,i)=><option key={i}>{c}</option>)}
                    </Form.Select>
                </Form.Group>
                <Row>
                    <Col> <Form.Group  className='mb-2'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" onChange={(e)=>setUser({...user,name:e.target.value})} value={user.name}></Form.Control>
                </Form.Group></Col>
                <Col> <Form.Group  className='mb-2'>
                    <Form.Label>Brand</Form.Label>
                    <Form.Control name="brand" onChange={(e)=>setUser({...user,brand:e.target.value})} value={user.brand}></Form.Control>
                </Form.Group></Col>
                </Row>
                <Row>
                    <Col> <Form.Group  className='mb-2'>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name="price" onChange={(e)=>setUser({...user,price:e.target.value})} value={user.price}></Form.Control>
                </Form.Group></Col>
                <Col> <Form.Group  className='mb-2'>
                    <Form.Label>stock</Form.Label>
                    <Form.Control name="stock" type="number" onChange={(e)=>setUser({...user,stock:e.target.value})} value={user.stock}></Form.Control>
                </Form.Group></Col>
                </Row>
                <Form.Group className='mb-2'>
                    <Form.Label>Choose File</Form.Label>
                    <Form.Control type="file" name="image" onChange={handleImage}></Form.Control>
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" name="desc" onChange={(e)=>setUser({...user,desc:e.target.value})} value={user.desc}></Form.Control>
                </Form.Group>
                <Button type="submit">Add</Button>
            </Form>
    </Container>
 


   </>
  )
}

export default AddProduct
