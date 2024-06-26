const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
    name:'auth',
    initialState:{isLoggedIn:false,userName:'',userEmail:'',userRole:'',userId:''},
    reducers:{
        LOGIN_USER(state,action){
            state.isLoggedIn=true
            state.userName=''
            state.userEmail=''
            state.userRole=''
            state.userId=''
        },
        LOGOUT_USER(state,action){
            state.isLoggedIn=false,
            state.userName=''
            state.userEmail=''
            state.userRole=''
            state.userId=''
        }
    }
})
export const {LOGIN_USER,LOGOUT_USER}=authSlice.actions
export default authSlice
export const selectIsLoggedIn = (state)=>state.auth.isLoggedIn
export const selectUserEmail = (state)=>state.auth.userEmail
export const selectUserName = (state)=>state.auth.userName
export const selectUserId = (state)=>state.auth.userId
export const selectUserRole = (state)=>state.auth.userRole