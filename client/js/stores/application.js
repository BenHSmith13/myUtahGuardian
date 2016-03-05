"use strict";

import Dispatcher     from "../dispatcher";
import Constants      from "../constants";
import StoreCommon    from "./store_common";
import QueryString    from '../utils/query_string';

var _sideBarOpen = false;

// Extend Message Store with EventEmitter to add eventing capabilities
var ApplicationStore = {...StoreCommon, ...{

  // Return current messages
  sideBarOpen(){
    return _sideBarOpen;
  }

}};

// Register callback with Dispatcher
Dispatcher.register(function(payload) {

  switch(payload.action){

    case Constants.TOGGLE_SIDE_BAR:
      _sideBarOpen = !_sideBarOpen;
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  ApplicationStore.emitChange();

  return true;

});

export default ApplicationStore;