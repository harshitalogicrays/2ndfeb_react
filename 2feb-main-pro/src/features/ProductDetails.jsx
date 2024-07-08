import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectproducts } from '../redux/productSlice'
import { useParams } from 'react-router-dom'
import { ADD_TO_CART, DECREASE, selectCartItems } from '../redux/cartSlice'
import ImageThumbnail from './ImageThumbnail'

const ProductDetails = () => {
    const allproducts = useSelector(selectproducts)
    const {id}=useParams()
    const product=allproducts.find(item=>item.id==id)

    const cartItems=useSelector(selectCartItems)
    const itemIndex = cartItems.findIndex(item=>item.id==id)
    const data = cartItems.find(item=>item.id==id)
    const dispatch=useDispatch()
  return (
    <div className='container mt-5 col-8 p-2 shadow'>
        <div className="row">
            <div className="col">
            {/* <img className="img-fluid" src={product.image[0]} height={200} alt={product.name} /> */}
            <ImageThumbnail images={product.image}/>
            </div>
            <div className="col">
                {product.stock > 0 ? 
                <span class="badge rounded-pill text-bg-success float-end">In Stock</span  >
                :
                <span class="badge rounded-pill text-bg-danger float-end">Outof Stock</span  >
                }
                <h4>{product.category}</h4>
                <h3>{product.name}</h3>
                <h4>{product.brand}</h4>
                <p>{product.desc}</p>
                {itemIndex==-1 ? 
                <button  type="button" class="btn btn-primary" onClick={()=>dispatch(ADD_TO_CART(product))}> Add to Cart  </button>
                :
                <>
                 <button type="button" onClick={()=>dispatch(DECREASE(data))}>-</button>
                <input type="text" value={data.qty} style={{width:'40px',textAlign:'center'}}/>
                <button type="button" onClick={()=>dispatch(ADD_TO_CART(data))}>+</button>  
                </>
                }
                   
               
            </div>
        </div>
    </div>
  )
}

export default ProductDetails
