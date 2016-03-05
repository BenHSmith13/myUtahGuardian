"use strict";

import React         from 'react';
import SettingsStore from '../../stores/settings';
import ApplicationStore from '../../stores/application';
import BaseComponent from  "../base_component";

export default class Graphs extends BaseComponent{

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
        <h1>Graphs</h1>
      </div>
    );
  }
};