"use strict";

import React              from 'react';
import SettingsStore      from '../../stores/settings';
import ApplicationStore   from '../../stores/application';
import BaseComponent      from  "../base_component";
import UserStore          from "../../stores/user";
import history            from "../../history";
import Firebase           from "firebase";
import Processor          from "./processing";
import {DropdownButton, MenuItem} from "react-bootstrap";

var categories = ["Clothing", "Food", "Entertainment", "Vehicle", "Home", "PersonalCare", "Medical", "Rent", "Utilities", "Refund", "Wages", "Investments", "Reimbursment", "Gift"];
export default class AddTransactions extends BaseComponent{

  constructor(){
    super();
    this.stores = [UserStore];
    this.state = this.getState();
  }

  getState(){
    return {
      user: UserStore.userData()
    };
  }

  addTransaction(e){
    e.preventDefault();
    var amount = this.refs.amount.value;
    var is_income = this.refs.income.checked;
    var is_expense = this.refs.expense.checked;
    var description = this.refs.description.value;
    var category = this.state.dropVal == undefined? -1 : this.state.dropVal;
    var transactions = new Firebase("https://myutahguardian.firebaseio.com/transactions/"+this.state.user.uid);
    transactions.push({amount, is_income, is_expense, description, category});
    Processor.processTransaction({amount, is_income, is_expense, description, category}, this.state.user.uid);
    this.refs.amount.value = ""
    this.refs.income.checked = false;
    this.refs.expense.checked = false;
    this.refs.description.value = "";
    this.setState({imageUrl: "", dropVal: undefined, message: "Saved!"});
    this.refs.fileInput.value = "";
    setTimeout(()=>{this.setState({message: ""})}, 3000);
  }

  setImage(e){
    if(!this.refs.fileInput.files[0]) return;
    var reader = new FileReader();
    reader.onload = (e)=>{
              this.setState({imageUrl: e.target.result});
            };

    reader.readAsDataURL(this.refs.fileInput.files[0]);
  }
  dropdownChanged(e, val){
    this.setState({dropVal: val})
  }
  getDropdown(){
    
    var menuItems = _.map(categories, (cat, i)=>{

          return <MenuItem active={this.state.dropVal == i} key={cat} eventKey={i} onSelect={(key, val)=>{this.dropdownChanged(key, val)}}>{cat}</MenuItem>
        });
    return <DropdownButton ref="category" title={this.state.dropVal != undefined ? categories[this.state.dropVal] : "Expense Categories"}>
      {menuItems}
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
            <div>
              {this.state.imageUrl && <img src={this.state.imageUrl} width="200" height="200"/>}
            </div>
            <button onClick={(e)=>{this.addTransaction(e)}} className="btn btn-default">Submit</button>
            <label>{this.state.message}</label>
          </form>

        </div>
      </div>
    );
  }
};