import React from 'react'
import { useDispatch } from 'react-redux'
import { ADD_TO_CART } from '../redux/cartSlice'

const ProductData = ({product}) => {
  const dispatch=useDispatch()
  let handleCart=()=>{
      dispatch(ADD_TO_CART(product))
        }
  return (
    <div className='col-3 mb-2'>
        <div className="card">
            <img className="card-img-top" src={product.image} height={200} alt={product.name} />
            <div className="card-body">
            <h4 className="card-title">{product.name}</h4>
            <p className="card-text">{product.category}</p>
             <p className="card-text">${product.price}</p>
             <p className="card-text">{product.stock}</p>
             <button  type="button" class="btn btn-primary" onClick={handleCart} > Add to Cart  </button>                
            </div>
        </div>
        
    </div>
  )
}

export default ProductData
