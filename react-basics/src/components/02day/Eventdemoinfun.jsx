//rafc
import React from 'react'
const Eventdemoinfun = () => {
    let a=10, b=20,sum=0
    function add(){
        console.log(a+b)
    }
    let add1=(x,y)=>{
        // alert(x+y)
        sum = x+y
        console.log(sum)
    }
  return (
    <>
        <button type="button" class="btn btn-primary me-2" 
        onClick={()=>alert("hello")}>
        Button</button>
        <button type="button" class="btn btn-danger me-2" 
        onClick={add}>
        Button</button>
        <button type="button" class="btn btn-danger me-2" 
        onClick={()=>add()}>
        Button</button>
        <button type="button" class="btn btn-danger me-2" 
        onClick={()=>add1(2,3)}>
        Button</button>
        <br/>
        {a} and {b} <br/>
        <h3>Total = {sum}</h3>
    </>
  )
}
export default Eventdemoinfun
