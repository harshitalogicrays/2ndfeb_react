import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import categorySlice from "./categorySlice";
import productSlice from "./productSlice";
import orderSlice from "./orderSlice";

const store = configureStore({
    reducer:{
        filter:filterSlice.reducer,
        auth:authSlice.reducer,
        cart:cartSlice.reducer,
        category:categorySlice.reducer,
        product:productSlice.reducer,
        order:orderSlice.reducer
    }
})

export default store