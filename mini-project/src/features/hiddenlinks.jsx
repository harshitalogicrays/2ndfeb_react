import { Navigate } from "react-router-dom"

  export const ShowOnLogin=({children})=>{
    if(sessionStorage.getItem("mini-2feb") != null){
         return children
    }
    else{
        return null
    }
  }
  export const ShowOnLogout=({children})=>{
    if(sessionStorage.getItem("mini-2feb") == null){
       return children
    }
    else{
        return null
    }
  }

  export const ProtectedAdmin=({children})=>{
    if(sessionStorage.getItem("mini-2feb") != null){
        let data = JSON.parse(sessionStorage.getItem("mini-2feb"))
        if(data.isLoggedIn==true && data.role=="0") return children
        else 
            return <Navigate to='/login' replace={true}/>
    }
    else{
        return <> <Navigate to="/login" replace={true} /></>
    }
  }

  export const Protected=({children})=>{
    if(sessionStorage.getItem("mini-2feb") != null){
        let data = JSON.parse(sessionStorage.getItem("mini-2feb"))
        if(data.isLoggedIn==true && data.role=="1") return children
        else 
            return <Navigate to='/login' replace={true}/>
    }
    else{
        return <> <Navigate to="/login" replace={true} /></>
    }
  }
