import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const DataContext =  React.createContext() //context create
const ContextData = ({children}) => {
  const navigate=useNavigate()
    let [cart,setCart]=useState([])
    let [total,setTotal]=useState(0)
      useEffect(()=>{
          if(sessionStorage.cartItems != null){
            setCart(JSON.parse(sessionStorage.cartItems))
          }
          if(sessionStorage.cartTotal != null){
            setTotal(sessionStorage.cartTotal)
          }
      },[])

      useEffect(()=>{
        sessionStorage.setItem("cartItems",JSON.stringify(cart))
        sessionStorage.setItem("cartTotal",total)
      },[cart])



    let addtocart=(product)=>{ 
      // console.log("added to cart",product)
    if(sessionStorage.getItem('mini-2feb') != null){
      const itemIndex = cart.findIndex(item=>item.id==product.id)
      if(itemIndex == -1){ //add
        setCart([...cart,{...product,qty:1}])
        toast.success(`${product.name} added to cart`) }
      else toast.info(`${product.name}already added to cart`) }
    else {  toast.error("Please login first")
      navigate('/login') }  }
      
    let increase=(product)=>{
      const itemIndex = cart.findIndex(item=>item.id==product.id)
      if(itemIndex != -1){
        if(cart[itemIndex].qty < product.stock) cart[itemIndex].qty++   }
      setCart([...cart])  }
    let decrease=(product)=>{
      const itemIndex = cart.findIndex(item=>item.id==product.id)
      if(itemIndex != -1){
        if(cart[itemIndex].qty > 1) cart[itemIndex].qty-- }
    setCart([...cart])}
    let remove_from_cart=(id)=>{
      let filter = cart.filter(item=>item.id != id);  setCart([...filter])}
    let remove_from_cart_by_index=(index)=>{
      cart.splice(index,1); setCart([...cart])}
    let empty_cart=()=>{
      setCart([]);setTotal(0)}
    let calculate_total=()=>{
     let t = cart.reduce((prev,curr)=>{return prev+(curr.qty*curr.price)},0)
     setTotal(t) }
  return (
   <DataContext.Provider value={{cart,total,addtocart,increase,decrease,remove_from_cart,empty_cart,calculate_total,remove_from_cart_by_index}}>
        {children}
   </DataContext.Provider>
  )
}

export default ContextData
