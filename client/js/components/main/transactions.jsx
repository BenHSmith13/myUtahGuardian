"use strict";

import React         from 'react';
import SettingsStore from '../../stores/settings';
import ApplicationStore from '../../stores/application';
import BaseComponent from  "../base_component";
import UserStore     from "../../stores/user";
import history       from "../../history";
import Firebase      from "firebase";

var catagories = ["Clothing", "Food", "Entertainment", "Vehicle", "Home", "PersonalCare", "Medical", "Rent", "Utilities", "Refund", "Wages", "Investments", "Reimbursment", "Gift"];
export default class Transactions extends BaseComponent{

  constructor(){
    super();
    this.state = this.getState();
  }

  getState(){
    return {}
  }

  componentDidMount(){
    var fbRef = new Firebase("https://myutahguardian.firebaseio.com/transactions/"+UserStore.userData().uid);
    fbRef.on("value", (snapshot)=>{
      this.setState({transactions: snapshot.val()})
    });
  }

  getStyles(){
    return {
      container: {
        marginTop: "70px"  
      },
      paper: {
        margin: "auto",
        width: "80%",
        padding: "20px",
        boxShadow: "0px 1px 1px 0px",
        borderRadius: "3px"
      }
    }
  }

  render(){
    var headers = ["Amount", "Is Income?", "Is Expense?", "Category", "Description"];
    var headerTags = _.map(headers, (header)=>{
      return (
        <th key={header}>{header}</th>
      );
    });
    var i = 1;
    var data = _.map(this.state.transactions, (data, key)=>{
      return (
        <tr key={key}>
          <td>{i++}</td>
          <td>{data.amount}</td>
          <td>{data.is_income ? "true" : "false"}</td>
          <td>{data.is_expense ? "true" : "false"}</td>
          <td>{catagories[data.category]}</td>
          <td>{data.description}</td>
        </tr>
      );
    });
    var styles = this.getStyles();
    return(
      <div className="container" style={styles.container}>
        <div style={styles.paper}>
          <h3>Transactions</h3>
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