import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
const PasswordGenerator = () => {
    let [length,setLength]=useState(8)
    let [numAllowed,setNumAllowed]=useState(false)
    let [charAllowed,setCharAllowed]=useState(false)
    let [password,setPassword]=useState('')
    let pwdRef = useRef()
    let handleCopy=()=>{
      pwdRef.current.select()
      pwdRef.current.setSelectionRange(0,5)
      window.navigator.clipboard.writeText(password)
    }

    // let randompassword=()=>{
    //     let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    //     if(numAllowed){str += '0987654321'}
    //     if(charAllowed){str += '!@#$%^&*()_-+=.'}
    //     let data=''
    //     for(let i=1;i<=length;i++){
    //         data += `${str.charAt(Math.floor(Math.random()*str.length))}`
    //     }
    //     setPassword(data) }   

    let randompassword = useCallback(()=>{
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if(numAllowed){str += '0987654321'}
        if(charAllowed){str += '!@#$%^&*()_-+=.'}
        let data=''
        for(let i=1;i<=length;i++){
            data += `${str.charAt(Math.floor(Math.random()*str.length))}`
        }
        setPassword(data)
    },[length,numAllowed,charAllowed])

    useEffect(()=>{ 
        randompassword() 
    },[length,numAllowed,charAllowed]) 

   //call randompassword function on component load
    //useEffect(cb , dependencyarray)
    //[] => call only on component load (empty array)
    // useEffect(()=>{ 
    //     randompassword() 
    // },[]) 
    
    //[length] => call every time when length value get change





  return (
    <>
        <Container className='mt-5 col-6 p-2 '>
        <InputGroup className="mb-3">
        <Form.Control value={password} ref={pwdRef}/>
        <Button variant="primary" onClick={handleCopy}>Copy</Button>
      </InputGroup>
      <Row>
        <Col> <input type="range" min="4" max="100" value={length} onChange={(e)=>setLength(e.target.value)}/></Col>
        <Col>Length: ({length})</Col>
        <Col><Form.Check type="checkbox" label="Numbers" onClick={()=>setNumAllowed(!numAllowed)}/></Col>
        <Col><Form.Check type="checkbox" label="Characters" onClick={()=>setCharAllowed(!charAllowed)}/></Col>
      </Row>
     
        </Container>
    </>
  )
}

export default PasswordGenerator
