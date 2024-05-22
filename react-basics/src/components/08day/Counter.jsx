import React from 'react'
import { useState } from 'react'
import IncreaseDecreaseCount from './IncreaseDecreaseCount'

const Counter = () => {
    let [count,setCount]=useState('')

    let handleCount=(val)=>setCount(parseInt(count+val))
    let handleCount1=(val)=>{
        if(count > 1)
        setCount(parseInt(count-val))
        else 
        setCount(1)
    }
  return (
   <>
    <h1>Count: {count} </h1>
    <hr/>
    <IncreaseDecreaseCount handleCount={handleCount} decrease={handleCount1}/>
   </>
  )
}

export default Counter
