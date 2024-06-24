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
            state.users.push({...action.payload,id:nanoid()}) },
        remove_user(state,action){
            //index 
            state.users.splice(action.payload,1)

            //id 
            // let filters = state.users.filter(item=>item.id != action.payload)
            // state.users =filters
  },
        remove_all_users(state,action){
            state.users=[]
        }
    }})
console.log(userSlice.actions)
export const {add_user,remove_user,remove_all_users}=userSlice.actions
export default userSlice
export const selectUsers = (state)=>state.user.users