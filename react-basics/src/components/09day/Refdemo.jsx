import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'

const Refdemo = () => {
    const txtRef = React.useRef()
    const focusRef=React.useRef()
    let getdata=()=>{
        //txtRef.current => document.getElementById('txtRef')
        txtRef.current.style.color="blue"
        txtRef.current.focus()
        alert(txtRef.current.value) 
        focusRef.current.value = "happy"
        focusRef.current.id="134"
    }
    useEffect(()=>{
        focusRef.current.focus()},[])
  return (
   <>
    <Form.Group >
        <Form.Control className='mb-2' ref={txtRef} defaultValue="Ram"></Form.Control>
        <Button onClick={getdata}>GetData</Button>
    </Form.Group>
    <h1>Focus</h1>
    <Form.Control className='mb-2' ref={focusRef}></Form.Control>
   </>
  )
}

export default Refdemo
