import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from './Loader'

const Home = () => {
  const [user,setUser]=useState([])
  useEffect(()=>{
    //get data from jsonplaceholder user resource/collection
 getData()},[])

  // let getData=()=>{
  //       fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res)=>{
  //         return res.json().then((data)=>{
  //           console.log(data)
  //           setUser(data)
  //         })
  //       }).catch(err=>console.log(err))
  // }
  
//   let getData=async()=>{
//     try{
//       let res = await fetch("https://jsonplaceholder.typicode.com/users")
//       let data =  await res.json()
//       setUser(data)
//     }
//     catch(err){ console.log(err)}
// }

// let getData=()=>{
//   axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
//     console.log(res)
//     setUser(res.data)
//   }).catch(err=>console.log(err))
// }

//   let getData=async()=>{
//     try{
//       let res = await axios.get("https://jsonplaceholder.typicode.com/users")
//       setUser(res.data)
//     }
//     catch(err){
//       console.log(err)
//     }
// }
let getData=async()=>{
  try{
    let res = await axios.get("http://localhost:1000/users")
    setUser(res.data)
  }
  catch(err){
    console.log(err)
  }
}
  return (
   <>
    <h1>Home Page</h1>
    {/* {user.length==0 && <h1>No user found</h1>} */}
    {/* {user.map((u)=><p key={u.id}>{JSON.stringify(u)}</p>)} */}
    {/* {user.map((u)=><p key={u.id}>{u.name}</p>)} */}
   </>
  )
}

export default Home
