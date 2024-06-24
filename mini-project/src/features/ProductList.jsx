import React, { useEffect, useState } from 'react'
import Products from './Products.js'
import ProductItems from './ProductItems.jsx'
import { axiosfetchdata } from './Api.js'
import ReactPaginate from 'react-paginate'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { FILTER_BY_CATEGORY, selectCategory, selectFilters, selectSearch } from '../redux/filterSlice.js'

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


let categories = ["Grocery","Electronics",'accessoires','medical','cloths']
let [category,setCategory]=useState('')
const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(FILTER_BY_CATEGORY({Products,category}))
  },[category])

  const filterproducts = useSelector(selectFilters)
  const catvalue = useSelector(selectCategory)
  const searchval = useSelector(selectSearch)
  return (
    <>
    <Container className="mt-5">
      <Row>
        <Col xs={3}>
        <div class="mb-3 row">
          <div className="col-3 me-2">
            <label for="" class="form-label ">Category:</label></div>        
          <div className="col-8"> 
            <select  class="form-select" name="category" value={category} onChange={(e)=>setCategory(e.target.value)}>
             <option value='' selected disabled>choose category</option>
             {categories.map((c,i)=><option key={i}>{c}</option>)}
          </select></div>
         
        </div>
        
        </Col>
        <Col xs={{span:3,offset:6}}>
        <div class="mb-3 row">               
          <div className="col-8"> 
            <select  class="form-select" name="sort">
             <option value='' selected disabled>sort by price</option>
              <option value='low'>Low to High</option>
              <option value='high'>High to Low</option>
            </select></div>
         
        </div>
        
        </Col>
      </Row>
    </Container>

         {(catvalue=='' && searchval=='') ?   <ProductItems Products={Products}/>  :
         <>
         {filterproducts.length ==0 ? <h1>No product found </h1> : 
        <>
        <ProductItems Products={filterproducts}/>
        </> 
         }
      </>
         }

    

    </>
  )
}

export default ProductList
