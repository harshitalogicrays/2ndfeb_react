import React from 'react'

const PropsDemoinFun = (props) => {
  //props = {username:"Ram",address:"Pune"}
  //props are read only
  console.log(props)
  // props.username="Meera"  //error 
  return (
    <div>
        <h2>Props demo in fun component</h2>
        <h3>{props.username}</h3>
        <h3>{props.address}</h3>
    </div>
  )
}

export default PropsDemoinFun
