import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import product from '../Products.js'
const ViewProduct = () => {
  let handleDelete=async(id)=>{
    if(window.confirm("are you sure to delete this??")){
       
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
        {product.length == 0 && <tr><td colSpan={8}>No product Found</td></tr>}
    {product.map((product,i)=>
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td><img src={product.image} height={50} width={50}/></td>
          <td>{product.category}</td>
          <td>{product.brand}</td>
          <td>{product.stock}</td>
          <td>{product.price}</td>
          <td>
        <Link type="button" class="btn btn-success me-2" 
        to={`/admin/edit/${product.id}`}><FaPenAlt/></Link>
        <button type="button" class="btn btn-danger" onClick={()=>handleDelete(product.id)}><FaTrashAlt/></button>

          </td>
        </tr>
        )}
      </tbody>
    </Table>
   </>
  )
}

export default ViewProduct
