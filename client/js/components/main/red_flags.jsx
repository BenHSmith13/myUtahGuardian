"use strict";

import React         from 'react';
import SettingsStore from '../../stores/settings';
import ApplicationStore from '../../stores/application';
import BaseComponent from  "../base_component";
import UserStore     from "../../stores/user";
import history       from "../../history";
import firebase      from "firebase";
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
    // var storedData = _.sort(this.state.redFlags, (flag)=>(flag.))
    // var data = _.map(this.state.redFlags, (data, key)=>{
    //   return (
    //     <tr key={key}>
    //       <td>{i++}</td>
    //       <td>{data.amount}</td>
    //       <td>{data.is_income ? "true" : "false"}</td>
    //       <td>{data.is_expense ? "true" : "false"}</td>
    //       <td>{catagories[data.category]}</td>
    //       <td>{data.description}</td>
    //     </tr>
    //   );
    // });
    return(
      <div className="container" style={styles.container}>
        <div style={styles.paper}>
          <h3>Flagged Transactions</h3>
          <table className="table">
            <thead><tr><th>#</th>{headerTags}</tr></thead>
            <tbody>
              {data}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};