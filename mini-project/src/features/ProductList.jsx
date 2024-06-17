import React, { useEffect, useState } from 'react'
import Products from './Products.js'
import ProductItems from './ProductItems.jsx'
import { axiosfetchdata } from './Api.js'

const ProductList = () => {
  let [Products,setProducts]=useState([])
  let getData=async()=>{
    try{
      let res = await axiosfetchdata()
      setProducts(res.data)
    }
    catch(err){toast.error(err)} 
  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <>
      <ProductItems Products={Products}/>
    </>
  )
}

export default ProductList
