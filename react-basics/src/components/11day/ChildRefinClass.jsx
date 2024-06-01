import React, { Component } from 'react'

export default class ChildRefinClass extends Component {
    handleButton=()=>{
        alert(this.props.innerRef.current.value)
        this.props.innerRef.current.style.backgroundColor="pink"
    }
  render() {
    return (
      <div>
        <h1>Children class </h1>
        <button type="button" class="btn btn-primary" onClick={this.handleButton}>
            Click Me
        </button>
        
      </div>
    )
  }
}
