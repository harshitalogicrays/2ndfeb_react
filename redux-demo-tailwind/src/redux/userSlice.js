import { createSlice,nanoid} from "@reduxjs/toolkit";

const userSlice= createSlice({
    name:"user",
    initialState:{users:[]},
    reducers:{
        //pure functions
        add_user:(state,action)=>{
            // console.log("add_user called")
            // console.log(state.users.length)
            // console.log(action)
            // console.log(action.payload)
            // state.users.push({...action.payload,id:Date.now()})
            state.users.push({...action.payload,id:nanoid()})
        },
        remove_user(state,action){}
    }
})
console.log(userSlice.actions)
export const {add_user,remove_user}=userSlice.actions
export default userSlice