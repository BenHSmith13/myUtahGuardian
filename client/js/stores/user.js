"use strict";

import Dispatcher     from "../dispatcher";
import Constants      from "../constants";
import StoreCommon    from "./store_common";
import QueryString    from '../utils/query_string';

var _loggedIn    = false;
var _userData    = {};
// Extend Message Store with EventEmitter to add eventing capabilities
var User = {...StoreCommon, ...{

  // Return current messages
  loggedIn(){
    return _loggedIn;
  },
  userData(){
    return _userData;
  }

}};

// Register callback with Dispatcher
Dispatcher.register(function(payload) {

  switch(payload.action){

    case Constants.LOGIN:
      _loggedIn = true;
      _userData = payload.data;
      break;
    case Constants.LOGOUT: 
      _loggedIn = false;
      _userData = {};
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  User.emitChange();

  return true;

});

export default User;