import { Navigate, useNavigate } from "react-router-dom"
import { selectIsLoggedIn, selectUserRole,selectUserEmail, selectUserId  } from "../redux/authSlice"
import { useDispatch, useSelector } from "react-redux";
import { EMPTY_CART, selectCartItems, selectTotalAmount } from "../redux/cartSlice";
import { toast } from "react-toastify";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";

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

 export let saveorder=async(userEmail,userId,cartItems,totalAmount,shippingAddress,payment_mode)=>{
    let today=new Date()
    let orderDate=today.toLocaleDateString()
    let orderTime=today.toLocaleTimeString()
    try{
      const docRef = collection(db,"orders")
      let orderConfig={ userEmail,userId,cartItems,totalAmount,shippingAddress,orderDate,orderTime,orderStatus:"Placed",createdAt:Timestamp.now().toMillis(),payment_mode}
      console.log(orderConfig)
      await addDoc(docRef,orderConfig)
      toast.success("order placed")
    
    }
    catch(error){toast.error(error.message)}
  }

  export let sendmail=(orderConfig)=>{
    fetch("http://localhost:1000/sendmail", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ email:orderConfig.userEmail,status:orderConfig.status,amount:orderConfig.totalAmount,name:orderConfig.userName ,payment:orderConfig.payment_mode}),
   })
     .then((res) => res.json())
     .then((data) => toast.success(data.message))
     .catch(err=>toast.error(err.message))
 }