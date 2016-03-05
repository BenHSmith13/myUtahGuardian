"use strict";

import React from 'react';
import history from "../../history";
export default class MenuItem extends React.Component{
  constructor(){
    super()
    this.state={hovered: false}
  }
  getStyles(){
    return {
      item: {
        padding: "20px",
        color: this.state.hovered ? "white": "rgb(142,156,175)",
        backgroundColor: this.state.hovered ? "rgb(29,35,43)" : "",
        borderBottom: "2px solid rgb(29,35,43)",
        cursor: "pointer",
        transition: "all .2s ease"
      }
    }
  }
  transition(){
    if(this.props.route){
      history.pushState(null,this.props.route);
    }
  }
  render(){
    var styles = this.getStyles();
    return <div 
      onMouseOver={()=>{this.setState({hovered: true})}} 
      onMouseLeave={()=>{this.setState({hovered: false})}}
      onClick={()=>{this.transition()}}
      style={{...styles.item, ...this.props.style}}>
        {this.props.children}
      </div>;
  }
};