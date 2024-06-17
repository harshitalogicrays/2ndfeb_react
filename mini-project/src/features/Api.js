import axios from 'axios'

const BASE_URL_USERS="https://6662b01c62966e20ef09844c.mockapi.io/users"
const BASE_URL_PRODUCTS="https://6662b01c62966e20ef09844c.mockapi.io/products"

export let axiosfetchdata =()=>axios.get(BASE_URL_PRODUCTS)
export let axiosdeletedata=(id)=>axios.delete(`${BASE_URL_PRODUCTS}/${id}`)


export let fetchpost=(product)=>{
     return  fetch(BASE_URL_PRODUCTS,{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(product)
    })
}

export let fetchput=(id,product)=>{
   return fetch(`${BASE_URL_PRODUCTS}/${id}`,{
        method:"PUT",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(product)
    })
}


export let fetchbyid = (id)=>{
    return fetch(`https://6662b01c62966e20ef09844c.mockapi.io/products/${id}`)
}
