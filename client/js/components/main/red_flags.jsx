"use strict";

import React         from 'react';
import SettingsStore from '../../stores/settings';
import ApplicationStore from '../../stores/application';
import BaseComponent from  "../base_component";
import UserStore     from "../../stores/user";
import history       from "../../history";
import RealtimeRedFlags from "./realtime_red_flags";
import firebase      from "firebase";
import LegacyDisplay from "./legacy_display";

export default class RedFlags extends BaseComponent{

  constructor(){
    super();
    this.state = this.getState();
  }

  getState(){
  }
  componentDidMount(){
    var redFlagFB = new Firebase("https://myutahguardian.firebaseio.com/red_flags");
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
        <h1>Auditor Dashboard</h1>
        <RealtimeRedFlags />
        <LegacyDisplay />
      </div>
    );
  }
};