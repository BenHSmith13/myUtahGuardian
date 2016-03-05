"use strict";

import React                  from 'react';
import { Route, IndexRoute }  from 'react-router';
import Index                  from './components/index';
import Home                   from './components/main/home';
import Login                  from './components/main/login';
import RedFlags               from './components/main/red_flags';
import Graphs                 from './components/main/graphs';
import Transactions           from './components/main/transactions';
import AddTransactions        from './components/main/add_transactions';
import Upload                 from './components/main/upload';
import NotFound               from './components/not_found';

export default (
  <Route path="/" component={Home}>
    <IndexRoute component={Login} />
    <Route path="/red_flags" component={RedFlags} />
    <Route path="/graphs" component={Graphs} />
    <Route path="/upload" component={Upload} />
    <Route path="/transactions" component={Transactions} />
    <Route path="/add_transactions" component={AddTransactions} />
    <Route path="*" component={NotFound} />
  </Route>
);