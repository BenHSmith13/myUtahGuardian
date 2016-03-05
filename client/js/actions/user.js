"use strict";

import Constants   from   "../constants";
import Dispatcher  from   "../dispatcher";
import Api         from   "./api";

export default {

  login(data){
    Dispatcher.dispatch({action: Constants.LOGIN, data})
  },
  logout(){
    Dispatcher.dispatch({action: Constants.LOGOUT});
  }

};