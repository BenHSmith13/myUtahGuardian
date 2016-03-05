"use strict";

import React         from 'react';
import SettingsStore from '../../stores/settings';
import ApplicationStore from '../../stores/application';
import Navbar        from './navbar';
import Sidebar        from './sidebar';
import BaseComponent from  "../base_component";

export default class Home extends BaseComponent{

  constructor(){
    super();
    this.stores = [ApplicationStore];
    this.state = this.getState();
  }

  getState(){
    return {
      sideBarOpen: ApplicationStore.sideBarOpen()
    }
  }
  
  render(){
    var items = _.map(this.state.items, (item, id) => {
      return <li key={id}>{item.text} <button onClick={(e) => {this.handleDelete(e, id);}}>Delete</button></li>;
    });
    return(
    <div className="container">
      <Navbar sideBarOpen={this.state.sideBarOpen}/>
      <Sidebar sideBarOpen={this.state.sideBarOpen}/>
      <div className="jumbotron"><h1>Hello America</h1></div>
    </div>);
  }
};