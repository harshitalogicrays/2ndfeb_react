import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { db } from '../firebase/config'

const useFetchCollection = (collectionname) => {
    let [data,setData]=useState([])
    let [isLoading,setIsLoading]=useState(false)
    useEffect(()=>{getCollectionData()},[])

    let getCollectionData=()=>{
        setIsLoading(true)
            try{
                const docRef = collection(db,collectionname)
                const q=query(docRef,orderBy('createdAt','desc'))
                onSnapshot(q,(docSnap)=>{
                        let arr = docSnap.docs.map((doc)=>({...doc.data(),id:doc.id}))
                        setData(arr)
                })
                setIsLoading(false)
            }
            catch(error){
                setIsLoading(false)
                toast.error(error.message)
            }
    }

  return ({data,isLoading} //enhanced object literal
  )
}

export default useFetchCollection
