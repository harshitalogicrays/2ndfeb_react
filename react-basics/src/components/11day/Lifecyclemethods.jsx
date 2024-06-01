import React, { Component, createRef } from 'react'
import ChildRefinClass from './ChildRefinClass'
import ChildRefForward from './ChildRefForward'

export default class Lifecyclemethods extends Component {
    constructor(props) {
        console.log("constructor called")
      super(props)   
      this.state = {firstname:this.props.username}
      this.focusRef = createRef()
      this.myRef=createRef()
    }
    static getDerivedStateFromProps(state,props){
        console.log("getDerivedStateFromProp called")
        return {state}
    }
    componentDidMount(){
        console.log("componentDidMount called")
        this.focusRef.current.focus()
    }
    handleNameChange=()=>{
        console.log("handleNameChange called")
        this.setState({firstname:"Happy"})}
    shouldComponentUpdate(nextprops,nextstate){
        console.log("shouldComponentUpdate called")
        return true }
    componentDidUpdate(){
        console.log("componentDidUpdate called")
        this.focusRef.current.value="updated"
        this.focusRef.current.style.color="blue" }
    componentWillUnmount(){
        console.log("componentWillUnmount called")
    }
  render() {
    console.log("render called")
    return (
      <>
      <button type="button" className="btn btn-primary" onClick={this.handleNameChange}>Change Name</button>    
        <h1>{this.state.firstname}</h1>
        <input type="text" className='form-control' ref={this.focusRef}/>
        <ChildRefinClass innerRef={this.focusRef}/>
        <hr/>

        <button type="button" class="btn btn-primary me-4" onClick={()=>this.myRef.current.play()}>Play</button>
        <button type="button" class="btn btn-primary me-4"  onClick={()=>this.myRef.current.pause()}>Pause</button>

        <ChildRefForward id={1001} ref={this.myRef}/>

      </>
    )
  }
}
