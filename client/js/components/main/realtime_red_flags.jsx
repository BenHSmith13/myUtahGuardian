"use strict";

import React         from 'react';
import SettingsStore from '../../stores/settings';
import ApplicationStore from '../../stores/application';
import BaseComponent from  "../base_component";
import UserStore     from "../../stores/user";
import history       from "../../history";
import Firebase      from "firebase";

var catagories = ["Clothing", "Food", "Entertainment", "Vehicle", "Home", "PersonalCare", "Medical", "Rent", "Utilities", "Refund", "Wages", "Investments", "Reimbursment", "Gift"];
export default class RedFlags extends BaseComponent{

  constructor(){
    super();
    this.state = this.getState();
  }

  getState(){
    return {

    }
  }
  componentDidMount(){
    var redFlagFB = new Firebase("https://myutahguardian.firebaseio.com/red_flags");
    redFlagFB.on("value", (snapshot)=>{
      this.setState({redFlags: snapshot.val()});
    });
  }
  getStyles(){
    return {
      container: {
        marginTop: "70px",
        position: "relative"  
      },
      paper: {
        margin: "auto",
        width: "100%",
        padding: "20px",
        boxShadow: "0px 1px 1px 0px",
        borderRadius: "3px"
      },
      level(level){
        if(level == 1) return {color: "rgb(81,163,74)"}
        if(level == 2) return {color: "rgb(50,104,197)"}
        if(level == 3) return {color: "rgb(217,227,63)"}
        if(level == 4) return {color: "rgb(210,28,28)"}
      }
    }
  }
  render(){
    var styles = this.getStyles();
    var headers = ["User Id", "Level", "Amount", "Is Income?", "Is Expense?", "Category", "Description", "Action"];
    var headerTags = _.map(headers, (header)=>{
      return (
        <th key={header}>{header}</th>
      );
    });
    var i = 1;
    var sortedData = _.sortBy(this.state.redFlags, (flag)=>(flag.level)).reverse();
    var data = _.map(sortedData, (data, key)=>{
      return (
        <tr key={key}>
          <td>{i++}</td>
          <td>{data.uid}</td>
          <td style={styles.level(data.level)}>{data.level}</td>
          <td>{data.amount}</td>
          <td>{data.is_income ? "true" : "false"}</td>
          <td>{data.is_expense ? "true" : "false"}</td>
          <td>{catagories[data.category]}</td>
          <td>{data.description}</td>
          <td><button className="btn btn-success">Clear</button></td>
        </tr>
      );
    });
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