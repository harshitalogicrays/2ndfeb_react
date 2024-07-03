import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import useFetchCollection from '../../customhook/useFetchCollection'
import { deleteObject, ref } from 'firebase/storage'
import { db, storage } from '../../firebase/config'
import { deleteDoc, doc } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { STORE_PRODUCTS, selectproducts } from '../../redux/productSlice'
const ViewProduct = () => {
  const {data}=useFetchCollection('products')
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(STORE_PRODUCTS(data))
  },[data])
  const products = useSelector(selectproducts)

  let handleDelete=(id,images)=>{
    if(window.confirm("are you sure to delete this??")){
      images.forEach((image)=>deleteObject(ref(storage,image))) 
      deleteDoc(doc(db,"products",id))
      toast.success("product deleted")
    }
    }
  
  return (
   <>
    <h1>View Product</h1>
    <Table>
      <thead><tr><th>ID</th><th>Name</th>
      <th>Image</th>
      <th>Category</th>
      <th>brand</th>
      <th>stock</th>
      <th>price</th>
      <th>Action</th>
      </tr></thead>
      <tbody>
        {products.length == 0 && <tr><td colSpan={8}>No product Found</td></tr>}
    {products.map((product,i)=>
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td><img src={product.image[0]} height={50} width={50}/></td>
          <td>{product.category}</td>
          <td>{product.brand}</td>
          <td>{product.stock}</td>
          <td>{product.price}</td>
          <td>
        <Link type="button" class="btn btn-success me-2" 
        to={`/admin/edit/product/${product.id}`}><FaPenAlt/></Link>
        <button type="button" class="btn btn-danger" 
        onClick={()=>handleDelete(product.id,product.image)}><FaTrashAlt/></button>

          </td>
        </tr>
        )}
      </tbody>
    </Table>
   </>
  )
}

export default ViewProduct
