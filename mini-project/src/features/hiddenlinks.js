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