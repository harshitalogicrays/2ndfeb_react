import React from 'react'
import Products from './Products.js'
const ProductRenderning = () => {
//   console.log(products)
  return (
    <>
      {/* {Products.map((product,i)=><h4>{JSON.stringify(product)}</h4>)} */}

      <div  class="table-responsive"  >
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {Products.length==0 && <tr><td colSpan={5}>No product found</td></tr>}

                {/* {Products.map((product)=>
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                         <td><img src={product.image} height={50} width={50}/></td>
                    </tr>
                )} */}
        {/* {Products.map((product)=>{
                  return <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                         <td><img src={product.image} height={50} width={50}/></td>
                        </tr> }
                )} 
                */}
                {Products.map((product)=>{
                    let {id,name,price,stock,image}=product
                  return <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>{stock}</td>
                        <td><img src={image} height={50} width={50}/></td>
                    </tr>}
                )}
            </tbody>
        </table>
      </div>
      
    </>
  )
}

export default ProductRenderning
