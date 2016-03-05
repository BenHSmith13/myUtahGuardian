"use strict";

import React         from 'react';
import SettingsStore from '../../stores/settings';


export default class Home extends React.Component{

  constructor(){
    super();
    this.state = {
      items: {},
      text: ""
    };
  }

  componentWillMount(){

  }

  componentWillUnmount(){
  }
  

  render(){
    var items = _.map(this.state.items, (item, id) => {
      return <li key={id}>{item.text} <button onClick={(e) => {this.handleDelete(e, id);}}>Delete</button></li>;
    });
    return(
    <div className="container">
      <div className="jumbotron"><h1>Hello America</h1></div>
    </div>);
  }
};