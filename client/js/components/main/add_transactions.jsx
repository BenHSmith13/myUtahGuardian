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
        marginTop: "80px"  
      },
      transactionForm: {
        margin: "auto",
        width: "80%",
        padding: "20px",
        boxShadow: "0px 1px 1px 0px",
        borderRadius: "3px"
      }
    }
  }
  render(){
    var styles = this.getStyles();
    return(
      <div className="container" style={styles.container}>
        <div style={styles.transactionForm}>
          <h4>Add Transaction</h4>
          <form>
            <div className="form-group">
              <label for="amount">Amount (In Dollars)</label>
              <input ref="amount" type="text" className="form-control" id="amount" placeholder="Amount..."/>
            </div>
            <div className="form-group">
              <label className="radio-inline">
                <input type="radio" name="transaction_type" value="income"/>Income
              </label>
              <label style={{marginLeft: "5px"}} className="radio-inline">
                <input type="radio" name="transaction_type" value="expense"/>Expense
              </label>
            </div>
            <div className="form-group">
              <label for="description">Description</label>
              <textarea ref="description" className="form-control" rows="3"></textarea>
            </div>
            <button onClick={(e)=>{this.login(e)}}className="btn btn-default">Login</button>
          </form>
        </div>
      </div>
    );
  }
};