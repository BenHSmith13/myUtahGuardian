"use strict";

import React         from 'react';
import SettingsStore from '../../stores/settings';
import ApplicationStore from '../../stores/application';
import Navbar        from './navbar';
import Sidebar        from './sidebar';
import BaseComponent from  "../base_component";
import UserStore     from "../../stores/user";
import history       from '../../history';
export default class Home extends BaseComponent{

  constructor(){
    super();
    this.stores = [ApplicationStore, UserStore];
    this.state = this.getState();
  }

  getState(){
    return {
      sideBarOpen: ApplicationStore.sideBarOpen(),
      loggedIn: UserStore.loggedIn()
    }
  }
  
  render(){
    console.log(this.state.loggedIn)
    var items = _.map(this.state.items, (item, id) => {
      return <li key={id}>{item.text} <button onClick={(e) => {this.handleDelete(e, id);}}>Delete</button></li>;
    });
    return(
    <div className="container">
      <Navbar loggedIn={this.state.loggedIn} sideBarOpen={this.state.sideBarOpen}/>
      <Sidebar sideBarOpen={this.state.sideBarOpen}/>
      {this.props.children}
    </div>);
  }
};