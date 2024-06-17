import React from 'react'
import ProductData from './ProductData'
import Loader from './Loader'

const ProductItems = ({Products}) => {
  return (
    <div className='container'>
      {/* {Products.length==0 && <h1>No product found</h1>}   */}
      {Products.length==0 && <Loader/>} 
    <div className="row">
        {Products.map((product,index)=><ProductData key={product.id} product={product}></ProductData>)}
    </div>
    </div>
  )
}

export default ProductItems
