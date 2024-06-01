import React, { PureComponent } from 'react'

export default class PureCompClassDemo extends PureComponent {
    constructor(props) {
        console.log("constructor called")
      super(props)   
      this.state = {firstname:this.props.username}
      this.focusRef = React.createRef()}
    static getDerivedStateFromProps(state,props){
        console.log("getDerivedStateFromProp called")
        return {state}
    }
    componentDidMount(){
        console.log("componentDidMount called")
        this.focusRef.current.focus()}
    handleNameChange=()=>{
        console.log("handleNameChange called")
        this.setState({firstname:"Happy"})}
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
      </>
    )
  }
}