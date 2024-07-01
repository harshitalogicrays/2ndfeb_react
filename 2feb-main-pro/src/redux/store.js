import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import categorySlice from "./categorySlice";

const store = configureStore({
    reducer:{
        filter:filterSlice.reducer,
        auth:authSlice.reducer,
        cart:cartSlice.reducer,
        category:categorySlice.reducer,
    }
})

export default store