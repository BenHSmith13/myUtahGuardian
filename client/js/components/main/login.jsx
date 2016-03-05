"use strict";

import React         from 'react';
import SettingsStore from '../../stores/settings';
import ApplicationStore from '../../stores/application';
import BaseComponent from  "../base_component";
import Firebase      from 'firebase';
import UserActions   from '../../actions/user';
import history        from "../../history";
export default class Login extends BaseComponent{

  constructor(){
    super();
    this.state = this.getState();
  }

  getState(){

  }
  getStyles(){
    return {
      loginForm: {
        width: "400px",
        height: "300px",
        padding: "20px",
        boxShadow: "0px 1px 1px 0px",
        margin: "auto",
        borderRadius: "3px"
      },
      form: {

      }
    }
  }
  login(e){
    e.preventDefault();
    var ref = new Firebase("https://myutahguardian.firebaseio.com");
    ref.authWithPassword({
      email    : this.refs.email.value,
      password : this.refs.password.value
    }, (error, authData) =>{
      if (error) {
        switch (error.code) {
          case "INVALID_EMAIL":
            console.log("The specified user account email is invalid.");
            break;
          case "INVALID_PASSWORD":
            console.log("The specified user account password is incorrect.");
            break;
          case "INVALID_USER":
            console.log("The specified user account does not exist.");
            break;
          default:
            console.log("Error logging user in:", error);
        }
      } else {
        var userRef = new Firebase("https://myutahguardian.firebaseio.com/users/"+authData.uid)
        userRef.on("value", (data)=>{
          UserActions.login(data.val());
          if(data.val().role == "admin")
            history.pushState(null,"/red_flags");
          else
            history.pushState(null,"/add_transactions");
        });

        console.log("Authenticated successfully with payload:", authData);
      }
    });
  }
  render(){
    var styles = this.getStyles()
    return(
      <div className="container">
        <div className="jumbotron" style={{textAlign: "center"}}>
          <h1>Welcome to My Utah Guardian</h1>
          <p>Upload your audit data and have it analyzed quickly and efficiently.</p>
        </div>
        <div style={styles.loginForm}>
          <h4>Login</h4>
          <form>
            <div className="form-group">
              <label for="email">Email address</label>
              <input ref="email" type="email" className="form-control" id="email" placeholder="Email"/>
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input ref="password" type="password" className="form-control" id="password" placeholder="Password"/>
            </div>
            <button onClick={(e)=>{this.login(e)}}className="btn btn-default">Login</button>
          </form>
        </div>
      </div>
    );
  }
};