import React, { useEffect, useState } from 'react'
import ProductData from './ProductData'
import Loader from './Loader'
import ReactPaginate from 'react-paginate';

const ProductItems = ({Products}) => {

  //pagination
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 2
  const [currentItems ,setCurrentItems]=useState([])
  const [pageCount ,setPageCount]=useState(0)

useEffect(()=>{
    const endOffset = itemOffset + itemsPerPage; // 0+2 = 2
    setCurrentItems(Products.slice(itemOffset, endOffset)) // 0 to 1 , 2 exclude
    setPageCount(Math.ceil(Products.length / itemsPerPage)) // 7/2 => 4
},[itemOffset,Products])

const handlePageClick = (event) => {//(index)page 2 means index 1
  const newOffset = (event.selected * itemsPerPage) % Products.length; // 1*2 => 2%7 = 2
  setItemOffset(newOffset); // 2
};


  return (
    <div className='container'>
      {/* {Products.length==0 && <h1>No product found</h1>}   */}
      {currentItems.length==0 && <Loader/>} 
    <div className="row">
        {currentItems.map((product,index)=><ProductData key={product.id} product={product}></ProductData>)}
    </div>
    <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-item"
        activeClassName="page-item"
        activeLinkClassName="page-link active"
        previousClassName="page-item"
        nextClassName="page-item"
        pageLinkClassName="page-link"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"

      />

    </div>
  )
}

export default ProductItems
