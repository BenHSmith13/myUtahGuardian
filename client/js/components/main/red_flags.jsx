"use strict";

import React         from 'react';
import SettingsStore from '../../stores/settings';
import ApplicationStore from '../../stores/application';
import BaseComponent from  "../base_component";
import UserStore     from "../../stores/user";
import history       from "../../history";
export default class RedFlags extends BaseComponent{

  constructor(){
    super();
    this.state = this.getState();
  }

  getState(){
  }
  getStyles(){
    return {
      container: {
        marginTop: "70px"  
      }
    }
  }
  render(){
    var styles = this.getStyles();
    return(
      <div className="container" style={styles.container}>
        <h1>RED FLAGS</h1>
      </div>
    );
  }
};