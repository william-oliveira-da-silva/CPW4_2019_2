import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import './App.scss';
import Menu from './Menu';
import Home from './Home';
import Bio from './Bio';
import Contato from './Contato';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu />

        <div className="conteudo">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/bio" component={Bio} />
            <Route path="/contato" component={Contato} />
            <Redirect to="/home" />
          </Switch>
        </div>

      </BrowserRouter>
    )
  }
}
