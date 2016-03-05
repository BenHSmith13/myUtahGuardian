"use strict";

import React         from 'react';
import SettingsStore from '../../stores/settings';
import ApplicationStore from '../../stores/application';
import BaseComponent from  "../base_component";
import UserStore     from "../../stores/user";
import history       from "../../history";
export default class AddTransactions extends BaseComponent{

  constructor(){
    super();
    this.state = this.getState();
  }

  getState(){
    return {}
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
        <h1>Add Transactions</h1>
      </div>
    );
  }
};