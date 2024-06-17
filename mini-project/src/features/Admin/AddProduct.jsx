import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row,Image } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { fetchbyid, fetchpost, fetchput } from '../Api'

const AddProduct = () => {
    let initialvalues = {category:'',name:'',brand:'',stock:'',price:'',image:'',desc:''}
    const [product,setProduct]=useState({...initialvalues})
       let categories = ["Grocery","Electronics",'accessoires','medical','cloths']
    const redirect=useNavigate()

//edit 
    const {id} = useParams()
    useEffect(()=>{
        if(id){
               fetchbyid(id).then((res)=>{
                   return res.json().then(data=>{
                    setProduct(data)})
                })
        }
        else setProduct({...initialvalues})
    },[id])

    let handleImage=(e)=>{
        console.log(e.target.files)
        let file = e.target.files[0]
        let reader = new FileReader
        reader.readAsDataURL(file)
        reader.onload=()=>{
            setProduct({...product,image:reader.result})
        }
    }

    let handleSubmit=async(event)=>{
        event.preventDefault(); 
        if(!id){
            try{
                await fetchpost(product)
                toast.success("product added")
                redirect('/admin/view')
            }
            catch(err){toast.error(err)}
        }
        else {
            try{
               await fetchput(id,product)
                toast.success("product updated")
                redirect('/admin/view')
            }
            catch(err){toast.error(err)}
        }
        
    
    }

  return (
   <>
    <Container className='shadow mt-2 p-2'>
             <h1>{id? "Edit " :"Add " } Product</h1> <hr/>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-2'>
                    <Form.Label >Category</Form.Label>
                    <Form.Select name="category" onChange={(e)=>setProduct({...product,category:e.target.value})} value={product.category}>
                        <option value='' selected disabled>choose category</option>
                        {categories.map((c,i)=><option key={i}>{c}</option>)}
                    </Form.Select>
                </Form.Group>
                <Row>
                    <Col> <Form.Group  className='mb-2'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" onChange={(e)=>setProduct({...product,name:e.target.value})} value={product.name}></Form.Control>
                </Form.Group></Col>
                <Col> <Form.Group  className='mb-2'>
                    <Form.Label>Brand</Form.Label>
                    <Form.Control name="brand" onChange={(e)=>setProduct({...product,brand:e.target.value})} value={product.brand}></Form.Control>
                </Form.Group></Col>
                </Row>
                <Row>
                    <Col> <Form.Group  className='mb-2'>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name="price" onChange={(e)=>setProduct({...product,price:e.target.value})} value={product.price}></Form.Control>
                </Form.Group></Col>
                <Col> <Form.Group  className='mb-2'>
                    <Form.Label>stock</Form.Label>
                    <Form.Control name="stock" type="number" onChange={(e)=>setProduct({...product,stock:e.target.value})} value={product.stock}></Form.Control>
                </Form.Group></Col>
                </Row>
                <Form.Group className='mb-2'>
                    <Form.Label>Choose File</Form.Label>
                    <Form.Control type="file" name="image" onChange={handleImage}></Form.Control>
                    {id && <Image src={product.image} height={50} width={50}/>}
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" name="desc" onChange={(e)=>setProduct({...product,desc:e.target.value})} value={product.desc}></Form.Control>
                </Form.Group>
                <Button type="submit">{id? "Update Product" : "Add Product"}</Button>
            </Form>
    </Container>
 


   </>
  )
}

export default AddProduct
