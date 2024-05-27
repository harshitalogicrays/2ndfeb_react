import React, { Component } from 'react'

export default class ClassCompDemo extends Component {
    //in class comp we uses this keyword

    clickme(){
        alert("button clicked")
    }
  render() {
    let {username,address,children}=this.props
    // this.props.username="Harshita" //Cannot assign to read only property 'username' of object '#<Object>'
    return (
      <>
        <h1>Class Component Demo</h1>
        {/* <h2>{this.props.username}</h2>
        <h2>{this.props.address}</h2> */}
        {/* {this.props.children} */}
        {/* {this.props.children[1]} */}
        {children[0]}
        {username} <br/>

        <button type="button" class="btn btn-primary" onClick={this.clickme}>click me
        </button>
        
      </>
    )
  }
}
