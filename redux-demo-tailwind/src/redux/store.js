import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store1  = configureStore({
    reducer:{
        user:userSlice.reducer,
        // product:productSlice.reducer,
        // order:orderSlice.reducer
    }
})
export default store1