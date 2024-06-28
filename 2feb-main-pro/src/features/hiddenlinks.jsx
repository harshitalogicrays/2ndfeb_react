import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectIsLoggedIn, selectUserRole } from "../redux/authSlice"

  export const ShowOnLogin=({children})=>{
    let isLoggedIn = useSelector(selectIsLoggedIn)
    if(isLoggedIn){
         return children
    }
    else{
        return null
    }
  }
  export const ShowOnLogout=({children})=>{
    let isLoggedIn = useSelector(selectIsLoggedIn)
    if(isLoggedIn==false){
       return children
    }
    else{
        return null
    }
  }

  export const ProtectedAdmin=({children})=>{
    let isLoggedIn = useSelector(selectIsLoggedIn)
    let role=useSelector(selectUserRole)
    if(isLoggedIn && role=="0"){
         return children
    }
        else 
            return <Navigate to='/login' replace={true}/>
  }

  export const Protected=({children})=>{
    let isLoggedIn = useSelector(selectIsLoggedIn)
    let role=useSelector(selectUserRole)
    if(isLoggedIn && role=="1"){
         return children
    }
        else 
            return <Navigate to='/login' replace={true}/>
  }
