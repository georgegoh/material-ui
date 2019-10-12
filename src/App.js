import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import CustomerOrder from './CustomerOrder';

export default class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/customer' component={CustomerOrder} />
          </Switch>
        </div>
      </Router>
    );
  }
}