"use strict";

import React from 'react';
import ApplicationActions from '../../actions/application';
export default class Navbar extends React.Component{
  getStyles(){
    return {
      navbar: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "rgb(29,35,43)",
        color: "white",
        fontSize: "1.2em",
        zIndex: 10,
        boxShadow: "0px 2px 2px 0px rgb(29,35,43)"

      },
      icon: {
        float: "left",
        marginLeft: this.props.sideBarOpen ? "300px" : "0px",
        transition: "all 0.5s ease"
      }
    }
  }
  render(){
    var styles = this.getStyles();
    return <div style={styles.navbar}><i onClick={()=>{this.props.loggedIn && ApplicationActions.toggleSideBar()}}className="glyphicon glyphicon-menu-hamburger" style={styles.icon}></i>My Utah Guardian<span style={{float:"right"}}>{this.props.username}</span></div>;
  }
};
