import React, { Component } from 'react';
import Listas from './lista/Listas';
import Lista from './lista/Lista';
import {Switch, BrowserRouter,Route} from 'react-router-dom';


import './App.scss';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Listas}/>
          <Route exact path="/lista" component={Lista}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

