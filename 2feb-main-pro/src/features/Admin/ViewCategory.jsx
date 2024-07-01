import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useFetchCollection from '../../customhook/useFetchCollection'
import { toast } from 'react-toastify'
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'
import { deleteObject, ref } from 'firebase/storage'
import { deleteDoc, doc } from 'firebase/firestore'
import { db, storage } from '../../firebase/config'
import { useDispatch, useSelector } from 'react-redux'
import { STORE_CATEGORIES, selectCategories } from '../../redux/categorySlice'

const ViewCategory = () => {
  let {data,isLoading} = useFetchCollection("categories")
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(STORE_CATEGORIES(data))
  },[data])

  const categories = useSelector(selectCategories)

  let handleDelete=(id,image)=>{
    if(window.confirm("are you sure to delete this??")){
      deleteObject(ref(storage,image))
      deleteDoc(doc(db,"categories",id))
      toast.success("category deleted")
    }
  }
  return (
    <div className='container mt-5'>
    <div class="card">
      <div class="card-header">
        <h1>View Categories 
          <Link  type="button"  
          class="btn btn-danger btn-lg float-end" 
          to='/admin/add/category'> Add Category </Link>
        </h1>
      </div>
      <div class="card-body">       
        <div class="table-responsive"  >
          <table class="table table-bordered table-striped table-hover"  >
            <thead>
              <tr>
                <th>Sr. no</th>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.length==0 && <tr><td colsapn={6}>No category Found</td></tr>}
              {categories.map((c,i)=>
                <tr key={c.id}>
                  <td>{i+1}</td>
                  <td scope="row">{c.id}</td>
                  <td>{c.name}</td>
                  <td><img src={c.image} height={50} width={50}/></td>
                  <td>{c.desc}</td>
                  <td>
                    <button type="button"  class="btn btn-success me-2" ><FaPenAlt/></button>
                    <button type="button"  class="btn btn-danger"   
                    onClick={()=>handleDelete(c.id,c.image)}><FaTrashAlt/></button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
       </div>
      </div>
      
    </div>
  )
}

export default ViewCategory
