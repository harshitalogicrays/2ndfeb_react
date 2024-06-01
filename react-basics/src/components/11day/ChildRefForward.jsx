import React, { forwardRef } from 'react'
import video from '../../assets/a.mp4'
const ChildRefForward = forwardRef((props,ref) => {
  return (
    <div>
        {/* <h1>{props.id}</h1> */}
        <video width={400} height={300} 
        ref={ref}>
            <source src={video}/>
        </video>
    </div>
  )
})

export default ChildRefForward
