"use strict";

import React         from 'react';
import SettingsStore from '../../stores/settings';
import ApplicationStore from '../../stores/application';
import BaseComponent from  "../base_component";
import UserStore     from "../../stores/user";
import history       from "../../history";
import {DropdownButton, MenuItem} from "react-bootstrap";
export default class AddTransactions extends BaseComponent{

  constructor(){
    super();
    this.state = this.getState();
  }

  getState(){
    return {}
  }

  addTransaction(e){
    e.preventDefault();
    var amount = this.refs.amount.value;
    var income = this.refs.income.checked;
    var expense = this.refs.income.checked;
    var description = this.refs.description.value;
  }
  setImage(e){
    debugger
    if(this.refs.fileInput.files.length) return;
    var reader = new FileReader();
    reader.onload = (e)=>{
              this.setState({imageUrl: e.target.result});
            };

    reader.readAsDataURL(input.files[0]);
  }

  getDropdown(){
    return <DropdownButton ref="category" title="Expense Categories">
      <MenuItem eventKey="1">Clothing</MenuItem>
      <MenuItem eventKey="2">Food</MenuItem>
      <MenuItem eventKey="3">Entertainment</MenuItem>
      <MenuItem eventKey="4">Vehicle</MenuItem>
      <MenuItem eventKey="5">Home</MenuItem>
      <MenuItem eventKey="5">Personal Care</MenuItem>
      <MenuItem eventKey="5">Medical</MenuItem>
      <MenuItem eventKey="5">Rent</MenuItem>
      <MenuItem eventKey="5">Utilities</MenuItem>
    </DropdownButton>
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
                <input ref="income" type="radio" name="transaction_type" value="income"/>Income
              </label>
              <label style={{marginLeft: "5px"}} className="radio-inline">
                <input ref="expense" type="radio" name="transaction_type" value="expense"/>Expense
              </label>
            </div>
            <label>Category</label>
            <div>
              {this.getDropdown()}
            </div>
            <div className="form-group">
              <label for="description">Description</label>
              <textarea ref="description" className="form-control" rows="3"></textarea>
            </div>
            <label>Upload Receipt Image</label>
            <input ref="fileInput" type='file' onChange={(e)=>this.setImage(e)} />
            {this.state.imageUrl && <img src={this.state.imageUrl} width="200" height="200"/>}
            <button onClick={(e)=>{this.login(e)}} className="btn btn-default">Submit</button>
          </form>
        </div>
      </div>
    );
  }
};