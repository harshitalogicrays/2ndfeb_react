import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'

const ViewProduct = () => {
const [users,setUsers]=useState([])
  let getData=async()=>{
    try{
      let res = await fetch("https://6662b01c62966e20ef09844c.mockapi.io/products")
      let data = await res.json()
      setUsers(data)
    }
    catch(err){toast.error(err)}
  }

  useEffect(()=>{
    getData()
  },[])


  let handleDelete=async(id)=>{
    if(window.confirm("are you sure to delete this??")){
        try{
          await axios.delete(`https://6662b01c62966e20ef09844c.mockapi.io/products/${id}`)
        toast.success("product deleted")
        getData()
        }
        catch(err){toast.error(err)}
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
        {users.length == 0 && <tr><td colSpan={8}>No product Found</td></tr>}
    {users.map((user,i)=>
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td><img src={user.image} height={50} width={50}/></td>
          <td>{user.category}</td>
          <td>{user.brand}</td>
          <td>{user.stock}</td>
          <td>{user.price}</td>
          <td>
        <button type="button" class="btn btn-success me-2"><FaPenAlt/></button>
        <button type="button" class="btn btn-danger" onClick={()=>handleDelete(user.id)}><FaTrashAlt/></button>

          </td>
        </tr>
        )}
      </tbody>
    </Table>
   </>
  )
}

export default ViewProduct
