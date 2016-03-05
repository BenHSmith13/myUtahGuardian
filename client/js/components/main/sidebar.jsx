"use strict";

import React from 'react';
import MenuItem from './menu_item';

export default class Sidebar extends React.Component{
  getStyles(){
    return {
      sidebar: {
        position: "fixed",
        width: "300px",
        top: 0,
        height: "100vh",
        left: this.props.sideBarOpen ? "0px": "-305px",
        bottom: 0,
        backgroundColor: "rgb(40,50,63)",
        zIndex: 1000,
        transition: "all .5s ease",
        boxShadow: "2px 2px 2px 2px rgb(40,50,63)"
      },
      header: {
        padding: "22px",
        color: "white",
        borderBottom: "2px solid rgb(29,35,43)",
        backgroundColor: "rgb(40,50,63)",
        cursor: ""
      },
    }
  }
  render(){
    var styles = this.getStyles();
    return(
      <div style={styles.sidebar}>
        <MenuItem style={styles.header}>Menu</MenuItem>
        <MenuItem>Red Flags</MenuItem>
        <MenuItem>Data Graphs</MenuItem>
        <MenuItem>Action</MenuItem>
      </div>
    );
  }
};
