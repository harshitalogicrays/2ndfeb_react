import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { db, storage } from '../../firebase/config'
import { toast } from 'react-toastify'
import { Timestamp, addDoc, collection } from 'firebase/firestore'

const AddCategory = () => {
  const navigate=useNavigate()
  const [category,setCategory]=useState({name:'',image:'',desc:''})
  const [uploadProgress,setUploadProgress]=useState(0)
  let handleImage=(e)=>{ let file = e.target.files[0]
      const storageRef = ref(storage, `category/${Date.now()}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress)  }, 
        (error) => {toast.error(error.message) }, 
        () => {  getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            setCategory({...category,image:downloadURL})
          });  } ); } 
  let handleSubmit=async(e)=>{
    e.preventDefault()
    try{ const docRef = collection(db,"categories")
        await addDoc(docRef,{...category,createdAt:Timestamp.now().toMillis()})
        toast.success("category added")
        navigate('/admin/view/category') }
    catch(error){toast.error(error.message)}
  } 
  return (
    <div className='container mt-5'>
      <div class="card">
        <div class="card-header">
          <h1>Add Category 
            <Link  type="button"  
            class="btn btn-primary btn-lg float-end" 
            to='/admin/view/category'> View Categories </Link>
          </h1>
        </div>
        <div class="card-body">
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="" class="form-label">Name</label>
                <input  type="text"  name="name" value={category.name} 
                onChange={(e)=>setCategory({...category,name:e.target.value})} class="form-control" />
              </div>
              {uploadProgress > 0 &&
              <div class="progress" role="progressbar">
              <div class="progress-bar progress-bar-striped" style={{width: `${uploadProgress}%`}}>
                {uploadProgress < 100 ? <>{`Uploading ${uploadProgress}%`}</> :<>{`Uploaded ${uploadProgress}%`}</>}
              </div>
            </div>}
              <div class="mb-3">
                <label for="" class="form-label">Image</label>
                <input  type="file"  name="image" class="form-control" onChange={handleImage}/>
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Description</label>
                <textarea name="desc" class="form-control" value={category.desc} 
                onChange={(e)=>setCategory({...category,desc:e.target.value})} ></textarea>
              </div>
              <button type="submit"    class="btn btn-primary" >  Submit  </button>
              
            </form>
        </div>
      </div>
      
    </div>
  )
}

export default AddCategory
