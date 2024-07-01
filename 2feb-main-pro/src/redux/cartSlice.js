import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
    name:'cart',
    initialState:{cartItems:[],totalAmount:0,previousURL:''},
    reducers:{
        ADD_TO_CART(state,action){
            // console.log(action.payload)
            const itemIndex = state.cartItems.findIndex(item=>item.id==action.payload.id)
            if(itemIndex==-1){//add
                state.cartItems=[...state.cartItems,{...action.payload,qty:1}]
                toast.success(`${action.payload.name} added to cart`)
            }
            else { //increase
                if(state.cartItems[itemIndex].qty < action.payload.stock){
                    state.cartItems[itemIndex].qty++
                    state.cartItems=[...state.cartItems]
                toast.success(`${action.payload.name}  qty increased by `)  }
                else {
                    toast.info(`only ${action.payload.stock} qty available `)  } }  
                },

        DECREASE(state,action){
            const itemIndex = state.cartItems.findIndex(item=>item.id==action.payload.id)
            if(itemIndex !=-1){
                if(state.cartItems[itemIndex].qty > 1){
                    state.cartItems[itemIndex].qty--     }
                else {
                    state.cartItems[itemIndex].qty=1
                }
                state.cartItems=[...state.cartItems]
            }
        },
        REMOVE_FROM_CART(state,action){
            let filter = state.cartItems.filter(item=>item.id != action.payload)
             state.cartItems=[...filter]
        },
        EMPTY_CART(state,action){
            state.cartItems=[];state.totalAmount=0
        },
        CALCULATE_TOTAL(state,action){
            let t = state.cartItems.reduce((prev,curr)=>{return prev+(curr.qty*curr.price)},0)
            state.totalAmount=t
        },
        SAVE_URL(state,action){ 
            state.previousURL=action.payload //http://localhost:3000/cart
        }
    }
})
export const {ADD_TO_CART,DECREASE,REMOVE_FROM_CART,EMPTY_CART,CALCULATE_TOTAL,SAVE_URL}=cartSlice.actions
export default cartSlice
export const selectCartItems =(state)=>state.cart.cartItems
export const selectTotalAmount =(state)=>state.cart.totalAmount
export const selectURL = (state)=>state.cart.previousURL