import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './Menu.scss';
export default  class Menu extends Component {
  render() {
    return (
      <div className="menu">
         <Link to={this.props.paginaAterior}>
           <img className="logo" src={this.props.logo} alt="Voltar"/>
         </Link>
        
      </div>
    );
  }
}

