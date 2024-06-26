import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";
import authSlice from "./authSlice";

const store = configureStore({
    reducer:{
        filter:filterSlice.reducer,
        auth:authSlice.reducer,
    }
})

export default store