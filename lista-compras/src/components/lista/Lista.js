import React, { Component } from 'react';
import Menu from '../menu/Menu';
import anterior from '../../img/anterior.png';
export default  class Lista extends Component {
  render() {
    return (
      <div>
          <Menu 
          logo={anterior}
          anterior="/"
          titulo="Minha lista"/>
          Lista
    </div>
    );
  }
}

