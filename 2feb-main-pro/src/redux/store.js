import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer:{
        filter:filterSlice.reducer,
        auth:authSlice.reducer,
        cart:cartSlice.reducer,
    }
})

export default store