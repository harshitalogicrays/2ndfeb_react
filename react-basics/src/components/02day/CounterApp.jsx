import React, { Fragment } from 'react'

const CounterApp = () => {
    let [count,setCount]=React.useState('')
    let handleDecrease=()=>{
        if(count > 1)
            setCount((prev)=>Number(prev)-1)
    }
  return (
    <Fragment>
      <button type="button" class="btn btn-primary me-3" 
      onClick={()=>setCount(Number(count)+1)}>
        Increase Counter
      </button>
      <button type="button" class="btn btn-primary" 
      onClick={handleDecrease}>
       Decrease Counter
      </button>
      <h1>{count}</h1>
    </Fragment>
  )
}

export default CounterApp
