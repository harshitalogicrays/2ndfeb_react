import React from 'react'
import { Button } from 'react-bootstrap'

const IncreaseDecreaseCount = ({handleCount,decrease}) => {
  return (
   <>
    <Button className="me-2" onClick={()=>handleCount(1)}>Increase by 1</Button>
    <Button className="me-2" onClick={()=>handleCount(5)}>Increase by 5</Button>

    <Button className="me-2" onClick={()=>decrease(1)}>decrease by 1</Button>
    <Button onClick={()=>decrease(5)}>decrease by 5</Button>
    
   </>
  )
}

export default IncreaseDecreaseCount
