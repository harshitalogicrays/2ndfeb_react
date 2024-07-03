import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row,Image } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import useFetchCollection from '../../customhook/useFetchCollection'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { db, storage } from '../../firebase/config'

const AddProduct = () => {
    const {data:categories}=useFetchCollection('categories');
    let initialvalues = {category:'',name:'',brand:'',stock:'',price:'',image:'',desc:''}
    const [product,setProduct]=useState({...initialvalues})
    const [uploadProgress,setUploadProgress]=useState(0)
    const navigate=useNavigate()


    //edit 
    const {id}=useParams

    let handleImage=(e)=>{
        // console.log(e.target.files)
        let allimages=e.target.files //nodelist
        let arr=[]
        Array.from(allimages).forEach((file,i)=>{
            const storageRef = ref(storage, `products/${Date.now()}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed', 
              (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;   
                setUploadProgress(progress)  }, 
              (error) => {toast.error(error.message) }, 
              () => {  getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        arr.push(downloadURL)
                });  } );
        })
      setProduct({...product,image:arr})
      
    }

    let handleSubmit=async(event)=>{
        event.preventDefault(); 
        try{ const docRef = collection(db,"products")
            await addDoc(docRef,{...product,createdAt:Timestamp.now().toMillis()})
            toast.success("product added")
            navigate('/admin/view/product') }
        catch(error){toast.error(error.message)} 
    
    }

  return (
   <>
    <Container className='shadow mt-2 p-2'>
             <h1>Add Product</h1> <hr/>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-2'>
                    <Form.Label >Category</Form.Label>
                    <Form.Select name="category" onChange={(e)=>setProduct({...product,category:e.target.value})} value={product.category}>
                        <option value='' selected disabled>choose category</option>
                        {categories.map((c,i)=><option key={i}>{c.name}</option>)}
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
                {uploadProgress > 0 &&
              <div class="progress" role="progressbar">
              <div class="progress-bar progress-bar-striped" style={{width: `${uploadProgress}%`}}>
                {uploadProgress < 100 ? <>{`Uploading ${uploadProgress}%`}</> :<>{`Uploaded ${uploadProgress}%`}</>}
              </div>
            </div>}
           
                <Form.Group className='mb-2'>
                    <Form.Label>Choose File</Form.Label>
                    <Form.Control type="file" name="image" onChange={handleImage} multiple></Form.Control>
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" name="desc" onChange={(e)=>setProduct({...product,desc:e.target.value})} value={product.desc}></Form.Control>
                </Form.Group>
                <Button type="submit">Add Product</Button>
            </Form>
    </Container>
 


   </>
  )
}

export default AddProduct
